(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shapeshiftoss-hdwallet-keepkey-webusb~walletconnect-web3-provider"],{

/***/ "MV7B":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@walletconnect/web3-provider/node_modules/ethereumjs-tx/es5/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ethUtil = __webpack_require__(/*! ethereumjs-util */ "uXik");
var fees = __webpack_require__(/*! ethereum-common/params.json */ "vY81");
var BN = ethUtil.BN;

// secp256k1n/2
var N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);

/**
 * Creates a new transaction object.
 *
 * @example
 * var rawTx = {
 *   nonce: '00',
 *   gasPrice: '09184e72a000',
 *   gasLimit: '2710',
 *   to: '0000000000000000000000000000000000000000',
 *   value: '00',
 *   data: '7f7465737432000000000000000000000000000000000000000000000000000000600057',
 *   v: '1c',
 *   r: '5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
 *   s: '5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
 * };
 * var tx = new Transaction(rawTx);
 *
 * @class
 * @param {Buffer | Array | Object} data a transaction can be initiailized with either a buffer containing the RLP serialized transaction or an array of buffers relating to each of the tx Properties, listed in order below in the exmple.
 *
 * Or lastly an Object containing the Properties of the transaction like in the Usage example.
 *
 * For Object and Arrays each of the elements can either be a Buffer, a hex-prefixed (0x) String , Number, or an object with a toBuffer method such as Bignum
 *
 * @property {Buffer} raw The raw rlp encoded transaction
 * @param {Buffer} data.nonce nonce number
 * @param {Buffer} data.gasLimit transaction gas limit
 * @param {Buffer} data.gasPrice transaction gas price
 * @param {Buffer} data.to to the to address
 * @param {Buffer} data.value the amount of ether sent
 * @param {Buffer} data.data this will contain the data of the message or the init of a contract
 * @param {Buffer} data.v EC signature parameter
 * @param {Buffer} data.r EC signature parameter
 * @param {Buffer} data.s EC recovery ID
 * @param {Number} data.chainId EIP 155 chainId - mainnet: 1, ropsten: 3
 * */

var Transaction = function () {
  function Transaction(data) {
    _classCallCheck(this, Transaction);

    data = data || {};
    // Define Properties
    var fields = [{
      name: 'nonce',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'gasPrice',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'gasLimit',
      alias: 'gas',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'to',
      allowZero: true,
      length: 20,
      default: new Buffer([])
    }, {
      name: 'value',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'data',
      alias: 'input',
      allowZero: true,
      default: new Buffer([])
    }, {
      name: 'v',
      allowZero: true,
      default: new Buffer([0x1c])
    }, {
      name: 'r',
      length: 32,
      allowZero: true,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 's',
      length: 32,
      allowZero: true,
      allowLess: true,
      default: new Buffer([])
    }];

    /**
     * Returns the rlp encoding of the transaction
     * @method serialize
     * @return {Buffer}
     * @memberof Transaction
     * @name serialize
     */
    // attached serialize
    ethUtil.defineProperties(this, fields, data);

    /**
     * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
     * @name from
     * @memberof Transaction
     */
    Object.defineProperty(this, 'from', {
      enumerable: true,
      configurable: true,
      get: this.getSenderAddress.bind(this)
    });

    // calculate chainId from signature
    var sigV = ethUtil.bufferToInt(this.v);
    var chainId = Math.floor((sigV - 35) / 2);
    if (chainId < 0) chainId = 0;

    // set chainId
    this._chainId = chainId || data.chainId || 0;
    this._homestead = true;
  }

  /**
   * If the tx's `to` is to the creation address
   * @return {Boolean}
   */


  Transaction.prototype.toCreationAddress = function toCreationAddress() {
    return this.to.toString('hex') === '';
  };

  /**
   * Computes a sha3-256 hash of the serialized tx
   * @param {Boolean} [includeSignature=true] whether or not to inculde the signature
   * @return {Buffer}
   */


  Transaction.prototype.hash = function hash(includeSignature) {
    if (includeSignature === undefined) includeSignature = true;

    // EIP155 spec:
    // when computing the hash of a transaction for purposes of signing or recovering,
    // instead of hashing only the first six elements (ie. nonce, gasprice, startgas, to, value, data),
    // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0

    var items = void 0;
    if (includeSignature) {
      items = this.raw;
    } else {
      if (this._chainId > 0) {
        var raw = this.raw.slice();
        this.v = this._chainId;
        this.r = 0;
        this.s = 0;
        items = this.raw;
        this.raw = raw;
      } else {
        items = this.raw.slice(0, 6);
      }
    }

    // create hash
    return ethUtil.rlphash(items);
  };

  /**
   * returns the public key of the sender
   * @return {Buffer}
   */


  Transaction.prototype.getChainId = function getChainId() {
    return this._chainId;
  };

  /**
   * returns the sender's address
   * @return {Buffer}
   */


  Transaction.prototype.getSenderAddress = function getSenderAddress() {
    if (this._from) {
      return this._from;
    }
    var pubkey = this.getSenderPublicKey();
    this._from = ethUtil.publicToAddress(pubkey);
    return this._from;
  };

  /**
   * returns the public key of the sender
   * @return {Buffer}
   */


  Transaction.prototype.getSenderPublicKey = function getSenderPublicKey() {
    if (!this._senderPubKey || !this._senderPubKey.length) {
      if (!this.verifySignature()) throw new Error('Invalid Signature');
    }
    return this._senderPubKey;
  };

  /**
   * Determines if the signature is valid
   * @return {Boolean}
   */


  Transaction.prototype.verifySignature = function verifySignature() {
    var msgHash = this.hash(false);
    // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
    if (this._homestead && new BN(this.s).cmp(N_DIV_2) === 1) {
      return false;
    }

    try {
      var v = ethUtil.bufferToInt(this.v);
      if (this._chainId > 0) {
        v -= this._chainId * 2 + 8;
      }
      this._senderPubKey = ethUtil.ecrecover(msgHash, v, this.r, this.s);
    } catch (e) {
      return false;
    }

    return !!this._senderPubKey;
  };

  /**
   * sign a transaction with a given a private key
   * @param {Buffer} privateKey
   */


  Transaction.prototype.sign = function sign(privateKey) {
    var msgHash = this.hash(false);
    var sig = ethUtil.ecsign(msgHash, privateKey);
    if (this._chainId > 0) {
      sig.v += this._chainId * 2 + 8;
    }
    Object.assign(this, sig);
  };

  /**
   * The amount of gas paid for the data in this tx
   * @return {BN}
   */


  Transaction.prototype.getDataFee = function getDataFee() {
    var data = this.raw[5];
    var cost = new BN(0);
    for (var i = 0; i < data.length; i++) {
      data[i] === 0 ? cost.iaddn(fees.txDataZeroGas.v) : cost.iaddn(fees.txDataNonZeroGas.v);
    }
    return cost;
  };

  /**
   * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
   * @return {BN}
   */


  Transaction.prototype.getBaseFee = function getBaseFee() {
    var fee = this.getDataFee().iaddn(fees.txGas.v);
    if (this._homestead && this.toCreationAddress()) {
      fee.iaddn(fees.txCreation.v);
    }
    return fee;
  };

  /**
   * the up front amount that an account must have for this transaction to be valid
   * @return {BN}
   */


  Transaction.prototype.getUpfrontCost = function getUpfrontCost() {
    return new BN(this.gasLimit).imul(new BN(this.gasPrice)).iadd(new BN(this.value));
  };

  /**
   * validates the signature and checks to see if it has enough gas
   * @param {Boolean} [stringError=false] whether to return a string with a dscription of why the validation failed or return a Bloolean
   * @return {Boolean|String}
   */


  Transaction.prototype.validate = function validate(stringError) {
    var errors = [];
    if (!this.verifySignature()) {
      errors.push('Invalid Signature');
    }

    if (this.getBaseFee().cmp(new BN(this.gasLimit)) > 0) {
      errors.push(['gas limit is too low. Need at least ' + this.getBaseFee()]);
    }

    if (stringError === undefined || stringError === false) {
      return errors.length === 0;
    } else {
      return errors.join(' ');
    }
  };

  return Transaction;
}();

module.exports = Transaction;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "vY81":
/*!********************************************************************************************!*\
  !*** ./node_modules/@walletconnect/web3-provider/node_modules/ethereum-common/params.json ***!
  \********************************************************************************************/
/*! exports provided: genesisGasLimit, genesisDifficulty, genesisNonce, genesisExtraData, genesisHash, genesisStateRoot, minGasLimit, gasLimitBoundDivisor, minimumDifficulty, difficultyBoundDivisor, durationLimit, maximumExtraDataSize, epochDuration, stackLimit, callCreateDepth, tierStepGas, expGas, expByteGas, sha3Gas, sha3WordGas, sloadGas, sstoreSetGas, sstoreResetGas, sstoreRefundGas, jumpdestGas, logGas, logDataGas, logTopicGas, createGas, callGas, callStipend, callValueTransferGas, callNewAccountGas, suicideRefundGas, memoryGas, quadCoeffDiv, createDataGas, txGas, txCreation, txDataZeroGas, txDataNonZeroGas, copyGas, ecrecoverGas, sha256Gas, sha256WordGas, ripemd160Gas, ripemd160WordGas, identityGas, identityWordGas, minerReward, ommerReward, niblingReward, homeSteadForkNumber, homesteadRepriceForkNumber, timebombPeriod, freeBlockPeriod, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"genesisGasLimit\":{\"v\":5000,\"d\":\"Gas limit of the Genesis block.\"},\"genesisDifficulty\":{\"v\":17179869184,\"d\":\"Difficulty of the Genesis block.\"},\"genesisNonce\":{\"v\":\"0x0000000000000042\",\"d\":\"the geneis nonce\"},\"genesisExtraData\":{\"v\":\"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa\",\"d\":\"extra data \"},\"genesisHash\":{\"v\":\"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3\",\"d\":\"genesis hash\"},\"genesisStateRoot\":{\"v\":\"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544\",\"d\":\"the genesis state root\"},\"minGasLimit\":{\"v\":5000,\"d\":\"Minimum the gas limit may ever be.\"},\"gasLimitBoundDivisor\":{\"v\":1024,\"d\":\"The bound divisor of the gas limit, used in update calculations.\"},\"minimumDifficulty\":{\"v\":131072,\"d\":\"The minimum that the difficulty may ever be.\"},\"difficultyBoundDivisor\":{\"v\":2048,\"d\":\"The bound divisor of the difficulty, used in the update calculations.\"},\"durationLimit\":{\"v\":13,\"d\":\"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not.\"},\"maximumExtraDataSize\":{\"v\":32,\"d\":\"Maximum size extra data may be after Genesis.\"},\"epochDuration\":{\"v\":30000,\"d\":\"Duration between proof-of-work epochs.\"},\"stackLimit\":{\"v\":1024,\"d\":\"Maximum size of VM stack allowed.\"},\"callCreateDepth\":{\"v\":1024,\"d\":\"Maximum depth of call/create stack.\"},\"tierStepGas\":{\"v\":[0,2,3,5,8,10,20],\"d\":\"Once per operation, for a selection of them.\"},\"expGas\":{\"v\":10,\"d\":\"Once per EXP instuction.\"},\"expByteGas\":{\"v\":10,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction.\"},\"sha3Gas\":{\"v\":30,\"d\":\"Once per SHA3 operation.\"},\"sha3WordGas\":{\"v\":6,\"d\":\"Once per word of the SHA3 operation's data.\"},\"sloadGas\":{\"v\":50,\"d\":\"Once per SLOAD operation.\"},\"sstoreSetGas\":{\"v\":20000,\"d\":\"Once per SSTORE operation if the zeroness changes from zero.\"},\"sstoreResetGas\":{\"v\":5000,\"d\":\"Once per SSTORE operation if the zeroness does not change from zero.\"},\"sstoreRefundGas\":{\"v\":15000,\"d\":\"Once per SSTORE operation if the zeroness changes to zero.\"},\"jumpdestGas\":{\"v\":1,\"d\":\"Refunded gas, once per SSTORE operation if the zeroness changes to zero.\"},\"logGas\":{\"v\":375,\"d\":\"Per LOG* operation.\"},\"logDataGas\":{\"v\":8,\"d\":\"Per byte in a LOG* operation's data.\"},\"logTopicGas\":{\"v\":375,\"d\":\"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas.\"},\"createGas\":{\"v\":32000,\"d\":\"Once per CREATE operation & contract-creation transaction.\"},\"callGas\":{\"v\":40,\"d\":\"Once per CALL operation & message call transaction.\"},\"callStipend\":{\"v\":2300,\"d\":\"Free gas given at beginning of call.\"},\"callValueTransferGas\":{\"v\":9000,\"d\":\"Paid for CALL when the value transfor is non-zero.\"},\"callNewAccountGas\":{\"v\":25000,\"d\":\"Paid for CALL when the destination address didn't exist prior.\"},\"suicideRefundGas\":{\"v\":24000,\"d\":\"Refunded following a suicide operation.\"},\"memoryGas\":{\"v\":3,\"d\":\"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL.\"},\"quadCoeffDiv\":{\"v\":512,\"d\":\"Divisor for the quadratic particle of the memory cost equation.\"},\"createDataGas\":{\"v\":200,\"d\":\"\"},\"txGas\":{\"v\":21000,\"d\":\"Per transaction. NOTE: Not payable on data of calls between transactions.\"},\"txCreation\":{\"v\":32000,\"d\":\"the cost of creating a contract via tx\"},\"txDataZeroGas\":{\"v\":4,\"d\":\"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions.\"},\"txDataNonZeroGas\":{\"v\":68,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions.\"},\"copyGas\":{\"v\":3,\"d\":\"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added.\"},\"ecrecoverGas\":{\"v\":3000,\"d\":\"\"},\"sha256Gas\":{\"v\":60,\"d\":\"\"},\"sha256WordGas\":{\"v\":12,\"d\":\"\"},\"ripemd160Gas\":{\"v\":600,\"d\":\"\"},\"ripemd160WordGas\":{\"v\":120,\"d\":\"\"},\"identityGas\":{\"v\":15,\"d\":\"\"},\"identityWordGas\":{\"v\":3,\"d\":\"\"},\"minerReward\":{\"v\":\"5000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"},\"ommerReward\":{\"v\":\"625000000000000000\",\"d\":\"The amount of wei a miner of an uncle block gets for being inculded in the blockchain\"},\"niblingReward\":{\"v\":\"156250000000000000\",\"d\":\"the amount a miner gets for inculding a uncle\"},\"homeSteadForkNumber\":{\"v\":1150000,\"d\":\"the block that the Homestead fork started at\"},\"homesteadRepriceForkNumber\":{\"v\":2463000,\"d\":\"the block that the Homestead Reprice (EIP150) fork started at\"},\"timebombPeriod\":{\"v\":100000,\"d\":\"Exponential difficulty timebomb period\"},\"freeBlockPeriod\":{\"v\":2}}");

/***/ })

}]);
//# sourceMappingURL=default~shapeshiftoss-hdwallet-keepkey-webusb~walletconnect-web3-provider.js.map