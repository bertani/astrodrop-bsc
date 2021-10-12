(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~providerEngine-771e7e5b-js~walletconnect-web3-provider"],{

/***/ "/JJz":
/*!**************************************************************************************!*\
  !*** ./node_modules/web3-provider-engine/node_modules/ethereumjs-util/dist/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = __webpack_require__(/*! ethereum-cryptography/keccak */ "wzGL"),
    keccak224 = _require.keccak224,
    keccak384 = _require.keccak384,
    k256 = _require.keccak256,
    keccak512 = _require.keccak512;

var secp256k1 = __webpack_require__(/*! ./secp256k1-adapter */ "GwZO");
var assert = __webpack_require__(/*! assert */ "9lTW");
var rlp = __webpack_require__(/*! rlp */ "o8pB");
var BN = __webpack_require__(/*! bn.js */ "vIY1");
var createHash = __webpack_require__(/*! create-hash */ "mObS");
var Buffer = __webpack_require__(/*! safe-buffer */ "hwdV").Buffer;
Object.assign(exports, __webpack_require__(/*! ethjs-util */ "mhLr"));

/**
 * the max integer that this VM can handle (a ```BN```)
 * @var {BN} MAX_INTEGER
 */
exports.MAX_INTEGER = new BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);

/**
 * 2^256 (a ```BN```)
 * @var {BN} TWO_POW256
 */
exports.TWO_POW256 = new BN('10000000000000000000000000000000000000000000000000000000000000000', 16);

/**
 * Keccak-256 hash of null (a ```String```)
 * @var {String} KECCAK256_NULL_S
 */
exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
exports.SHA3_NULL_S = exports.KECCAK256_NULL_S;

/**
 * Keccak-256 hash of null (a ```Buffer```)
 * @var {Buffer} KECCAK256_NULL
 */
exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
exports.SHA3_NULL = exports.KECCAK256_NULL;

/**
 * Keccak-256 of an RLP of an empty array (a ```String```)
 * @var {String} KECCAK256_RLP_ARRAY_S
 */
exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
exports.SHA3_RLP_ARRAY_S = exports.KECCAK256_RLP_ARRAY_S;

/**
 * Keccak-256 of an RLP of an empty array (a ```Buffer```)
 * @var {Buffer} KECCAK256_RLP_ARRAY
 */
exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
exports.SHA3_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY;

/**
 * Keccak-256 hash of the RLP of null  (a ```String```)
 * @var {String} KECCAK256_RLP_S
 */
exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
exports.SHA3_RLP_S = exports.KECCAK256_RLP_S;

/**
 * Keccak-256 hash of the RLP of null (a ```Buffer```)
 * @var {Buffer} KECCAK256_RLP
 */
exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex');
exports.SHA3_RLP = exports.KECCAK256_RLP;

/**
 * [`BN`](https://github.com/indutny/bn.js)
 * @var {Function}
 */
exports.BN = BN;

/**
 * [`rlp`](https://github.com/ethereumjs/rlp)
 * @var {Function}
 */
exports.rlp = rlp;

/**
 * [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)
 * @var {Object}
 */
exports.secp256k1 = secp256k1;

/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */
exports.zeros = function (bytes) {
  return Buffer.allocUnsafe(bytes).fill(0);
};

/**
  * Returns a zero address
  * @method zeroAddress
  * @return {String}
  */
exports.zeroAddress = function () {
  var addressLength = 20;
  var zeroAddress = exports.zeros(addressLength);
  return exports.bufferToHex(zeroAddress);
};

/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method lsetLength
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */
exports.setLengthLeft = exports.setLength = function (msg, length, right) {
  var buf = exports.zeros(length);
  msg = exports.toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf;
    }
    return msg.slice(0, length);
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf;
    }
    return msg.slice(-length);
  }
};

/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */
exports.setLengthRight = function (msg, length) {
  return exports.setLength(msg, length, true);
};

/**
 * Trims leading zeros from a `Buffer` or an `Array`
 * @param {Buffer|Array|String} a
 * @return {Buffer|Array|String}
 */
exports.unpad = exports.stripZeros = function (a) {
  a = exports.stripHexPrefix(a);
  var first = a[0];
  while (a.length > 0 && first.toString() === '0') {
    a = a.slice(1);
    first = a[0];
  }
  return a;
};
/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
exports.toBuffer = function (v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v);
    } else if (typeof v === 'string') {
      if (exports.isHexString(v)) {
        v = Buffer.from(exports.padToEven(exports.stripHexPrefix(v)), 'hex');
      } else {
        v = Buffer.from(v);
      }
    } else if (typeof v === 'number') {
      v = exports.intToBuffer(v);
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0);
    } else if (BN.isBN(v)) {
      v = v.toArrayLike(Buffer);
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = Buffer.from(v.toArray());
    } else {
      throw new Error('invalid type');
    }
  }
  return v;
};

/**
 * Converts a `Buffer` to a `Number`
 * @param {Buffer} buf
 * @return {Number}
 * @throws If the input number exceeds 53 bits.
 */
exports.bufferToInt = function (buf) {
  return new BN(exports.toBuffer(buf)).toNumber();
};

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
exports.bufferToHex = function (buf) {
  buf = exports.toBuffer(buf);
  return '0x' + buf.toString('hex');
};

/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param {Buffer} num
 * @return {BN}
 */
exports.fromSigned = function (num) {
  return new BN(num).fromTwos(256);
};

/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param {BN} num
 * @return {Buffer}
 */
exports.toUnsigned = function (num) {
  return Buffer.from(num.toTwos(256).toArray());
};

/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
exports.keccak = function (a, bits) {
  a = exports.toBuffer(a);
  if (!bits) bits = 256;

  switch (bits) {
    case 224:
      {
        return keccak224(a);
      }
    case 256:
      {
        return k256(a);
      }
    case 384:
      {
        return keccak384(a);
      }
    case 512:
      {
        return keccak512(a);
      }
    default:
      {
        throw new Error('Invald algorithm: keccak' + bits);
      }
  }
};

/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256)
 * @param {Buffer|Array|String|Number} a the input data
 * @return {Buffer}
 */
exports.keccak256 = function (a) {
  return exports.keccak(a);
};

/**
 * Creates SHA-3 (Keccak) hash of the input [OBSOLETE]
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the SHA-3 width
 * @return {Buffer}
 */
exports.sha3 = exports.keccak;

/**
 * Creates SHA256 hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @return {Buffer}
 */
exports.sha256 = function (a) {
  a = exports.toBuffer(a);
  return createHash('sha256').update(a).digest();
};

/**
 * Creates RIPEMD160 hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Boolean} padded whether it should be padded to 256 bits or not
 * @return {Buffer}
 */
exports.ripemd160 = function (a, padded) {
  a = exports.toBuffer(a);
  var hash = createHash('rmd160').update(a).digest();
  if (padded === true) {
    return exports.setLength(hash, 32);
  } else {
    return hash;
  }
};

/**
 * Creates SHA-3 hash of the RLP encoded version of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @return {Buffer}
 */
exports.rlphash = function (a) {
  return exports.keccak(rlp.encode(a));
};

/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 * @param {Buffer} privateKey
 * @return {Boolean}
 */
exports.isValidPrivate = function (privateKey) {
  return secp256k1.privateKeyVerify(privateKey);
};

/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param {Buffer} publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param {Boolean} [sanitize=false] Accept public keys in other formats
 * @return {Boolean}
 */
exports.isValidPublic = function (publicKey, sanitize) {
  if (publicKey.length === 64) {
    // Convert to SEC1 for secp256k1
    return secp256k1.publicKeyVerify(Buffer.concat([Buffer.from([4]), publicKey]));
  }

  if (!sanitize) {
    return false;
  }

  return secp256k1.publicKeyVerify(publicKey);
};

/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param {Buffer} pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param {Boolean} [sanitize=false] Accept public keys in other formats
 * @return {Buffer}
 */
exports.pubToAddress = exports.publicToAddress = function (pubKey, sanitize) {
  pubKey = exports.toBuffer(pubKey);
  if (sanitize && pubKey.length !== 64) {
    pubKey = secp256k1.publicKeyConvert(pubKey, false).slice(1);
  }
  assert(pubKey.length === 64);
  // Only take the lower 160bits of the hash
  return exports.keccak(pubKey).slice(-20);
};

/**
 * Returns the ethereum public key of a given private key
 * @param {Buffer} privateKey A private key must be 256 bits wide
 * @return {Buffer}
 */
var privateToPublic = exports.privateToPublic = function (privateKey) {
  privateKey = exports.toBuffer(privateKey);
  // skip the type flag and use the X, Y points
  return secp256k1.publicKeyCreate(privateKey, false).slice(1);
};

/**
 * Converts a public key to the Ethereum format.
 * @param {Buffer} publicKey
 * @return {Buffer}
 */
exports.importPublic = function (publicKey) {
  publicKey = exports.toBuffer(publicKey);
  if (publicKey.length !== 64) {
    publicKey = secp256k1.publicKeyConvert(publicKey, false).slice(1);
  }
  return publicKey;
};

/**
 * ECDSA sign
 * @param {Buffer} msgHash
 * @param {Buffer} privateKey
 * @return {Object}
 */
exports.ecsign = function (msgHash, privateKey) {
  var sig = secp256k1.sign(msgHash, privateKey);

  var ret = {};
  ret.r = sig.signature.slice(0, 32);
  ret.s = sig.signature.slice(32, 64);
  ret.v = sig.recovery + 27;
  return ret;
};

/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 * @param message
 * @returns {Buffer} hash
 */
exports.hashPersonalMessage = function (message) {
  var prefix = exports.toBuffer('\x19Ethereum Signed Message:\n' + message.length.toString());
  return exports.keccak(Buffer.concat([prefix, message]));
};

/**
 * ECDSA public key recovery from signature
 * @param {Buffer} msgHash
 * @param {Number} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @return {Buffer} publicKey
 */
exports.ecrecover = function (msgHash, v, r, s) {
  var signature = Buffer.concat([exports.setLength(r, 32), exports.setLength(s, 32)], 64);
  var recovery = v - 27;
  if (recovery !== 0 && recovery !== 1) {
    throw new Error('Invalid signature v value');
  }
  var senderPubKey = secp256k1.recover(msgHash, signature, recovery);
  return secp256k1.publicKeyConvert(senderPubKey, false).slice(1);
};

/**
 * Convert signature parameters into the format of `eth_sign` RPC method
 * @param {Number} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @return {String} sig
 */
exports.toRpcSig = function (v, r, s) {
  // NOTE: with potential introduction of chainId this might need to be updated
  if (v !== 27 && v !== 28) {
    throw new Error('Invalid recovery id');
  }

  // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
  // FIXME: this might change in the future - https://github.com/ethereum/go-ethereum/issues/2053
  return exports.bufferToHex(Buffer.concat([exports.setLengthLeft(r, 32), exports.setLengthLeft(s, 32), exports.toBuffer(v - 27)]));
};

/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 * @param {String} sig
 * @return {Object}
 */
exports.fromRpcSig = function (sig) {
  sig = exports.toBuffer(sig);

  // NOTE: with potential introduction of chainId this might need to be updated
  if (sig.length !== 65) {
    throw new Error('Invalid signature length');
  }

  var v = sig[64];
  // support both versions of `eth_sign` responses
  if (v < 27) {
    v += 27;
  }

  return {
    v: v,
    r: sig.slice(0, 32),
    s: sig.slice(32, 64)
  };
};

/**
 * Returns the ethereum address of a given private key
 * @param {Buffer} privateKey A private key must be 256 bits wide
 * @return {Buffer}
 */
exports.privateToAddress = function (privateKey) {
  return exports.publicToAddress(privateToPublic(privateKey));
};

/**
 * Checks if the address is a valid. Accepts checksummed addresses too
 * @param {String} address
 * @return {Boolean}
 */
exports.isValidAddress = function (address) {
  return (/^0x[0-9a-fA-F]{40}$/.test(address)
  );
};

/**
  * Checks if a given address is a zero address
  * @method isZeroAddress
  * @param {String} address
  * @return {Boolean}
  */
exports.isZeroAddress = function (address) {
  var zeroAddress = exports.zeroAddress();
  return zeroAddress === exports.addHexPrefix(address);
};

/**
 * Returns a checksummed address
 * @param {String} address
 * @return {String}
 */
exports.toChecksumAddress = function (address) {
  address = exports.stripHexPrefix(address).toLowerCase();
  var hash = exports.keccak(address).toString('hex');
  var ret = '0x';

  for (var i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase();
    } else {
      ret += address[i];
    }
  }

  return ret;
};

/**
 * Checks if the address is a valid checksummed address
 * @param {Buffer} address
 * @return {Boolean}
 */
exports.isValidChecksumAddress = function (address) {
  return exports.isValidAddress(address) && exports.toChecksumAddress(address) === address;
};

/**
 * Generates an address of a newly created contract
 * @param {Buffer} from the address which is creating this new address
 * @param {Buffer} nonce the nonce of the from account
 * @return {Buffer}
 */
exports.generateAddress = function (from, nonce) {
  from = exports.toBuffer(from);
  nonce = new BN(nonce);

  if (nonce.isZero()) {
    // in RLP we want to encode null in the case of zero nonce
    // read the RLP documentation for an answer if you dare
    nonce = null;
  } else {
    nonce = Buffer.from(nonce.toArray());
  }

  // Only take the lower 160bits of the hash
  return exports.rlphash([from, nonce]).slice(-20);
};

/**
 * Returns true if the supplied address belongs to a precompiled account (Byzantium)
 * @param {Buffer|String} address
 * @return {Boolean}
 */
exports.isPrecompiled = function (address) {
  var a = exports.unpad(address);
  return a.length === 1 && a[0] >= 1 && a[0] <= 8;
};

/**
 * Adds "0x" to a given `String` if it does not already start with "0x"
 * @param {String} str
 * @return {String}
 */
exports.addHexPrefix = function (str) {
  if (typeof str !== 'string') {
    return str;
  }

  return exports.isHexPrefixed(str) ? str : '0x' + str;
};

/**
 * Validate ECDSA signature
 * @method isValidSignature
 * @param {Buffer} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @param {Boolean} [homestead=true]
 * @return {Boolean}
 */

exports.isValidSignature = function (v, r, s, homestead) {
  var SECP256K1_N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
  var SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);

  if (r.length !== 32 || s.length !== 32) {
    return false;
  }

  if (v !== 27 && v !== 28) {
    return false;
  }

  r = new BN(r);
  s = new BN(s);

  if (r.isZero() || r.gt(SECP256K1_N) || s.isZero() || s.gt(SECP256K1_N)) {
    return false;
  }

  if (homestead === false && new BN(s).cmp(SECP256K1_N_DIV_2) === 1) {
    return false;
  }

  return true;
};

/**
 * Converts a `Buffer` or `Array` to JSON
 * @param {Buffer|Array} ba
 * @return {Array|String|null}
 */
exports.baToJSON = function (ba) {
  if (Buffer.isBuffer(ba)) {
    return '0x' + ba.toString('hex');
  } else if (ba instanceof Array) {
    var array = [];
    for (var i = 0; i < ba.length; i++) {
      array.push(exports.baToJSON(ba[i]));
    }
    return array;
  }
};

/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param {Object} self the `Object` to define properties on
 * @param {Array} fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param {*} data data to be validated against the definitions
 */
exports.defineProperties = function (self, fields, data) {
  self.raw = [];
  self._fields = [];

  // attach the `toJSON`
  self.toJSON = function (label) {
    if (label) {
      var obj = {};
      self._fields.forEach(function (field) {
        obj[field] = '0x' + self[field].toString('hex');
      });
      return obj;
    }
    return exports.baToJSON(this.raw);
  };

  self.serialize = function serialize() {
    return rlp.encode(self.raw);
  };

  fields.forEach(function (field, i) {
    self._fields.push(field.name);
    function getter() {
      return self.raw[i];
    }
    function setter(v) {
      v = exports.toBuffer(v);

      if (v.toString('hex') === '00' && !field.allowZero) {
        v = Buffer.allocUnsafe(0);
      }

      if (field.allowLess && field.length) {
        v = exports.stripZeros(v);
        assert(field.length >= v.length, 'The field ' + field.name + ' must not have more ' + field.length + ' bytes');
      } else if (!(field.allowZero && v.length === 0) && field.length) {
        assert(field.length === v.length, 'The field ' + field.name + ' must have byte length of ' + field.length);
      }

      self.raw[i] = v;
    }

    Object.defineProperty(self, field.name, {
      enumerable: true,
      configurable: true,
      get: getter,
      set: setter
    });

    if (field.default) {
      self[field.name] = field.default;
    }

    // attach alias
    if (field.alias) {
      Object.defineProperty(self, field.alias, {
        enumerable: false,
        configurable: true,
        set: setter,
        get: getter
      });
    }
  });

  // if the constuctor is passed data
  if (data) {
    if (typeof data === 'string') {
      data = Buffer.from(exports.stripHexPrefix(data), 'hex');
    }

    if (Buffer.isBuffer(data)) {
      data = rlp.decode(data);
    }

    if (Array.isArray(data)) {
      if (data.length > self._fields.length) {
        throw new Error('wrong number of fields in data');
      }

      // make sure all the items are buffers
      data.forEach(function (d, i) {
        self[self._fields[i]] = exports.toBuffer(d);
      });
    } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      var keys = Object.keys(data);
      fields.forEach(function (field) {
        if (keys.indexOf(field.name) !== -1) self[field.name] = data[field.name];
        if (keys.indexOf(field.alias) !== -1) self[field.alias] = data[field.alias];
      });
    } else {
      throw new Error('invalid data');
    }
  }
};

/***/ }),

/***/ "/oFA":
/*!***************************************************!*\
  !*** ./node_modules/async/internal/doParallel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doParallel;

var _eachOf = __webpack_require__(/*! ../eachOf */ "abV/");

var _eachOf2 = _interopRequireDefault(_eachOf);

var _wrapAsync = __webpack_require__(/*! ./wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(_eachOf2.default, obj, (0, _wrapAsync2.default)(iteratee), callback);
    };
}
module.exports = exports['default'];

/***/ }),

/***/ "/u+i":
/*!****************************************************!*\
  !*** ./node_modules/eth-block-tracker/src/base.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EthQuery = __webpack_require__(/*! eth-query */ "QXrW")
const pify = __webpack_require__(/*! pify */ "4CaD")
const SafeEventEmitter = __webpack_require__(/*! safe-event-emitter */ "y2lW")

const sec = 1000

const calculateSum = (accumulator, currentValue) => accumulator + currentValue
const blockTrackerEvents = ['sync', 'latest']

class BaseBlockTracker extends SafeEventEmitter {

  //
  // public
  //

  constructor (opts = {}) {
    super()
    // config
    this._blockResetDuration = opts.blockResetDuration || 20 * sec
    // state
    this._blockResetTimeout
    this._currentBlock = null
    this._isRunning = false
    // bind functions for internal use
    this._onNewListener = this._onNewListener.bind(this)
    this._onRemoveListener = this._onRemoveListener.bind(this)
    this._resetCurrentBlock = this._resetCurrentBlock.bind(this)
    // listen for handler changes
    this._setupInternalEvents()
  }

  isRunning () {
    return this._isRunning
  }

  getCurrentBlock () {
    return this._currentBlock
  }

  async getLatestBlock () {
    // return if available
    if (this._currentBlock) return this._currentBlock
    // wait for a new latest block
    const latestBlock = await new Promise(resolve => this.once('latest', resolve))
    // return newly set current block
    return latestBlock
  }

  // dont allow module consumer to remove our internal event listeners
  removeAllListeners (eventName) {
    // perform default behavior, preserve fn arity
    if (eventName) {
      super.removeAllListeners(eventName)
    } else {
      super.removeAllListeners()
    }
    // re-add internal events
    this._setupInternalEvents()
    // trigger stop check just in case
    this._onRemoveListener()
  }

  //
  // to be implemented in subclass
  //

  _start () {
    // default behavior is noop
  }

  _end () {
    // default behavior is noop
  }

  //
  // private
  //

  _setupInternalEvents () {
    // first remove listeners for idempotence
    this.removeListener('newListener', this._onNewListener)
    this.removeListener('removeListener', this._onRemoveListener)
    // then add them
    this.on('newListener', this._onNewListener)
    this.on('removeListener', this._onRemoveListener)
  }

  _onNewListener (eventName, handler) {
    // `newListener` is called *before* the listener is added
    if (!blockTrackerEvents.includes(eventName)) return
    this._maybeStart()
  }

  _onRemoveListener (eventName, handler) {
    // `removeListener` is called *after* the listener is removed
    if (this._getBlockTrackerEventCount() > 0) return
    this._maybeEnd()
  }

  _maybeStart () {
    if (this._isRunning) return
    this._isRunning = true
    // cancel setting latest block to stale
    this._cancelBlockResetTimeout()
    this._start()
  }

  _maybeEnd () {
    if (!this._isRunning) return
    this._isRunning = false
    this._setupBlockResetTimeout()
    this._end()
  }

  _getBlockTrackerEventCount () {
    return blockTrackerEvents
      .map(eventName => this.listenerCount(eventName))
      .reduce(calculateSum)
  }

  _newPotentialLatest (newBlock) {
    const currentBlock = this._currentBlock
    // only update if blok number is higher
    if (currentBlock && (hexToInt(newBlock) <= hexToInt(currentBlock))) return
    this._setCurrentBlock(newBlock)
  }

  _setCurrentBlock (newBlock) {
    const oldBlock = this._currentBlock
    this._currentBlock = newBlock
    this.emit('latest', newBlock)
    this.emit('sync', { oldBlock, newBlock })
  }

  _setupBlockResetTimeout () {
    // clear any existing timeout
    this._cancelBlockResetTimeout()
    // clear latest block when stale
    this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration)
    // nodejs - dont hold process open
    if (this._blockResetTimeout.unref) {
      this._blockResetTimeout.unref()
    }
  }

  _cancelBlockResetTimeout () {
    clearTimeout(this._blockResetTimeout)
  }

  _resetCurrentBlock () {
    this._currentBlock = null
  }

}

module.exports = BaseBlockTracker

function hexToInt(hexInt) {
  return Number.parseInt(hexInt, 16)
}


/***/ }),

/***/ "03A+":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "JTzB"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "0Q/7":
/*!***************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "1MZ5");
const classes_1 = __webpack_require__(/*! ./classes */ "M6k5");
const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE),
};
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) {
            return error_constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 */
function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false, } = {}) {
    var _a, _b;
    if (!fallbackError ||
        !Number.isInteger(fallbackError.code) ||
        typeof fallbackError.message !== 'string') {
        throw new Error('Must provide fallback error with integer number code and string message.');
    }
    if (error instanceof classes_1.EthereumRpcError) {
        return error.serialize();
    }
    const serialized = {};
    if (error &&
        typeof error === 'object' &&
        !Array.isArray(error) &&
        hasKey(error, 'code') &&
        isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) {
                serialized.data = _error.data;
            }
        }
        else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = { originalError: assignOriginalError(error) };
        }
    }
    else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = (message && typeof message === 'string'
            ? message
            : fallbackError.message);
        serialized.data = { originalError: assignOriginalError(error) };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') {
        serialized.stack = stack;
    }
    return serialized;
}
exports.serializeError = serializeError;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) {
        return Object.assign({}, error);
    }
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQTREO0FBQzVELHVDQUF5RTtBQUV6RSxNQUFNLG1CQUFtQixHQUFHLDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNwRCxNQUFNLGdCQUFnQixHQUFHLDZEQUE2RCxDQUFDO0FBQ3ZGLE1BQU0sY0FBYyxHQUErQjtJQUNqRCxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztDQUNqRCxDQUFDO0FBRVcsUUFBQSw2QkFBNkIsR0FBRywyQkFBMkIsQ0FBQztBQUl6RTs7O0dBR0c7QUFDSCxTQUFnQixrQkFBa0IsQ0FDaEMsSUFBWSxFQUNaLGtCQUEwQixnQkFBZ0I7SUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE1BQU0sQ0FBQyw2QkFBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sNkJBQVcsQ0FBQyxVQUEyQixDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLHFDQUE2QixDQUFDO1NBQ3RDO0tBQ0Y7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBZkQsZ0RBZUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLElBQUksNkJBQVcsQ0FBQyxVQUEyQixDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQWRELGtDQWNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQzVCLEtBQWMsRUFDZCxFQUNFLGFBQWEsR0FBRyxjQUFjLEVBQzlCLGtCQUFrQixHQUFHLEtBQUssR0FDM0IsR0FBRyxFQUFFOztJQUdOLElBQ0UsQ0FBQyxhQUFhO1FBQ2QsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckMsT0FBTyxhQUFhLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFDekM7UUFDQSxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxDQUMzRSxDQUFDO0tBQ0g7SUFFRCxJQUFJLEtBQUssWUFBWSwwQkFBZ0IsRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMxQjtJQUVELE1BQU0sVUFBVSxHQUF3QyxFQUFFLENBQUM7SUFFM0QsSUFDRSxLQUFLO1FBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFnQyxFQUFFLE1BQU0sQ0FBQztRQUNoRCxXQUFXLENBQUUsS0FBb0MsQ0FBQyxJQUFJLENBQUMsRUFDdkQ7UUFDQSxNQUFNLE1BQU0sR0FBRyxLQUE0QyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUU5QixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4RCxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDL0I7U0FDRjthQUFNO1lBQ0wsVUFBVSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FDcEMsVUFBeUMsQ0FBQyxJQUFJLENBQ2hELENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakU7S0FDRjtTQUFNO1FBQ0wsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXJDLE1BQU0sT0FBTyxTQUFJLEtBQWEsMENBQUUsT0FBTyxDQUFDO1FBRXhDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FDbkIsT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7WUFDcEMsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDMUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUNqRTtJQUVELE1BQU0sS0FBSyxTQUFJLEtBQWEsMENBQUUsS0FBSyxDQUFDO0lBRXBDLElBQUksa0JBQWtCLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDckUsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDMUI7SUFDRCxPQUFPLFVBQXdDLENBQUM7QUFDbEQsQ0FBQztBQWxFRCx3Q0FrRUM7QUFFRCxXQUFXO0FBRVgsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFjO0lBQ3pDLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEdBQTRCLEVBQUUsR0FBVztJQUN2RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQyJ9

/***/ }),

/***/ "0QlC":
/*!****************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/getBlocksForRange.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = getBlocksForRange

async function getBlocksForRange({ provider, fromBlock, toBlock }) {
  if (!fromBlock) fromBlock = toBlock

  const fromBlockNumber = hexToInt(fromBlock)
  const toBlockNumber = hexToInt(toBlock)
  const blockCountToQuery = toBlockNumber - fromBlockNumber + 1
  // load all blocks from old to new (inclusive)
  const missingBlockNumbers = Array(blockCountToQuery).fill()
                              .map((_,index) => fromBlockNumber + index)
                              .map(intToHex)
  const blockBodies = await Promise.all(
    missingBlockNumbers.map(blockNum => query(provider, 'eth_getBlockByNumber', [blockNum, false]))
  )
  return blockBodies
}

function hexToInt(hexString) {
  if (hexString === undefined || hexString === null) return hexString
  return Number.parseInt(hexString, 16)
}

function incrementHexInt(hexString){
  if (hexString === undefined || hexString === null) return hexString
  const value = hexToInt(hexString)
  return intToHex(value + 1)
}

function intToHex(int) {
  if (int === undefined || int === null) return int
  const hexString = int.toString(16)
  return '0x' + hexString
}

function query(provider, method, params) {
  return new Promise((resolve, reject) => {
    provider.sendAsync({ id: 1, jsonrpc: '2.0', method, params }, (err, res) => {
      if (err) return reject(err)
      resolve(res.result)
    })
  })
}


/***/ }),

/***/ "1MZ5":
/*!*************************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/error-constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
    },
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9yLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF1QmEsUUFBQSxVQUFVLEdBQWU7SUFDcEMsR0FBRyxFQUFFO1FBQ0gsWUFBWSxFQUFFLENBQUMsS0FBSztRQUNwQixnQkFBZ0IsRUFBRSxDQUFDLEtBQUs7UUFDeEIsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLO1FBQzNCLG1CQUFtQixFQUFFLENBQUMsS0FBSztRQUMzQixrQkFBa0IsRUFBRSxDQUFDLEtBQUs7UUFDMUIsYUFBYSxFQUFFLENBQUMsS0FBSztRQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQ2IsY0FBYyxFQUFFLENBQUMsS0FBSztRQUN0QixjQUFjLEVBQUUsQ0FBQyxLQUFLO1FBQ3RCLGFBQWEsRUFBRSxDQUFDLEtBQUs7UUFDckIsUUFBUSxFQUFFLENBQUMsS0FBSztLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLG1CQUFtQixFQUFFLElBQUk7UUFDekIsWUFBWSxFQUFFLElBQUk7UUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixZQUFZLEVBQUUsSUFBSTtRQUNsQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSx1R0FBdUc7S0FDakg7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsOENBQThDO0tBQ3hEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGdCQUFnQjtLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsdUJBQXVCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUseUJBQXlCO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLDRCQUE0QjtLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSwwRUFBMEU7S0FDcEY7SUFDRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsa0VBQWtFO0tBQzVFO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx3REFBd0Q7S0FDbEU7Q0FDRixDQUFDIn0=

/***/ }),

/***/ "1Ti9":
/*!**************************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/mergeMiddleware.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMiddleware = void 0;
const JsonRpcEngine_1 = __webpack_require__(/*! ./JsonRpcEngine */ "X+co");
function mergeMiddleware(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware) => engine.push(middleware));
    return engine.asMiddleware();
}
exports.mergeMiddleware = mergeMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21lcmdlTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBbUU7QUFFbkUsU0FBZ0IsZUFBZSxDQUFDLGVBQXNEO0lBQ3BGLE1BQU0sTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0lBQ25DLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSkQsMENBSUMifQ==

/***/ }),

/***/ "1VPL":
/*!***************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
const classes_1 = __webpack_require__(/*! ./classes */ "M6k5");
Object.defineProperty(exports, "EthereumRpcError", { enumerable: true, get: function () { return classes_1.EthereumRpcError; } });
Object.defineProperty(exports, "EthereumProviderError", { enumerable: true, get: function () { return classes_1.EthereumProviderError; } });
const utils_1 = __webpack_require__(/*! ./utils */ "0Q/7");
Object.defineProperty(exports, "serializeError", { enumerable: true, get: function () { return utils_1.serializeError; } });
Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function () { return utils_1.getMessageFromCode; } });
const errors_1 = __webpack_require__(/*! ./errors */ "UuhT");
Object.defineProperty(exports, "ethErrors", { enumerable: true, get: function () { return errors_1.ethErrors; } });
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "1MZ5");
Object.defineProperty(exports, "errorCodes", { enumerable: true, get: function () { return error_constants_1.errorCodes; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9FO0FBVWxFLGlHQVZPLDBCQUFnQixPQVVQO0FBQ2hCLHNHQVh5QiwrQkFBcUIsT0FXekI7QUFWdkIsbUNBRWlCO0FBU2YsK0ZBVkEsc0JBQWMsT0FVQTtBQUNkLG1HQVhnQiwwQkFBa0IsT0FXaEI7QUFUcEIscUNBQXFDO0FBS25DLDBGQUxPLGtCQUFTLE9BS1A7QUFKWCx1REFBK0M7QUFHN0MsMkZBSE8sNEJBQVUsT0FHUCJ9

/***/ }),

/***/ "2J3U":
/*!**************************************************!*\
  !*** ./node_modules/json-rpc-random-id/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = IdIterator

function IdIterator(opts){
  opts = opts || {}
  var max = opts.max || Number.MAX_SAFE_INTEGER
  var idCounter = typeof opts.start !== 'undefined' ? opts.start : Math.floor(Math.random() * max)

  return function createRandomId () {
    idCounter = idCounter % max
    return idCounter++
  }

}

/***/ }),

/***/ "2nhq":
/*!****************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Mutex = __webpack_require__(/*! async-mutex */ "q6/2").Mutex
const { createAsyncMiddleware } = __webpack_require__(/*! json-rpc-engine */ "llSS")
const createJsonRpcMiddleware = __webpack_require__(/*! eth-json-rpc-middleware/scaffold */ "VJGR")
const LogFilter = __webpack_require__(/*! ./log-filter.js */ "FqFB")
const BlockFilter = __webpack_require__(/*! ./block-filter.js */ "rW7p")
const TxFilter = __webpack_require__(/*! ./tx-filter.js */ "hyCD")
const { intToHex, hexToInt } = __webpack_require__(/*! ./hexUtils */ "UJ2e")

module.exports = createEthFilterMiddleware

function createEthFilterMiddleware({ blockTracker, provider }) {

  // create filter collection
  let filterIndex = 0
  let filters = {}
  // create update mutex
  const mutex = new Mutex()
  const waitForFree = mutexMiddlewareWrapper({ mutex })

  const middleware = createJsonRpcMiddleware({
    // install filters
    eth_newFilter:                   waitForFree(toFilterCreationMiddleware(newLogFilter)),
    eth_newBlockFilter:              waitForFree(toFilterCreationMiddleware(newBlockFilter)),
    eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
    // uninstall filters
    eth_uninstallFilter:             waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
    // checking filter changes
    eth_getFilterChanges:            waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
    eth_getFilterLogs:               waitForFree(toAsyncRpcMiddleware(getFilterLogs)),
  })

  // setup filter updating and destroy handler
  const filterUpdater = async ({ oldBlock, newBlock }) => {
    if (filters.length === 0) return
    // lock update reads
    const releaseLock = await mutex.acquire()
    try {
      // process all filters in parallel
      await Promise.all(objValues(filters).map(async (filter) => {
        try {
         await filter.update({ oldBlock, newBlock })
        } catch (err) {
          // handle each error individually so filter update errors don't affect other filters
          console.error(err)
        }
      }))
    } catch (err) {
      // log error so we don't skip the releaseLock
      console.error(err)
    }
    // unlock update reads
    releaseLock()
  }

  // expose filter methods directly
  middleware.newLogFilter = newLogFilter
  middleware.newBlockFilter = newBlockFilter
  middleware.newPendingTransactionFilter = newPendingTransactionFilter
  middleware.uninstallFilter = uninstallFilterHandler
  middleware.getFilterChanges = getFilterChanges
  middleware.getFilterLogs = getFilterLogs

  // expose destroy method for cleanup
  middleware.destroy = () => {
    uninstallAllFilters()
  }

  return middleware

  //
  // new filters
  //

  async function newLogFilter(params) {
    const filter = new LogFilter({ provider, params })
    const filterIndex = await installFilter(filter)
    return filter
  }

  async function newBlockFilter() {
    const filter = new BlockFilter({ provider })
    const filterIndex = await installFilter(filter)
    return filter
  }

  async function newPendingTransactionFilter() {
    const filter = new TxFilter({ provider })
    const filterIndex = await installFilter(filter)
    return filter
  }

  //
  // get filter changes
  //

  async function getFilterChanges(filterIndexHex) {
    const filterIndex = hexToInt(filterIndexHex)
    const filter = filters[filterIndex]
    if (!filter) {
      throw new Error(`No filter for index "${filterIndex}"`)
    }
    const results = filter.getChangesAndClear()
    return results
  }

  async function getFilterLogs(filterIndexHex) {
    const filterIndex = hexToInt(filterIndexHex)
    const filter = filters[filterIndex]
    if (!filter) {
      throw new Error(`No filter for index "${filterIndex}"`)
    }
    // only return results for log filters
    if (filter.type === 'log') {
      results = filter.getAllResults()
    } else {
      results = []
    }
    return results
  }


  //
  // remove filters
  //


  async function uninstallFilterHandler(filterIndexHex) {
    // check filter exists
    const filterIndex = hexToInt(filterIndexHex)
    const filter = filters[filterIndex]
    const result = Boolean(filter)
    // uninstall filter
    if (result) {
      await uninstallFilter(filterIndex)
    }
    return result
  }

  //
  // utils
  //

  async function installFilter(filter) {
    const prevFilterCount = objValues(filters).length
    // install filter
    const currentBlock = await blockTracker.getLatestBlock()
    await filter.initialize({ currentBlock })
    filterIndex++
    filters[filterIndex] = filter
    filter.id = filterIndex
    filter.idHex = intToHex(filterIndex)
    // update block tracker subs
    const newFilterCount = objValues(filters).length
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount })
    return filterIndex
  }

  async function uninstallFilter(filterIndex) {
    const prevFilterCount = objValues(filters).length
    delete filters[filterIndex]
    // update block tracker subs
    const newFilterCount = objValues(filters).length
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount })
  }

  async function uninstallAllFilters() {
    const prevFilterCount = objValues(filters).length
    filters = {}
    // update block tracker subs
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount: 0 })
  }

  function updateBlockTrackerSubs({ prevFilterCount, newFilterCount }) {
    // subscribe
    if (prevFilterCount === 0 && newFilterCount > 0) {
      blockTracker.on('sync', filterUpdater)
      return
    }
    // unsubscribe
    if (prevFilterCount > 0 && newFilterCount === 0) {
      blockTracker.removeListener('sync', filterUpdater)
      return
    }
  }

}

// helper for turning filter constructors into rpc middleware
function toFilterCreationMiddleware(createFilterFn) {
  return toAsyncRpcMiddleware(async (...args) => {
    const filter = await createFilterFn(...args)
    const result = intToHex(filter.id)
    return result
  })
}

// helper for pulling out req.params and setting res.result
function toAsyncRpcMiddleware(asyncFn) {
  return createAsyncMiddleware(async (req, res) => {
    const result = await asyncFn.apply(null, req.params)
    res.result = result
  })
}

function mutexMiddlewareWrapper({ mutex }) {
  return (middleware) => {
    return async (req, res, next, end) => {
      // wait for mutex available
      // we can release immediately because
      // we just need to make sure updates aren't active
      const releaseLock = await mutex.acquire()
      releaseLock()
      middleware(req, res, next, end)
    }
  }
}

function objValues(obj, fn){
  const values = []
  for (let key in obj) {
    values.push(obj[key])
  }
  return values
}


/***/ }),

/***/ "2sf1":
/*!*********************************************!*\
  !*** ./node_modules/async/internal/once.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = once;
function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ "3qT5":
/*!**********************************************!*\
  !*** ./node_modules/async/internal/slice.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slice;
function slice(arrayLike, start) {
    start = start | 0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for (var idx = 0; idx < newLen; idx++) {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}
module.exports = exports["default"];

/***/ }),

/***/ "4CaD":
/*!*******************************************************************!*\
  !*** ./node_modules/eth-block-tracker/node_modules/pify/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),

/***/ "56vw":
/*!****************************************!*\
  !*** ./node_modules/async/asyncify.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = asyncify;

var _isObject = __webpack_require__(/*! lodash/isObject */ "GoyQ");

var _isObject2 = _interopRequireDefault(_isObject);

var _initialParams = __webpack_require__(/*! ./internal/initialParams */ "hGab");

var _initialParams2 = _interopRequireDefault(_initialParams);

var _setImmediate = __webpack_require__(/*! ./internal/setImmediate */ "LgDX");

var _setImmediate2 = _interopRequireDefault(_setImmediate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return (0, _initialParams2.default)(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if ((0, _isObject2.default)(result) && typeof result.then === 'function') {
            result.then(function (value) {
                invokeCallback(callback, null, value);
            }, function (err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        (0, _setImmediate2.default)(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}
module.exports = exports['default'];

/***/ }),

/***/ "6oS5":
/*!*************************************************!*\
  !*** ./node_modules/async/internal/parallel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _parallel;

var _noop = __webpack_require__(/*! lodash/noop */ "vN+2");

var _noop2 = _interopRequireDefault(_noop);

var _isArrayLike = __webpack_require__(/*! lodash/isArrayLike */ "MMmD");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _slice = __webpack_require__(/*! ./slice */ "3qT5");

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = __webpack_require__(/*! ./wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _parallel(eachfn, tasks, callback) {
    callback = callback || _noop2.default;
    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        (0, _wrapAsync2.default)(task)(function (err, result) {
            if (arguments.length > 2) {
                result = (0, _slice2.default)(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];

/***/ }),

/***/ "6sVZ":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "7GkX":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "b80T"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "A90E"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "8Pg7":
/*!******************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/base-filter-history.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BaseFilter = __webpack_require__(/*! ./base-filter */ "zvTS")

// tracks all results ever recorded
class BaseFilterWithHistory extends BaseFilter {

  constructor () {
    super()
    this.allResults = []
  }

  async update () {
    throw new Error('BaseFilterWithHistory - no update method specified')
  }

  addResults (newResults) {
    this.allResults = this.allResults.concat(newResults)
    super.addResults(newResults)
  }

  addInitialResults (newResults) {
    this.allResults = this.allResults.concat(newResults)
    super.addInitialResults(newResults)
  }

  getAllResults () {
    return this.allResults
  }

}

module.exports = BaseFilterWithHistory

/***/ }),

/***/ "8sGB":
/*!*****************************************************!*\
  !*** ./node_modules/async-mutex/es6/withTimeout.js ***!
  \*****************************************************/
/*! exports provided: withTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return withTimeout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function withTimeout(sync, timeout, timeoutError) {
    var _this = this;
    if (timeoutError === void 0) { timeoutError = new Error('timeout'); }
    return {
        acquire: function () {
            return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var isTimeout, ticket, release;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isTimeout = false;
                            setTimeout(function () {
                                isTimeout = true;
                                reject(timeoutError);
                            }, timeout);
                            return [4 /*yield*/, sync.acquire()];
                        case 1:
                            ticket = _a.sent();
                            if (isTimeout) {
                                release = Array.isArray(ticket) ? ticket[1] : ticket;
                                release();
                            }
                            else {
                                resolve(ticket);
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        },
        runExclusive: function (callback) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                var release, ticket;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            release = function () { return undefined; };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 7, 8]);
                            return [4 /*yield*/, this.acquire()];
                        case 2:
                            ticket = _a.sent();
                            if (!Array.isArray(ticket)) return [3 /*break*/, 4];
                            release = ticket[1];
                            return [4 /*yield*/, callback(ticket[0])];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            release = ticket;
                            return [4 /*yield*/, callback()];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            release();
                            return [7 /*endfinally*/];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        },
        release: function () {
            sync.release();
        },
        isLocked: function () { return sync.isLocked(); },
    };
}


/***/ }),

/***/ "9SRK":
/*!********************************************!*\
  !*** ./node_modules/async/internal/map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _asyncMap;

var _noop = __webpack_require__(/*! lodash/noop */ "vN+2");

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = __webpack_require__(/*! ./wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || _noop2.default;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = (0, _wrapAsync2.default)(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];

/***/ }),

/***/ "A90E":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "6sVZ"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "V6Ve");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "AP2z":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "B8du":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "BMM2":
/*!*************************************************!*\
  !*** ./node_modules/async/internal/iterator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iterator;

var _isArrayLike = __webpack_require__(/*! lodash/isArrayLike */ "MMmD");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _getIterator = __webpack_require__(/*! ./getIterator */ "oEkW");

var _getIterator2 = _interopRequireDefault(_getIterator);

var _keys = __webpack_require__(/*! lodash/keys */ "7GkX");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? { value: coll[i], key: i } : null;
    };
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return { value: item.value, key: i };
    };
}

function createObjectIterator(obj) {
    var okeys = (0, _keys2.default)(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? { value: obj[key], key: key } : null;
    };
}

function iterator(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = (0, _getIterator2.default)(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}
module.exports = exports['default'];

/***/ }),

/***/ "DSRE":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "Kz5y"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "B8du");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@angular-builders/custom-webpack/node_modules/webpack/buildin/module.js */ "0SIU")(module)))

/***/ }),

/***/ "ExA7":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "Fj00":
/*!************************************************************!*\
  !*** ./node_modules/@metamask/safe-event-emitter/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __webpack_require__(/*! events */ "+qE3");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    }
    catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(() => {
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for (let i = 0; i < n; i += 1) {
        copy[i] = arr[i];
    }
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) {
            doError = doError && events.error === undefined;
        }
        else if (!doError) {
            return false;
        }
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) {
                [er] = args;
            }
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) {
            return false;
        }
        if (typeof handler === 'function') {
            safeApply(handler, this, args);
        }
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for (let i = 0; i < len; i += 1) {
                safeApply(listeners[i], this, args);
            }
        }
        return true;
    }
}
exports.default = SafeEventEmitter;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "FqFB":
/*!*********************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/log-filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EthQuery = __webpack_require__(/*! eth-query */ "QXrW")
const pify = __webpack_require__(/*! pify */ "h9tj")
const BaseFilterWithHistory = __webpack_require__(/*! ./base-filter-history */ "8Pg7")
const { bnToHex, hexToInt, incrementHexInt, minBlockRef, blockRefIsNumber } = __webpack_require__(/*! ./hexUtils */ "UJ2e")

class LogFilter extends BaseFilterWithHistory {

  constructor ({ provider, params }) {
    super()
    this.type = 'log'
    this.ethQuery = new EthQuery(provider)
    this.params = Object.assign({
      fromBlock: 'latest',
      toBlock: 'latest',
      address: undefined,
      topics: [],
    }, params)
    // normalize address parameter
    if (this.params.address) {
      // ensure array
      if (!Array.isArray(this.params.address)) {
        this.params.address = [this.params.address]
      }
      // ensure lowercase
      this.params.address = this.params.address.map(address => address.toLowerCase())
    }
  }

  async initialize({ currentBlock }) {
    // resolve params.fromBlock
    let fromBlock = this.params.fromBlock
    if (['latest', 'pending'].includes(fromBlock)) fromBlock = currentBlock
    if ('earliest' === fromBlock) fromBlock = '0x0'
    this.params.fromBlock = fromBlock
    // set toBlock for initial lookup
    const toBlock = minBlockRef(this.params.toBlock, currentBlock)
    const params = Object.assign({}, this.params, { toBlock })
    // fetch logs and add to results
    const newLogs = await this._fetchLogs(params)
    this.addInitialResults(newLogs)
  }

  async update ({ oldBlock, newBlock }) {
    // configure params for this update
    const toBlock = newBlock
    let fromBlock
    // oldBlock is empty on first sync
    if (oldBlock) {
      fromBlock = incrementHexInt(oldBlock)
    } else {
      fromBlock = newBlock
    }
    // fetch logs
    const params = Object.assign({}, this.params, { fromBlock, toBlock })
    const newLogs = await this._fetchLogs(params)
    const matchingLogs = newLogs.filter(log => this.matchLog(log))

    // add to results
    this.addResults(matchingLogs)
  }

  async _fetchLogs (params) {
    const newLogs = await pify(cb => this.ethQuery.getLogs(params, cb))()
    // add to results
    return newLogs
  }

  matchLog(log) {
    // check if block number in bounds:
    if (hexToInt(this.params.fromBlock) >= hexToInt(log.blockNumber)) return false
    if (blockRefIsNumber(this.params.toBlock) && hexToInt(this.params.toBlock) <= hexToInt(log.blockNumber)) return false

    // address is correct:
    const normalizedLogAddress = log.address && log.address.toLowerCase()
    if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress)) return false

    // topics match:
    // topics are position-dependant
    // topics can be nested to represent `or` [[a || b], c]
    // topics can be null, representing a wild card for that position
    const topicsMatch = this.params.topics.every((topicPattern, index) => {
      // pattern is longer than actual topics
      let logTopic = log.topics[index]
      if (!logTopic) return false
      logTopic = logTopic.toLowerCase()
      // normalize subTopics
      let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern]
      // check for wild card
      const subtopicsIncludeWildcard = subtopicsToMatch.includes(null)
      if (subtopicsIncludeWildcard) return true
      subtopicsToMatch = subtopicsToMatch.map(topic => topic.toLowerCase())
      // check each possible matching topic
      const topicDoesMatch = subtopicsToMatch.includes(logTopic)
      return topicDoesMatch
    })

    return topicsMatch
  }

}

module.exports = LogFilter


/***/ }),

/***/ "GoyQ":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "GwZO":
/*!**************************************************************************************************!*\
  !*** ./node_modules/web3-provider-engine/node_modules/ethereumjs-util/dist/secp256k1-adapter.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var secp256k1 = __webpack_require__(/*! ethereum-cryptography/secp256k1 */ "IhPl");

var secp256k1v3 = __webpack_require__(/*! ./secp256k1-lib/index */ "H4v2");
var der = __webpack_require__(/*! ./secp256k1-lib/der */ "aRep");

/**
 * Verify an ECDSA privateKey
 * @method privateKeyVerify
 * @param {Buffer} privateKey
 * @return {boolean}
 */
var privateKeyVerify = function privateKeyVerify(privateKey) {
  // secp256k1 v4 version throws when privateKey length is not 32
  if (privateKey.length !== 32) {
    return false;
  }

  return secp256k1.privateKeyVerify(Uint8Array.from(privateKey));
};

/**
 * Export a privateKey in DER format
 * @method privateKeyExport
 * @param {Buffer} privateKey
 * @param {boolean} compressed
 * @return {boolean}
 */
var privateKeyExport = function privateKeyExport(privateKey, compressed) {
  // privateKeyExport method is not part of secp256k1 v4 package
  // this implementation is based on v3
  if (privateKey.length !== 32) {
    throw new RangeError('private key length is invalid');
  }

  var publicKey = secp256k1v3.privateKeyExport(privateKey, compressed);

  return der.privateKeyExport(privateKey, publicKey, compressed);
};

/**
 * Import a privateKey in DER format
 * @method privateKeyImport
 * @param {Buffer} privateKey
 * @return {Buffer}
 */

var privateKeyImport = function privateKeyImport(privateKey) {
  // privateKeyImport method is not part of secp256k1 v4 package
  // this implementation is based on v3
  privateKey = der.privateKeyImport(privateKey);
  if (privateKey !== null && privateKey.length === 32 && privateKeyVerify(privateKey)) {
    return privateKey;
  }

  throw new Error("couldn't import from DER format");
};

/**
 * Negate a privateKey by subtracting it from the order of the curve's base point
 * @method privateKeyNegate
 * @param {Buffer} privateKey
 * @return {Buffer}
 */
var privateKeyNegate = function privateKeyNegate(privateKey) {
  return Buffer.from(secp256k1.privateKeyNegate(Uint8Array.from(privateKey)));
};

/**
 * Compute the inverse of a privateKey (modulo the order of the curve's base point).
 * @method privateKeyModInverse
 * @param {Buffer} privateKey
 * @return {Buffer}
 */
var privateKeyModInverse = function privateKeyModInverse(privateKey) {
  if (privateKey.length !== 32) {
    throw new Error('private key length is invalid');
  }

  return Buffer.from(secp256k1v3.privateKeyModInverse(Uint8Array.from(privateKey)));
};

/**
 * Tweak a privateKey by adding tweak to it.
 * @method privateKeyTweakAdd
 * @param {Buffer} privateKey
 * @param {Buffer} tweak
 * @return {Buffer}
 */
var privateKeyTweakAdd = function privateKeyTweakAdd(privateKey, tweak) {
  return Buffer.from(secp256k1.privateKeyTweakAdd(Uint8Array.from(privateKey), tweak));
};

/**
 * Tweak a privateKey by multiplying it by a tweak.
 * @method privateKeyTweakMul
 * @param {Buffer} privateKey
 * @param {Buffer} tweak
 * @return {Buffer}
 */
var privateKeyTweakMul = function privateKeyTweakMul(privateKey, tweak) {
  return Buffer.from(secp256k1.privateKeyTweakMul(Uint8Array.from(privateKey), Uint8Array.from(tweak)));
};

/**
 * Compute the public key for a privateKey.
 * @method publicKeyCreate
 * @param {Buffer} privateKey
 * @param {boolean} compressed
 * @return {Buffer}
 */
var publicKeyCreate = function publicKeyCreate(privateKey, compressed) {
  return Buffer.from(secp256k1.publicKeyCreate(Uint8Array.from(privateKey), compressed));
};

/**
 * Convert a publicKey to compressed or uncompressed form.
 * @method publicKeyConvert
 * @param {Buffer} publicKey
 * @param {boolean} compressed
 * @return {Buffer}
 */
var publicKeyConvert = function publicKeyConvert(publicKey, compressed) {
  return Buffer.from(secp256k1.publicKeyConvert(Uint8Array.from(publicKey), compressed));
};

/**
 * Verify an ECDSA publicKey.
 * @method publicKeyVerify
 * @param {Buffer} publicKey
 * @return {boolean}
 */
var publicKeyVerify = function publicKeyVerify(publicKey) {
  // secp256k1 v4 version throws when publicKey length is not 33 or 65
  if (publicKey.length !== 33 && publicKey.length !== 65) {
    return false;
  }

  return secp256k1.publicKeyVerify(Uint8Array.from(publicKey));
};

/**
 * Tweak a publicKey by adding tweak times the generator to it.
 * @method publicKeyTweakAdd
 * @param {Buffer} publicKey
 * @param {Buffer} tweak
 * @param {boolean} compressed
 * @return {Buffer}
 */
var publicKeyTweakAdd = function publicKeyTweakAdd(publicKey, tweak, compressed) {
  return Buffer.from(secp256k1.publicKeyTweakAdd(Uint8Array.from(publicKey), Uint8Array.from(tweak), compressed));
};

/**
 * Tweak a publicKey by multiplying it by a tweak value
 * @method publicKeyTweakMul
 * @param {Buffer} publicKey
 * @param {Buffer} tweak
 * @param {boolean} compressed
 * @return {Buffer}
 */
var publicKeyTweakMul = function publicKeyTweakMul(publicKey, tweak, compressed) {
  return Buffer.from(secp256k1.publicKeyTweakMul(Uint8Array.from(publicKey), Uint8Array.from(tweak), compressed));
};

/**
 * Add a given publicKeys together.
 * @method publicKeyCombine
 * @param {Array<Buffer>} publicKeys
 * @param {boolean} compressed
 * @return {Buffer}
 */
var publicKeyCombine = function publicKeyCombine(publicKeys, compressed) {
  var keys = [];
  publicKeys.forEach(function (publicKey) {
    keys.push(Uint8Array.from(publicKey));
  });

  return Buffer.from(secp256k1.publicKeyCombine(keys, compressed));
};

/**
 * Convert a signature to a normalized lower-S form.
 * @method signatureNormalize
 * @param {Buffer} signature
 * @return {Buffer}
 */
var signatureNormalize = function signatureNormalize(signature) {
  return Buffer.from(secp256k1.signatureNormalize(Uint8Array.from(signature)));
};

/**
 * Serialize an ECDSA signature in DER format.
 * @method signatureExport
 * @param {Buffer} signature
 * @return {Buffer}
 */
var signatureExport = function signatureExport(signature) {
  return Buffer.from(secp256k1.signatureExport(Uint8Array.from(signature)));
};

/**
 * Parse a DER ECDSA signature (follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
 * @method signatureImport
 * @param {Buffer} signature
 * @return {Buffer}
 */
var signatureImport = function signatureImport(signature) {
  return Buffer.from(secp256k1.signatureImport(Uint8Array.from(signature)));
};

/**
 * Parse a DER ECDSA signature (not follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
 * @method signatureImportLax
 * @param {Buffer} signature
 * @return {Buffer}
 */
var signatureImportLax = function signatureImportLax(signature) {
  // signatureImportLax method is not part of secp256k1 v4 package
  // this implementation is based on v3
  // ensure that signature is greater than 0
  if (signature.length === 0) {
    throw new RangeError('signature length is invalid');
  }

  var sigObj = der.signatureImportLax(signature);
  if (sigObj === null) {
    throw new Error("couldn't parse DER signature");
  }

  return secp256k1v3.signatureImport(sigObj);
};

/**
 * Create an ECDSA signature. Always return low-S signature.
 * @method sign
 * @param {Buffer} message
 * @param {Buffer} privateKey
 * @param {Object} options
 * @return {Buffer}
 */
var sign = function sign(message, privateKey, options) {
  if (options === null) {
    throw new TypeError('options should be an Object');
  }

  var signOptions = void 0;

  if (options) {
    signOptions = {};

    if (options.data === null) {
      throw new TypeError('options.data should be a Buffer');
    }

    if (options.data) {
      // validate option.data length
      if (options.data.length !== 32) {
        throw new RangeError('options.data length is invalid');
      }

      signOptions.data = new Uint8Array(options.data);
    }

    if (options.noncefn === null) {
      throw new TypeError('options.noncefn should be a Function');
    }

    if (options.noncefn) {
      //  convert option.noncefn function signature
      signOptions.noncefn = function (message, privateKey, algo, data, attempt) {
        var bufferAlgo = algo != null ? Buffer.from(algo) : null;
        var bufferData = data != null ? Buffer.from(data) : null;

        var buffer = Buffer.from('');

        if (options.noncefn) {
          buffer = options.noncefn(Buffer.from(message), Buffer.from(privateKey), bufferAlgo, bufferData, attempt);
        }

        return Uint8Array.from(buffer);
      };
    }
  }

  var sig = secp256k1.ecdsaSign(Uint8Array.from(message), Uint8Array.from(privateKey), signOptions);

  return {
    signature: Buffer.from(sig.signature),
    recovery: sig.recid
  };
};

/**
 * Verify an ECDSA signature.
 * @method verify
 * @param {Buffer} message
 * @param {Buffer} signature
 * @param {Buffer} publicKey
 * @return {boolean}
 */
var verify = function verify(message, signature, publicKey) {
  // note: secp256k1 v4 verify method has a different argument order
  return secp256k1.ecdsaVerify(Uint8Array.from(signature), Uint8Array.from(message), publicKey);
};

/**
 * Recover an ECDSA public key from a signature.
 * @method recover
 * @param {Buffer} message
 * @param {Buffer} signature
 * @param {Number} recid
 * @param {boolean} compressed
 * @return {Buffer}
 */
var recover = function recover(message, signature, recid, compressed) {
  // note: secp256k1 v4 recover method has a different argument order
  return Buffer.from(secp256k1.ecdsaRecover(Uint8Array.from(signature), recid, Uint8Array.from(message), compressed));
};

/**
 * Compute an EC Diffie-Hellman secret and applied sha256 to compressed public key.
 * @method ecdh
 * @param {Buffer} publicKey
 * @param {Buffer} privateKey
 * @return {Buffer}
 */
var ecdh = function ecdh(publicKey, privateKey) {
  // note: secp256k1 v3 doesn't allow optional parameter
  return Buffer.from(secp256k1.ecdh(Uint8Array.from(publicKey), Uint8Array.from(privateKey), {}));
};

/**
 * Compute an EC Diffie-Hellman secret and return public key as result
 * @method ecdhUnsafe
 * @param {Buffer} publicKey
 * @param {Buffer} privateKey
 * @param {boolean} compressed
 * @return {Buffer}
 */
var ecdhUnsafe = function ecdhUnsafe(publicKey, privateKey, compressed) {
  // ecdhUnsafe method is not part of secp256k1 v4 package
  // this implementation is based on v3
  // ensure valid publicKey length
  if (publicKey.length !== 33 && publicKey.length !== 65) {
    throw new RangeError('public key length is invalid');
  }

  // ensure valid privateKey length
  if (privateKey.length !== 32) {
    throw new RangeError('private key length is invalid');
  }

  return Buffer.from(secp256k1v3.ecdhUnsafe(Uint8Array.from(publicKey), Uint8Array.from(privateKey), compressed));
};

module.exports = {
  privateKeyVerify: privateKeyVerify,
  privateKeyExport: privateKeyExport,
  privateKeyImport: privateKeyImport,
  privateKeyNegate: privateKeyNegate,
  privateKeyModInverse: privateKeyModInverse,
  privateKeyTweakAdd: privateKeyTweakAdd,
  privateKeyTweakMul: privateKeyTweakMul,

  publicKeyCreate: publicKeyCreate,
  publicKeyConvert: publicKeyConvert,
  publicKeyVerify: publicKeyVerify,
  publicKeyTweakAdd: publicKeyTweakAdd,
  publicKeyTweakMul: publicKeyTweakMul,
  publicKeyCombine: publicKeyCombine,

  signatureNormalize: signatureNormalize,
  signatureExport: signatureExport,
  signatureImport: signatureImport,
  signatureImportLax: signatureImportLax,

  sign: sign,
  verify: verify,
  recover: recover,

  ecdh: ecdh,
  ecdhUnsafe: ecdhUnsafe
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "H4v2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/web3-provider-engine/node_modules/ethereumjs-util/dist/secp256k1-lib/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

// This file is imported from secp256k1 v3
// https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE

var BN = __webpack_require__(/*! bn.js */ "vIY1");
var EC = __webpack_require__(/*! elliptic */ "MzeL").ec;

var ec = new EC('secp256k1');
var ecparams = ec.curve;

exports.privateKeyExport = function (privateKey, compressed) {
  var d = new BN(privateKey);
  if (d.ucmp(ecparams.n) >= 0) {
    throw new Error('couldn\'t export to DER format');
  }

  var point = ec.g.mul(d);
  return toPublicKey(point.getX(), point.getY(), compressed);
};

exports.privateKeyModInverse = function (privateKey) {
  var bn = new BN(privateKey);
  if (bn.ucmp(ecparams.n) >= 0 || bn.isZero()) {
    throw new Error('private key range is invalid');
  }

  return bn.invm(ecparams.n).toArrayLike(Buffer, 'be', 32);
};

exports.signatureImport = function (sigObj) {
  var r = new BN(sigObj.r);
  if (r.ucmp(ecparams.n) >= 0) {
    r = new BN(0);
  }

  var s = new BN(sigObj.s);
  if (s.ucmp(ecparams.n) >= 0) {
    s = new BN(0);
  }

  return Buffer.concat([r.toArrayLike(Buffer, 'be', 32), s.toArrayLike(Buffer, 'be', 32)]);
};

exports.ecdhUnsafe = function (publicKey, privateKey, compressed) {
  var point = ec.keyFromPublic(publicKey);

  var scalar = new BN(privateKey);
  if (scalar.ucmp(ecparams.n) >= 0 || scalar.isZero()) {
    throw new Error('scalar was invalid (zero or overflow)');
  }

  var shared = point.pub.mul(scalar);
  return toPublicKey(shared.getX(), shared.getY(), compressed);
};

var toPublicKey = function toPublicKey(x, y, compressed) {
  var publicKey = void 0;

  if (compressed) {
    publicKey = Buffer.alloc(33);
    publicKey[0] = y.isOdd() ? 0x03 : 0x02;
    x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
  } else {
    publicKey = Buffer.alloc(65);
    publicKey[0] = 0x04;
    x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
    y.toArrayLike(Buffer, 'be', 32).copy(publicKey, 33);
  }

  return publicKey;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "JTzB":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "KWkM":
/*!****************************************!*\
  !*** ./node_modules/async/parallel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parallelLimit;

var _eachOf = __webpack_require__(/*! ./eachOf */ "abV/");

var _eachOf2 = _interopRequireDefault(_eachOf);

var _parallel = __webpack_require__(/*! ./internal/parallel */ "6oS5");

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
  (0, _parallel2.default)(_eachOf2.default, tasks, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ "KfNM":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "KwLt":
/*!**************************************************!*\
  !*** ./node_modules/async/internal/breakLoop.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ "Kz5y":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "LCem":
/*!***********************************!*\
  !*** ./node_modules/async/map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doParallel = __webpack_require__(/*! ./internal/doParallel */ "/oFA");

var _doParallel2 = _interopRequireDefault(_doParallel);

var _map = __webpack_require__(/*! ./internal/map */ "9SRK");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
exports.default = (0, _doParallel2.default)(_map2.default);
module.exports = exports['default'];

/***/ }),

/***/ "LPKZ":
/*!********************************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/createAsyncMiddleware.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncMiddleware = void 0;
/**
 * JsonRpcEngine only accepts callback-based middleware directly.
 * createAsyncMiddleware exists to enable consumers to pass in async middleware
 * functions.
 *
 * Async middleware have no "end" function. Instead, they "end" if they return
 * without calling "next". Rather than passing in explicit return handlers,
 * async middleware can simply await "next", and perform operations on the
 * response object when execution resumes.
 *
 * To accomplish this, createAsyncMiddleware passes the async middleware a
 * wrapped "next" function. That function calls the internal JsonRpcEngine
 * "next" function with a return handler that resolves a promise when called.
 *
 * The return handler will always be called. Its resolution of the promise
 * enables the control flow described above.
 */
function createAsyncMiddleware(asyncMiddleware) {
    return async (req, res, next, end) => {
        // nextPromise is the key to the implementation
        // it is resolved by the return handler passed to the
        // "next" function
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
            resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        // This will be called by the consumer's async middleware.
        const asyncNext = async () => {
            nextWasCalled = true;
            // We pass a return handler to next(). When it is called by the engine,
            // the consumer's async middleware will resume executing.
            // eslint-disable-next-line node/callback-return
            next((runReturnHandlersCallback) => {
                // This callback comes from JsonRpcEngine._runReturnHandlers
                returnHandlerCallback = runReturnHandlersCallback;
                resolveNextPromise();
            });
            await nextPromise;
        };
        try {
            await asyncMiddleware(req, res, asyncNext);
            if (nextWasCalled) {
                await nextPromise; // we must wait until the return handler is called
                returnHandlerCallback(null);
            }
            else {
                end(null);
            }
        }
        catch (error) {
            if (returnHandlerCallback) {
                returnHandlerCallback(error);
            }
            else {
                end(error);
            }
        }
    };
}
exports.createAsyncMiddleware = createAsyncMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXN5bmNNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUFzeW5jTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxTQUFnQixxQkFBcUIsQ0FDbkMsZUFBNkM7SUFFN0MsT0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkMsK0NBQStDO1FBQy9DLHFEQUFxRDtRQUNyRCxrQkFBa0I7UUFDbEIsSUFBSSxrQkFBOEIsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUkscUJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUxQiwwREFBMEQ7UUFDMUQsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDM0IsYUFBYSxHQUFHLElBQUksQ0FBQztZQUVyQix1RUFBdUU7WUFDdkUseURBQXlEO1lBQ3pELGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFO2dCQUNqQyw0REFBNEQ7Z0JBQzVELHFCQUFxQixHQUFHLHlCQUF5QixDQUFDO2dCQUNsRCxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxXQUFXLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFM0MsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU0sV0FBVyxDQUFDLENBQUMsa0RBQWtEO2dCQUNwRSxxQkFBK0MsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDWDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLHFCQUFxQixFQUFFO2dCQUN4QixxQkFBK0MsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQS9DRCxzREErQ0MifQ==

/***/ }),

/***/ "LgDX":
/*!*****************************************************!*\
  !*** ./node_modules/async/internal/setImmediate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasNextTick = exports.hasSetImmediate = undefined;
exports.fallback = fallback;
exports.wrap = wrap;

var _slice = __webpack_require__(/*! ./slice */ "3qT5");

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = exports.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

exports.default = wrap(_defer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "URgk").setImmediate, __webpack_require__(/*! ./../../process/browser.js */ "8oxB")))

/***/ }),

/***/ "M6k5":
/*!*****************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/classes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumProviderError = exports.EthereumRpcError = void 0;
const fast_safe_stringify_1 = __webpack_require__(/*! fast-safe-stringify */ "N1pS");
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const serialized = {
            code: this.code,
            message: this.message,
        };
        if (this.data !== undefined) {
            serialized.data = this.data;
        }
        if (this.stack) {
            serialized.stack = this.stack;
        }
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
exports.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
exports.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') {
        return undefined;
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFnRDtBQVNoRDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBb0IsU0FBUSxLQUFLO0lBTTVDLFlBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxJQUFRO1FBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTRCLENBQzdCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0NBQXNDLENBQ3ZDLENBQUM7U0FDSDtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxNQUFNLFVBQVUsR0FBK0I7WUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyw2QkFBYSxDQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLGlCQUFpQixFQUNqQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRERCw0Q0FzREM7QUFFRDs7O0dBR0c7QUFDSCxNQUFhLHFCQUF5QixTQUFRLGdCQUFtQjtJQUUvRDs7O09BR0c7SUFDSCxZQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsSUFBUTtRQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FDYiwyREFBMkQsQ0FDNUQsQ0FBQztTQUNIO1FBRUQsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBaEJELHNEQWdCQztBQUVELFdBQVc7QUFFWCxTQUFTLHNCQUFzQixDQUFDLElBQVk7SUFDMUMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFVLEVBQUUsS0FBYztJQUNuRCxJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUU7UUFDMUIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMifQ==

/***/ }),

/***/ "MMmD":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "lSCD"),
    isLength = __webpack_require__(/*! ./isLength */ "shjB");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "N1pS":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var arr = []
var replacerStack = []

// Regular stringify
function stringify (obj, replacer, spacer) {
  decirc(obj, '', [], undefined)
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer)
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}
function decirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, stack, val)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer)
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}

function deterministicDecirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    if (typeof val.toJSON === 'function') {
      return
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, stack, val)
        tmp[key] = val[key]
      }
      if (parent !== undefined) {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues (replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) { return v }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = '[Circular]'
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),

/***/ "NDoG":
/*!****************************************************!*\
  !*** ./node_modules/async/internal/eachOfLimit.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _eachOfLimit;

var _noop = __webpack_require__(/*! lodash/noop */ "vN+2");

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(/*! ./once */ "2sf1");

var _once2 = _interopRequireDefault(_once);

var _iterator = __webpack_require__(/*! ./iterator */ "BMM2");

var _iterator2 = _interopRequireDefault(_iterator);

var _onlyOnce = __webpack_require__(/*! ./onlyOnce */ "rH6r");

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _breakLoop = __webpack_require__(/*! ./breakLoop */ "KwLt");

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = (0, _once2.default)(callback || _noop2.default);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = (0, _iterator2.default)(obj);
        var done = false;
        var running = 0;
        var looping = false;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (value === _breakLoop2.default || done && running <= 0) {
                done = true;
                return callback(null);
            } else if (!looping) {
                replenish();
            }
        }

        function replenish() {
            looping = true;
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
            }
            looping = false;
        }

        replenish();
    };
}
module.exports = exports['default'];

/***/ }),

/***/ "NykK":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "AP2z"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "PpH3":
/*!************************************************!*\
  !*** ./node_modules/async/internal/doLimit.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doLimit;
function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ "QXrW":
/*!*****************************************!*\
  !*** ./node_modules/eth-query/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const extend = __webpack_require__(/*! xtend */ "U6jy")
const createRandomId = __webpack_require__(/*! json-rpc-random-id */ "2J3U")()

module.exports = EthQuery


function EthQuery(provider){
  const self = this
  self.currentProvider = provider
}

//
// base queries
//

// default block
EthQuery.prototype.getBalance =                          generateFnWithDefaultBlockFor(2, 'eth_getBalance')
EthQuery.prototype.getCode =                             generateFnWithDefaultBlockFor(2, 'eth_getCode')
EthQuery.prototype.getTransactionCount =                 generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount')
EthQuery.prototype.getStorageAt =                        generateFnWithDefaultBlockFor(3, 'eth_getStorageAt')
EthQuery.prototype.call =                                generateFnWithDefaultBlockFor(2, 'eth_call')
// standard
EthQuery.prototype.protocolVersion =                     generateFnFor('eth_protocolVersion')
EthQuery.prototype.syncing =                             generateFnFor('eth_syncing')
EthQuery.prototype.coinbase =                            generateFnFor('eth_coinbase')
EthQuery.prototype.mining =                              generateFnFor('eth_mining')
EthQuery.prototype.hashrate =                            generateFnFor('eth_hashrate')
EthQuery.prototype.gasPrice =                            generateFnFor('eth_gasPrice')
EthQuery.prototype.accounts =                            generateFnFor('eth_accounts')
EthQuery.prototype.blockNumber =                         generateFnFor('eth_blockNumber')
EthQuery.prototype.getBlockTransactionCountByHash =      generateFnFor('eth_getBlockTransactionCountByHash')
EthQuery.prototype.getBlockTransactionCountByNumber =    generateFnFor('eth_getBlockTransactionCountByNumber')
EthQuery.prototype.getUncleCountByBlockHash =            generateFnFor('eth_getUncleCountByBlockHash')
EthQuery.prototype.getUncleCountByBlockNumber =          generateFnFor('eth_getUncleCountByBlockNumber')
EthQuery.prototype.sign =                                generateFnFor('eth_sign')
EthQuery.prototype.sendTransaction =                     generateFnFor('eth_sendTransaction')
EthQuery.prototype.sendRawTransaction =                  generateFnFor('eth_sendRawTransaction')
EthQuery.prototype.estimateGas =                         generateFnFor('eth_estimateGas')
EthQuery.prototype.getBlockByHash =                      generateFnFor('eth_getBlockByHash')
EthQuery.prototype.getBlockByNumber =                    generateFnFor('eth_getBlockByNumber')
EthQuery.prototype.getTransactionByHash =                generateFnFor('eth_getTransactionByHash')
EthQuery.prototype.getTransactionByBlockHashAndIndex =   generateFnFor('eth_getTransactionByBlockHashAndIndex')
EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex')
EthQuery.prototype.getTransactionReceipt =               generateFnFor('eth_getTransactionReceipt')
EthQuery.prototype.getUncleByBlockHashAndIndex =         generateFnFor('eth_getUncleByBlockHashAndIndex')
EthQuery.prototype.getUncleByBlockNumberAndIndex =       generateFnFor('eth_getUncleByBlockNumberAndIndex')
EthQuery.prototype.getCompilers =                        generateFnFor('eth_getCompilers')
EthQuery.prototype.compileLLL =                          generateFnFor('eth_compileLLL')
EthQuery.prototype.compileSolidity =                     generateFnFor('eth_compileSolidity')
EthQuery.prototype.compileSerpent =                      generateFnFor('eth_compileSerpent')
EthQuery.prototype.newFilter =                           generateFnFor('eth_newFilter')
EthQuery.prototype.newBlockFilter =                      generateFnFor('eth_newBlockFilter')
EthQuery.prototype.newPendingTransactionFilter =         generateFnFor('eth_newPendingTransactionFilter')
EthQuery.prototype.uninstallFilter =                     generateFnFor('eth_uninstallFilter')
EthQuery.prototype.getFilterChanges =                    generateFnFor('eth_getFilterChanges')
EthQuery.prototype.getFilterLogs =                       generateFnFor('eth_getFilterLogs')
EthQuery.prototype.getLogs =                             generateFnFor('eth_getLogs')
EthQuery.prototype.getWork =                             generateFnFor('eth_getWork')
EthQuery.prototype.submitWork =                          generateFnFor('eth_submitWork')
EthQuery.prototype.submitHashrate =                      generateFnFor('eth_submitHashrate')

// network level

EthQuery.prototype.sendAsync = function(opts, cb){
  const self = this
  self.currentProvider.sendAsync(createPayload(opts), function(err, response){
    if (!err && response.error) err = new Error('EthQuery - RPC Error - '+response.error.message)
    if (err) return cb(err)
    cb(null, response.result)
  })
}

// util

function generateFnFor(methodName){
  return function(){
    const self = this
    var args = [].slice.call(arguments)
    var cb = args.pop()
    self.sendAsync({
      method: methodName,
      params: args,
    }, cb)
  }
}

function generateFnWithDefaultBlockFor(argCount, methodName){
  return function(){
    const self = this
    var args = [].slice.call(arguments)
    var cb = args.pop()
    // set optional default block param
    if (args.length < argCount) args.push('latest')
    self.sendAsync({
      method: methodName,
      params: args,
    }, cb)
  }
}

function createPayload(data){
  return extend({
    // defaults
    id: createRandomId(),
    jsonrpc: '2.0',
    params: [],
    // user-specified
  }, data)
}


/***/ }),

/***/ "RGXH":
/*!*******************************************!*\
  !*** ./node_modules/jsonify/lib/parse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ "RhWC":
/*!**********************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/getUniqueId.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueId = void 0;
// uint32 (two's complement) max
// more conservative than Number.MAX_SAFE_INTEGER
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VW5pcXVlSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0VW5pcXVlSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUM7QUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFaEQsU0FBZ0IsV0FBVztJQUN6QixTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFIRCxrQ0FHQyJ9

/***/ }),

/***/ "UJ2e":
/*!*******************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/hexUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = {
  minBlockRef,
  maxBlockRef,
  sortBlockRefs,
  bnToHex,
  blockRefIsNumber,
  hexToInt,
  incrementHexInt,
  intToHex,
  unsafeRandomBytes,
}

function minBlockRef(...refs) {
  const sortedRefs = sortBlockRefs(refs)
  return sortedRefs[0]
}

function maxBlockRef(...refs) {
  const sortedRefs = sortBlockRefs(refs)
  return sortedRefs[sortedRefs.length-1]
}

function sortBlockRefs(refs) {
  return refs.sort((refA, refB) => {
    if (refA === 'latest' || refB === 'earliest') return 1
    if (refB === 'latest' || refA === 'earliest') return -1
    return hexToInt(refA) - hexToInt(refB)
  })
}

function bnToHex(bn) {
  return '0x' + bn.toString(16)
}

function blockRefIsNumber(blockRef){
  return blockRef && !['earliest', 'latest', 'pending'].includes(blockRef)
}

function hexToInt(hexString) {
  if (hexString === undefined || hexString === null) return hexString
  return Number.parseInt(hexString, 16)
}

function incrementHexInt(hexString){
  if (hexString === undefined || hexString === null) return hexString
  const value = hexToInt(hexString)
  return intToHex(value + 1)
}

function intToHex(int) {
  if (int === undefined || int === null) return int
  let hexString = int.toString(16)
  const needsLeftPad = hexString.length % 2
  if (needsLeftPad) hexString = '0' + hexString
  return '0x' + hexString
}

function unsafeRandomBytes(byteCount) {
  let result = '0x'
  for (let i = 0; i < byteCount; i++) {
    result += unsafeRandomNibble()
    result += unsafeRandomNibble()
  }
  return result
}

function unsafeRandomNibble() {
  return Math.floor(Math.random() * 16).toString(16)
}


/***/ }),

/***/ "UNi/":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "UuhT":
/*!****************************************************!*\
  !*** ./node_modules/eth-rpc-errors/dist/errors.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ethErrors = void 0;
const classes_1 = __webpack_require__(/*! ./classes */ "M6k5");
const utils_1 = __webpack_require__(/*! ./utils */ "0Q/7");
const error_constants_1 = __webpack_require__(/*! ./error-constants */ "1MZ5");
exports.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new classes_1.EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBb0U7QUFDcEUsbUNBQTZDO0FBQzdDLHVEQUErQztBQWVsQyxRQUFBLFNBQVMsR0FBRztJQUN2QixHQUFHLEVBQUU7UUFFSDs7V0FFRztRQUNILEtBQUssRUFBRSxDQUFJLEdBQW9CLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUNwRCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUMxQjtRQUVEOztXQUVHO1FBQ0gsY0FBYyxFQUFFLENBQUksR0FBb0IsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQzdELDRCQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQ25DO1FBRUQ7O1dBRUc7UUFDSCxhQUFhLEVBQUUsQ0FBSSxHQUFvQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDNUQsNEJBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FDbEM7UUFFRDs7V0FFRztRQUNILGNBQWMsRUFBRSxDQUFJLEdBQW9CLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUM3RCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUNuQztRQUVEOztXQUVHO1FBQ0gsUUFBUSxFQUFFLENBQUksR0FBb0IsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQ3ZELDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQzdCO1FBRUQ7Ozs7V0FJRztRQUNILE1BQU0sRUFBRSxDQUFJLElBQTJCLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7YUFDcEY7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

/***/ }),

/***/ "V5x4":
/*!*******************************************************!*\
  !*** ./node_modules/eth-block-tracker/src/polling.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pify = __webpack_require__(/*! pify */ "4CaD")
const BaseBlockTracker = __webpack_require__(/*! ./base */ "/u+i")

const sec = 1000

class PollingBlockTracker extends BaseBlockTracker {

  constructor (opts = {}) {
    // parse + validate args
    if (!opts.provider) throw new Error('PollingBlockTracker - no provider specified.')
    const pollingInterval = opts.pollingInterval || 20 * sec
    const retryTimeout = opts.retryTimeout || pollingInterval / 10
    const keepEventLoopActive = opts.keepEventLoopActive !== undefined ? opts.keepEventLoopActive : true
    const setSkipCacheFlag = opts.setSkipCacheFlag || false
    // BaseBlockTracker constructor
    super(Object.assign({
      blockResetDuration: pollingInterval,
    }, opts))
    // config
    this._provider = opts.provider
    this._pollingInterval = pollingInterval
    this._retryTimeout = retryTimeout
    this._keepEventLoopActive = keepEventLoopActive
    this._setSkipCacheFlag = setSkipCacheFlag
  }

  //
  // public
  //

  // trigger block polling
  async checkForLatestBlock () {
    await this._updateLatestBlock()
    return await this.getLatestBlock()
  }

  //
  // private
  //

  _start () {
    this._performSync().catch(err => this.emit('error', err))
  }

  async _performSync () {
    while (this._isRunning) {
      try {
        await this._updateLatestBlock()
        await timeout(this._pollingInterval, !this._keepEventLoopActive)
      } catch (err) {
        const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${err.stack}`)
        try {
          this.emit('error', newErr)
        } catch (emitErr) {
          console.error(newErr)
        }
        await timeout(this._retryTimeout, !this._keepEventLoopActive)
      }
    }
  }

  async _updateLatestBlock () {
    // fetch + set latest block
    const latestBlock = await this._fetchLatestBlock()
    this._newPotentialLatest(latestBlock)
  }

  async _fetchLatestBlock () {
    const req = { jsonrpc: "2.0", id: 1, method: 'eth_blockNumber', params: [] }
    if (this._setSkipCacheFlag) req.skipCache = true
    const res = await pify((cb) => this._provider.sendAsync(req, cb))()
    if (res.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${res.error}`)
    return res.result
  }

}

module.exports = PollingBlockTracker

function timeout (duration, unref) {
  return new Promise(resolve => {
    const timoutRef = setTimeout(resolve, duration)
    // don't keep process open
    if (timoutRef.unref && unref) {
      timoutRef.unref()
    }
  })
}


/***/ }),

/***/ "V6Ve":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "kekF");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "VJGR":
/*!********************************************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/node_modules/eth-json-rpc-middleware/scaffold.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// for backwards compat
module.exports = __webpack_require__(/*! json-rpc-engine/src/createScaffoldMiddleware */ "X+YH")


/***/ }),

/***/ "WFqU":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@angular-builders/custom-webpack/node_modules/webpack/buildin/global.js */ "wg4m")))

/***/ }),

/***/ "X+YH":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/node_modules/eth-json-rpc-middleware/node_modules/json-rpc-engine/src/createScaffoldMiddleware.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function createScaffoldMiddleware (handlers) {
  return (req, res, next, end) => {
    const handler = handlers[req.method]
    // if no handler, return
    if (handler === undefined) {
      return next()
    }
    // if handler is fn, call as middleware
    if (typeof handler === 'function') {
      return handler(req, res, next, end)
    }
    // if handler is some other value, use as result
    res.result = handler
    return end()
  }
}


/***/ }),

/***/ "X+co":
/*!************************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/JsonRpcEngine.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcEngine = void 0;
const safe_event_emitter_1 = __importDefault(__webpack_require__(/*! @metamask/safe-event-emitter */ "Fj00"));
const eth_rpc_errors_1 = __webpack_require__(/*! eth-rpc-errors */ "1VPL");
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
class JsonRpcEngine extends safe_event_emitter_1.default {
    constructor() {
        super();
        this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(middleware) {
        this._middleware.push(middleware);
    }
    handle(req, cb) {
        if (cb && typeof cb !== 'function') {
            throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
            if (cb) {
                return this._handleBatch(req, cb);
            }
            return this._handleBatch(req);
        }
        if (cb) {
            return this._handle(req, cb);
        }
        return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
        return async (req, res, next, end) => {
            try {
                const [middlewareError, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
                if (isComplete) {
                    await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    return end(middlewareError);
                }
                return next(async (handlerCallback) => {
                    try {
                        await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    }
                    catch (error) {
                        return handlerCallback(error);
                    }
                    return handlerCallback();
                });
            }
            catch (error) {
                return end(error);
            }
        };
    }
    async _handleBatch(reqs, cb) {
        // The order here is important
        try {
            // 2. Wait for all requests to finish, or throw on some kind of fatal
            // error
            const responses = await Promise.all(
            // 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this)));
            // 3. Return batch response
            if (cb) {
                return cb(null, responses);
            }
            return responses;
        }
        catch (error) {
            if (cb) {
                return cb(error);
            }
            throw error;
        }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(req) {
        return new Promise((resolve) => {
            this._handle(req, (_err, res) => {
                // There will always be a response, and it will always have any error
                // that is caught and propagated.
                resolve(res);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(callerReq, cb) {
        if (!callerReq ||
            Array.isArray(callerReq) ||
            typeof callerReq !== 'object') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
            return cb(error, { id: undefined, jsonrpc: '2.0', error });
        }
        if (typeof callerReq.method !== 'string') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
            return cb(error, { id: callerReq.id, jsonrpc: '2.0', error });
        }
        const req = Object.assign({}, callerReq);
        const res = {
            id: req.id,
            jsonrpc: req.jsonrpc,
        };
        let error = null;
        try {
            await this._processRequest(req, res);
        }
        catch (_error) {
            // A request handler error, a re-thrown middleware error, or something
            // unexpected.
            error = _error;
        }
        if (error) {
            // Ensure no result is present on an errored response
            delete res.result;
            if (!res.error) {
                res.error = eth_rpc_errors_1.serializeError(error);
            }
        }
        return cb(error, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(req, res) {
        const [error, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        // Throw if "end" was not called, or if the response has neither a result
        // nor an error.
        JsonRpcEngine._checkForCompletion(req, res, isComplete);
        // The return handlers should run even if an error was encountered during
        // middleware processing.
        await JsonRpcEngine._runReturnHandlers(returnHandlers);
        // Now we re-throw the middleware processing error, if any, to catch it
        // further up the call chain.
        if (error) {
            throw error;
        }
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        // Go down stack of middleware, call and collect optional returnHandlers
        for (const middleware of middlewareStack) {
            [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
            if (isComplete) {
                break;
            }
        }
        return [error, isComplete, returnHandlers.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve) => {
            const end = (err) => {
                const error = err || res.error;
                if (error) {
                    res.error = eth_rpc_errors_1.serializeError(error);
                }
                // True indicates that the request should end
                resolve([error, true]);
            };
            const next = (returnHandler) => {
                if (res.error) {
                    end(res.error);
                }
                else {
                    if (returnHandler) {
                        if (typeof returnHandler !== 'function') {
                            end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. ` +
                                `Received "${typeof returnHandler}" for request:\n${jsonify(req)}`, { request: req }));
                        }
                        returnHandlers.push(returnHandler);
                    }
                    // False indicates that the request should not end
                    resolve([null, false]);
                }
            };
            try {
                middleware(req, res, next, end);
            }
            catch (error) {
                end(error);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(handlers) {
        for (const handler of handlers) {
            await new Promise((resolve, reject) => {
                handler((err) => (err ? reject(err) : resolve()));
            });
        }
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(req, res, isComplete) {
        if (!('result' in res) && !('error' in res)) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${jsonify(req)}`, { request: req });
        }
        if (!isComplete) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${jsonify(req)}`, { request: req });
        }
    }
}
exports.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
    return JSON.stringify(request, null, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblJwY0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Kc29uUnBjRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNGQUE0RDtBQUM1RCxtREFBOEU7QUF1RjlFOzs7R0FHRztBQUNILE1BQWEsYUFBYyxTQUFRLDRCQUFnQjtJQUdqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQU8sVUFBbUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBaUQsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEyQ0QsTUFBTSxDQUFDLEdBQVksRUFBRSxFQUFRO1FBQzNCLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQThCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBOEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVk7UUFDVixPQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQyxJQUFJO2dCQUNGLE1BQU0sQ0FDSixlQUFlLEVBQ2YsVUFBVSxFQUNWLGNBQWMsRUFDZixHQUFHLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLFVBQVUsRUFBRTtvQkFDZCxNQUFNLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdkQsT0FBTyxHQUFHLENBQUMsZUFBNkMsQ0FBQyxDQUFDO2lCQUMzRDtnQkFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUU7b0JBQ3BDLElBQUk7d0JBQ0YsTUFBTSxhQUFhLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3hEO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNkLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMvQjtvQkFDRCxPQUFPLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBaUJPLEtBQUssQ0FBQyxZQUFZLENBQ3hCLElBQStCLEVBQy9CLEVBQXFFO1FBRXJFLDhCQUE4QjtRQUM5QixJQUFJO1lBQ0YscUVBQXFFO1lBQ3JFLFFBQVE7WUFDUixNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHO1lBQ2pDLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3pDLENBQUM7WUFFRiwyQkFBMkI7WUFDM0IsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksRUFBRSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1lBRUQsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWMsQ0FDcEIsR0FBNEI7UUFFNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixxRUFBcUU7Z0JBQ3JFLGlDQUFpQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLEtBQUssQ0FBQyxPQUFPLENBQ25CLFNBQWtDLEVBQ2xDLEVBQWdFO1FBRWhFLElBQ0UsQ0FBQyxTQUFTO1lBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDeEIsT0FBTyxTQUFTLEtBQUssUUFBUSxFQUM3QjtZQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksaUNBQWdCLENBQ2hDLDJCQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFDN0IsNkNBQTZDLE9BQU8sU0FBUyxFQUFFLEVBQy9ELEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUN2QixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLE9BQU8sU0FBUyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQ0FBZ0IsQ0FDaEMsMkJBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUM3QiwyQ0FBMkMsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQ3BFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUN2QixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxHQUFHLHFCQUFpQyxTQUFTLENBQUUsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBb0M7WUFDM0MsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUM7UUFDRixJQUFJLEtBQUssR0FBK0IsSUFBSSxDQUFDO1FBRTdDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxNQUFNLEVBQUU7WUFDZixzRUFBc0U7WUFDdEUsY0FBYztZQUNkLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULHFEQUFxRDtZQUNyRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLEtBQUssR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBK0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssS0FBSyxDQUFDLGVBQWUsQ0FDM0IsR0FBNEIsRUFDNUIsR0FBb0M7UUFFcEMsTUFBTSxDQUNKLEtBQUssRUFDTCxVQUFVLEVBQ1YsY0FBYyxFQUNmLEdBQUcsTUFBTSxhQUFhLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEUseUVBQXlFO1FBQ3pFLGdCQUFnQjtRQUNoQixhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV4RCx5RUFBeUU7UUFDekUseUJBQXlCO1FBQ3pCLE1BQU0sYUFBYSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXZELHVFQUF1RTtRQUN2RSw2QkFBNkI7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQ3BDLEdBQTRCLEVBQzVCLEdBQW9DLEVBQ3BDLGVBQXNEO1FBUXRELE1BQU0sY0FBYyxHQUFpQyxFQUFFLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV2Qix3RUFBd0U7UUFDeEUsS0FBSyxNQUFNLFVBQVUsSUFBSSxlQUFlLEVBQUU7WUFDeEMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUN0RCxHQUFHLEVBQ0gsR0FBRyxFQUNILFVBQVUsRUFDVixjQUFjLENBQ2YsQ0FBQztZQUNGLElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLGNBQWMsQ0FDM0IsR0FBNEIsRUFDNUIsR0FBb0MsRUFDcEMsVUFBK0MsRUFDL0MsY0FBNEM7UUFFNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLE1BQU0sR0FBRyxHQUE2QixDQUFDLEdBQWEsRUFBRSxFQUFFO2dCQUN0RCxNQUFNLEtBQUssR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsR0FBRyxDQUFDLEtBQUssR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCw2Q0FBNkM7Z0JBQzdDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUE4QixDQUN0QyxhQUEwQyxFQUMxQyxFQUFFO2dCQUNGLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtvQkFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxJQUFJLGFBQWEsRUFBRTt3QkFDakIsSUFBSSxPQUFPLGFBQWEsS0FBSyxVQUFVLEVBQUU7NEJBQ3ZDLEdBQUcsQ0FDRCxJQUFJLGlDQUFnQixDQUNsQiwyQkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3ZCLDJEQUEyRDtnQ0FDekQsYUFBYSxPQUFPLGFBQWEsbUJBQW1CLE9BQU8sQ0FDekQsR0FBRyxDQUNKLEVBQUUsRUFDTCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDakIsQ0FDRixDQUFDO3lCQUNIO3dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ3BDO29CQUVELGtEQUFrRDtvQkFDbEQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsSUFBSTtnQkFDRixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDakM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQ3JDLFFBQXNDO1FBRXRDLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssTUFBTSxDQUFDLG1CQUFtQixDQUNoQyxHQUE0QixFQUM1QixHQUFvQyxFQUNwQyxVQUFtQjtRQUVuQixJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMzQyxNQUFNLElBQUksaUNBQWdCLENBQ3hCLDJCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDdkIsZ0VBQWdFLE9BQU8sQ0FDckUsR0FBRyxDQUNKLEVBQUUsRUFDSCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDakIsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sSUFBSSxpQ0FBZ0IsQ0FDeEIsMkJBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUN2QiwwQ0FBMEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQ3hELEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0Y7QUFyWUQsc0NBcVlDO0FBRUQsU0FBUyxPQUFPLENBQUMsT0FBZ0M7SUFDL0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQyJ9

/***/ }),

/***/ "XW5J":
/*!****************************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/idRemapMiddleware.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdRemapMiddleware = void 0;
const getUniqueId_1 = __webpack_require__(/*! ./getUniqueId */ "RhWC");
function createIdRemapMiddleware() {
    return (req, res, next, _end) => {
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done) => {
            req.id = originalId;
            res.id = originalId;
            done();
        });
    };
}
exports.createIdRemapMiddleware = createIdRemapMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRSZW1hcE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaWRSZW1hcE1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTRDO0FBRzVDLFNBQWdCLHVCQUF1QjtJQUNyQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDOUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyx5QkFBVyxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDZixHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1osR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFaRCwwREFZQyJ9

/***/ }),

/***/ "YOJA":
/*!******************************************!*\
  !*** ./node_modules/async/eachSeries.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eachLimit = __webpack_require__(/*! ./eachLimit */ "tMv7");

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _doLimit = __webpack_require__(/*! ./internal/doLimit */ "PpH3");

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
exports.default = (0, _doLimit2.default)(_eachLimit2.default, 1);
module.exports = exports['default'];

/***/ }),

/***/ "Yxjv":
/*!***********************************************!*\
  !*** ./node_modules/async-mutex/es6/Mutex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Semaphore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Semaphore */ "co6y");


var Mutex = /** @class */ (function () {
    function Mutex() {
        this._semaphore = new _Semaphore__WEBPACK_IMPORTED_MODULE_1__["default"](1);
    }
    Mutex.prototype.acquire = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, releaser;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._semaphore.acquire()];
                    case 1:
                        _a = _b.sent(), releaser = _a[1];
                        return [2 /*return*/, releaser];
                }
            });
        });
    };
    Mutex.prototype.runExclusive = function (callback) {
        return this._semaphore.runExclusive(function () { return callback(); });
    };
    Mutex.prototype.isLocked = function () {
        return this._semaphore.isLocked();
    };
    Mutex.prototype.release = function () {
        this._semaphore.release();
    };
    return Mutex;
}());
/* harmony default export */ __webpack_exports__["default"] = (Mutex);


/***/ }),

/***/ "Z0cm":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "aR5N":
/*!**************************************************!*\
  !*** ./node_modules/async/internal/wrapAsync.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAsync = undefined;

var _asyncify = __webpack_require__(/*! ../asyncify */ "56vw");

var _asyncify2 = _interopRequireDefault(_asyncify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
}

exports.default = wrapAsync;
exports.isAsync = isAsync;

/***/ }),

/***/ "aRep":
/*!**************************************************************************************************!*\
  !*** ./node_modules/web3-provider-engine/node_modules/ethereumjs-util/dist/secp256k1-lib/der.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

// This file is imported from secp256k1 v3
// https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE

var EC_PRIVKEY_EXPORT_DER_COMPRESSED = Buffer.from([
// begin
0x30, 0x81, 0xd3, 0x02, 0x01, 0x01, 0x04, 0x20,
// private key
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
// middle
0xa0, 0x81, 0x85, 0x30, 0x81, 0x82, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x21, 0x02, 0x79, 0xbe, 0x66, 0x7e, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xce, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xce, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xba, 0xae, 0xdc, 0xe6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5e, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x24, 0x03, 0x22, 0x00,
// public key
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

var EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED = Buffer.from([
// begin
0x30, 0x82, 0x01, 0x13, 0x02, 0x01, 0x01, 0x04, 0x20,
// private key
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
// middle
0xa0, 0x81, 0xa5, 0x30, 0x81, 0xa2, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x41, 0x04, 0x79, 0xbe, 0x66, 0x7e, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xce, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xce, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x48, 0x3a, 0xda, 0x77, 0x26, 0xa3, 0xc4, 0x65, 0x5d, 0xa4, 0xfb, 0xfc, 0x0e, 0x11, 0x08, 0xa8, 0xfd, 0x17, 0xb4, 0x48, 0xa6, 0x85, 0x54, 0x19, 0x9c, 0x47, 0xd0, 0x8f, 0xfb, 0x10, 0xd4, 0xb8, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xba, 0xae, 0xdc, 0xe6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5e, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x44, 0x03, 0x42, 0x00,
// public key
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

exports.privateKeyExport = function (privateKey, publicKey, compressed) {
  var result = Buffer.from(compressed ? EC_PRIVKEY_EXPORT_DER_COMPRESSED : EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED);
  privateKey.copy(result, compressed ? 8 : 9);
  publicKey.copy(result, compressed ? 181 : 214);
  return result;
};

exports.privateKeyImport = function (privateKey) {
  var length = privateKey.length;

  // sequence header
  var index = 0;
  if (length < index + 1 || privateKey[index] !== 0x30) return null;
  index += 1;

  // sequence length constructor
  if (length < index + 1 || !(privateKey[index] & 0x80)) return null;

  var lenb = privateKey[index] & 0x7f;
  index += 1;
  if (lenb < 1 || lenb > 2) return null;
  if (length < index + lenb) return null;

  // sequence length
  var len = privateKey[index + lenb - 1] | (lenb > 1 ? privateKey[index + lenb - 2] << 8 : 0);
  index += lenb;
  if (length < index + len) return null;

  // sequence element 0: version number (=1)
  if (length < index + 3 || privateKey[index] !== 0x02 || privateKey[index + 1] !== 0x01 || privateKey[index + 2] !== 0x01) {
    return null;
  }
  index += 3;

  // sequence element 1: octet string, up to 32 bytes
  if (length < index + 2 || privateKey[index] !== 0x04 || privateKey[index + 1] > 0x20 || length < index + 2 + privateKey[index + 1]) {
    return null;
  }

  return privateKey.slice(index + 2, index + 2 + privateKey[index + 1]);
};

exports.signatureImportLax = function (signature) {
  var r = Buffer.alloc(32, 0);
  var s = Buffer.alloc(32, 0);

  var length = signature.length;
  var index = 0;

  // sequence tag byte
  if (signature[index++] !== 0x30) {
    return null;
  }

  // sequence length byte
  var lenbyte = signature[index++];
  if (lenbyte & 0x80) {
    index += lenbyte - 0x80;
    if (index > length) {
      return null;
    }
  }

  // sequence tag byte for r
  if (signature[index++] !== 0x02) {
    return null;
  }

  // length for r
  var rlen = signature[index++];
  if (rlen & 0x80) {
    lenbyte = rlen - 0x80;
    if (index + lenbyte > length) {
      return null;
    }
    for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1) {}
    for (rlen = 0; lenbyte > 0; index += 1, lenbyte -= 1) {
      rlen = (rlen << 8) + signature[index];
    }
  }
  if (rlen > length - index) {
    return null;
  }
  var rindex = index;
  index += rlen;

  // sequence tag byte for s
  if (signature[index++] !== 0x02) {
    return null;
  }

  // length for s
  var slen = signature[index++];
  if (slen & 0x80) {
    lenbyte = slen - 0x80;
    if (index + lenbyte > length) {
      return null;
    }
    for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1) {}
    for (slen = 0; lenbyte > 0; index += 1, lenbyte -= 1) {
      slen = (slen << 8) + signature[index];
    }
  }
  if (slen > length - index) {
    return null;
  }
  var sindex = index;
  index += slen;

  // ignore leading zeros in r
  for (; rlen > 0 && signature[rindex] === 0x00; rlen -= 1, rindex += 1) {}
  // copy r value
  if (rlen > 32) {
    return null;
  }
  var rvalue = signature.slice(rindex, rindex + rlen);
  rvalue.copy(r, 32 - rvalue.length);

  // ignore leading zeros in s
  for (; slen > 0 && signature[sindex] === 0x00; slen -= 1, sindex += 1) {}
  // copy s value
  if (slen > 32) {
    return null;
  }
  var svalue = signature.slice(sindex, sindex + slen);
  svalue.copy(s, 32 - svalue.length);

  return { r: r, s: s };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "abV/":
/*!**************************************!*\
  !*** ./node_modules/async/eachOf.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll, iteratee, callback) {
    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
};

var _isArrayLike = __webpack_require__(/*! lodash/isArrayLike */ "MMmD");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _breakLoop = __webpack_require__(/*! ./internal/breakLoop */ "KwLt");

var _breakLoop2 = _interopRequireDefault(_breakLoop);

var _eachOfLimit = __webpack_require__(/*! ./eachOfLimit */ "k2x9");

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _doLimit = __webpack_require__(/*! ./internal/doLimit */ "PpH3");

var _doLimit2 = _interopRequireDefault(_doLimit);

var _noop = __webpack_require__(/*! lodash/noop */ "vN+2");

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(/*! ./internal/once */ "2sf1");

var _once2 = _interopRequireDefault(_once);

var _onlyOnce = __webpack_require__(/*! ./internal/onlyOnce */ "rH6r");

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(/*! ./internal/wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if (++completed === length || value === _breakLoop2.default) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, (0, _onlyOnce2.default)(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = (0, _doLimit2.default)(_eachOfLimit2.default, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
module.exports = exports['default'];

/***/ }),

/***/ "b80T":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "UNi/"),
    isArguments = __webpack_require__(/*! ./isArguments */ "03A+"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "DSRE"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "wJg7"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "c6wG");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "c6wG":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "dD9F"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "sEf8"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "mdPL");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "co6y":
/*!***************************************************!*\
  !*** ./node_modules/async-mutex/es6/Semaphore.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var Semaphore = /** @class */ (function () {
    function Semaphore(_maxConcurrency) {
        this._maxConcurrency = _maxConcurrency;
        this._queue = [];
        if (_maxConcurrency <= 0) {
            throw new Error('semaphore must be initialized to a positive value');
        }
        this._value = _maxConcurrency;
    }
    Semaphore.prototype.acquire = function () {
        var _this = this;
        var locked = this.isLocked();
        var ticket = new Promise(function (r) { return _this._queue.push(r); });
        if (!locked)
            this._dispatch();
        return ticket;
    };
    Semaphore.prototype.runExclusive = function (callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, value, release;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.acquire()];
                    case 1:
                        _a = _b.sent(), value = _a[0], release = _a[1];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, callback(value)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Semaphore.prototype.isLocked = function () {
        return this._value <= 0;
    };
    Semaphore.prototype.release = function () {
        if (this._maxConcurrency > 1) {
            throw new Error('this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        }
        if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = undefined;
            releaser();
        }
    };
    Semaphore.prototype._dispatch = function () {
        var _this = this;
        var nextConsumer = this._queue.shift();
        if (!nextConsumer)
            return;
        var released = false;
        this._currentReleaser = function () {
            if (released)
                return;
            released = true;
            _this._value++;
            _this._dispatch();
        };
        nextConsumer([this._value--, this._currentReleaser]);
    };
    return Semaphore;
}());
/* harmony default export */ __webpack_exports__["default"] = (Semaphore);


/***/ }),

/***/ "dD9F":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isLength = __webpack_require__(/*! ./isLength */ "shjB"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "dsut":
/*!***************************************!*\
  !*** ./node_modules/jsonify/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(/*! ./lib/parse */ "RGXH");
exports.stringify = __webpack_require__(/*! ./lib/stringify */ "uPSP");


/***/ }),

/***/ "h9tj":
/*!**********************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/node_modules/pify/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, options, proxy, unwrapped) => function (...arguments_) {
	const P = options.promiseModule;

	return new P((resolve, reject) => {
		if (options.multiArgs) {
			arguments_.push((...result) => {
				if (options.errorFirst) {
					if (result[0]) {
						reject(result);
					} else {
						result.shift();
						resolve(result);
					}
				} else {
					resolve(result);
				}
			});
		} else if (options.errorFirst) {
			arguments_.push((error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		} else {
			arguments_.push(resolve);
		}

		const self = this === proxy ? unwrapped : this;
		Reflect.apply(fn, self, arguments_);
	});
};

const filterCache = new WeakMap();

module.exports = (input, options) => {
	options = {
		exclude: [/.+(?:Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise,
		...options
	};

	const objectType = typeof input;
	if (!(input !== null && (objectType === 'object' || objectType === 'function'))) {
		throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? 'null' : objectType}\``);
	}

	const filter = (target, key) => {
		let cached = filterCache.get(target);

		if (!cached) {
			cached = {};
			filterCache.set(target, cached);
		}

		if (key in cached) {
			return cached[key];
		}

		const match = pattern => (typeof pattern === 'string' || typeof key === 'symbol') ? key === pattern : pattern.test(key);
		const desc = Reflect.getOwnPropertyDescriptor(target, key);
		const writableOrConfigurableOwn = (desc === undefined || desc.writable || desc.configurable);
		const included = options.include ? options.include.some(match) : !options.exclude.some(match);
		const shouldFilter = included && writableOrConfigurableOwn;
		cached[key] = shouldFilter;
		return shouldFilter;
	};

	const cache = new WeakMap();

	const proxy = new Proxy(input, {
		apply(target, thisArg, args) {
			const cached = cache.get(target);

			if (cached) {
				return Reflect.apply(cached, thisArg, args);
			}

			const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
			cache.set(target, pified);
			return Reflect.apply(pified, thisArg, args);
		},

		get(target, key) {
			const property = target[key];

			// eslint-disable-next-line no-use-extend-native/no-use-extend-native
			if (!filter(target, key) || property === Function.prototype[key]) {
				return property;
			}

			const cached = cache.get(property);

			if (cached) {
				return cached;
			}

			if (typeof property === 'function') {
				const pified = processFn(property, options, proxy, target);
				cache.set(property, pified);
				return pified;
			}

			return property;
		}
	});

	return proxy;
};


/***/ }),

/***/ "hGab":
/*!******************************************************!*\
  !*** ./node_modules/async/internal/initialParams.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fn) {
    return function () /*...args, callback*/{
        var args = (0, _slice2.default)(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

var _slice = __webpack_require__(/*! ./slice */ "3qT5");

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "hyCD":
/*!********************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/tx-filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BaseFilter = __webpack_require__(/*! ./base-filter */ "zvTS")
const getBlocksForRange = __webpack_require__(/*! ./getBlocksForRange */ "0QlC")
const { incrementHexInt } = __webpack_require__(/*! ./hexUtils */ "UJ2e")

class TxFilter extends BaseFilter {

  constructor ({ provider }) {
    super()
    this.type = 'tx'
    this.provider = provider
  }

  async update ({ oldBlock }) {
    const toBlock = oldBlock
    const fromBlock = incrementHexInt(oldBlock)
    const blocks = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock })
    const blockTxHashes = []
    for (const block of blocks) {
      blockTxHashes.push(...block.transactions)
    }
    // add to results
    this.addResults(blockTxHashes)
  }

}

module.exports = TxFilter


/***/ }),

/***/ "j6BP":
/*!*****************************************************!*\
  !*** ./node_modules/async/internal/withoutIndex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ "k2x9":
/*!*******************************************!*\
  !*** ./node_modules/async/eachOfLimit.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachOfLimit;

var _eachOfLimit2 = __webpack_require__(/*! ./internal/eachOfLimit */ "NDoG");

var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);

var _wrapAsync = __webpack_require__(/*! ./internal/wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
}
module.exports = exports['default'];

/***/ }),

/***/ "kekF":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "l1gh":
/*!*****************************************!*\
  !*** ./node_modules/async/waterfall.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (tasks, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    if (!(0, _isArray2.default)(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = (0, _wrapAsync2.default)(tasks[taskIndex++]);
        args.push((0, _onlyOnce2.default)(next));
        task.apply(null, args);
    }

    function next(err /*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask((0, _slice2.default)(arguments, 1));
    }

    nextTask([]);
};

var _isArray = __webpack_require__(/*! lodash/isArray */ "Z0cm");

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = __webpack_require__(/*! lodash/noop */ "vN+2");

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(/*! ./internal/once */ "2sf1");

var _once2 = _interopRequireDefault(_once);

var _slice = __webpack_require__(/*! ./internal/slice */ "3qT5");

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = __webpack_require__(/*! ./internal/onlyOnce */ "rH6r");

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(/*! ./internal/wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */

/***/ }),

/***/ "lSCD":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "llSS":
/*!****************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./idRemapMiddleware */ "XW5J"), exports);
__exportStar(__webpack_require__(/*! ./createAsyncMiddleware */ "LPKZ"), exports);
__exportStar(__webpack_require__(/*! ./createScaffoldMiddleware */ "vhlx"), exports);
__exportStar(__webpack_require__(/*! ./getUniqueId */ "RhWC"), exports);
__exportStar(__webpack_require__(/*! ./JsonRpcEngine */ "X+co"), exports);
__exportStar(__webpack_require__(/*! ./mergeMiddleware */ "1Ti9"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9DO0FBQ3BDLDBEQUF3QztBQUN4Qyw2REFBMkM7QUFDM0MsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxvREFBa0MifQ==

/***/ }),

/***/ "mdPL":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "WFqU");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@angular-builders/custom-webpack/node_modules/webpack/buildin/module.js */ "0SIU")(module)))

/***/ }),

/***/ "nmnc":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "oEkW":
/*!****************************************************!*\
  !*** ./node_modules/async/internal/getIterator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

module.exports = exports['default'];

/***/ }),

/***/ "odnP":
/*!*************************************************!*\
  !*** ./node_modules/semaphore/lib/semaphore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {;(function(global) {

'use strict';

var nextTick = function (fn) { setTimeout(fn, 0); }
if (typeof process != 'undefined' && process && typeof process.nextTick == 'function') {
	// node.js and the like
	nextTick = process.nextTick;
}

function semaphore(capacity) {
	var semaphore = {
		capacity: capacity || 1,
		current: 0,
		queue: [],
		firstHere: false,

		take: function() {
			if (semaphore.firstHere === false) {
        			semaphore.current++;
        			semaphore.firstHere = true;
        			var isFirst = 1;
      			} else {
        			var isFirst = 0;
      			}
			var item = { n: 1 };

			if (typeof arguments[0] == 'function') {
				item.task = arguments[0];
			} else {
				item.n = arguments[0];
			}

			if (arguments.length >= 2)  {
				if (typeof arguments[1] == 'function') item.task = arguments[1];
				else item.n = arguments[1];
			}

			var task = item.task;
			item.task = function() { task(semaphore.leave); };

			if (semaphore.current + item.n - isFirst > semaphore.capacity) {
        			if (isFirst === 1) {
        				semaphore.current--;
        				semaphore.firstHere = false;
        			}
				return semaphore.queue.push(item);
			}

			semaphore.current += item.n - isFirst;
			item.task(semaphore.leave);
      			if (isFirst === 1) semaphore.firstHere = false;
		},

		leave: function(n) {
			n = n || 1;

			semaphore.current -= n;

			if (!semaphore.queue.length) {
				if (semaphore.current < 0) {
					throw new Error('leave called too many times.');
				}

				return;
			}

			var item = semaphore.queue[0];

			if (item.n + semaphore.current > semaphore.capacity) {
				return;
			}

			semaphore.queue.shift();
			semaphore.current += item.n;

			nextTick(item.task);
		},

		available: function(n) {
			n = n || 1;
			return(semaphore.current + n <= semaphore.capacity);
		}
	};

	return semaphore;
};

if (true) {
    // node export
    module.exports = semaphore;
} else {}
}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "8oxB")))

/***/ }),

/***/ "q6/2":
/*!***********************************************!*\
  !*** ./node_modules/async-mutex/es6/index.js ***!
  \***********************************************/
/*! exports provided: Mutex, Semaphore, withTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mutex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mutex */ "Yxjv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutex", function() { return _Mutex__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Semaphore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Semaphore */ "co6y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Semaphore", function() { return _Semaphore__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _withTimeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withTimeout */ "8sGB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return _withTimeout__WEBPACK_IMPORTED_MODULE_2__["withTimeout"]; });






/***/ }),

/***/ "rE/H":
/*!*****************************************************!*\
  !*** ./node_modules/json-stable-stringify/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(/*! jsonify */ "dsut");

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ "rH6r":
/*!*************************************************!*\
  !*** ./node_modules/async/internal/onlyOnce.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onlyOnce;
function onlyOnce(fn) {
    return function () {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ "rW7p":
/*!***********************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/block-filter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BaseFilter = __webpack_require__(/*! ./base-filter */ "zvTS")
const getBlocksForRange = __webpack_require__(/*! ./getBlocksForRange */ "0QlC")
const { incrementHexInt } = __webpack_require__(/*! ./hexUtils */ "UJ2e")

class BlockFilter extends BaseFilter {

  constructor ({ provider, params }) {
    super()
    this.type = 'block'
    this.provider = provider
  }

  async update ({ oldBlock, newBlock }) {
    const toBlock = newBlock
    const fromBlock = incrementHexInt(oldBlock)
    const blockBodies = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock })
    const blockHashes = blockBodies.map((block) => block.hash)
    this.addResults(blockHashes)
  }

}

module.exports = BlockFilter


/***/ }),

/***/ "sEf8":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "shjB":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "t7TP":
/*!******************************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/subscriptionManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SafeEventEmitter = __webpack_require__(/*! @metamask/safe-event-emitter */ "Fj00").default
const createScaffoldMiddleware = __webpack_require__(/*! eth-json-rpc-middleware/scaffold */ "VJGR")
const { createAsyncMiddleware } = __webpack_require__(/*! json-rpc-engine */ "llSS")
const createFilterMiddleware = __webpack_require__(/*! ./index.js */ "2nhq")
const { unsafeRandomBytes, incrementHexInt } = __webpack_require__(/*! ./hexUtils.js */ "UJ2e")
const getBlocksForRange = __webpack_require__(/*! ./getBlocksForRange.js */ "0QlC")

module.exports = createSubscriptionMiddleware


function createSubscriptionMiddleware({ blockTracker, provider }) {
  // state and utilities for handling subscriptions
  const subscriptions = {}
  const filterManager = createFilterMiddleware({ blockTracker, provider })

  // internal flag
  let isDestroyed = false

  // create subscriptionManager api object
  const events = new SafeEventEmitter()
  const middleware = createScaffoldMiddleware({
    eth_subscribe: createAsyncMiddleware(subscribe),
    eth_unsubscribe: createAsyncMiddleware(unsubscribe),
  })
  middleware.destroy = destroy
  return { events, middleware }

  async function subscribe(req, res) {

    if (isDestroyed) throw new Error(
      'SubscriptionManager - attempting to use after destroying'
    )

    const subscriptionType = req.params[0]
    // subId is 16 byte hex string
    const subId = unsafeRandomBytes(16)

    // create sub
    let sub
    switch (subscriptionType) {
      case 'newHeads':
        sub = createSubNewHeads({ subId })
        break
      case 'logs':
        const filterParams = req.params[1]
        const filter = await filterManager.newLogFilter(filterParams)
        sub = createSubFromFilter({ subId, filter })
        break
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`)

    }
    subscriptions[subId] = sub

    res.result = subId
    return

    function createSubNewHeads({ subId }) {
      const sub = {
        type: subscriptionType,
        destroy: async () => {
          blockTracker.removeListener('sync', sub.update)
        },
        update: async ({ oldBlock, newBlock }) => {
          // for newHeads
          const toBlock = newBlock
          const fromBlock = incrementHexInt(oldBlock)
          const rawBlocks = await getBlocksForRange({ provider, fromBlock, toBlock })
          const results = rawBlocks.map(normalizeBlock)
          results.forEach((value) => {
            _emitSubscriptionResult(subId, value)
          })
        }
      }
      // check for subscription updates on new block
      blockTracker.on('sync', sub.update)
      return sub
    }

    function createSubFromFilter({ subId, filter }){
      filter.on('update', result => _emitSubscriptionResult(subId, result))
      const sub = {
        type: subscriptionType,
        destroy: async () => {
          return await filterManager.uninstallFilter(filter.idHex)
        },
      }
      return sub
    }
  }

  async function unsubscribe(req, res) {

    if (isDestroyed) throw new Error(
      'SubscriptionManager - attempting to use after destroying'
    )

    const id = req.params[0]
    const subscription = subscriptions[id]
    // if missing, return "false" to indicate it was not removed
    if (!subscription) {
      res.result = false
      return
    }
    // cleanup subscription
    delete subscriptions[id]
    await subscription.destroy()
    res.result = true
  }

  function _emitSubscriptionResult(filterIdHex, value) {
    events.emit('notification', {
      jsonrpc: '2.0',
      method: 'eth_subscription',
      params: {
        subscription: filterIdHex,
        result: value,
      },
    })
  }

  function destroy () {
    events.removeAllListeners()
    for (const id in subscriptions) {
      subscriptions[id].destroy()
      delete subscriptions[id]
    }
    isDestroyed = true
  }
}

function normalizeBlock(block) {
  return {
    hash: block.hash,
    parentHash: block.parentHash,
    sha3Uncles: block.sha3Uncles,
    miner: block.miner,
    stateRoot: block.stateRoot,
    transactionsRoot: block.transactionsRoot,
    receiptsRoot: block.receiptsRoot,
    logsBloom: block.logsBloom,
    difficulty: block.difficulty,
    number: block.number,
    gasLimit: block.gasLimit,
    gasUsed: block.gasUsed,
    nonce: block.nonce,
    mixHash: block.mixHash,
    timestamp: block.timestamp,
    extraData: block.extraData,
  }
}


/***/ }),

/***/ "tMv7":
/*!*****************************************!*\
  !*** ./node_modules/async/eachLimit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = __webpack_require__(/*! ./internal/eachOfLimit */ "NDoG");

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = __webpack_require__(/*! ./internal/withoutIndex */ "j6BP");

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

var _wrapAsync = __webpack_require__(/*! ./internal/wrapAsync */ "aR5N");

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
}
module.exports = exports['default'];

/***/ }),

/***/ "uPSP":
/*!***********************************************!*\
  !*** ./node_modules/jsonify/lib/stringify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ "vN+2":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "vhlx":
/*!***********************************************************************!*\
  !*** ./node_modules/json-rpc-engine/dist/createScaffoldMiddleware.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware(handlers) {
    return (req, res, next, end) => {
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) {
            return next();
        }
        // if handler is fn, call as middleware
        if (typeof handler === 'function') {
            return handler(req, res, next, end);
        }
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
}
exports.createScaffoldMiddleware = createScaffoldMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NhZmZvbGRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVNjYWZmb2xkTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQix3QkFBd0IsQ0FBQyxRQUV4QztJQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM3QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsZ0RBQWdEO1FBQy9DLEdBQStCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNsRCxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCRCw0REFpQkMifQ==

/***/ }),

/***/ "wJg7":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "y2lW":
/*!**************************************************!*\
  !*** ./node_modules/safe-event-emitter/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const util = __webpack_require__(/*! util */ "MCLT")
const EventEmitter = __webpack_require__(/*! events/ */ "+qE3")

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
}

module.exports = SafeEventEmitter


function SafeEventEmitter() {
  EventEmitter.call(this)
}

util.inherits(SafeEventEmitter, EventEmitter)

SafeEventEmitter.prototype.emit = function (type) {
  // copied from https://github.com/Gozala/events/blob/master/events.js
  // modified lines are commented with "edited:"
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    // edited: using safeApply
    safeApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      // edited: using safeApply
      safeApply(listeners[i], this, args);
  }

  return true;
}

function safeApply(handler, context, args) {
  try {
    ReflectApply(handler, context, args)
  } catch (err) {
    // throw error after timeout so as not to interupt the stack
    setTimeout(() => {
      throw err
    })
  }
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}


/***/ }),

/***/ "zvTS":
/*!**********************************************************!*\
  !*** ./node_modules/eth-json-rpc-filters/base-filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SafeEventEmitter = __webpack_require__(/*! @metamask/safe-event-emitter */ "Fj00").default

class BaseFilter extends SafeEventEmitter {

  constructor () {
    super()
    this.updates = []
  }

  async initialize () {}

  async update () {
    throw new Error('BaseFilter - no update method specified')
  }

  addResults (newResults) {
    this.updates = this.updates.concat(newResults)
    newResults.forEach(result => this.emit('update', result))
  }

  addInitialResults (newResults) {}

  getChangesAndClear () {
    const updates = this.updates
    this.updates = []
    return updates
  }
  
}

module.exports = BaseFilter


/***/ })

}]);
//# sourceMappingURL=default~providerEngine-771e7e5b-js~walletconnect-web3-provider.js.map