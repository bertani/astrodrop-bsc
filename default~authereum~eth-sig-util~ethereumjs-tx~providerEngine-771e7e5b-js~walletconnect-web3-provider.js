(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authereum~eth-sig-util~ethereumjs-tx~providerEngine-771e7e5b-js~walletconnect-web3-provider"],{

/***/ "+yoj":
/*!*********************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/account.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.importPublic = exports.privateToPublic = exports.privateToAddress = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.isPrecompiled = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isZeroAddress = exports.isValidAddress = exports.zeroAddress = void 0;
var assert = __webpack_require__(/*! assert */ "9lTW");
var ethjsUtil = __webpack_require__(/*! ethjs-util */ "mhLr");
var secp256k1 = __webpack_require__(/*! ./secp256k1v3-adapter */ "uq5U");
var BN = __webpack_require__(/*! bn.js */ "vIY1");
var bytes_1 = __webpack_require__(/*! ./bytes */ "OLPe");
var hash_1 = __webpack_require__(/*! ./hash */ "dI7W");
/**
 * Returns a zero address.
 */
exports.zeroAddress = function () {
    var addressLength = 20;
    var addr = bytes_1.zeros(addressLength);
    return bytes_1.bufferToHex(addr);
};
/**
 * Checks if the address is a valid. Accepts checksummed addresses too.
 */
exports.isValidAddress = function (address) {
    return /^0x[0-9a-fA-F]{40}$/.test(address);
};
/**
 * Checks if a given address is a zero address.
 */
exports.isZeroAddress = function (address) {
    var zeroAddr = exports.zeroAddress();
    return zeroAddr === bytes_1.addHexPrefix(address);
};
/**
 * Returns a checksummed address.
 *
 * If a eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
 * has the effect of checksummed addresses for one chain having invalid checksums for others.
 * For more details, consult EIP-1191.
 *
 * WARNING: Checksums with and without the chainId will differ. As of 2019-06-26, the most commonly
 * used variation in Ethereum was without the chainId. This may change in the future.
 */
exports.toChecksumAddress = function (address, eip1191ChainId) {
    address = ethjsUtil.stripHexPrefix(address).toLowerCase();
    var prefix = eip1191ChainId !== undefined ? eip1191ChainId.toString() + '0x' : '';
    var hash = hash_1.keccak(prefix + address).toString('hex');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
        }
        else {
            ret += address[i];
        }
    }
    return ret;
};
/**
 * Checks if the address is a valid checksummed address.
 *
 * See toChecksumAddress' documentation for details about the eip1191ChainId parameter.
 */
exports.isValidChecksumAddress = function (address, eip1191ChainId) {
    return exports.isValidAddress(address) && exports.toChecksumAddress(address, eip1191ChainId) === address;
};
/**
 * Generates an address of a newly created contract.
 * @param from The address which is creating this new address
 * @param nonce The nonce of the from account
 */
exports.generateAddress = function (from, nonce) {
    from = bytes_1.toBuffer(from);
    var nonceBN = new BN(nonce);
    if (nonceBN.isZero()) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return hash_1.rlphash([from, null]).slice(-20);
    }
    // Only take the lower 160bits of the hash
    return hash_1.rlphash([from, Buffer.from(nonceBN.toArray())]).slice(-20);
};
/**
 * Generates an address for a contract created using CREATE2.
 * @param from The address which is creating this new address
 * @param salt A salt
 * @param initCode The init code of the contract being created
 */
exports.generateAddress2 = function (from, salt, initCode) {
    var fromBuf = bytes_1.toBuffer(from);
    var saltBuf = bytes_1.toBuffer(salt);
    var initCodeBuf = bytes_1.toBuffer(initCode);
    assert(fromBuf.length === 20);
    assert(saltBuf.length === 32);
    var address = hash_1.keccak256(Buffer.concat([Buffer.from('ff', 'hex'), fromBuf, saltBuf, hash_1.keccak256(initCodeBuf)]));
    return address.slice(-20);
};
/**
 * Returns true if the supplied address belongs to a precompiled account (Byzantium).
 */
exports.isPrecompiled = function (address) {
    var a = bytes_1.unpad(address);
    return a.length === 1 && a[0] >= 1 && a[0] <= 8;
};
/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
exports.isValidPrivate = function (privateKey) {
    return secp256k1.privateKeyVerify(privateKey);
};
/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
exports.isValidPublic = function (publicKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
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
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
exports.pubToAddress = function (pubKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
    pubKey = bytes_1.toBuffer(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = secp256k1.publicKeyConvert(pubKey, false).slice(1);
    }
    assert(pubKey.length === 64);
    // Only take the lower 160bits of the hash
    return hash_1.keccak(pubKey).slice(-20);
};
exports.publicToAddress = exports.pubToAddress;
/**
 * Returns the ethereum address of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
exports.privateToAddress = function (privateKey) {
    return exports.publicToAddress(exports.privateToPublic(privateKey));
};
/**
 * Returns the ethereum public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
exports.privateToPublic = function (privateKey) {
    privateKey = bytes_1.toBuffer(privateKey);
    // skip the type flag and use the X, Y points
    return secp256k1.publicKeyCreate(privateKey, false).slice(1);
};
/**
 * Converts a public key to the Ethereum format.
 */
exports.importPublic = function (publicKey) {
    publicKey = bytes_1.toBuffer(publicKey);
    if (publicKey.length !== 64) {
        publicKey = secp256k1.publicKeyConvert(publicKey, false).slice(1);
    }
    return publicKey;
};
//# sourceMappingURL=account.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "CJ0B":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/secp256k1v3-lib/der.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// This file is imported from secp256k1 v3
// https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
var EC_PRIVKEY_EXPORT_DER_COMPRESSED = Buffer.from([
    // begin
    0x30,
    0x81,
    0xd3,
    0x02,
    0x01,
    0x01,
    0x04,
    0x20,
    // private key
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    // middle
    0xa0,
    0x81,
    0x85,
    0x30,
    0x81,
    0x82,
    0x02,
    0x01,
    0x01,
    0x30,
    0x2c,
    0x06,
    0x07,
    0x2a,
    0x86,
    0x48,
    0xce,
    0x3d,
    0x01,
    0x01,
    0x02,
    0x21,
    0x00,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xfe,
    0xff,
    0xff,
    0xfc,
    0x2f,
    0x30,
    0x06,
    0x04,
    0x01,
    0x00,
    0x04,
    0x01,
    0x07,
    0x04,
    0x21,
    0x02,
    0x79,
    0xbe,
    0x66,
    0x7e,
    0xf9,
    0xdc,
    0xbb,
    0xac,
    0x55,
    0xa0,
    0x62,
    0x95,
    0xce,
    0x87,
    0x0b,
    0x07,
    0x02,
    0x9b,
    0xfc,
    0xdb,
    0x2d,
    0xce,
    0x28,
    0xd9,
    0x59,
    0xf2,
    0x81,
    0x5b,
    0x16,
    0xf8,
    0x17,
    0x98,
    0x02,
    0x21,
    0x00,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xfe,
    0xba,
    0xae,
    0xdc,
    0xe6,
    0xaf,
    0x48,
    0xa0,
    0x3b,
    0xbf,
    0xd2,
    0x5e,
    0x8c,
    0xd0,
    0x36,
    0x41,
    0x41,
    0x02,
    0x01,
    0x01,
    0xa1,
    0x24,
    0x03,
    0x22,
    0x00,
    // public key
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
]);
var EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED = Buffer.from([
    // begin
    0x30,
    0x82,
    0x01,
    0x13,
    0x02,
    0x01,
    0x01,
    0x04,
    0x20,
    // private key
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    // middle
    0xa0,
    0x81,
    0xa5,
    0x30,
    0x81,
    0xa2,
    0x02,
    0x01,
    0x01,
    0x30,
    0x2c,
    0x06,
    0x07,
    0x2a,
    0x86,
    0x48,
    0xce,
    0x3d,
    0x01,
    0x01,
    0x02,
    0x21,
    0x00,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xfe,
    0xff,
    0xff,
    0xfc,
    0x2f,
    0x30,
    0x06,
    0x04,
    0x01,
    0x00,
    0x04,
    0x01,
    0x07,
    0x04,
    0x41,
    0x04,
    0x79,
    0xbe,
    0x66,
    0x7e,
    0xf9,
    0xdc,
    0xbb,
    0xac,
    0x55,
    0xa0,
    0x62,
    0x95,
    0xce,
    0x87,
    0x0b,
    0x07,
    0x02,
    0x9b,
    0xfc,
    0xdb,
    0x2d,
    0xce,
    0x28,
    0xd9,
    0x59,
    0xf2,
    0x81,
    0x5b,
    0x16,
    0xf8,
    0x17,
    0x98,
    0x48,
    0x3a,
    0xda,
    0x77,
    0x26,
    0xa3,
    0xc4,
    0x65,
    0x5d,
    0xa4,
    0xfb,
    0xfc,
    0x0e,
    0x11,
    0x08,
    0xa8,
    0xfd,
    0x17,
    0xb4,
    0x48,
    0xa6,
    0x85,
    0x54,
    0x19,
    0x9c,
    0x47,
    0xd0,
    0x8f,
    0xfb,
    0x10,
    0xd4,
    0xb8,
    0x02,
    0x21,
    0x00,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xff,
    0xfe,
    0xba,
    0xae,
    0xdc,
    0xe6,
    0xaf,
    0x48,
    0xa0,
    0x3b,
    0xbf,
    0xd2,
    0x5e,
    0x8c,
    0xd0,
    0x36,
    0x41,
    0x41,
    0x02,
    0x01,
    0x01,
    0xa1,
    0x44,
    0x03,
    0x42,
    0x00,
    // public key
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
]);
exports.privateKeyExport = function (privateKey, publicKey, compressed) {
    if (compressed === void 0) { compressed = true; }
    var result = Buffer.from(compressed ? EC_PRIVKEY_EXPORT_DER_COMPRESSED : EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED);
    privateKey.copy(result, compressed ? 8 : 9);
    publicKey.copy(result, compressed ? 181 : 214);
    return result;
};
exports.privateKeyImport = function (privateKey) {
    var length = privateKey.length;
    // sequence header
    var index = 0;
    if (length < index + 1 || privateKey[index] !== 0x30)
        return null;
    index += 1;
    // sequence length constructor
    if (length < index + 1 || !(privateKey[index] & 0x80))
        return null;
    var lenb = privateKey[index] & 0x7f;
    index += 1;
    if (lenb < 1 || lenb > 2)
        return null;
    if (length < index + lenb)
        return null;
    // sequence length
    var len = privateKey[index + lenb - 1] | (lenb > 1 ? privateKey[index + lenb - 2] << 8 : 0);
    index += lenb;
    if (length < index + len)
        return null;
    // sequence element 0: version number (=1)
    if (length < index + 3 ||
        privateKey[index] !== 0x02 ||
        privateKey[index + 1] !== 0x01 ||
        privateKey[index + 2] !== 0x01) {
        return null;
    }
    index += 3;
    // sequence element 1: octet string, up to 32 bytes
    if (length < index + 2 ||
        privateKey[index] !== 0x04 ||
        privateKey[index + 1] > 0x20 ||
        length < index + 2 + privateKey[index + 1]) {
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
        for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1)
            ;
        for (rlen = 0; lenbyte > 0; index += 1, lenbyte -= 1)
            rlen = (rlen << 8) + signature[index];
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
        for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1)
            ;
        for (slen = 0; lenbyte > 0; index += 1, lenbyte -= 1)
            slen = (slen << 8) + signature[index];
    }
    if (slen > length - index) {
        return null;
    }
    var sindex = index;
    index += slen;
    // ignore leading zeros in r
    for (; rlen > 0 && signature[rindex] === 0x00; rlen -= 1, rindex += 1)
        ;
    // copy r value
    if (rlen > 32) {
        return null;
    }
    var rvalue = signature.slice(rindex, rindex + rlen);
    rvalue.copy(r, 32 - rvalue.length);
    // ignore leading zeros in s
    for (; slen > 0 && signature[sindex] === 0x00; slen -= 1, sindex += 1)
        ;
    // copy s value
    if (slen > 32) {
        return null;
    }
    var svalue = signature.slice(sindex, sindex + slen);
    svalue.copy(s, 32 - svalue.length);
    return { r: r, s: s };
};
//# sourceMappingURL=der.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "OLPe":
/*!*******************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/bytes.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.baToJSON = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToHex = exports.bufferToInt = exports.toBuffer = exports.stripZeros = exports.unpad = exports.setLengthRight = exports.setLength = exports.setLengthLeft = exports.zeros = void 0;
var ethjsUtil = __webpack_require__(/*! ethjs-util */ "mhLr");
var BN = __webpack_require__(/*! bn.js */ "vIY1");
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
exports.zeros = function (bytes) {
    return Buffer.allocUnsafe(bytes).fill(0);
};
/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer|Array)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Buffer|Array)
 */
exports.setLengthLeft = function (msg, length, right) {
    if (right === void 0) { right = false; }
    var buf = exports.zeros(length);
    msg = exports.toBuffer(msg);
    if (right) {
        if (msg.length < length) {
            msg.copy(buf);
            return buf;
        }
        return msg.slice(0, length);
    }
    else {
        if (msg.length < length) {
            msg.copy(buf, length - msg.length);
            return buf;
        }
        return msg.slice(-length);
    }
};
exports.setLength = exports.setLengthLeft;
/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer|Array)
 * @param length the number of bytes the output should be
 * @return (Buffer|Array)
 */
exports.setLengthRight = function (msg, length) {
    return exports.setLength(msg, length, true);
};
/**
 * Trims leading zeros from a `Buffer` or an `Array`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */
exports.unpad = function (a) {
    a = ethjsUtil.stripHexPrefix(a);
    var first = a[0];
    while (a.length > 0 && first.toString() === '0') {
        a = a.slice(1);
        first = a[0];
    }
    return a;
};
exports.stripZeros = exports.unpad;
/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param v the value
 */
exports.toBuffer = function (v) {
    if (!Buffer.isBuffer(v)) {
        if (Array.isArray(v)) {
            v = Buffer.from(v);
        }
        else if (typeof v === 'string') {
            if (ethjsUtil.isHexString(v)) {
                v = Buffer.from(ethjsUtil.padToEven(ethjsUtil.stripHexPrefix(v)), 'hex');
            }
            else {
                throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + v);
            }
        }
        else if (typeof v === 'number') {
            v = ethjsUtil.intToBuffer(v);
        }
        else if (v === null || v === undefined) {
            v = Buffer.allocUnsafe(0);
        }
        else if (BN.isBN(v)) {
            v = v.toArrayLike(Buffer);
        }
        else if (v.toArray) {
            // converts a BN to a Buffer
            v = Buffer.from(v.toArray());
        }
        else {
            throw new Error('invalid type');
        }
    }
    return v;
};
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
exports.bufferToInt = function (buf) {
    return new BN(exports.toBuffer(buf)).toNumber();
};
/**
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
exports.bufferToHex = function (buf) {
    buf = exports.toBuffer(buf);
    return '0x' + buf.toString('hex');
};
/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
exports.fromSigned = function (num) {
    return new BN(num).fromTwos(256);
};
/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
exports.toUnsigned = function (num) {
    return Buffer.from(num.toTwos(256).toArray());
};
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
exports.addHexPrefix = function (str) {
    if (typeof str !== 'string') {
        return str;
    }
    return ethjsUtil.isHexPrefixed(str) ? str : '0x' + str;
};
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
exports.baToJSON = function (ba) {
    if (Buffer.isBuffer(ba)) {
        return "0x" + ba.toString('hex');
    }
    else if (ba instanceof Array) {
        var array = [];
        for (var i = 0; i < ba.length; i++) {
            array.push(exports.baToJSON(ba[i]));
        }
        return array;
    }
};
//# sourceMappingURL=bytes.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "PdBc":
/*!********************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineProperties = void 0;
var assert = __webpack_require__(/*! assert */ "9lTW");
var ethjsUtil = __webpack_require__(/*! ethjs-util */ "mhLr");
var rlp = __webpack_require__(/*! rlp */ "o8pB");
var bytes_1 = __webpack_require__(/*! ./bytes */ "OLPe");
/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param self the `Object` to define properties on
 * @param fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param data data to be validated against the definitions
 * @deprecated
 */
exports.defineProperties = function (self, fields, data) {
    self.raw = [];
    self._fields = [];
    // attach the `toJSON`
    self.toJSON = function (label) {
        if (label === void 0) { label = false; }
        if (label) {
            var obj_1 = {};
            self._fields.forEach(function (field) {
                obj_1[field] = "0x" + self[field].toString('hex');
            });
            return obj_1;
        }
        return bytes_1.baToJSON(self.raw);
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
            v = bytes_1.toBuffer(v);
            if (v.toString('hex') === '00' && !field.allowZero) {
                v = Buffer.allocUnsafe(0);
            }
            if (field.allowLess && field.length) {
                v = bytes_1.stripZeros(v);
                assert(field.length >= v.length, "The field " + field.name + " must not have more " + field.length + " bytes");
            }
            else if (!(field.allowZero && v.length === 0) && field.length) {
                assert(field.length === v.length, "The field " + field.name + " must have byte length of " + field.length);
            }
            self.raw[i] = v;
        }
        Object.defineProperty(self, field.name, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter,
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
                get: getter,
            });
        }
    });
    // if the constuctor is passed data
    if (data) {
        if (typeof data === 'string') {
            data = Buffer.from(ethjsUtil.stripHexPrefix(data), 'hex');
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
                self[self._fields[i]] = bytes_1.toBuffer(d);
            });
        }
        else if (typeof data === 'object') {
            var keys_1 = Object.keys(data);
            fields.forEach(function (field) {
                if (keys_1.indexOf(field.name) !== -1)
                    self[field.name] = data[field.name];
                if (keys_1.indexOf(field.alias) !== -1)
                    self[field.alias] = data[field.alias];
            });
        }
        else {
            throw new Error('invalid data');
        }
    }
};
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "W4v+":
/*!***********************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/signature.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;
var secp256k1 = __webpack_require__(/*! ./secp256k1v3-adapter */ "uq5U");
var BN = __webpack_require__(/*! bn.js */ "vIY1");
var bytes_1 = __webpack_require__(/*! ./bytes */ "OLPe");
var hash_1 = __webpack_require__(/*! ./hash */ "dI7W");
/**
 * Returns the ECDSA signature of a message hash.
 */
exports.ecsign = function (msgHash, privateKey, chainId) {
    var sig = secp256k1.sign(msgHash, privateKey);
    var recovery = sig.recovery;
    var ret = {
        r: sig.signature.slice(0, 32),
        s: sig.signature.slice(32, 64),
        v: chainId ? recovery + (chainId * 2 + 35) : recovery + 27,
    };
    return ret;
};
/**
 * ECDSA public key recovery from signature.
 * @returns Recovered public key
 */
exports.ecrecover = function (msgHash, v, r, s, chainId) {
    var signature = Buffer.concat([bytes_1.setLength(r, 32), bytes_1.setLength(s, 32)], 64);
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    var senderPubKey = secp256k1.recover(msgHash, signature, recovery);
    return secp256k1.publicKeyConvert(senderPubKey, false).slice(1);
};
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * @returns Signature
 */
exports.toRpcSig = function (v, r, s, chainId) {
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return bytes_1.bufferToHex(Buffer.concat([bytes_1.setLengthLeft(r, 32), bytes_1.setLengthLeft(s, 32), bytes_1.toBuffer(v)]));
};
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 */
exports.fromRpcSig = function (sig) {
    var buf = bytes_1.toBuffer(sig);
    // NOTE: with potential introduction of chainId this might need to be updated
    if (buf.length !== 65) {
        throw new Error('Invalid signature length');
    }
    var v = buf[64];
    // support both versions of `eth_sign` responses
    if (v < 27) {
        v += 27;
    }
    return {
        v: v,
        r: buf.slice(0, 32),
        s: buf.slice(32, 64),
    };
};
/**
 * Validate a ECDSA signature.
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */
exports.isValidSignature = function (v, r, s, homesteadOrLater, chainId) {
    if (homesteadOrLater === void 0) { homesteadOrLater = true; }
    var SECP256K1_N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
    var SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    var rBN = new BN(r);
    var sBN = new BN(s);
    if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
        return false;
    }
    if (homesteadOrLater && sBN.cmp(SECP256K1_N_DIV_2) === 1) {
        return false;
    }
    return true;
};
/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 */
exports.hashPersonalMessage = function (message) {
    var prefix = Buffer.from("\u0019Ethereum Signed Message:\n" + message.length.toString(), 'utf-8');
    return hash_1.keccak(Buffer.concat([prefix, message]));
};
function calculateSigRecovery(v, chainId) {
    return chainId ? v - (2 * chainId + 35) : v - 27;
}
function isValidSigRecovery(recovery) {
    return recovery === 0 || recovery === 1;
}
//# sourceMappingURL=signature.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "YGO9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/secp256k1v3-lib/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// This file is imported from secp256k1 v3
// https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
var BN = __webpack_require__(/*! bn.js */ "vIY1");
var EC = __webpack_require__(/*! elliptic */ "MzeL").ec;
var ec = new EC('secp256k1');
var ecparams = ec.curve;
exports.privateKeyExport = function (privateKey, compressed) {
    if (compressed === void 0) { compressed = true; }
    var d = new BN(privateKey);
    if (d.ucmp(ecparams.n) >= 0) {
        throw new Error("couldn't export to DER format");
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
    if (compressed === void 0) { compressed = true; }
    var point = ec.keyFromPublic(publicKey);
    var scalar = new BN(privateKey);
    if (scalar.ucmp(ecparams.n) >= 0 || scalar.isZero()) {
        throw new Error('scalar was invalid (zero or overflow)');
    }
    var shared = point.pub.mul(scalar);
    return toPublicKey(shared.getX(), shared.getY(), compressed);
};
var toPublicKey = function (x, y, compressed) {
    var publicKey;
    if (compressed) {
        publicKey = Buffer.alloc(33);
        publicKey[0] = y.isOdd() ? 0x03 : 0x02;
        x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
    }
    else {
        publicKey = Buffer.alloc(65);
        publicKey[0] = 0x04;
        x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
        y.toArrayLike(Buffer, 'be', 32).copy(publicKey, 33);
    }
    return publicKey;
};
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "Zmks":
/*!***********************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/constants.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.MAX_INTEGER = void 0;
var BN = __webpack_require__(/*! bn.js */ "vIY1");
/**
 * The max integer that this VM can handle
 */
exports.MAX_INTEGER = new BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
/**
 * 2^256
 */
exports.TWO_POW256 = new BN('10000000000000000000000000000000000000000000000000000000000000000', 16);
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex');
//# sourceMappingURL=constants.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "dI7W":
/*!******************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/hash.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.rlphash = exports.ripemd160 = exports.sha256 = exports.keccak256 = exports.keccak = void 0;
var _a = __webpack_require__(/*! ethereum-cryptography/keccak */ "wzGL"), keccak224 = _a.keccak224, keccak384 = _a.keccak384, k256 = _a.keccak256, keccak512 = _a.keccak512;
var createHash = __webpack_require__(/*! create-hash */ "mObS");
var ethjsUtil = __webpack_require__(/*! ethjs-util */ "mhLr");
var rlp = __webpack_require__(/*! rlp */ "o8pB");
var bytes_1 = __webpack_require__(/*! ./bytes */ "OLPe");
/**
 * Creates Keccak hash of the input
 * @param a The input data (Buffer|Array|String|Number) If the string is a 0x-prefixed hex value
 * it's interpreted as hexadecimal, otherwise as utf8.
 * @param bits The Keccak width
 */
exports.keccak = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    if (typeof a === 'string' && !ethjsUtil.isHexString(a)) {
        a = Buffer.from(a, 'utf8');
    }
    else {
        a = bytes_1.toBuffer(a);
    }
    if (!bits)
        bits = 256;
    switch (bits) {
        case 224: {
            return keccak224(a);
        }
        case 256: {
            return k256(a);
        }
        case 384: {
            return keccak384(a);
        }
        case 512: {
            return keccak512(a);
        }
        default: {
            throw new Error("Invald algorithm: keccak" + bits);
        }
    }
};
/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer|Array|String|Number)
 */
exports.keccak256 = function (a) {
    return exports.keccak(a);
};
/**
 * Creates SHA256 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 */
exports.sha256 = function (a) {
    a = bytes_1.toBuffer(a);
    return createHash('sha256')
        .update(a)
        .digest();
};
/**
 * Creates RIPEMD160 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 * @param padded Whether it should be padded to 256 bits or not
 */
exports.ripemd160 = function (a, padded) {
    a = bytes_1.toBuffer(a);
    var hash = createHash('rmd160')
        .update(a)
        .digest();
    if (padded === true) {
        return bytes_1.setLength(hash, 32);
    }
    else {
        return hash;
    }
};
/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
exports.rlphash = function (a) {
    return exports.keccak(rlp.encode(a));
};
//# sourceMappingURL=hash.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "kX2E":
/*!*******************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/index.js ***!
  \*******************************************************************************/
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
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secp256k1 = exports.rlp = exports.BN = void 0;
var secp256k1 = __webpack_require__(/*! ./secp256k1v3-adapter */ "uq5U");
exports.secp256k1 = secp256k1;
var ethjsUtil = __webpack_require__(/*! ethjs-util */ "mhLr");
var BN = __webpack_require__(/*! bn.js */ "vIY1");
exports.BN = BN;
var rlp = __webpack_require__(/*! rlp */ "o8pB");
exports.rlp = rlp;
Object.assign(exports, ethjsUtil);
/**
 * Constants
 */
__exportStar(__webpack_require__(/*! ./constants */ "Zmks"), exports);
/**
 * Public-key cryptography (secp256k1) and addresses
 */
__exportStar(__webpack_require__(/*! ./account */ "+yoj"), exports);
/**
 * Hash functions
 */
__exportStar(__webpack_require__(/*! ./hash */ "dI7W"), exports);
/**
 * ECDSA signature
 */
__exportStar(__webpack_require__(/*! ./signature */ "W4v+"), exports);
/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
__exportStar(__webpack_require__(/*! ./bytes */ "OLPe"), exports);
/**
 * Function for definining properties on an object
 */
__exportStar(__webpack_require__(/*! ./object */ "PdBc"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "uq5U":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ethereumjs-tx/node_modules/ethereumjs-util/dist/secp256k1v3-adapter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecdhUnsafe = exports.ecdh = exports.recover = exports.verify = exports.sign = exports.signatureImportLax = exports.signatureImport = exports.signatureExport = exports.signatureNormalize = exports.publicKeyCombine = exports.publicKeyTweakMul = exports.publicKeyTweakAdd = exports.publicKeyVerify = exports.publicKeyConvert = exports.publicKeyCreate = exports.privateKeyTweakMul = exports.privateKeyTweakAdd = exports.privateKeyModInverse = exports.privateKeyNegate = exports.privateKeyImport = exports.privateKeyExport = exports.privateKeyVerify = void 0;
var secp256k1 = __webpack_require__(/*! ethereum-cryptography/secp256k1 */ "IhPl");
var secp256k1v3 = __webpack_require__(/*! ./secp256k1v3-lib/index */ "YGO9");
var der = __webpack_require__(/*! ./secp256k1v3-lib/der */ "CJ0B");
/**
 * Verify an ECDSA privateKey
 * @method privateKeyVerify
 * @param {Buffer} privateKey
 * @return {boolean}
 */
exports.privateKeyVerify = function (privateKey) {
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
exports.privateKeyExport = function (privateKey, compressed) {
    // secp256k1 v4 version throws when privateKey length is not 32
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
exports.privateKeyImport = function (privateKey) {
    // privateKeyImport method is not part of secp256k1 v4 package
    // this implementation is based on v3
    privateKey = der.privateKeyImport(privateKey);
    if (privateKey !== null && privateKey.length === 32 && exports.privateKeyVerify(privateKey)) {
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
exports.privateKeyNegate = function (privateKey) {
    return Buffer.from(secp256k1.privateKeyNegate(Uint8Array.from(privateKey)));
};
/**
 * Compute the inverse of a privateKey (modulo the order of the curve's base point).
 * @method privateKeyModInverse
 * @param {Buffer} privateKey
 * @return {Buffer}
 */
exports.privateKeyModInverse = function (privateKey) {
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
exports.privateKeyTweakAdd = function (privateKey, tweak) {
    return Buffer.from(secp256k1.privateKeyTweakAdd(Uint8Array.from(privateKey), tweak));
};
/**
 * Tweak a privateKey by multiplying it by a tweak.
 * @method privateKeyTweakMul
 * @param {Buffer} privateKey
 * @param {Buffer} tweak
 * @return {Buffer}
 */
exports.privateKeyTweakMul = function (privateKey, tweak) {
    return Buffer.from(secp256k1.privateKeyTweakMul(Uint8Array.from(privateKey), Uint8Array.from(tweak)));
};
/**
 * Compute the public key for a privateKey.
 * @method publicKeyCreate
 * @param {Buffer} privateKey
 * @param {boolean} compressed
 * @return {Buffer}
 */
exports.publicKeyCreate = function (privateKey, compressed) {
    return Buffer.from(secp256k1.publicKeyCreate(Uint8Array.from(privateKey), compressed));
};
/**
 * Convert a publicKey to compressed or uncompressed form.
 * @method publicKeyConvert
 * @param {Buffer} publicKey
 * @param {boolean} compressed
 * @return {Buffer}
 */
exports.publicKeyConvert = function (publicKey, compressed) {
    return Buffer.from(secp256k1.publicKeyConvert(Uint8Array.from(publicKey), compressed));
};
/**
 * Verify an ECDSA publicKey.
 * @method publicKeyVerify
 * @param {Buffer} publicKey
 * @return {boolean}
 */
exports.publicKeyVerify = function (publicKey) {
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
exports.publicKeyTweakAdd = function (publicKey, tweak, compressed) {
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
exports.publicKeyTweakMul = function (publicKey, tweak, compressed) {
    return Buffer.from(secp256k1.publicKeyTweakMul(Uint8Array.from(publicKey), Uint8Array.from(tweak), compressed));
};
/**
 * Add a given publicKeys together.
 * @method publicKeyCombine
 * @param {Array<Buffer>} publicKeys
 * @param {boolean} compressed
 * @return {Buffer}
 */
exports.publicKeyCombine = function (publicKeys, compressed) {
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
exports.signatureNormalize = function (signature) {
    return Buffer.from(secp256k1.signatureNormalize(Uint8Array.from(signature)));
};
/**
 * Serialize an ECDSA signature in DER format.
 * @method signatureExport
 * @param {Buffer} signature
 * @return {Buffer}
 */
exports.signatureExport = function (signature) {
    return Buffer.from(secp256k1.signatureExport(Uint8Array.from(signature)));
};
/**
 * Parse a DER ECDSA signature (follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
 * @method signatureImport
 * @param {Buffer} signature
 * @return {Buffer}
 */
exports.signatureImport = function (signature) {
    return Buffer.from(secp256k1.signatureImport(Uint8Array.from(signature)));
};
/**
 * Parse a DER ECDSA signature (not follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
 * @method signatureImportLax
 * @param {Buffer} signature
 * @return {Buffer}
 */
exports.signatureImportLax = function (signature) {
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
exports.sign = function (message, privateKey, options) {
    if (options === null) {
        throw new TypeError('options should be an Object');
    }
    var signOptions = undefined;
    if (options) {
        signOptions = {};
        if (options.data === null) {
            // validate option.data length
            throw new TypeError('options.data should be a Buffer');
        }
        if (options.data) {
            if (options.data.length != 32) {
                throw new RangeError('options.data length is invalid');
            }
            signOptions.data = new Uint8Array(options.data);
        }
        if (options.noncefn === null) {
            throw new TypeError('options.noncefn should be a Function');
        }
        if (options.noncefn) {
            // convert option.noncefn function signature
            signOptions.noncefn = function (message, privateKey, algo, data, attempt) {
                var bufferAlgo = algo != null ? Buffer.from(algo) : null;
                var bufferData = data != null ? Buffer.from(data) : null;
                var buffer = Buffer.from('');
                if (options.noncefn) {
                    buffer = options.noncefn(Buffer.from(message), Buffer.from(privateKey), bufferAlgo, bufferData, attempt);
                }
                return new Uint8Array(buffer);
            };
        }
    }
    var sig = secp256k1.ecdsaSign(Uint8Array.from(message), Uint8Array.from(privateKey), signOptions);
    return {
        signature: Buffer.from(sig.signature),
        recovery: sig.recid,
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
exports.verify = function (message, signature, publicKey) {
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
exports.recover = function (message, signature, recid, compressed) {
    return Buffer.from(secp256k1.ecdsaRecover(Uint8Array.from(signature), recid, Uint8Array.from(message), compressed));
};
/**
 * Compute an EC Diffie-Hellman secret and applied sha256 to compressed public key.
 * @method ecdh
 * @param {Buffer} publicKey
 * @param {Buffer} privateKey
 * @return {Buffer}
 */
exports.ecdh = function (publicKey, privateKey) {
    // note: secp256k1 v3 doesn't allow optional parameter
    return Buffer.from(secp256k1.ecdh(Uint8Array.from(publicKey), Uint8Array.from(privateKey), {}));
};
exports.ecdhUnsafe = function (publicKey, privateKey, compressed) {
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
//# sourceMappingURL=secp256k1v3-adapter.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "tjlA").Buffer))

/***/ })

}]);
//# sourceMappingURL=default~authereum~eth-sig-util~ethereumjs-tx~providerEngine-771e7e5b-js~walletconnect-web3-provider.js.map