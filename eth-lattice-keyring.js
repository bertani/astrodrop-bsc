(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eth-lattice-keyring"],{

/***/ "zgR6":
/*!********************************!*\
  !*** ./eth-lattice-keyring.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eth-lattice-keyring"],{

/***/ "+FMq":
/*!*********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/or.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the OR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,1,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 OR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] | bits2[i]);
    return result;
});


/***/ }),

/***/ "+u1v":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/nand.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NAND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NAND bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = ((bits1[i] & bits2[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "/yFf":
/*!******************************************************!*\
  !*** ./node_modules/superagent/lib/response-base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "oHnp");

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
};


/***/ }),

/***/ "0d0U":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-nor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result = ((result | bits[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "1B/i":
/*!*****************************************************!*\
  !*** ./node_modules/ethers-eip712/dist/index.es.js ***!
  \*****************************************************/
/*! exports provided: TypedDataUtils, buildTypedData, domainType, encodeTypedDataDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedDataUtils", function() { return TypedDataUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTypedData", function() { return buildTypedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainType", function() { return domainType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeTypedDataDigest", function() { return encodeTypedDataDigest; });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "wDBh");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var TypedDataUtils = {
    encodeDigest: function (typedData) {
        var eip191Header = ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify('0x1901');
        var domainHash = TypedDataUtils.hashStruct(typedData, 'EIP712Domain', typedData.domain);
        var messageHash = TypedDataUtils.hashStruct(typedData, typedData.primaryType, typedData.message);
        var pack = ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.solidityPack(['bytes', 'bytes32', 'bytes32'], [eip191Header, zeroPad(domainHash, 32), zeroPad(messageHash, 32)]);
        var hashPack = ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(pack);
        return ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(hashPack);
    },
    encodeData: function (typedData, primaryType, data) {
        var types = typedData.types;
        var args = types[primaryType];
        if (!args || args.length === 0) {
            throw new Error("TypedDataUtils: " + typedData.primaryType + " type is not unknown");
        }
        var abiCoder = new ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.AbiCoder();
        var abiTypes = [];
        var abiValues = [];
        var typeHash = TypedDataUtils.typeHash(typedData.types, primaryType);
        abiTypes.push('bytes32');
        abiValues.push(zeroPad(typeHash, 32));
        var encodeField = function (name, type, value) {
            if (types[type] !== undefined) {
                return ['bytes32', ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(TypedDataUtils.encodeData(typedData, type, value)))];
            }
            if (type === 'bytes' || type === 'string') {
                var v = void 0;
                if (type === 'string') {
                    v = ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.toUtf8Bytes(value);
                }
                else {
                    v = ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(value);
                }
                return ['bytes32', ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.hexZeroPad(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(v), 32))];
            }
            else if (type.lastIndexOf('[') > 0) {
                var t_1 = type.slice(0, type.lastIndexOf('['));
                var v = value.map(function (item) { return encodeField(name, t_1, item); });
                return ['bytes32', ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(abiCoder.encode(v.map(function (_a) {
                        var tt = _a[0];
                        return tt;
                    }), v.map(function (_a) {
                        var vv = _a[1];
                        return vv;
                    })))))
                ];
            }
            else {
                return [type, value];
            }
        };
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var field = args_1[_i];
            var _a = encodeField(field.name, field.type, data[field.name]), type = _a[0], value = _a[1];
            abiTypes.push(type);
            abiValues.push(value);
        }
        return ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(abiCoder.encode(abiTypes, abiValues));
    },
    hashStruct: function (typedData, primaryType, data) {
        return ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(TypedDataUtils.encodeData(typedData, primaryType, data)));
    },
    typeHash: function (typedDataTypes, primaryType) {
        return ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.keccak256(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.toUtf8Bytes(TypedDataUtils.encodeType(typedDataTypes, primaryType))));
    },
    encodeType: function (typedDataTypes, primaryType) {
        var args = typedDataTypes[primaryType];
        if (!args || args.length === 0) {
            throw new Error("TypedDataUtils: " + primaryType + " type is not defined");
        }
        var subTypes = [];
        var s = primaryType + '(';
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            var arrayArg = arg.type.indexOf('[');
            var argType = arrayArg < 0 ? arg.type : arg.type.slice(0, arrayArg);
            if (typedDataTypes[argType] && typedDataTypes[argType].length > 0) {
                var set = false;
                for (var x = 0; x < subTypes.length; x++) {
                    if (subTypes[x] === argType) {
                        set = true;
                    }
                }
                if (!set) {
                    subTypes.push(argType);
                }
            }
            s += arg.type + ' ' + arg.name;
            if (i < args.length - 1) {
                s += ',';
            }
        }
        s += ')';
        subTypes.sort();
        for (var i = 0; i < subTypes.length; i++) {
            var subEncodeType = TypedDataUtils.encodeType(typedDataTypes, subTypes[i]);
            s += subEncodeType;
        }
        return s;
    },
    domainType: function (domain) {
        var type = [];
        if (domain.name) {
            type.push({ name: 'name', type: 'string' });
        }
        if (domain.version) {
            type.push({ name: 'version', type: 'string' });
        }
        if (domain.chainId) {
            type.push({ name: 'chainId', type: 'uint256' });
        }
        if (domain.verifyingContract) {
            type.push({ name: 'verifyingContract', type: 'address' });
        }
        if (domain.salt) {
            type.push({ name: 'salt', type: 'bytes32' });
        }
        return type;
    },
    buildTypedData: function (domain, messageTypes, primaryType, message) {
        var domainType = TypedDataUtils.domainType(domain);
        var typedData = {
            domain: domain,
            types: __assign({ 'EIP712Domain': domainType }, messageTypes),
            primaryType: primaryType,
            message: message
        };
        return typedData;
    }
};
var encodeTypedDataDigest = function (typedData) {
    return TypedDataUtils.encodeDigest(typedData);
};
var buildTypedData = function (domain, messageTypes, primaryType, message) {
    return TypedDataUtils.buildTypedData(domain, messageTypes, primaryType, message);
};
var domainType = function (domain) {
    return TypedDataUtils.domainType(domain);
};
// zeroPad is implemented as a compat layer between ethers v4 and ethers v5
var zeroPad = function (value, length) {
    return ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.arrayify(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.hexZeroPad(ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.hexlify(value), length));
};




/***/ }),

/***/ "24Ii":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(/*! component-emitter */ "cpc2");
var RequestBase = __webpack_require__(/*! ./request-base */ "kMlx");
var isObject = __webpack_require__(/*! ./is-object */ "8zgK");
var ResponseBase = __webpack_require__(/*! ./response-base */ "/yFf");
var Agent = __webpack_require__(/*! ./agent-base */ "nZbv");

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),

/***/ "2k3W":
/*!*******************************************!*\
  !*** ./node_modules/bitwise/esm/index.js ***!
  \*******************************************/
/*! exports provided: bits, buffer, byte, integer, nibble, string, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bits */ "yoIl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bits", function() { return _bits__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "HFhI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _buffer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _byte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./byte */ "L1CG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byte", function() { return _byte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integer */ "n/ht");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return _integer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nibble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nibble */ "4++s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nibble", function() { return _nibble__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "GHyM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _string__WEBPACK_IMPORTED_MODULE_5__["default"]; });








var bitwise = { bits: _bits__WEBPACK_IMPORTED_MODULE_0__["default"], buffer: _buffer__WEBPACK_IMPORTED_MODULE_1__["default"], byte: _byte__WEBPACK_IMPORTED_MODULE_2__["default"], integer: _integer__WEBPACK_IMPORTED_MODULE_3__["default"], nibble: _nibble__WEBPACK_IMPORTED_MODULE_4__["default"], string: _string__WEBPACK_IMPORTED_MODULE_5__["default"] };
/* harmony default export */ __webpack_exports__["default"] = (bitwise);


/***/ }),

/***/ "2t92":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/modify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/write */ "G1u+");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read */ "UPHr");


/**
 * Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 * @example
 * modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 * @param {Buffer} buffer the buffer to modify
 * @param {Array} bits the bits to insert
 * @param {Number} offset where to start (in bits)
 * @returns {undefined}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, bits, offset) {
    if (offset === void 0) { offset = 0; }
    var start = Math.floor(offset / 8);
    var end = Math.ceil((offset + bits.length) / 8);
    var subBuffer = buffer.slice(start, end);
    var byteData = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(subBuffer);
    var subOffset = offset % 8;
    for (var i = 0; i < bits.length; i++)
        byteData[subOffset++] = bits[i];
    var length = end - start;
    for (var i_1 = 0; i_1 < length; i_1++)
        subBuffer[i_1] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(byteData.slice(i_1 * 8, (i_1 + 1) * 8));
});


/***/ }),

/***/ "4++s":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/index.js ***!
  \**************************************************/
/*! exports provided: read, write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read */ "jSm7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write */ "Ez8P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _write__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({ read: _read__WEBPACK_IMPORTED_MODULE_0__["default"], write: _write__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "4Mn8":
/*!********************************************!*\
  !*** ./node_modules/gridplus-sdk/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Client = __webpack_require__(/*! ./src/client */ "pzNo");

module.exports = {
  Client,
};


/***/ }),

/***/ "4NEJ":
/*!***************************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/circular-shift-right.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Circular Shift Right
 *
 * @example
 * circularShiftRight([1,0,1,1,0,1]) => [1,1,0,1,1,0]
 *
 * @see {@link https://en.wikipedia.org/wiki/Circular_shift}
 *
 * @param {Array} bits input data
 * @param {number} amount how far should it be shifted
 * @return {Array} [ROR bits]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits, amount) {
    var result = [];
    if (amount > bits.length)
        throw new Error('shift amount can’t be larger than bits array length');
    for (var i = 0; i < bits.length; i++)
        result[(i + amount) % bits.length] = bits[i];
    return result;
});


/***/ }),

/***/ "5tNv":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/xor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise XOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xor(a, b, false) => Buffer(a XOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] ^ b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "6WMX":
/*!**************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/bitcoin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Util for Bitcoin-specific functionality
const bech32 = __webpack_require__(/*! bech32 */ "hb/F").bech32;
const bs58check = __webpack_require__(/*! bs58check */ "b3gk");
const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer;
const constants = __webpack_require__(/*! ./constants */ "L21C")
const DEFAULT_SEQUENCE = 0xffffffff;
const DEFAULT_SIGHASH_BUFFER = Buffer.from('01', 'hex'); // SIGHASH_ALL = 0x01
const { HARDENED_OFFSET } = __webpack_require__(/*! ./constants */ "L21C");
const DEFAULT_CHANGE = [44 + HARDENED_OFFSET, HARDENED_OFFSET, HARDENED_OFFSET, 1, 0];

const OP = {
  ZERO: 0x00,
  HASH160: 0xa9,
  DUP: 0x76,
  EQUAL: 0x87,
  EQUALVERIFY: 0x88,
  CHECKSIG: 0xac,
}

const addressVersion = {
  'LEGACY': 0x00,
  'SEGWIT': 0x05,
  'TESTNET': 0x6F,
  'SEGWIT_TESTNET': 0xC4,
  'SEGWIT_NATIVE_V0': 0xD0,
  'SEGWIT_NATIVE_V0_TESTNET': 0xF0,
}
exports.addressVersion = addressVersion;

// Bitcoin script types -- defined by the Lattice protocol spec
// NOTE: Only certain script types are supported for the spender, but all are supported for recipient
const scriptTypes = {
  P2PKH: 0x01, // Supported spender type
  P2SH: 0x02,
  P2SH_P2WPKH: 0x03, // Supported spender type
  P2WPKH_V0: 0x04,
}
exports.scriptTypes = scriptTypes

// We need to build two different objects here:
// 1. bitcoinjs-lib TransactionBuilder object, which will be used in conjunction
//    with the returned signatures to build and serialize the transaction before
//    broadcasting it. We will replace `bitcoinjs-lib`'s signatures with the ones
//    we get from the Lattice
// 2. The serialized Lattice request, which includes data (outlined in the specification)
//    that is needed to sign all of the inputs and build a change output. 
// @inputs (contained in `data`)
// `prevOuts`: an array of objects with the following properties:
//           a. txHash
//           b. value
//           c. index          -- the index of the output in the transaction
//           d. signerPath -- the path of the address in our wallet that is signing this input
// `recipient`: Receiving address, which must be converted to a pubkeyhash
// `value`:     Number of satoshis to send the recipient
// `fee`:       Number of satoshis to use for a transaction fee (should have been calculated)
//              already based on the number of inputs plus two outputs
// `version`:   Transaction version of the inputs. All inputs must be of the same version! 
// `isSegwit`: a boolean which determines how we serialize the data and parameterize txb
exports.buildBitcoinTxRequest = function(data) {
  try {
    const { 
      prevOuts, recipient, value, changePath=DEFAULT_CHANGE, 
      fee, isSegwit=null, changeVersion='SEGWIT', spenderScriptType=null 
    } = data;
    if (changePath.length !== 5) throw new Error('Please provide a full change path.')
    // Serialize the request
    const payload = Buffer.alloc(59 + (69 * prevOuts.length));
    let off = 0;
    // Change version byte (a.k.a. address format byte)
    if (addressVersion[changeVersion] === undefined)
      throw new Error('Invalid change version specified.');
    payload.writeUInt8(addressVersion[changeVersion]); off++;

    // Build the change data
    payload.writeUInt32LE(changePath.length, off); off += 4;
    for (let i = 0; i < changePath.length; i++) {
      payload.writeUInt32LE(changePath[i], off); off += 4;
    }    

    // Fee is a param
    payload.writeUInt32LE(fee, off); off += 4;
    const dec = decodeAddress(recipient);
    // Parameterize the recipient output
    payload.writeUInt8(dec.versionByte, off); off++;
    dec.pkh.copy(payload, off); off += dec.pkh.length;
    writeUInt64LE(value, payload, off); off += 8;

    // Build the inputs from the previous outputs
    payload.writeUInt8(prevOuts.length, off); off++;
    let inputSum = 0;

    let spenderScriptTypeToUse;
    if (spenderScriptType !== null && scriptTypes[spenderScriptType]) {
      // For newer versions we use the input scriptType
      spenderScriptTypeToUse = scriptTypes[spenderScriptType];
    } else if (isSegwit !== null) {
      // For legacy callers we use the boolean `isSegwit` to denote if we are spending
      // *wrapped* segwit inputs
      spenderScriptTypeToUse = isSegwit === true ? scriptTypes.P2SH_P2WPKH : scriptTypes.P2PKH;
    } else {
      throw new Error('Unsupported spender script type or none provided.')
    }
    prevOuts.forEach((input) => {
      if (!input.signerPath || input.signerPath.length !== 5) {
        throw new Error('Full recipient path not specified ')
      }
      payload.writeUInt32LE(input.signerPath.length, off); off += 4;
      for (let i = 0; i < input.signerPath.length; i++) {
        payload.writeUInt32LE(input.signerPath[i], off); off += 4;
      }
      payload.writeUInt32LE(input.index, off); off += 4;
      writeUInt64LE(input.value, payload, off); off += 8;
      inputSum += input.value;
      payload.writeUInt8(spenderScriptTypeToUse, off); off++;
      if (!Buffer.isBuffer(input.txHash)) input.txHash = Buffer.from(input.txHash, 'hex');
      input.txHash.copy(payload, off); off += input.txHash.length;
    })
    // Send them back!
    return {
      payload,
      spenderScriptType: spenderScriptTypeToUse,
      schema: constants.signingSchema.BTC_TRANSFER,
      origData: data,   // We will need the original data for serializing the tx
      changeData: {     // This data helps fill in the change output
        changeVersion,
        value: inputSum - (value + fee),
      }
    };
  } catch (err) {
    return { err };
  }
}

// Serialize a transaction consisting of inputs, outputs, and some
// metadata
// -- inputs  = { hash, index, sig, pubkey }
// -- outputs = { value, recipient }  // expects an address string for `recipient`
// -- isSegwitSpend = true if the inputs are being spent using segwit
//                    (NOTE: either ALL are being spent, or none are)
// -- network = Name of network, used to determine transaction version
// -- lockTime = Will probably always be 0
exports.serializeTx = function(data) {
  const { inputs, outputs, spenderScriptType, lockTime=0, crypto } = data;
  let payload = Buffer.alloc(4);
  let off = 0;
  // Always use version 2
  const version = 2;
  payload.writeUInt32LE(version, off); off += 4;
  if (spenderScriptType === scriptTypes.P2SH_P2WPKH) {
    payload = concat(payload, Buffer.from('00', 'hex')); // marker = 0x00
    payload = concat(payload, Buffer.from('01', 'hex')); // flag = 0x01
  }
  // Serialize signed inputs
  const numInputs = getVarInt(inputs.length);
  payload = concat(payload, numInputs); off += numInputs.length;
  inputs.forEach((input) => {
    payload = concat(payload, input.hash.reverse()); off += input.hash.length;
    const index = getU32LE(input.index);
    payload = concat(payload, index); off += index.length;
    if (spenderScriptType === scriptTypes.P2SH_P2WPKH) {
      // Build a vector (varSlice of varSlice) containing the redeemScript
      const redeemScript = buildRedeemScript(input.pubkey, crypto);
      const redeemScriptLen = getVarInt(redeemScript.length);
      const slice = Buffer.concat([redeemScriptLen, redeemScript]);
      const sliceLen = getVarInt(slice.length);
      payload = concat(payload, sliceLen); off += sliceLen.length;
      payload = concat(payload, slice); off += slice.length;
    } else {
      // Build the signature + pubkey script to spend this input
      const slice = buildSig(input.sig, input.pubkey);
      payload = concat(payload, slice); off += slice.length;
    }
    // Use the default sequence for all transactions
    const sequence = getU32LE(DEFAULT_SEQUENCE);
    payload = concat(payload, sequence); off += sequence.length;
  })
  // Serialize outputs
  const numOutputs = getVarInt(outputs.length);
  payload = concat(payload, numOutputs); off += numOutputs.length;
  outputs.forEach((output) => {
    const value = getU64LE(output.value);
    payload = concat(payload, value); off += value.length;
    // Build the output locking script and write it as a var slice
    const script = buildLockingScript(output.recipient);
    const scriptLen = getVarInt(script.length);
    payload = concat(payload, scriptLen); off += scriptLen.length;
    payload = concat(payload, script); off += script.length;
  })
  // Add witness data if needed
  if (spenderScriptType === scriptTypes.P2SH_P2WPKH) {
    const sigs = [];
    const pubkeys = [];
    for (let i = 0; i < inputs.length; i++) {
      sigs.push(inputs[i].sig);
      pubkeys.push(inputs[i].pubkey);
    }
    const witnessSlice = buildWitness(sigs, pubkeys);
    payload = concat(payload, witnessSlice); off += witnessSlice.length;
  }
  // Finish with locktime
  return Buffer.concat([payload, getU32LE(lockTime)]).toString('hex');
}

// Convert a pubkeyhash to a bitcoin base58check address with a version byte
exports.getBitcoinAddress = function(pubkeyhash, version) {
  return bs58check.encode(Buffer.concat([Buffer.from([version]), pubkeyhash]));
}


// Builder utils
//-----------------------
function buildRedeemScript(pubkey, crypto) {
  const redeemScript = Buffer.alloc(22);
  const shaHash = crypto.createHash('sha256').update(pubkey).digest();
  const pubkeyhash = crypto.createHash('rmd160').update(shaHash).digest();
  redeemScript.writeUInt8(OP.ZERO);
  redeemScript.writeUInt8(pubkeyhash.length, 1);
  pubkeyhash.copy(redeemScript, 2);
  return redeemScript;
}

// Var slice of signature + var slice of pubkey
function buildSig(sig, pubkey) {
  sig = Buffer.concat([sig, DEFAULT_SIGHASH_BUFFER])
  const sigLen = getVarInt(sig.length);
  const pubkeyLen = getVarInt(pubkey.length);
  const slice = Buffer.concat([sigLen, sig, pubkeyLen, pubkey]);
  const len = getVarInt(slice.length);
  return Buffer.concat([len, slice]);
}

// Witness is written as a "vector", which is a list of varSlices
// prefixed by the number of items
function buildWitness(sigs, pubkeys) {
  let witness = Buffer.alloc(0);
  // Two items in each vector (sig, pubkey)
  const len = Buffer.alloc(1); len.writeUInt8(2);
  for (let i = 0; i < sigs.length; i++) {
    const sig = Buffer.concat([sigs[i], DEFAULT_SIGHASH_BUFFER]);
    const sigLen = getVarInt(sig.length);
    const pubkey = pubkeys[i];
    const pubkeyLen = getVarInt(pubkey.length);
    witness = Buffer.concat([witness, len, sigLen, sig, pubkeyLen, pubkey]);
  }
  return witness;
}

// Locking script buiders
//-----------------------
function buildLockingScript(address) {
  const dec = decodeAddress(address);
  switch (dec.versionByte) {
    case addressVersion.SEGWIT_NATIVE_V0:
    case addressVersion.SEGWIT_NATIVE_V0_TESTNET:
      return buildP2wpkhLockingScript(dec.pkh);
    case addressVersion.SEGWIT:
    case addressVersion.SEGWIT_TESTNET:
      return buildP2shLockingScript(dec.pkh);
    case addressVersion.LEGACY:
    case addressVersion.TESTNET:
      return buildP2pkhLockingScript(dec.pkh);
    default:
      throw new Error(`Unknown version byte: ${dec.versionByte}. Cannot build BTC transaction.`);
  }
}

function buildP2pkhLockingScript(pubkeyhash) {
  const out = Buffer.alloc(5 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.DUP, off); off++;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUALVERIFY, off); off++;
  out.writeUInt8(OP.CHECKSIG, off); off++;
  return out;
}

function buildP2shLockingScript(pubkeyhash) {
  const out = Buffer.alloc(3 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUAL, off); off++;
  return out;
}

function buildP2wpkhLockingScript(pubkeyhash) {
  const out = Buffer.alloc(2 + pubkeyhash.length);
  out.writeUInt8(OP.ZERO, 0);
  out.writeUInt8(pubkeyhash.length, 1);
  pubkeyhash.copy(out, 2);
  return out;  
}

// Static Utils
//----------------------
function concat(base, addition) {
  return Buffer.concat([base, addition]);
}

function getU64LE(x) {
  const buffer = Buffer.alloc(8);
  writeUInt64LE(x, buffer, 0);
  return buffer;
}

function getU32LE(x) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(x);
  return buffer;
}

function getVarInt (x) {
  let buffer;
  if (x < 0xfd) {
    buffer = Buffer.alloc(1);
    buffer.writeUInt8(x);
  } else if (x <= 0xffff) {
    buffer = Buffer.alloc(3);
    buffer.writeUInt8(0xfd, 0);
    buffer.writeUInt16LE(x, 1);
  } else if (x < 0xffffffff) {
    buffer = Buffer.alloc(5);
    buffer.writeUInt8(0xfe, 0);
    buffer.writeUInt32LE(x, 1);
  } else {
    buffer = Buffer.alloc(9);
    buffer.writeUInt8(0xff, 0);
    buffer.writeUInt32LE(x >>> 0, 1);
    buffer.writeUInt32LE((x / 0x100000000) | 0, 5);
  }
  return buffer;
}

function writeUInt64LE(n, buf, off) {
  if (typeof n === 'number') n = n.toString(16);
  const preBuf = Buffer.alloc(8);
  const nStr = n.length % 2 === 0 ? n.toString(16) : `0${n.toString(16)}`;
  const nBuf = Buffer.from(nStr, 'hex');
  nBuf.reverse().copy(preBuf, 0);
  preBuf.copy(buf, off);
  return preBuf;
}

function decodeAddress(address) {
let versionByte, pkh;
  try {
    versionByte = bs58check.decode(address)[0];
    pkh = bs58check.decode(address).slice(1);
  } catch (err) {
    try {
      const bech32Dec = bech32.decode(address);
      if (bech32Dec.prefix === 'bc')
        versionByte = 0xD0;
      else if (bech32Dec.prefix === 'tb')
        versionByte = 0xF0;
      else
        throw new Error('Unsupported prefix: must be bc or tb.');
      if (bech32Dec.words[0] !== 0)
        throw new Error(`Unsupported segwit version: must be 0, got ${bech32Dec.words[0]}`);
      pkh = Buffer.from(bech32.fromWords(bech32Dec.words.slice(1)));
    } catch (err) {
      throw new Error(`Unable to decode address: ${address}: ${err.message}`)
    }
  }
  return {versionByte, pkh};
}

/***/ }),

/***/ "8zgK":
/*!**************************************************!*\
  !*** ./node_modules/superagent/lib/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),

/***/ "AREZ":
/*!****************************************!*\
  !*** ./node_modules/borc/src/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// exports.Commented = require('./commented')
exports.Diagnose = __webpack_require__(/*! ./diagnose */ "jpl7")
exports.Decoder = __webpack_require__(/*! ./decoder */ "hDHj")
exports.Encoder = __webpack_require__(/*! ./encoder */ "LcfU")
exports.Simple = __webpack_require__(/*! ./simple */ "UHYx")
exports.Tagged = __webpack_require__(/*! ./tagged */ "IrRL")

// exports.comment = exports.Commented.comment
exports.decodeAll = exports.Decoder.decodeAll
exports.decodeFirst = exports.Decoder.decodeFirst
exports.diagnose = exports.Diagnose.diagnose
exports.encode = exports.Encoder.encode
exports.decode = exports.Decoder.decode

exports.leveldb = {
  decode: exports.Decoder.decodeAll,
  encode: exports.Encoder.encode,
  buffer: true,
  name: 'cbor'
}


/***/ }),

/***/ "AuWn":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-or.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the OR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceOr([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} OR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result |= bits[i];
    return result;
});


/***/ }),

/***/ "B3Rj":
/*!************************************!*\
  !*** ./node_modules/bs58/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basex = __webpack_require__(/*! base-x */ "QqcV")
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ }),

/***/ "BumV":
/*!****************************************!*\
  !*** ./node_modules/bs58check/base.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base58 = __webpack_require__(/*! bs58 */ "B3Rj")
var Buffer = __webpack_require__(/*! safe-buffer */ "hwdV").Buffer

module.exports = function (checksumFn) {
  // Encode a buffer as a base58-check encoded string
  function encode (payload) {
    var checksum = checksumFn(payload)

    return base58.encode(Buffer.concat([
      payload,
      checksum
    ], payload.length + 4))
  }

  function decodeRaw (buffer) {
    var payload = buffer.slice(0, -4)
    var checksum = buffer.slice(-4)
    var newChecksum = checksumFn(payload)

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3]) return

    return payload
  }

  // Decode a base58-check encoded string to a buffer, no result if checksum is wrong
  function decodeUnsafe (string) {
    var buffer = base58.decodeUnsafe(string)
    if (!buffer) return

    return decodeRaw(buffer)
  }

  function decode (string) {
    var buffer = base58.decode(string)
    var payload = decodeRaw(buffer, checksumFn)
    if (!payload) throw new Error('Invalid checksum')
    return payload
  }

  return {
    encode: encode,
    decode: decode,
    decodeUnsafe: decodeUnsafe
  }
}


/***/ }),

/***/ "Ez8P":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/write.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a Nibble (0-15) which equals the given bits.
 *
 * @example
 * byte.write([1,0,1,0]) => 10
 *
 * @param {Array} nibble 4-bit unsigned integer
 * @return {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (nibble) {
    if (!Array.isArray(nibble) || nibble.length !== 4)
        throw new RangeError('invalid array length');
    var result = 0;
    for (var i = 0; i < 4; i++)
        if (nibble[3 - i])
            result |= 1 << i;
    return result;
});


/***/ }),

/***/ "Fq86":
/*!***************************************!*\
  !*** ./node_modules/iso-url/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
    URLWithLegacySupport,
    format,
    URLSearchParams,
    defaultBase
} = __webpack_require__(/*! ./src/url */ "HwtC");
const relative = __webpack_require__(/*! ./src/relative */ "PV6L");

module.exports = {
    URL: URLWithLegacySupport,
    URLSearchParams,
    format,
    relative,
    defaultBase
};


/***/ }),

/***/ "G1u+":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/byte/write.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a UInt8 (0-255) which equals the given bits.
 *
 * @example
 * byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 * @param {Array} byte 8 bits
 * @return {Number} 8-bit unsigned integer
 */
/* harmony default export */ __webpack_exports__["default"] = (function (byte) {
    if (!Array.isArray(byte) || byte.length !== 8)
        throw new RangeError('invalid array length');
    var data = 0;
    for (var i = 0; i < 8; i++)
        if (byte[7 - i])
            data |= 1 << i;
    return data;
});


/***/ }),

/***/ "GCxg":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/create.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/write */ "G1u+");

/**
 * Creates a new buffer and writes the given bits.
 *
 * @example
 * createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
 *
 * @param {Array} bits an array containing the bits to insert
 * @returns {Buffer}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var data = [0, 0, 0, 0, 0, 0, 0, 0];
    var buffer = Buffer.alloc(Math.ceil(bits.length / 8));
    for (var i = 0; i < buffer.length; i++) {
        for (var j = 0; j < 8; j++) {
            if (bits[i * 8 + j])
                data[j] = bits[i * 8 + j];
            else
                data[j] = 0;
        }
        buffer[i] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    }
    return buffer;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "GHyM":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/string/index.js ***!
  \**************************************************/
/*! exports provided: toBits, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-bits */ "oMMx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBits", function() { return _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = ({ toBits: _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"] });


/***/ }),

/***/ "HEpO":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/get-bit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value of a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 1
 * @param {Integer} int32 input number
 * @param {Integer} position bit's position
 * @returns {Integer} bit's value
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position) {
    return ((int32 >> position) & 1);
});


/***/ }),

/***/ "HFhI":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/index.js ***!
  \**************************************************/
/*! exports provided: and, create, modify, nand, nor, not, or, read, readInt, readUInt, xnor, xor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and */ "XUzR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "GCxg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _modify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify */ "2t92");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modify", function() { return _modify__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nand */ "nMdu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nand", function() { return _nand__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nor */ "ILq/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nor", function() { return _nor__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not */ "f7RY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./or */ "YnKP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read */ "UPHr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _read_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./read-int */ "MgST");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readInt", function() { return _read_int__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _read_u_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./read-u-int */ "ktnI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readUInt", function() { return _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _xnor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./xnor */ "vGFC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xnor", function() { return _xnor__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _xor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xor */ "5tNv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _xor__WEBPACK_IMPORTED_MODULE_11__["default"]; });














/* harmony default export */ __webpack_exports__["default"] = ({
    and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
    create: _create__WEBPACK_IMPORTED_MODULE_1__["default"],
    modify: _modify__WEBPACK_IMPORTED_MODULE_2__["default"],
    nand: _nand__WEBPACK_IMPORTED_MODULE_3__["default"],
    nor: _nor__WEBPACK_IMPORTED_MODULE_4__["default"],
    not: _not__WEBPACK_IMPORTED_MODULE_5__["default"],
    or: _or__WEBPACK_IMPORTED_MODULE_6__["default"],
    read: _read__WEBPACK_IMPORTED_MODULE_7__["default"],
    readInt: _read_int__WEBPACK_IMPORTED_MODULE_8__["default"],
    readUInt: _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"],
    xnor: _xnor__WEBPACK_IMPORTED_MODULE_10__["default"],
    xor: _xor__WEBPACK_IMPORTED_MODULE_11__["default"],
});


/***/ }),

/***/ "HwtC":
/*!*************************************************!*\
  !*** ./node_modules/iso-url/src/url-browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultBase = self.location ?
    self.location.protocol + '//' + self.location.host :
    '';
const URL = self.URL;

class URLWithLegacySupport {
    constructor(url = '', base = defaultBase) {
        this.super = new URL(url, base);
        this.path = this.pathname + this.search;
        this.auth =
            this.username && this.password ?
                this.username + ':' + this.password :
                null;

        this.query =
            this.search && this.search.startsWith('?') ?
                this.search.slice(1) :
                null;
    }

    get hash() {
        return this.super.hash;
    }
    get host() {
        return this.super.host;
    }
    get hostname() {
        return this.super.hostname;
    }
    get href() {
        return this.super.href;
    }
    get origin() {
        return this.super.origin;
    }
    get password() {
        return this.super.password;
    }
    get pathname() {
        return this.super.pathname;
    }
    get port() {
        return this.super.port;
    }
    get protocol() {
        return this.super.protocol;
    }
    get search() {
        return this.super.search;
    }
    get searchParams() {
        return this.super.searchParams;
    }
    get username() {
        return this.super.username;
    }

    set hash(hash) {
        this.super.hash = hash;
    }
    set host(host) {
        this.super.host = host;
    }
    set hostname(hostname) {
        this.super.hostname = hostname;
    }
    set href(href) {
        this.super.href = href;
    }
    set origin(origin) {
        this.super.origin = origin;
    }
    set password(password) {
        this.super.password = password;
    }
    set pathname(pathname) {
        this.super.pathname = pathname;
    }
    set port(port) {
        this.super.port = port;
    }
    set protocol(protocol) {
        this.super.protocol = protocol;
    }
    set search(search) {
        this.super.search = search;
    }
    set searchParams(searchParams) {
        this.super.searchParams = searchParams;
    }
    set username(username) {
        this.super.username = username;
    }

    createObjectURL(o) {
        return this.super.createObjectURL(o);
    }
    revokeObjectURL(o) {
        this.super.revokeObjectURL(o);
    }
    toJSON() {
        return this.super.toJSON();
    }
    toString() {
        return this.super.toString();
    }
    format() {
        return this.toString();
    }
}

function format(obj) {
    if (typeof obj === 'string') {
        const url = new URL(obj);

        return url.toString();
    }

    if (!(obj instanceof URL)) {
        const userPass =
            obj.username && obj.password ?
                `${obj.username}:${obj.password}@` :
                '';
        const auth = obj.auth ? obj.auth + '@' : '';
        const port = obj.port ? ':' + obj.port : '';
        const protocol = obj.protocol ? obj.protocol + '//' : '';
        const host = obj.host || '';
        const hostname = obj.hostname || '';
        const search = obj.search || (obj.query ? '?' + obj.query : '');
        const hash = obj.hash || '';
        const pathname = obj.pathname || '';
        const path = obj.path || pathname + search;

        return `${protocol}${userPass || auth}${host ||
            hostname + port}${path}${hash}`;
    }
}

module.exports = {
    URLWithLegacySupport,
    URLSearchParams: self.URLSearchParams,
    defaultBase,
    format
};


/***/ }),

/***/ "ILq/":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/nor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nor(a, b, false) => Buffer(a NOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] | b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "IrRL":
/*!*****************************************!*\
  !*** ./node_modules/borc/src/tagged.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A CBOR tagged item, where the tag does not have semantics specified at the
 * moment, or those semantics threw an error during parsing. Typically this will
 * be an extension point you're not yet expecting.
 */
class Tagged {
  /**
   * Creates an instance of Tagged.
   *
   * @param {Number} tag - the number of the tag
   * @param {any} value - the value inside the tag
   * @param {Error} err - the error that was thrown parsing the tag, or null
   */
  constructor (tag, value, err) {
    this.tag = tag
    this.value = value
    this.err = err
    if (typeof this.tag !== 'number') {
      throw new Error('Invalid tag type (' + (typeof this.tag) + ')')
    }
    if ((this.tag < 0) || ((this.tag | 0) !== this.tag)) {
      throw new Error('Tag must be a positive integer: ' + this.tag)
    }
  }

  /**
   * Convert to a String
   *
   * @returns {String} string of the form '1(2)'
   */
  toString () {
    return `${this.tag}(${JSON.stringify(this.value)})`
  }

  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR (gen) {
    gen._pushTag(this.tag)
    return gen.pushAny(this.value)
  }

  /**
   * If we have a converter for this type, do the conversion.  Some converters
   * are built-in.  Additional ones can be passed in.  If you want to remove
   * a built-in converter, pass a converter in whose value is 'null' instead
   * of a function.
   *
   * @param {Object} converters - keys in the object are a tag number, the value
   *   is a function that takes the decoded CBOR and returns a JavaScript value
   *   of the appropriate type.  Throw an exception in the function on errors.
   * @returns {any} - the converted item
   */
  convert (converters) {
    var er, f
    f = converters != null ? converters[this.tag] : undefined
    if (typeof f !== 'function') {
      f = Tagged['_tag' + this.tag]
      if (typeof f !== 'function') {
        return this
      }
    }
    try {
      return f.call(Tagged, this.value)
    } catch (error) {
      er = error
      this.err = er
      return this
    }
  }
}

module.exports = Tagged


/***/ }),

/***/ "IunX":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/not.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Flips all given bits and returns the flipped bits.
 *
 * @example
 * not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [NOT bits]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++)
        result[i] = (bits[i] ^ 1);
    return result;
});


/***/ }),

/***/ "Jtfa":
/*!******************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-nand.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NAND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNand([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NAND bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result = ((result & bits[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "L1CG":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/byte/index.js ***!
  \************************************************/
/*! exports provided: read, write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read */ "gb0s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write */ "G1u+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _write__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({ read: _read__WEBPACK_IMPORTED_MODULE_0__["default"], write: _write__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "L21C":
/*!****************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Consistent with Lattice's IV
const AES_IV = [0x6d, 0x79, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64]

const ADDR_STR_LEN = 129; // 128-char strings (null terminated)

// Decrypted response lengths will be fixed for any given message type.
// These are defined in the Lattice spec.
// Every decrypted response should have a 65-byte pubkey prefixing it (and a 4-byte request ID)
// These are NOT counted in `decResLengths`, meaning these values are 69-bytes smaller than the
// corresponding structs in firmware.
const decResLengths = {
    finalizePair: 0,                    // Only contains the pubkey
    getAddresses: 10 * ADDR_STR_LEN,    // 10x 129 byte strings (128 bytes + null terminator)
    sign: 1090,                         // 1 DER signature for ETH, 10 for BTC + change pubkeyhash
    getWallets: 142,                    // 71 bytes per wallet record (response contains internal and external)
    addAbiDefs: 8,
    test: 1646                          // Max size of test response payload
}

// Every corresponding decrypted response struct in firmware has a pubkey
// and checksum added. These are not included in `decResLengths`
const DES_RES_EXTRADATA_LEN = 69; 

// Encrypted responses also have metadata
// Prefix:
// * protocol version (1 byte)
// * response type, reserved (1 byte) -- not used
// * response id (4 bytes) -- not used
// * payload length (2 bytes)
// * response code (1 byte)
// Suffix:
// * checksum (4 bytes) -- NOT the same checksum as inside the decrypted msg
const ENC_MSG_METADATA_LEN = 13;

const ENC_MSG_EXTRA_LEN = DES_RES_EXTRADATA_LEN + ENC_MSG_METADATA_LEN;
// Per Lattice spec, all encrypted messages must fit in a buffer of this size.
// The length comes from the largest request/response data type size
// We also add the prefix length
let ENC_MSG_LEN = 0;
Object.keys(decResLengths).forEach((k) => {
    if (decResLengths[k] + ENC_MSG_EXTRA_LEN > ENC_MSG_LEN)
        ENC_MSG_LEN = decResLengths[k] + ENC_MSG_EXTRA_LEN;
})
  
const deviceCodes = {
    'CONNECT': 1,
    'ENCRYPTED_REQUEST': 2,
}

const encReqCodes = {
    'FINALIZE_PAIRING': 0x00,
    'GET_ADDRESSES': 0x01,
    'ADD_PERMISSION': 0x02,
    'SIGN_TRANSACTION': 0x03,
    'GET_WALLETS': 0x04,
    'ADD_PERMISSION_V0': 0x05,
    'ADD_ABI_DEFS': 0x06,
    'TEST': 0x07,
}

const messageConstants = {
    'NOT_PAIRED': 0x00,
    'PAIRED': 0x01,
}

const addressSizes = {
    'BTC': 20,  // 20 byte pubkeyhash
    'ETH': 20,  // 20 byte address not including 0x prefix
}
  
const responseCodes = {
    RESP_SUCCESS: 0x00,
    RESP_ERR_INVALID_MSG: 0x80,
    RESP_ERR_UNSUPPORTED_VER: 0x81,
    RESP_ERR_DEV_BUSY: 0x82,
    RESP_ERR_USER_TIMEOUT: 0x83,
    RESP_ERR_USER_DECLINED: 0x84,
    RESP_ERR_PAIR_FAIL: 0x85,
    RESP_ERR_PAIR_DISABLED: 0x86,
    RESP_ERR_PERMISSION_DISABLED: 0x87,
    RESP_ERR_INTERNAL: 0x88,
    RESP_ERR_GCE_TIMEOUT: 0x89,
    RESP_ERR_WALLET_NOT_PRESENT: 0x8a,
    RESP_ERR_DEV_LOCKED: 0x8b,
    RESP_ERR_DISABLED: 0x8c,
    RESP_ERR_ALREADY: 0x8d,
}

const responseMsgs = {
    [responseCodes.RESP_SUCCESS]: 0x00,
    [responseCodes.RESP_ERR_INVALID_MSG]: 'Invalid Request',
    [responseCodes.RESP_ERR_UNSUPPORTED_VER]: 'Unsupported Version',
    [responseCodes.RESP_ERR_DEV_BUSY]: 'Device Busy',
    [responseCodes.RESP_ERR_USER_TIMEOUT]: 'Timeout Waiting for User',
    [responseCodes.RESP_ERR_USER_DECLINED]: 'Request Declined by User',
    [responseCodes.RESP_ERR_PAIR_FAIL]: 'Pairing Failed',
    [responseCodes.RESP_ERR_PAIR_DISABLED]: 'Pairing is Currently Disabled',
    [responseCodes.RESP_ERR_PERMISSION_DISABLED]: 'Automated Signing is Currently Disabled',
    [responseCodes.RESP_ERR_INTERNAL]: 'Device Error',
    [responseCodes.RESP_ERR_GCE_TIMEOUT]: 'Timeout',
    [responseCodes.RESP_ERR_WALLET_NOT_PRESENT]: 'Incorrect Wallet UID Provided',
    [responseCodes.RESP_ERR_DEV_LOCKED]: 'Device Locked',
    [responseCodes.RESP_ERR_DISABLED]: 'Disabled',
    [responseCodes.RESP_ERR_ALREADY]: 'Record already exists. You must first remove it on your device.'
}
 

const signingSchema = {
    BTC_TRANSFER: 0,
    ETH_TRANSFER: 1,
    ERC20_TRANSFER: 2,
    ETH_MSG: 3,
    EXTRA_DATA: 4,
}

const REQUEST_TYPE_BYTE = 0x02; // For all HSM-bound requests
const VERSION_BYTE = 1;
const HARDENED_OFFSET = 0x80000000; // Hardened offset
const HANDLE_LARGER_CHAIN_ID = 255; // ChainId value to signify larger chainID is in data buffer
const MAX_CHAIN_ID_BYTES = 8; // Max number of bytes to contain larger chainID in data buffer

const BASE_URL = 'https://signing.gridpl.us';

const EIP712_ABI_LATTICE_FW_TYPE_MAP = {
    'address': 1,
    'bool': 2,
    'uint8': 3,
    'uint16': 4,
    'uint24': 5,
    'uint32': 6,
    'uint40': 7,
    'uint48': 8,
    'uint56': 9,
    'uint64': 10,
    'uint72': 11,
    'uint80': 12,
    'uint88': 13,
    'uint96': 14,
    'uint104': 15,
    'uint112': 16,
    'uint120': 17,
    'uint128': 18,
    'uint136': 19,
    'uint144': 20,
    'uint152': 21,
    'uint160': 22,
    'uint168': 23,
    'uint176': 24,
    'uint184': 25,
    'uint192': 26,
    'uint200': 27,
    'uint208': 28,
    'uint216': 29,
    'uint224': 30,
    'uint232': 31,
    'uint240': 32,
    'uint248': 33,
    'uint256': 34,
    'int8': 35,
    'int16': 36,
    'int24': 37,
    'int32': 38,
    'int40': 39,
    'int48': 40,
    'int56': 41,
    'int64': 42,
    'int72': 43,
    'int80': 44,
    'int88': 45,
    'int96': 46,
    'int104': 47,
    'int112': 48,
    'int120': 49,
    'int128': 50,
    'int136': 51,
    'int144': 52,
    'int152': 53,
    'int160': 54,
    'int168': 55,
    'int176': 56,
    'int184': 57,
    'int192': 58,
    'int200': 59,
    'int208': 60,
    'int216': 61,
    'int224': 62,
    'int232': 63,
    'int240': 64,
    'int248': 65,
    'int256': 66,
    'uint': 67,
    'bytes1': 69,
    'bytes2': 70,
    'bytes3': 71,
    'bytes4': 72,
    'bytes5': 73,
    'bytes6': 74,
    'bytes7': 75,
    'bytes8': 76,
    'bytes9': 77,
    'bytes10': 78,
    'bytes11': 79,
    'bytes12': 80,
    'bytes13': 81,
    'bytes14': 82,
    'bytes15': 83,
    'bytes16': 84,
    'bytes17': 85,
    'bytes18': 86,
    'bytes19': 87,
    'bytes20': 88,
    'bytes21': 89,
    'bytes22': 90,
    'bytes23': 91,
    'bytes24': 92,
    'bytes25': 93,
    'bytes26': 94,
    'bytes27': 95,
    'bytes28': 96,
    'bytes29': 97,
    'bytes30': 98,
    'bytes31': 99,
    'bytes32': 100,
    'bytes': 101,
    'string': 102,
}

const ETH_ABI_LATTICE_FW_TYPE_MAP = {
    ...EIP712_ABI_LATTICE_FW_TYPE_MAP,
    'tuple1': 103,
    'tuple2': 104,
    'tuple3': 105,
    'tuple4': 106,
    'tuple5': 107,
    'tuple6': 108,
    'tuple7': 109,
    'tuple8': 110,
    'tuple9': 111,
    'tuple10': 112,
    'tuple11': 113,
    'tuple12': 114,
    'tuple13': 115,
    'tuple14': 116,
    'tuple15': 117,
    'tuple16': 118,
    'tuple17': 119,  // Firmware currently cannot support tuples larger than this
};

const ethMsgProtocol = {
    SIGN_PERSONAL: {
        str: 'signPersonal',
        enumIdx: 0,             // Enum index of this protocol in Lattice firmware
    },
    TYPED_DATA: {
        str: 'typedData',
        enumIdx: 1,
        rawDataMaxLen: 1629,    // Max size of raw data payload in bytes
        typeCodes: EIP712_ABI_LATTICE_FW_TYPE_MAP // Enum indices of data types in Lattice firmware
    },
}

function getFwVersionConst(v) {
    const c = {
        extraDataFrameSz: 0,
        extraDataMaxFrames: 0,
    };
    function gte(v, exp) {
        // Note that `v` fields come in as [fix|minor|major]
        return  (v[2] > exp[0]) || 
                (v[2] === exp[0] && v[1] > exp[1]) || 
                (v[2] === exp[0] && v[1] === exp[1] && v[0] > exp[2]) ||
                (v[2] === exp[0] && v[1] === exp[1] && v[0] === exp[2]);
    }
    // Very old legacy versions do not give a version number
    const legacy = (v.length === 0);
    // V0.10.10 allows a user to sign a prehashed ETH message if payload too big
    if (!legacy && gte(v, [0, 10, 10])) {
        c.ethMsgPreHashAllowed = true;
    }

    // V0.10.8 allows a user to sign a prehashed transaction if the payload
    // is too big
    if (!legacy && gte(v, [0, 10, 8])) {
        c.prehashAllowed = true;
    }
    // V0.10.5 added the ability to use flexible address path sizes, which
    // changes the `getAddress` API. It also added support for EIP712
    if (!legacy && gte(v, [0, 10, 5])) {
        c.varAddrPathSzAllowed = true;
        c.eip712Supported = true;
    }
    // V0.10.4 introduced the ability to send signing requests over multiple
    // data frames (i.e. in multiple requests)
    if (!legacy && gte(v, [0, 10, 4])) {
        c.extraDataFrameSz = 1500; // 1500 bytes per frame of extraData allowed
        c.extraDataMaxFrames = 1;  // 1 frame of extraData allowed
    }
    // Various size constants have changed on the firmware side over time and
    // are captured here
    if (!legacy && gte(v, [0, 10, 4])) {
        // >=0.10.3
        c.reqMaxDataSz = 1678;
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 20000000000000; // 20000 gwei
        c.addrFlagsAllowed = true;
    } else if (!legacy && gte(v, [0, 10, 0])) {
        // >=0.10.0
        c.reqMaxDataSz = 1678;
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 20000000000000; // 20000 gwei
        c.addrFlagsAllowed = true;
    } else {
        // Legacy or <0.10.0
        c.reqMaxDataSz = 1152;
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 500000000000; // 500 gwei
        c.addrFlagsAllowed = false;
    }
    return c;
}

module.exports = {
    getFwVersionConst,
    ADDR_STR_LEN,
    AES_IV,
    BASE_URL,
    ENC_MSG_LEN,
    addressSizes,
    decResLengths,
    deviceCodes,
    encReqCodes,
    ethMsgProtocol,
    messageConstants,
    responseCodes,
    responseMsgs,
    signingSchema,
    REQUEST_TYPE_BYTE,
    VERSION_BYTE,
    HARDENED_OFFSET,
    HANDLE_LARGER_CHAIN_ID,
    MAX_CHAIN_ID_BYTES,
    ETH_ABI_LATTICE_FW_TYPE_MAP,
}

/***/ }),

/***/ "LcfU":
/*!******************************************!*\
  !*** ./node_modules/borc/src/encoder.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Buffer } = __webpack_require__(/*! buffer */ "tjlA")
const { URL } = __webpack_require__(/*! iso-url */ "Fq86")
const Bignumber = __webpack_require__(/*! bignumber.js */ "kB5k").BigNumber

const utils = __webpack_require__(/*! ./utils */ "XuWj")
const constants = __webpack_require__(/*! ./constants */ "hb4V")
const MT = constants.MT
const NUMBYTES = constants.NUMBYTES
const SHIFT32 = constants.SHIFT32
const SYMS = constants.SYMS
const TAG = constants.TAG
const HALF = (constants.MT.SIMPLE_FLOAT << 5) | constants.NUMBYTES.TWO
const FLOAT = (constants.MT.SIMPLE_FLOAT << 5) | constants.NUMBYTES.FOUR
const DOUBLE = (constants.MT.SIMPLE_FLOAT << 5) | constants.NUMBYTES.EIGHT
const TRUE = (constants.MT.SIMPLE_FLOAT << 5) | constants.SIMPLE.TRUE
const FALSE = (constants.MT.SIMPLE_FLOAT << 5) | constants.SIMPLE.FALSE
const UNDEFINED = (constants.MT.SIMPLE_FLOAT << 5) | constants.SIMPLE.UNDEFINED
const NULL = (constants.MT.SIMPLE_FLOAT << 5) | constants.SIMPLE.NULL

const MAXINT_BN = new Bignumber('0x20000000000000')
const BUF_NAN = Buffer.from('f97e00', 'hex')
const BUF_INF_NEG = Buffer.from('f9fc00', 'hex')
const BUF_INF_POS = Buffer.from('f97c00', 'hex')

function toType (obj) {
  // [object Type]
  // --------8---1
  return ({}).toString.call(obj).slice(8, -1)
}

/**
 * Transform JavaScript values into CBOR bytes
 *
 */
class Encoder {
  /**
   * @param {Object} [options={}]
   * @param {function(Buffer)} options.stream
   */
  constructor (options) {
    options = options || {}

    this.streaming = typeof options.stream === 'function'
    this.onData = options.stream

    this.semanticTypes = [
      [URL, this._pushUrl],
      [Bignumber, this._pushBigNumber]
    ]

    const addTypes = options.genTypes || []
    const len = addTypes.length
    for (let i = 0; i < len; i++) {
      this.addSemanticType(
        addTypes[i][0],
        addTypes[i][1]
      )
    }

    this._reset()
  }

  addSemanticType (type, fun) {
    const len = this.semanticTypes.length
    for (let i = 0; i < len; i++) {
      const typ = this.semanticTypes[i][0]
      if (typ === type) {
        const old = this.semanticTypes[i][1]
        this.semanticTypes[i][1] = fun
        return old
      }
    }
    this.semanticTypes.push([type, fun])
    return null
  }

  push (val) {
    if (!val) {
      return true
    }

    this.result[this.offset] = val
    this.resultMethod[this.offset] = 0
    this.resultLength[this.offset] = val.length
    this.offset++

    if (this.streaming) {
      this.onData(this.finalize())
    }

    return true
  }

  pushWrite (val, method, len) {
    this.result[this.offset] = val
    this.resultMethod[this.offset] = method
    this.resultLength[this.offset] = len
    this.offset++

    if (this.streaming) {
      this.onData(this.finalize())
    }

    return true
  }

  _pushUInt8 (val) {
    return this.pushWrite(val, 1, 1)
  }

  _pushUInt16BE (val) {
    return this.pushWrite(val, 2, 2)
  }

  _pushUInt32BE (val) {
    return this.pushWrite(val, 3, 4)
  }

  _pushDoubleBE (val) {
    return this.pushWrite(val, 4, 8)
  }

  _pushNaN () {
    return this.push(BUF_NAN)
  }

  _pushInfinity (obj) {
    const half = (obj < 0) ? BUF_INF_NEG : BUF_INF_POS
    return this.push(half)
  }

  _pushFloat (obj) {
    const b2 = Buffer.allocUnsafe(2)

    if (utils.writeHalf(b2, obj)) {
      if (utils.parseHalf(b2) === obj) {
        return this._pushUInt8(HALF) && this.push(b2)
      }
    }

    const b4 = Buffer.allocUnsafe(4)
    b4.writeFloatBE(obj, 0)
    if (b4.readFloatBE(0) === obj) {
      return this._pushUInt8(FLOAT) && this.push(b4)
    }

    return this._pushUInt8(DOUBLE) && this._pushDoubleBE(obj)
  }

  _pushInt (obj, mt, orig) {
    const m = mt << 5
    if (obj < 24) {
      return this._pushUInt8(m | obj)
    }

    if (obj <= 0xff) {
      return this._pushUInt8(m | NUMBYTES.ONE) && this._pushUInt8(obj)
    }

    if (obj <= 0xffff) {
      return this._pushUInt8(m | NUMBYTES.TWO) && this._pushUInt16BE(obj)
    }

    if (obj <= 0xffffffff) {
      return this._pushUInt8(m | NUMBYTES.FOUR) && this._pushUInt32BE(obj)
    }

    if (obj <= Number.MAX_SAFE_INTEGER) {
      return this._pushUInt8(m | NUMBYTES.EIGHT) &&
        this._pushUInt32BE(Math.floor(obj / SHIFT32)) &&
        this._pushUInt32BE(obj % SHIFT32)
    }

    if (mt === MT.NEG_INT) {
      return this._pushFloat(orig)
    }

    return this._pushFloat(obj)
  }

  _pushIntNum (obj) {
    if (obj < 0) {
      return this._pushInt(-obj - 1, MT.NEG_INT, obj)
    } else {
      return this._pushInt(obj, MT.POS_INT)
    }
  }

  _pushNumber (obj) {
    switch (false) {
      case (obj === obj): // eslint-disable-line
        return this._pushNaN(obj)
      case isFinite(obj):
        return this._pushInfinity(obj)
      case ((obj % 1) !== 0):
        return this._pushIntNum(obj)
      default:
        return this._pushFloat(obj)
    }
  }

  _pushString (obj) {
    const len = Buffer.byteLength(obj, 'utf8')
    return this._pushInt(len, MT.UTF8_STRING) && this.pushWrite(obj, 5, len)
  }

  _pushBoolean (obj) {
    return this._pushUInt8(obj ? TRUE : FALSE)
  }

  _pushUndefined (obj) {
    return this._pushUInt8(UNDEFINED)
  }

  _pushArray (gen, obj) {
    const len = obj.length
    if (!gen._pushInt(len, MT.ARRAY)) {
      return false
    }
    for (let j = 0; j < len; j++) {
      if (!gen.pushAny(obj[j])) {
        return false
      }
    }
    return true
  }

  _pushTag (tag) {
    return this._pushInt(tag, MT.TAG)
  }

  _pushDate (gen, obj) {
    // Round date, to get seconds since 1970-01-01 00:00:00 as defined in
    // Sec. 2.4.1 and get a possibly more compact encoding. Note that it is
    // still allowed to encode fractions of seconds which can be achieved by
    // changing overwriting the encode function for Date objects.
    return gen._pushTag(TAG.DATE_EPOCH) && gen.pushAny(Math.round(obj / 1000))
  }

  _pushBuffer (gen, obj) {
    return gen._pushInt(obj.length, MT.BYTE_STRING) && gen.push(obj)
  }

  _pushNoFilter (gen, obj) {
    return gen._pushBuffer(gen, obj.slice())
  }

  _pushRegexp (gen, obj) {
    return gen._pushTag(TAG.REGEXP) && gen.pushAny(obj.source)
  }

  _pushSet (gen, obj) {
    if (!gen._pushInt(obj.size, MT.ARRAY)) {
      return false
    }
    for (const x of obj) {
      if (!gen.pushAny(x)) {
        return false
      }
    }
    return true
  }

  _pushUrl (gen, obj) {
    return gen._pushTag(TAG.URI) && gen.pushAny(obj.format())
  }

  _pushBigint (obj) {
    let tag = TAG.POS_BIGINT
    if (obj.isNegative()) {
      obj = obj.negated().minus(1)
      tag = TAG.NEG_BIGINT
    }
    let str = obj.toString(16)
    if (str.length % 2) {
      str = '0' + str
    }
    const buf = Buffer.from(str, 'hex')
    return this._pushTag(tag) && this._pushBuffer(this, buf)
  }

  _pushBigNumber (gen, obj) {
    if (obj.isNaN()) {
      return gen._pushNaN()
    }
    if (!obj.isFinite()) {
      return gen._pushInfinity(obj.isNegative() ? -Infinity : Infinity)
    }
    if (obj.isInteger()) {
      return gen._pushBigint(obj)
    }
    if (!(gen._pushTag(TAG.DECIMAL_FRAC) &&
      gen._pushInt(2, MT.ARRAY))) {
      return false
    }

    const dec = obj.decimalPlaces()
    const slide = obj.multipliedBy(new Bignumber(10).pow(dec))
    if (!gen._pushIntNum(-dec)) {
      return false
    }
    if (slide.abs().isLessThan(MAXINT_BN)) {
      return gen._pushIntNum(slide.toNumber())
    } else {
      return gen._pushBigint(slide)
    }
  }

  _pushMap (gen, obj) {
    if (!gen._pushInt(obj.size, MT.MAP)) {
      return false
    }

    return this._pushRawMap(
      obj.size,
      Array.from(obj)
    )
  }

  _pushObject (obj) {
    if (!obj) {
      return this._pushUInt8(NULL)
    }

    var len = this.semanticTypes.length
    for (var i = 0; i < len; i++) {
      if (obj instanceof this.semanticTypes[i][0]) {
        return this.semanticTypes[i][1].call(obj, this, obj)
      }
    }

    var f = obj.encodeCBOR
    if (typeof f === 'function') {
      return f.call(obj, this)
    }

    var keys = Object.keys(obj)
    var keyLength = keys.length
    if (!this._pushInt(keyLength, MT.MAP)) {
      return false
    }

    return this._pushRawMap(
      keyLength,
      keys.map((k) => [k, obj[k]])
    )
  }

  _pushRawMap (len, map) {
    // Sort keys for canoncialization
    // 1. encode key
    // 2. shorter key comes before longer key
    // 3. same length keys are sorted with lower
    //    byte value before higher

    map = map.map(function (a) {
      a[0] = Encoder.encode(a[0])
      return a
    }).sort(utils.keySorter)

    for (var j = 0; j < len; j++) {
      if (!this.push(map[j][0])) {
        return false
      }

      if (!this.pushAny(map[j][1])) {
        return false
      }
    }

    return true
  }

  /**
   * Alias for `.pushAny`
   *
   * @param {*} obj
   * @returns {boolean} true on success
   */
  write (obj) {
    return this.pushAny(obj)
  }

  /**
   * Push any supported type onto the encoded stream
   *
   * @param {any} obj
   * @returns {boolean} true on success
   */
  pushAny (obj) {
    var typ = toType(obj)

    switch (typ) {
      case 'Number':
        return this._pushNumber(obj)
      case 'String':
        return this._pushString(obj)
      case 'Boolean':
        return this._pushBoolean(obj)
      case 'Object':
        return this._pushObject(obj)
      case 'Array':
        return this._pushArray(this, obj)
      case 'Uint8Array':
        return this._pushBuffer(this, Buffer.isBuffer(obj) ? obj : Buffer.from(obj))
      case 'Null':
        return this._pushUInt8(NULL)
      case 'Undefined':
        return this._pushUndefined(obj)
      case 'Map':
        return this._pushMap(this, obj)
      case 'Set':
        return this._pushSet(this, obj)
      case 'URL':
        return this._pushUrl(this, obj)
      case 'BigNumber':
        return this._pushBigNumber(this, obj)
      case 'Date':
        return this._pushDate(this, obj)
      case 'RegExp':
        return this._pushRegexp(this, obj)
      case 'Symbol':
        switch (obj) {
          case SYMS.NULL:
            return this._pushObject(null)
          case SYMS.UNDEFINED:
            return this._pushUndefined(undefined)
          // TODO: Add pluggable support for other symbols
          default:
            throw new Error('Unknown symbol: ' + obj.toString())
        }
      default:
        throw new Error('Unknown type: ' + typeof obj + ', ' + (obj ? obj.toString() : ''))
    }
  }

  finalize () {
    if (this.offset === 0) {
      return null
    }

    var result = this.result
    var resultLength = this.resultLength
    var resultMethod = this.resultMethod
    var offset = this.offset

    // Determine the size of the buffer
    var size = 0
    var i = 0

    for (; i < offset; i++) {
      size += resultLength[i]
    }

    var res = Buffer.allocUnsafe(size)
    var index = 0
    var length = 0

    // Write the content into the result buffer
    for (i = 0; i < offset; i++) {
      length = resultLength[i]

      switch (resultMethod[i]) {
        case 0:
          result[i].copy(res, index)
          break
        case 1:
          res.writeUInt8(result[i], index, true)
          break
        case 2:
          res.writeUInt16BE(result[i], index, true)
          break
        case 3:
          res.writeUInt32BE(result[i], index, true)
          break
        case 4:
          res.writeDoubleBE(result[i], index, true)
          break
        case 5:
          res.write(result[i], index, length, 'utf8')
          break
        default:
          throw new Error('unkown method')
      }

      index += length
    }

    var tmp = res

    this._reset()

    return tmp
  }

  _reset () {
    this.result = []
    this.resultMethod = []
    this.resultLength = []
    this.offset = 0
  }

  /**
   * Encode the given value
   * @param {*} o
   * @returns {Buffer}
   */
  static encode (o) {
    const enc = new Encoder()
    const ret = enc.pushAny(o)
    if (!ret) {
      throw new Error('Failed to encode input')
    }

    return enc.finalize()
  }
}

module.exports = Encoder


/***/ }),

/***/ "MbHH":
/*!*******************************************!*\
  !*** ./node_modules/rlp-browser/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const assert = __webpack_require__(/*! assert */ "9lTW")
const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer
/**
 * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP
 * This function takes in a data, convert it to buffer if not, and a length for recursion
 *
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Buffer} - returns buffer of encoded data
 **/
exports.encode = function (input) {
  if (input instanceof Array) {
    var output = []
    for (var i = 0; i < input.length; i++) {
      output.push(exports.encode(input[i]))
    }
    var buf = Buffer.concat(output)
    return Buffer.concat([encodeLength(buf.length, 192), buf])
  } else {
    input = toBuffer(input)
    if (input.length === 1 && input[0] < 128) {
      return input
    } else {
      return Buffer.concat([encodeLength(input.length, 128), input])
    }
  }
}

function safeParseInt (v, base) {
  if (v.slice(0, 2) === '00') {
    throw (new Error('invalid RLP: extra zeros'))
  }

  return parseInt(v, base)
}

function encodeLength (len, offset) {
  if (len < 56) {
    return new Buffer([len + offset])
  } else {
    var hexLength = intToHex(len)
    var lLength = hexLength.length / 2
    var firstByte = intToHex(offset + 55 + lLength)
    return new Buffer(firstByte + hexLength, 'hex')
  }
}

/**
 * RLP Decoding based on: {@link https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP|RLP}
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Array} - returns decode Array of Buffers containg the original message
 **/
exports.decode = function (input, stream) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var decoded = _decode(input)

  if (stream) {
    return decoded
  }

  assert.equal(decoded.remainder.length, 0, 'invalid remainder')
  return decoded.data
}

exports.getLength = function (input) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var firstByte = input[0]
  if (firstByte <= 0x7f) {
    return input.length
  } else if (firstByte <= 0xb7) {
    return firstByte - 0x7f
  } else if (firstByte <= 0xbf) {
    return firstByte - 0xb6
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    return firstByte - 0xbf
  } else {
    // a list  over 55 bytes long
    var llength = firstByte - 0xf6
    var length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    return llength + length
  }
}

function _decode (input) {
  var length, llength, data, innerRemainder, d
  var decoded = []
  var firstByte = input[0]

  if (firstByte <= 0x7f) {
    // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.
    return {
      data: input.slice(0, 1),
      remainder: input.slice(1)
    }
  } else if (firstByte <= 0xb7) {
    // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
    // The range of the first byte is [0x80, 0xb7]
    length = firstByte - 0x7f

    // set 0x80 null to 0
    if (firstByte === 0x80) {
      data = new Buffer([])
    } else {
      data = input.slice(1, length)
    }

    if (length === 2 && data[0] < 0x80) {
      throw new Error('invalid rlp encoding: byte must be less 0x80')
    }

    return {
      data: data,
      remainder: input.slice(length)
    }
  } else if (firstByte <= 0xbf) {
    llength = firstByte - 0xb6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    data = input.slice(llength, length + llength)
    if (data.length < length) {
      throw (new Error('invalid RLP'))
    }

    return {
      data: data,
      remainder: input.slice(length + llength)
    }
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    length = firstByte - 0xbf
    innerRemainder = input.slice(1, length)
    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }

    return {
      data: decoded,
      remainder: input.slice(length)
    }
  } else {
    // a list  over 55 bytes long
    llength = firstByte - 0xf6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    var totalLength = llength + length
    if (totalLength > input.length) {
      throw new Error('invalid rlp: total length is larger than the data')
    }

    innerRemainder = input.slice(llength, totalLength)
    if (innerRemainder.length === 0) {
      throw new Error('invalid rlp, List has a invalid length')
    }

    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }
    return {
      data: decoded,
      remainder: input.slice(totalLength)
    }
  }
}

function isHexPrefixed (str) {
  return str.slice(0, 2) === '0x'
}

// Removes 0x from a given String
function stripHexPrefix (str) {
  if (typeof str !== 'string') {
    return str
  }
  return isHexPrefixed(str) ? str.slice(2) : str
}

function intToHex (i) {
  var hex = i.toString(16)
  if (hex.length % 2) {
    hex = '0' + hex
  }

  return hex
}

function padToEven (a) {
  if (a.length % 2) a = '0' + a
  return a
}

function intToBuffer (i) {
  var hex = intToHex(i)
  return new Buffer(hex, 'hex')
}

function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (typeof v === 'string') {
      if (isHexPrefixed(v)) {
        v = new Buffer(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = new Buffer(v)
      }
    } else if (typeof v === 'number') {
      if (!v) {
        v = new Buffer([])
      } else {
        v = intToBuffer(v)
      }
    } else if (v === null || v === undefined) {
      v = new Buffer([])
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = new Buffer(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}


/***/ }),

/***/ "MgST":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read-int.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "yE/9");
/* harmony import */ var _bits_not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bits/not */ "IunX");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read */ "UPHr");



/**
 * Converts a section of a buffer to a signed integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => -10
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the signed integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @return {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = 8; }
    var bits = Object(_read__WEBPACK_IMPORTED_MODULE_2__["default"])(buffer, offset, length);
    if (bits[0] === 0) {
        var result = 0;
        for (var i = 0; i < length; i++)
            if (bits[i])
                result += _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
        return result;
    }
    else {
        var result = -1;
        var inverted = Object(_bits_not__WEBPACK_IMPORTED_MODULE_1__["default"])(bits);
        for (var i = 0; i < length; i++)
            if (inverted[i])
                result -= _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
        return result;
    }
});


/***/ }),

/***/ "Mh05":
/*!******************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-xnor.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the XNOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXnor([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} XNOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result ^= bits[i] ^ 1;
    return result;
});


/***/ }),

/***/ "PLHu":
/*!***********************************************!*\
  !*** ./node_modules/gridplus-sdk/src/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Static utility functions
const { buildBitcoinTxRequest } = __webpack_require__(/*! ./bitcoin */ "6WMX");
const { buildEthereumTxRequest, buildEthereumMsgRequest, ensureHexBuffer } = __webpack_require__(/*! ./ethereum */ "xKF7");
const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer
const aes = __webpack_require__(/*! aes-js */ "lnXz");
const crc32 = __webpack_require__(/*! crc-32 */ "cC09");
const elliptic = __webpack_require__(/*! elliptic */ "MzeL");
const { AES_IV, responseCodes, responseMsgs, VERSION_BYTE } = __webpack_require__(/*! ./constants */ "L21C");
const EC = elliptic.ec;
const ec = new EC('p256');

//--------------------------------------------------
// LATTICE UTILS
//--------------------------------------------------

// Parse a response from the Lattice1
function parseLattice1Response(r) {
  const parsed = {
    err: null,
    data: null,
  }
  const b = Buffer.from(r, 'hex');
  let off = 0;
  
  // Get protocol version
  const protoVer = b.readUInt8(off); off++;
  if (protoVer !== VERSION_BYTE) {
    parsed.err = 'Incorrect protocol version. Please update your SDK';
    return parsed;
  }

  // Get the type of response
  // Should always be 0x00
  const msgType = b.readUInt8(off); off++;
  if (msgType !== 0x00) {
    parsed.err = 'Incorrect response from Lattice1';
    return parsed;
  }

  // Get the payload
  b.readUInt32BE(off); off+=4; // First 4 bytes is the id, but we don't need that anymore
  const len = b.readUInt16BE(off); off+=2;
  const payload = b.slice(off, off+len); off+=len;

  // Get response code
  const responseCode = payload.readUInt8(0);
  if (responseCode !== responseCodes.RESP_SUCCESS) {
    parsed.err = `Error from device: ${responseMsgs[responseCode] ? responseMsgs[responseCode] : 'Unknown Error'}`;
    parsed.responseCode = responseCode;
    return parsed;
  } else {
    parsed.data = payload.slice(1, payload.length);
  }

  // Verify checksum
  const cs = b.readUInt32BE(off);
  const expectedCs = checksum(b.slice(0, b.length - 4));
  if (cs !== expectedCs) {
    parsed.err = 'Invalid checksum from device response'
    parsed.data = null;
    return parsed;
  }
  
  return parsed;
}

function checksum(x) {
  // crc32 returns a signed integer - need to cast it to unsigned
  // Note that this uses the default 0xedb88320 polynomial
  return crc32.buf(x) >>> 0; // Need this to be a uint, hence the bit shift
}

// Get a 74-byte padded DER-encoded signature buffer
// `sig` must be the signature output from elliptic.js
function toPaddedDER(sig) {
  // We use 74 as the maximum length of a DER signature. All sigs must
  // be right-padded with zeros so that this can be a fixed size field
  const b = Buffer.alloc(74);
  const ds = Buffer.from(sig.toDER());
  ds.copy(b);
  return b;
}

//--------------------------------------------------
// TRANSACTION UTILS
//--------------------------------------------------
const signReqResolver = {
  'BTC': buildBitcoinTxRequest,
  'ETH': buildEthereumTxRequest,
  'ETH_MSG': buildEthereumMsgRequest,
}

// Temporary helper to determine if this is a supported BIP44 parent path
function isValidAssetPath(path) {
  const HARDENED_OFFSET = 0x80000000;
  const allowedPurposes = [HARDENED_OFFSET+49, HARDENED_OFFSET+44];
  const allowedCoins = [HARDENED_OFFSET, HARDENED_OFFSET+1, HARDENED_OFFSET+60];
  const allowedAccounts = [HARDENED_OFFSET];
  const allowedChange = [0, 1]
  return (
    (allowedPurposes.indexOf(path[0]) >= 0) &&
    (allowedCoins.indexOf(path[1]) >= 0) &&
    (allowedAccounts.indexOf(path[2]) >= 0) &&
    (allowedChange.indexOf(path[3]) >= 0)
  );
}

function isValidCoinType(path) {
  return [0x80000000, 0x80000000+1, 0x80000000+60].indexOf(path[1]) >= 0
}

//--------------------------------------------------
// CRYPTO UTILS
//--------------------------------------------------
function aes256_encrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  const paddedData = (data.length) % 16 === 0 ? data : aes.padding.pkcs7.pad(data);
  return Buffer.from(aesCbc.encrypt(paddedData));
}

function aes256_decrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  return Buffer.from(aesCbc.decrypt(data));
}

// Decode a DER signature. Returns signature object {r, s } or null if there is an error
function parseDER(sigBuf) {
  if (sigBuf[0] !== 0x30 || sigBuf[2] !== 0x02) return null;
  let off = 3;
  const sig = { r: null, s: null }
  const rLen = sigBuf[off]; off++;
  sig.r = sigBuf.slice(off, off + rLen); off += rLen
  if (sigBuf[off] !== 0x02) return null;
  off++;
  const sLen = sigBuf[off]; off++;
  sig.s = sigBuf.slice(off, off + sLen);
  return sig;
}

function getP256KeyPair (priv) {
  return ec.keyFromPrivate(priv, 'hex');
}

function getP256KeyPairFromPub(pub) {
  return ec.keyFromPublic(pub, 'hex');
}


module.exports = {
  isValidAssetPath,
  isValidCoinType,
  ensureHexBuffer,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  parseLattice1Response,
  getP256KeyPair,
  getP256KeyPairFromPub,
  toPaddedDER,
}

/***/ }),

/***/ "PV6L":
/*!**********************************************!*\
  !*** ./node_modules/iso-url/src/relative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ "HwtC");

module.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {
    let protocol = location.protocol ?
        location.protocol.replace(':', '') :
        'http';

    // Check protocol map
    protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':';
    let urlParsed;

    try {
        urlParsed = new URLWithLegacySupport(url);
    } catch (err) {
        urlParsed = {};
    }

    const base = Object.assign({}, location, {
        protocol: protocol || urlParsed.protocol,
        host: location.host || urlParsed.host
    });

    return new URLWithLegacySupport(url, format(base)).toString();
};


/***/ }),

/***/ "Qhm4":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-and.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the AND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceAnd([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} AND bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result &= bits[i];
    return result;
});


/***/ }),

/***/ "SfLZ":
/*!********************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/toggle-bit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Toggles a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @returns {Integer} updated number
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position) { return int32 ^ (1 << position); });


/***/ }),

/***/ "UBEi":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/and.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the AND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,0,0,1,0,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 AND bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] & bits2[i]);
    return result;
});


/***/ }),

/***/ "UHYx":
/*!*****************************************!*\
  !*** ./node_modules/borc/src/simple.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const constants = __webpack_require__(/*! ./constants */ "hb4V")
const MT = constants.MT
const SIMPLE = constants.SIMPLE
const SYMS = constants.SYMS

/**
 * A CBOR Simple Value that does not map onto a known constant.
 */
class Simple {
  /**
   * Creates an instance of Simple.
   *
   * @param {integer} value - the simple value's integer value
   */
  constructor (value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid Simple type: ' + (typeof value))
    }
    if ((value < 0) || (value > 255) || ((value | 0) !== value)) {
      throw new Error('value must be a small positive integer: ' + value)
    }
    this.value = value
  }

  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  toString () {
    return 'simple(' + this.value + ')'
  }

  /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */
  inspect () {
    return 'simple(' + this.value + ')'
  }

  /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */
  encodeCBOR (gen) {
    return gen._pushInt(this.value, MT.SIMPLE_FLOAT)
  }

  /**
   * Is the given object a Simple?
   *
   * @param {any} obj - object to test
   * @returns {bool} - is it Simple?
   */
  static isSimple (obj) {
    return obj instanceof Simple
  }

  /**
   * Decode from the CBOR additional information into a JavaScript value.
   * If the CBOR item has no parent, return a "safe" symbol instead of
   * `null` or `undefined`, so that the value can be passed through a
   * stream in object mode.
   *
   * @param {Number} val - the CBOR additional info to convert
   * @param {bool} hasParent - Does the CBOR item have a parent?
   * @returns {(null|undefined|Boolean|Symbol)} - the decoded value
   */
  static decode (val, hasParent) {
    if (hasParent == null) {
      hasParent = true
    }
    switch (val) {
      case SIMPLE.FALSE:
        return false
      case SIMPLE.TRUE:
        return true
      case SIMPLE.NULL:
        if (hasParent) {
          return null
        } else {
          return SYMS.NULL
        }
      case SIMPLE.UNDEFINED:
        if (hasParent) {
          return undefined
        } else {
          return SYMS.UNDEFINED
        }
      case -1:
        if (!hasParent) {
          throw new Error('Invalid BREAK')
        }
        return SYMS.BREAK
      default:
        return new Simple(val)
    }
  }
}

module.exports = Simple


/***/ }),

/***/ "UPHr":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/read */ "gb0s");

/**
 * Returns an Array containing bitLength bits starting at bitOffset.
 *
 * @example
 * readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 * @param {Buffer} buffer the buffer to read
 * @param {Number} offset where to start (in bits)
 * @param {Number} length how many bits to read
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (!length)
        length = buffer.length * 8 - offset;
    var start = Math.floor(offset / 8);
    var bytesToRead = Math.floor(length / 8) + 2;
    var arr = [];
    arr.length = bytesToRead * 8;
    for (var i = 0; i < bytesToRead; i++) {
        var toRead = buffer[start + i];
        if (toRead === undefined)
            continue;
        var bits = Object(_byte_read__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer[start + i]);
        arr[i * 8] = bits[0];
        arr[i * 8 + 1] = bits[1];
        arr[i * 8 + 2] = bits[2];
        arr[i * 8 + 3] = bits[3];
        arr[i * 8 + 4] = bits[4];
        arr[i * 8 + 5] = bits[5];
        arr[i * 8 + 6] = bits[6];
        arr[i * 8 + 7] = bits[7];
    }
    var subOffset = offset % 8;
    return arr.slice(subOffset, subOffset + length);
});


/***/ }),

/***/ "WtjK":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/xor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the exclusive or operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,0,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] ^ bits2[i]);
    return result;
});


/***/ }),

/***/ "XUzR":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/and.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise AND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.and(a, b, false) => Buffer(a AND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a AND b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] & b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "XYxn":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/to-boolean.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a bit array to a boolean array.
 *
 * @example toBoolean([0, 1]) => [false, true]
 * @param {Array} bits input data
 * @returns {Array} boolean bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++)
        result[i] = bits[i] === 1;
    return result;
});


/***/ }),

/***/ "XuWj":
/*!****************************************!*\
  !*** ./node_modules/borc/src/utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Buffer } = __webpack_require__(/*! buffer */ "tjlA")
const Bignumber = __webpack_require__(/*! bignumber.js */ "kB5k").BigNumber

const constants = __webpack_require__(/*! ./constants */ "hb4V")
const SHIFT32 = constants.SHIFT32
const SHIFT16 = constants.SHIFT16
const MAX_SAFE_HIGH = 0x1fffff

exports.parseHalf = function parseHalf (buf) {
  var exp, mant, sign
  sign = buf[0] & 0x80 ? -1 : 1
  exp = (buf[0] & 0x7C) >> 2
  mant = ((buf[0] & 0x03) << 8) | buf[1]
  if (!exp) {
    return sign * 5.9604644775390625e-8 * mant
  } else if (exp === 0x1f) {
    return sign * (mant ? 0 / 0 : 2e308)
  } else {
    return sign * Math.pow(2, exp - 25) * (1024 + mant)
  }
}

function toHex (n) {
  if (n < 16) {
    return '0' + n.toString(16)
  }

  return n.toString(16)
}

exports.arrayBufferToBignumber = function (buf) {
  const len = buf.byteLength
  let res = ''
  for (let i = 0; i < len; i++) {
    res += toHex(buf[i])
  }

  return new Bignumber(res, 16)
}

// convert an Object into a Map
exports.buildMap = (obj) => {
  const res = new Map()
  const keys = Object.keys(obj)
  const length = keys.length
  for (let i = 0; i < length; i++) {
    res.set(keys[i], obj[keys[i]])
  }
  return res
}

exports.buildInt32 = (f, g) => {
  return f * SHIFT16 + g
}

exports.buildInt64 = (f1, f2, g1, g2) => {
  const f = exports.buildInt32(f1, f2)
  const g = exports.buildInt32(g1, g2)

  if (f > MAX_SAFE_HIGH) {
    return new Bignumber(f).times(SHIFT32).plus(g)
  } else {
    return (f * SHIFT32) + g
  }
}

exports.writeHalf = function writeHalf (buf, half) {
  // assume 0, -0, NaN, Infinity, and -Infinity have already been caught

  // HACK: everyone settle in.  This isn't going to be pretty.
  // Translate cn-cbor's C code (from Carsten Borman):

  // uint32_t be32;
  // uint16_t be16, u16;
  // union {
  //   float f;
  //   uint32_t u;
  // } u32;
  // u32.f = float_val;

  const u32 = Buffer.allocUnsafe(4)
  u32.writeFloatBE(half, 0)
  const u = u32.readUInt32BE(0)

  // if ((u32.u & 0x1FFF) == 0) { /* worth trying half */

  // hildjj: If the lower 13 bits are 0, we won't lose anything in the conversion
  if ((u & 0x1FFF) !== 0) {
    return false
  }

  //   int s16 = (u32.u >> 16) & 0x8000;
  //   int exp = (u32.u >> 23) & 0xff;
  //   int mant = u32.u & 0x7fffff;

  var s16 = (u >> 16) & 0x8000 // top bit is sign
  const exp = (u >> 23) & 0xff // then 5 bits of exponent
  const mant = u & 0x7fffff

  //   if (exp == 0 && mant == 0)
  //     ;              /* 0.0, -0.0 */

  // hildjj: zeros already handled.  Assert if you don't believe me.

  //   else if (exp >= 113 && exp <= 142) /* normalized */
  //     s16 += ((exp - 112) << 10) + (mant >> 13);
  if ((exp >= 113) && (exp <= 142)) {
    s16 += ((exp - 112) << 10) + (mant >> 13)

  //   else if (exp >= 103 && exp < 113) { /* denorm, exp16 = 0 */
  //     if (mant & ((1 << (126 - exp)) - 1))
  //       goto float32;         /* loss of precision */
  //     s16 += ((mant + 0x800000) >> (126 - exp));
  } else if ((exp >= 103) && (exp < 113)) {
    if (mant & ((1 << (126 - exp)) - 1)) {
      return false
    }
    s16 += ((mant + 0x800000) >> (126 - exp))

    //   } else if (exp == 255 && mant == 0) { /* Inf */
    //     s16 += 0x7c00;

    // hildjj: Infinity already handled

  //   } else
  //     goto float32;           /* loss of range */
  } else {
    return false
  }

  //   ensure_writable(3);
  //   u16 = s16;
  //   be16 = hton16p((const uint8_t*)&u16);
  buf.writeUInt16BE(s16, 0)
  return true
}

exports.keySorter = function (a, b) {
  var lenA = a[0].byteLength
  var lenB = b[0].byteLength

  if (lenA > lenB) {
    return 1
  }

  if (lenB > lenA) {
    return -1
  }

  return a[0].compare(b[0])
}

// Adapted from http://www.2ality.com/2012/03/signedzero.html
exports.isNegativeZero = (x) => {
  return x === 0 && (1 / x < 0)
}

exports.nextPowerOf2 = (n) => {
  let count = 0
  // First n in the below condition is for
  // the case where n is 0
  if (n && !(n & (n - 1))) {
    return n
  }

  while (n !== 0) {
    n >>= 1
    count += 1
  }

  return 1 << count
}


/***/ }),

/***/ "YnKP":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/or.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise OR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.or(a, b, false) => Buffer(a OR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a OR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] | b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "aFzb":
/*!***************************************************!*\
  !*** ./node_modules/eth-lattice-keyring/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {const crypto = __webpack_require__(/*! crypto */ "HEbw");
const EventEmitter = __webpack_require__(/*! events */ "+qE3").EventEmitter;
const SDK = __webpack_require__(/*! gridplus-sdk */ "4Mn8");
const keyringType = 'Lattice Hardware';
const HARDENED_OFFSET = 0x80000000;
const PER_PAGE = 5;
const CLOSE_CODE = -1000;

class LatticeKeyring extends EventEmitter {
  constructor (opts={}) {
    super()
    this.type = keyringType
    this._resetDefaults();
    this.deserialize(opts);
  }

  //-------------------------------------------------------------------
  // Keyring API (per `https://github.com/MetaMask/eth-simple-keyring`)
  //-------------------------------------------------------------------
  deserialize (opts = {}) {
    if (opts.creds)
      this.creds = opts.creds;
    if (opts.accounts)
      this.accounts = opts.accounts;
    if (opts.walletUID)
      this.walletUID = opts.walletUID;
    if (opts.name)
      this.name = opts.name;
    if (opts.network)
      this.network = opts.network;
    return Promise.resolve()
  }

  serialize() {
    return Promise.resolve({
      creds: this.creds,
      accounts: this.accounts,
      walletUID: this.walletUID,
      name: this.name,
      network: this.network,
    })
  }

  isUnlocked () {
    return this._hasCreds() && this._hasSession()
  }

  setHdPath() {
    console.warn("setHdPath not implemented.")
    return;
  }

  // Initialize a session with the Lattice1 device using the GridPlus SDK
  unlock(updateData=true) {
    return new Promise((resolve, reject) => {
      this._getCreds()
      .then((creds) => {
        if (creds) {
          this.creds.deviceID = creds.deviceID;
          this.creds.password = creds.password;
        }
        return this._initSession();
      })
      .then(() => {
        return this._connect(updateData);
      })
      .then(() => {
        return resolve('Unlocked');
      })
      .catch((err) => {
        return reject(new Error(err));
      })
    })
  }

  // Add addresses to the local store and return the full result
  addAccounts(n=1) {
    return new Promise((resolve, reject) => {
      if (n === CLOSE_CODE) {
        // Special case: use a code to forget the device. 
        // (This function is overloaded due to constraints upstream)
        this.forgetDevice();
        return resolve([]);
      } else if (n <= 0) {
        // Avoid non-positive numbers.
        return reject('Number of accounts to add must be a positive number.');
      } else {
        // Normal behavior: establish the connection and fetch addresses.
        this.unlock()
        .then(() => {
          return this._fetchAddresses(n, this.unlockedAccount)
        })
        .then((addrs) => {
          // Splice the new account(s) into `this.accounts`
          this.accounts.splice(this.unlockedAccount, n);
          this.accounts.splice(this.unlockedAccount, 0, ...addrs);
          return resolve(this.accounts);
        })
        .catch((err) => {
          return reject(new Error(err));
        })
      }
    })
  }

  // Return the local store of addresses
  getAccounts() {
    return Promise.resolve(this.accounts ? this.accounts.slice() : [].slice());
  }

  signTransaction (address, tx) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        // Build the Lattice request data and make request
        const txData = {
          chainId: tx.getChainId() || 1,
          nonce: Number(`0x${tx.nonce.toString('hex')}`) || 0,
          gasPrice: Number(`0x${tx.gasPrice.toString('hex')}`),
          gasLimit: Number(`0x${tx.gasLimit.toString('hex')}`),
          to: `0x${tx.to.toString('hex')}`,
          value: Number(`0x${tx.value.toString('hex')}`),
          data: tx.data.length === 0 ? null : `0x${tx.data.toString('hex')}`,
          signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
        }
        return this._signTxData(txData)
      })
      .then((signedTx) => {
        // Add the sig params. `signedTx = { sig: { v, r, s }, tx, txHash}`
        if (!signedTx.sig || !signedTx.sig.v || !signedTx.sig.r || !signedTx.sig.s)
          return reject(Error('No signature returned'));
        tx.v = signedTx.sig.v;
        tx.r = Buffer.from(signedTx.sig.r, 'hex');
        tx.s = Buffer.from(signedTx.sig.s, 'hex');
        return resolve(tx);
      })
      .catch((err) => {
        return reject(new Error(err));
      })
    })
  }

  signPersonalMessage(address, msg) {
    return this.signMessage(address, { payload: msg, protocol: 'signPersonal' });
  }

  signMessage(address, msg) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        const { payload, protocol } = msg;
        if (!payload || !protocol)
          return reject('`payload` and `protocol` fields must be included in the request');
        const req = {
          currency: 'ETH_MSG',
          data: {
            protocol,
            payload,
            signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
          }
        }
        if (!this._hasSession())
          return reject('No SDK session started. Cannot sign transaction.')
        this.sdkSession.sign(req, (err, res) => {
          if (err)
            return reject(new Error(err));
          if (!res.sig)
            return reject('No signature returned');
          let v = (res.sig.v - 27).toString(16);
          if (v.length < 2)
            v = `0${v}`;
          return resolve(`0x${res.sig.r}${res.sig.s}${v}`);
        })
      })
    })
  }

  exportAccount(address) {
    return Promise.reject(Error('exportAccount not supported by this device'))
  }

  removeAccount(address) {
    // We only allow one account at a time, so removing any account
    // should result in a state reset. The user will need to reconnect
    // to the Lattice
    this.forgetDevice();
  }

  getFirstPage() {
    this.page = 0;
    return this._getPage(1);
  }

  getNextPage () {
    return this.getFirstPage();
  }

  getPreviousPage () {
    return this.getFirstPage();
  }

  setAccountToUnlock (index) {
    this.unlockedAccount = parseInt(index, 10)
  }

  forgetDevice () {
    this._resetDefaults();
  }

  //-------------------------------------------------------------------
  // Internal methods and interface to SDK
  //-------------------------------------------------------------------
  _unlockAndFindAccount(address) {
    return new Promise((resolve, reject) => {
      // NOTE: We are passing `false` here because we do NOT want
      // state data to be updated as a result of a transaction request.
      // It is possible the user inserted or removed a SafeCard and
      // will not be able to sign this transaction. If that is the
      // case, we just want to return an error message
      this.unlock(false)
      .then(() => {
        return this.getAccounts()
      })
      .then((addrs) => {
        // Find the signer in our current set of accounts
        // If we can't find it, return an error
        let addrIdx = null;
        addrs.forEach((addr, i) => {
          if (address.toLowerCase() === addr.toLowerCase())
            addrIdx = i;
        })
        if (addrIdx === null)
          return reject('Signer not present');
        return resolve(addrIdx);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }


  _resetDefaults() {
    this.accounts = [];
    this.isLocked = true;
    this.creds = {
      deviceID: null,
      password: null,
    };
    this.walletUID = null;
    this.sdkSession = null;
    this.page = 0;
    this.unlockedAccount = 0;
    this.network = null;
  }

  _getCreds() {
    return new Promise((resolve, reject) => {
      // We only need to setup if we don't have a deviceID
      if (this._hasCreds())
        return resolve();

      // If we are not aware of what Lattice we should be talking to,
      // we need to open a window that lets the user go through the
      // pairing or connection process.
      const name = this.name ? this.name : 'Unknown'
      let base = 'https://wallet.gridplus.io';
      switch (this.network) {
        case 'rinkeby':
          base = 'https://gridplus-web-wallet-dev.herokuapp.com';
          break;
        default:
          break;
      }
      let url = `${base}?keyring=${name}`;
      if (this.network)
        url += `&network=${this.network}`
      const popup = window.open(url);
      popup.postMessage('GET_LATTICE_CREDS', base);

      // PostMessage handler
      function receiveMessage(event) {
        // Ensure origin
        if (event.origin !== base)
          return;
        // Parse response data
        try {
          const data = JSON.parse(event.data);
          if (!data.deviceID || !data.password)
            return reject(Error('Invalid credentials returned from Lattice.'));
          return resolve(data);
        } catch (err) {
          return reject(err);
        }
      }
      window.addEventListener("message", receiveMessage, false);
    })
  }

  // [re]connect to the Lattice. This should be done frequently to ensure
  // the expected wallet UID is still the one active in the Lattice.
  // This will handle SafeCard insertion/removal events.
  // updateData - true if you want to overwrite walletUID and accounts in
  //              the event that we find we are not synced.
  //              If left false and we notice a new walletUID, we will
  //              return an error.
  _connect(updateData) {
    return new Promise((resolve, reject) => {
      this.sdkSession.connect(this.creds.deviceID, (err) => {
        if (err)
          return reject(err);
        // Save the current wallet UID
        const activeWallet = this.sdkSession.getActiveWallet();
        if (!activeWallet || !activeWallet.uid)
          return reject("No active wallet");
        const newUID = activeWallet.uid.toString('hex');
        // If we fetched a walletUID that does not match our current one,
        // reset accounts and update the known UID
        if (newUID != this.walletUID) {
          // If we don't want to update data, return an error
          if (updateData === false)
            return reject('Wallet has changed! Please reconnect.')
          
          // By default we should clear out accounts and update with
          // the new walletUID. We should NOT fill in the accounts yet,
          // as we reserve that functionality to `addAccounts`
          this.accounts = [];
          this.walletUID = newUID;
        }
        return resolve();
      });
    })
  }

  _initSession() {
    return new Promise((resolve, reject) => {
      if (this._hasSession())
        return resolve();
      try {
        let url = 'https://signing.gridpl.us';
        if (this.network && this.network !== 'mainnet')
          url = 'https://signing.staging-gridpl.us'
        const setupData = {
          name: this.name,
          baseUrl: url,
          crypto,
          timeout: 120000,
          privKey: this._genSessionKey(),
          network: this.network
        }
        this.sdkSession = new SDK.Client(setupData);
        return resolve();
      } catch (err) {
        return reject(err);
      }
    })
  }

  _fetchAddresses(n=1, i=0) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot fetch addresses.')

      // The Lattice does not allow for us to skip indices.
      if (i > this.accounts.length)
        return reject(`Requested address is out of bounds. You may only request index <${this.accounts.length}`)

      // If we have already cached the address(es), we don't need to do it again
      if (this.accounts.length > i)
        return resolve(this.accounts.slice(i, n));
      
      // Make the request to get the requested address
      const addrData = { 
        currency: 'ETH', 
        startPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, i], 
        n, // Only request one at a time. This module only supports ETH, so no gap limits
      }
      this.sdkSession.getAddresses(addrData, (err, addrs) => {
        if (err)
          return reject(Error(`Error getting addresses: ${err}`));
        // Sanity check -- if this returned 0 addresses, handle the error
        if (addrs.length < 1)
          return reject('No addresses returned');
        // Return the addresses we fetched *without* updating state
        return resolve(addrs);
      })
    })
  }

  _signTxData(txData) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot sign transaction.')
      this.sdkSession.sign({ currency: 'ETH', data: txData }, (err, res) => {
        if (err)
          return reject(err);
        if (!res.tx)
          return reject('No transaction payload returned.');
        return resolve(res)
      })
    })
  }

  _getPage(increment=1) {
    return new Promise((resolve, reject) => {
      this.page += increment;
      if (this.page <= 0)
        this.page = 1;
      const start = PER_PAGE * (this.page - 1);
      const to = PER_PAGE * this.page;

      this.unlock()
      .then(() => {
        // V1: We will only support export of one (the first) address
        return this._fetchAddresses(1, 0);
        //-----------
      })
      .then((addrs) => {
        // Build some account objects from the addresses
        const localAccounts = [];
        addrs.forEach((addr, i) => {
          localAccounts.push({
            address: addr,
            balance: null,
            index: start + i,
          })
        })
        return resolve(localAccounts);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }

  _hasCreds() {
    return this.creds.deviceID !== null && this.creds.password !== null && this.name;
  }

  _hasSession() {
    return this.sdkSession && this.walletUID;
  }

  _genSessionKey() {
    if (!this._hasCreds())
      throw new Error('No credentials -- cannot create session key!');
    const buf = Buffer.concat([
      Buffer.from(this.creds.password), 
      Buffer.from(this.creds.deviceID), 
      Buffer.from(this.name)
    ])
    return crypto.createHash('sha256').update(buf).digest();
  }

}

LatticeKeyring.type = keyringType
module.exports = LatticeKeyring;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "b3gk":
/*!*****************************************!*\
  !*** ./node_modules/bs58check/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createHash = __webpack_require__(/*! create-hash */ "mObS")
var bs58checkBase = __webpack_require__(/*! ./base */ "BumV")

// SHA256(SHA256(buffer))
function sha256x2 (buffer) {
  var tmp = createHash('sha256').update(buffer).digest()
  return createHash('sha256').update(tmp).digest()
}

module.exports = bs58checkBase(sha256x2)


/***/ }),

/***/ "cpc2":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "evRY":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/to-string.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 * @example
 * toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
 *
 * @param {Array} bits the bits to convert
 * @param {Number} spacing where to place the spacers
 * @param {Number} spacer the string used as a spacer
 * @return {String}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits, spacing, spacer) {
    if (spacing === void 0) { spacing = 0; }
    if (spacer === void 0) { spacer = ' '; }
    if (!spacing)
        return bits.join('');
    var result = '';
    for (var i = 0; i < bits.length; i++) {
        result += "" + bits[i];
        if (i % spacing === spacing - 1 && i !== bits.length - 1)
            result += spacer;
    }
    return result;
});


/***/ }),

/***/ "f7RY":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/not.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NOT to the contents of a buffer. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.not(buffer) => Buffer(NOT buffer)
 *
 * @param {Buffer} buffer input data
 * @return {Buffer} Buffer(NOT buffer)
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer) {
    var result = Buffer.alloc(buffer.length);
    for (var i = 0; i < buffer.length; i++)
        result[i] = ~buffer[i];
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "fxaz":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-xor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the XOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} XOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result ^= bits[i];
    return result;
});


/***/ }),

/***/ "gYz7":
/*!**********************************************!*\
  !*** ./node_modules/borc/src/decoder.asm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */

module.exports = function decodeAsm (stdlib, foreign, buffer) {
  'use asm'

  // -- Imports

  var heap = new stdlib.Uint8Array(buffer)
  // var log = foreign.log
  var pushInt = foreign.pushInt
  var pushInt32 = foreign.pushInt32
  var pushInt32Neg = foreign.pushInt32Neg
  var pushInt64 = foreign.pushInt64
  var pushInt64Neg = foreign.pushInt64Neg
  var pushFloat = foreign.pushFloat
  var pushFloatSingle = foreign.pushFloatSingle
  var pushFloatDouble = foreign.pushFloatDouble
  var pushTrue = foreign.pushTrue
  var pushFalse = foreign.pushFalse
  var pushUndefined = foreign.pushUndefined
  var pushNull = foreign.pushNull
  var pushInfinity = foreign.pushInfinity
  var pushInfinityNeg = foreign.pushInfinityNeg
  var pushNaN = foreign.pushNaN
  var pushNaNNeg = foreign.pushNaNNeg

  var pushArrayStart = foreign.pushArrayStart
  var pushArrayStartFixed = foreign.pushArrayStartFixed
  var pushArrayStartFixed32 = foreign.pushArrayStartFixed32
  var pushArrayStartFixed64 = foreign.pushArrayStartFixed64
  var pushObjectStart = foreign.pushObjectStart
  var pushObjectStartFixed = foreign.pushObjectStartFixed
  var pushObjectStartFixed32 = foreign.pushObjectStartFixed32
  var pushObjectStartFixed64 = foreign.pushObjectStartFixed64

  var pushByteString = foreign.pushByteString
  var pushByteStringStart = foreign.pushByteStringStart
  var pushUtf8String = foreign.pushUtf8String
  var pushUtf8StringStart = foreign.pushUtf8StringStart

  var pushSimpleUnassigned = foreign.pushSimpleUnassigned

  var pushTagStart = foreign.pushTagStart
  var pushTagStart4 = foreign.pushTagStart4
  var pushTagStart8 = foreign.pushTagStart8
  var pushTagUnassigned = foreign.pushTagUnassigned

  var pushBreak = foreign.pushBreak

  var pow = stdlib.Math.pow

  // -- Constants


  // -- Mutable Variables

  var offset = 0
  var inputLength = 0
  var code = 0

  // Decode a cbor string represented as Uint8Array
  // which is allocated on the heap from 0 to inputLength
  //
  // input - Int
  //
  // Returns Code - Int,
  // Success = 0
  // Error > 0
  function parse (input) {
    input = input | 0

    offset = 0
    inputLength = input

    while ((offset | 0) < (inputLength | 0)) {
      code = jumpTable[heap[offset] & 255](heap[offset] | 0) | 0

      if ((code | 0) > 0) {
        break
      }
    }

    return code | 0
  }

  // -- Helper Function

  function checkOffset (n) {
    n = n | 0

    if ((((offset | 0) + (n | 0)) | 0) < (inputLength | 0)) {
      return 0
    }

    return 1
  }

  function readUInt16 (n) {
    n = n | 0

    return (
      (heap[n | 0] << 8) | heap[(n + 1) | 0]
    ) | 0
  }

  function readUInt32 (n) {
    n = n | 0

    return (
      (heap[n | 0] << 24) | (heap[(n + 1) | 0] << 16) | (heap[(n + 2) | 0] << 8) | heap[(n + 3) | 0]
    ) | 0
  }

  // -- Initial Byte Handlers

  function INT_P (octet) {
    octet = octet | 0

    pushInt(octet | 0)

    offset = (offset + 1) | 0

    return 0
  }

  function UINT_P_8 (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushInt(heap[(offset + 1) | 0] | 0)

    offset = (offset + 2) | 0

    return 0
  }

  function UINT_P_16 (octet) {
    octet = octet | 0

    if (checkOffset(2) | 0) {
      return 1
    }

    pushInt(
      readUInt16((offset + 1) | 0) | 0
    )

    offset = (offset + 3) | 0

    return 0
  }

  function UINT_P_32 (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushInt32(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0
    )

    offset = (offset + 5) | 0

    return 0
  }

  function UINT_P_64 (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushInt64(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0,
      readUInt16((offset + 5) | 0) | 0,
      readUInt16((offset + 7) | 0) | 0
    )

    offset = (offset + 9) | 0

    return 0
  }

  function INT_N (octet) {
    octet = octet | 0

    pushInt((-1 - ((octet - 32) | 0)) | 0)

    offset = (offset + 1) | 0

    return 0
  }

  function UINT_N_8 (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushInt(
      (-1 - (heap[(offset + 1) | 0] | 0)) | 0
    )

    offset = (offset + 2) | 0

    return 0
  }

  function UINT_N_16 (octet) {
    octet = octet | 0

    var val = 0

    if (checkOffset(2) | 0) {
      return 1
    }

    val = readUInt16((offset + 1) | 0) | 0
    pushInt((-1 - (val | 0)) | 0)

    offset = (offset + 3) | 0

    return 0
  }

  function UINT_N_32 (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushInt32Neg(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0
    )

    offset = (offset + 5) | 0

    return 0
  }

  function UINT_N_64 (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushInt64Neg(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0,
      readUInt16((offset + 5) | 0) | 0,
      readUInt16((offset + 7) | 0) | 0
    )

    offset = (offset + 9) | 0

    return 0
  }

  function BYTE_STRING (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var step = 0

    step = (octet - 64) | 0
    if (checkOffset(step | 0) | 0) {
      return 1
    }

    start = (offset + 1) | 0
    end = (((offset + 1) | 0) + (step | 0)) | 0

    pushByteString(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function BYTE_STRING_8 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(1) | 0) {
      return 1
    }

    length = heap[(offset + 1) | 0] | 0
    start = (offset + 2) | 0
    end = (((offset + 2) | 0) + (length | 0)) | 0

    if (checkOffset((length + 1) | 0) | 0) {
      return 1
    }

    pushByteString(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function BYTE_STRING_16 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(2) | 0) {
      return 1
    }

    length = readUInt16((offset + 1) | 0) | 0
    start = (offset + 3) | 0
    end = (((offset + 3) | 0) + (length | 0)) | 0


    if (checkOffset((length + 2) | 0) | 0) {
      return 1
    }

    pushByteString(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function BYTE_STRING_32 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(4) | 0) {
      return 1
    }

    length = readUInt32((offset + 1) | 0) | 0
    start = (offset + 5) | 0
    end = (((offset + 5) | 0) + (length | 0)) | 0


    if (checkOffset((length + 4) | 0) | 0) {
      return 1
    }

    pushByteString(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function BYTE_STRING_64 (octet) {
    // NOT IMPLEMENTED
    octet = octet | 0

    return 1
  }

  function BYTE_STRING_BREAK (octet) {
    octet = octet | 0

    pushByteStringStart()

    offset = (offset + 1) | 0

    return 0
  }

  function UTF8_STRING (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var step = 0

    step = (octet - 96) | 0

    if (checkOffset(step | 0) | 0) {
      return 1
    }

    start = (offset + 1) | 0
    end = (((offset + 1) | 0) + (step | 0)) | 0

    pushUtf8String(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function UTF8_STRING_8 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(1) | 0) {
      return 1
    }

    length = heap[(offset + 1) | 0] | 0
    start = (offset + 2) | 0
    end = (((offset + 2) | 0) + (length | 0)) | 0

    if (checkOffset((length + 1) | 0) | 0) {
      return 1
    }

    pushUtf8String(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function UTF8_STRING_16 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(2) | 0) {
      return 1
    }

    length = readUInt16((offset + 1) | 0) | 0
    start = (offset + 3) | 0
    end = (((offset + 3) | 0) + (length | 0)) | 0

    if (checkOffset((length + 2) | 0) | 0) {
      return 1
    }

    pushUtf8String(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function UTF8_STRING_32 (octet) {
    octet = octet | 0

    var start = 0
    var end = 0
    var length = 0

    if (checkOffset(4) | 0) {
      return 1
    }

    length = readUInt32((offset + 1) | 0) | 0
    start = (offset + 5) | 0
    end = (((offset + 5) | 0) + (length | 0)) | 0

    if (checkOffset((length + 4) | 0) | 0) {
      return 1
    }

    pushUtf8String(start | 0, end | 0)

    offset = end | 0

    return 0
  }

  function UTF8_STRING_64 (octet) {
    // NOT IMPLEMENTED
    octet = octet | 0

    return 1
  }

  function UTF8_STRING_BREAK (octet) {
    octet = octet | 0

    pushUtf8StringStart()

    offset = (offset + 1) | 0

    return 0
  }

  function ARRAY (octet) {
    octet = octet | 0

    pushArrayStartFixed((octet - 128) | 0)

    offset = (offset + 1) | 0

    return 0
  }

  function ARRAY_8 (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushArrayStartFixed(heap[(offset + 1) | 0] | 0)

    offset = (offset + 2) | 0

    return 0
  }

  function ARRAY_16 (octet) {
    octet = octet | 0

    if (checkOffset(2) | 0) {
      return 1
    }

    pushArrayStartFixed(
      readUInt16((offset + 1) | 0) | 0
    )

    offset = (offset + 3) | 0

    return 0
  }

  function ARRAY_32 (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushArrayStartFixed32(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0
    )

    offset = (offset + 5) | 0

    return 0
  }

  function ARRAY_64 (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushArrayStartFixed64(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0,
      readUInt16((offset + 5) | 0) | 0,
      readUInt16((offset + 7) | 0) | 0
    )

    offset = (offset + 9) | 0

    return 0
  }

  function ARRAY_BREAK (octet) {
    octet = octet | 0

    pushArrayStart()

    offset = (offset + 1) | 0

    return 0
  }

  function MAP (octet) {
    octet = octet | 0

    var step = 0

    step = (octet - 160) | 0

    if (checkOffset(step | 0) | 0) {
      return 1
    }

    pushObjectStartFixed(step | 0)

    offset = (offset + 1) | 0

    return 0
  }

  function MAP_8 (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushObjectStartFixed(heap[(offset + 1) | 0] | 0)

    offset = (offset + 2) | 0

    return 0
  }

  function MAP_16 (octet) {
    octet = octet | 0

    if (checkOffset(2) | 0) {
      return 1
    }

    pushObjectStartFixed(
      readUInt16((offset + 1) | 0) | 0
    )

    offset = (offset + 3) | 0

    return 0
  }

  function MAP_32 (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushObjectStartFixed32(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0
    )

    offset = (offset + 5) | 0

    return 0
  }

  function MAP_64 (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushObjectStartFixed64(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0,
      readUInt16((offset + 5) | 0) | 0,
      readUInt16((offset + 7) | 0) | 0
    )

    offset = (offset + 9) | 0

    return 0
  }

  function MAP_BREAK (octet) {
    octet = octet | 0

    pushObjectStart()

    offset = (offset + 1) | 0

    return 0
  }

  function TAG_KNOWN (octet) {
    octet = octet | 0

    pushTagStart((octet - 192| 0) | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BIGNUM_POS (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BIGNUM_NEG (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_FRAC (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BIGNUM_FLOAT (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_UNASSIGNED (octet) {
    octet = octet | 0

    pushTagStart((octet - 192| 0) | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BASE64_URL (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BASE64 (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_BASE16 (octet) {
    octet = octet | 0

    pushTagStart(octet | 0)

    offset = (offset + 1 | 0)

    return 0
  }

  function TAG_MORE_1 (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushTagStart(heap[(offset + 1) | 0] | 0)

    offset = (offset + 2 | 0)

    return 0
  }

  function TAG_MORE_2 (octet) {
    octet = octet | 0

    if (checkOffset(2) | 0) {
      return 1
    }

    pushTagStart(
      readUInt16((offset + 1) | 0) | 0
    )

    offset = (offset + 3 | 0)

    return 0
  }

  function TAG_MORE_4 (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushTagStart4(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0
    )

    offset = (offset + 5 | 0)

    return 0
  }

  function TAG_MORE_8 (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushTagStart8(
      readUInt16((offset + 1) | 0) | 0,
      readUInt16((offset + 3) | 0) | 0,
      readUInt16((offset + 5) | 0) | 0,
      readUInt16((offset + 7) | 0) | 0
    )

    offset = (offset + 9 | 0)

    return 0
  }

  function SIMPLE_UNASSIGNED (octet) {
    octet = octet | 0

    pushSimpleUnassigned(((octet | 0) - 224) | 0)

    offset = (offset + 1) | 0

    return 0
  }

  function SIMPLE_FALSE (octet) {
    octet = octet | 0

    pushFalse()

    offset = (offset + 1) | 0

    return 0
  }

  function SIMPLE_TRUE (octet) {
    octet = octet | 0

    pushTrue()

    offset = (offset + 1) | 0

    return 0
  }

  function SIMPLE_NULL (octet) {
    octet = octet | 0

    pushNull()

    offset = (offset + 1) | 0

    return 0
  }

  function SIMPLE_UNDEFINED (octet) {
    octet = octet | 0

    pushUndefined()

    offset = (offset + 1) | 0

    return 0
  }

  function SIMPLE_BYTE (octet) {
    octet = octet | 0

    if (checkOffset(1) | 0) {
      return 1
    }

    pushSimpleUnassigned(heap[(offset + 1) | 0] | 0)

    offset = (offset + 2)  | 0

    return 0
  }

  function SIMPLE_FLOAT_HALF (octet) {
    octet = octet | 0

    var f = 0
    var g = 0
    var sign = 1.0
    var exp = 0.0
    var mant = 0.0
    var r = 0.0
    if (checkOffset(2) | 0) {
      return 1
    }

    f = heap[(offset + 1) | 0] | 0
    g = heap[(offset + 2) | 0] | 0

    if ((f | 0) & 0x80) {
      sign = -1.0
    }

    exp = +(((f | 0) & 0x7C) >> 2)
    mant = +((((f | 0) & 0x03) << 8) | g)

    if (+exp == 0.0) {
      pushFloat(+(
        (+sign) * +5.9604644775390625e-8 * (+mant)
      ))
    } else if (+exp == 31.0) {
      if (+sign == 1.0) {
        if (+mant > 0.0) {
          pushNaN()
        } else {
          pushInfinity()
        }
      } else {
        if (+mant > 0.0) {
          pushNaNNeg()
        } else {
          pushInfinityNeg()
        }
      }
    } else {
      pushFloat(+(
        +sign * pow(+2, +(+exp - 25.0)) * +(1024.0 + mant)
      ))
    }

    offset = (offset + 3) | 0

    return 0
  }

  function SIMPLE_FLOAT_SINGLE (octet) {
    octet = octet | 0

    if (checkOffset(4) | 0) {
      return 1
    }

    pushFloatSingle(
      heap[(offset + 1) | 0] | 0,
      heap[(offset + 2) | 0] | 0,
      heap[(offset + 3) | 0] | 0,
      heap[(offset + 4) | 0] | 0
    )

    offset = (offset + 5) | 0

    return 0
  }

  function SIMPLE_FLOAT_DOUBLE (octet) {
    octet = octet | 0

    if (checkOffset(8) | 0) {
      return 1
    }

    pushFloatDouble(
      heap[(offset + 1) | 0] | 0,
      heap[(offset + 2) | 0] | 0,
      heap[(offset + 3) | 0] | 0,
      heap[(offset + 4) | 0] | 0,
      heap[(offset + 5) | 0] | 0,
      heap[(offset + 6) | 0] | 0,
      heap[(offset + 7) | 0] | 0,
      heap[(offset + 8) | 0] | 0
    )

    offset = (offset + 9) | 0

    return 0
  }

  function ERROR (octet) {
    octet = octet | 0

    return 1
  }

  function BREAK (octet) {
    octet = octet | 0

    pushBreak()

    offset = (offset + 1) | 0

    return 0
  }

  // -- Jump Table

  var jumpTable = [
    // Integer 0x00..0x17 (0..23)
    INT_P, // 0x00
    INT_P, // 0x01
    INT_P, // 0x02
    INT_P, // 0x03
    INT_P, // 0x04
    INT_P, // 0x05
    INT_P, // 0x06
    INT_P, // 0x07
    INT_P, // 0x08
    INT_P, // 0x09
    INT_P, // 0x0A
    INT_P, // 0x0B
    INT_P, // 0x0C
    INT_P, // 0x0D
    INT_P, // 0x0E
    INT_P, // 0x0F
    INT_P, // 0x10
    INT_P, // 0x11
    INT_P, // 0x12
    INT_P, // 0x13
    INT_P, // 0x14
    INT_P, // 0x15
    INT_P, // 0x16
    INT_P, // 0x17
    // Unsigned integer (one-byte uint8_t follows)
    UINT_P_8, // 0x18
    // Unsigned integer (two-byte uint16_t follows)
    UINT_P_16, // 0x19
    // Unsigned integer (four-byte uint32_t follows)
    UINT_P_32, // 0x1a
    // Unsigned integer (eight-byte uint64_t follows)
    UINT_P_64, // 0x1b
    ERROR, // 0x1c
    ERROR, // 0x1d
    ERROR, // 0x1e
    ERROR, // 0x1f
    // Negative integer -1-0x00..-1-0x17 (-1..-24)
    INT_N, // 0x20
    INT_N, // 0x21
    INT_N, // 0x22
    INT_N, // 0x23
    INT_N, // 0x24
    INT_N, // 0x25
    INT_N, // 0x26
    INT_N, // 0x27
    INT_N, // 0x28
    INT_N, // 0x29
    INT_N, // 0x2A
    INT_N, // 0x2B
    INT_N, // 0x2C
    INT_N, // 0x2D
    INT_N, // 0x2E
    INT_N, // 0x2F
    INT_N, // 0x30
    INT_N, // 0x31
    INT_N, // 0x32
    INT_N, // 0x33
    INT_N, // 0x34
    INT_N, // 0x35
    INT_N, // 0x36
    INT_N, // 0x37
    // Negative integer -1-n (one-byte uint8_t for n follows)
    UINT_N_8, // 0x38
    // Negative integer -1-n (two-byte uint16_t for n follows)
    UINT_N_16, // 0x39
    // Negative integer -1-n (four-byte uint32_t for nfollows)
    UINT_N_32, // 0x3a
    // Negative integer -1-n (eight-byte uint64_t for n follows)
    UINT_N_64, // 0x3b
    ERROR, // 0x3c
    ERROR, // 0x3d
    ERROR, // 0x3e
    ERROR, // 0x3f
    // byte string (0x00..0x17 bytes follow)
    BYTE_STRING, // 0x40
    BYTE_STRING, // 0x41
    BYTE_STRING, // 0x42
    BYTE_STRING, // 0x43
    BYTE_STRING, // 0x44
    BYTE_STRING, // 0x45
    BYTE_STRING, // 0x46
    BYTE_STRING, // 0x47
    BYTE_STRING, // 0x48
    BYTE_STRING, // 0x49
    BYTE_STRING, // 0x4A
    BYTE_STRING, // 0x4B
    BYTE_STRING, // 0x4C
    BYTE_STRING, // 0x4D
    BYTE_STRING, // 0x4E
    BYTE_STRING, // 0x4F
    BYTE_STRING, // 0x50
    BYTE_STRING, // 0x51
    BYTE_STRING, // 0x52
    BYTE_STRING, // 0x53
    BYTE_STRING, // 0x54
    BYTE_STRING, // 0x55
    BYTE_STRING, // 0x56
    BYTE_STRING, // 0x57
    // byte string (one-byte uint8_t for n, and then n bytes follow)
    BYTE_STRING_8, // 0x58
    // byte string (two-byte uint16_t for n, and then n bytes follow)
    BYTE_STRING_16, // 0x59
    // byte string (four-byte uint32_t for n, and then n bytes follow)
    BYTE_STRING_32, // 0x5a
    // byte string (eight-byte uint64_t for n, and then n bytes follow)
    BYTE_STRING_64, // 0x5b
    ERROR, // 0x5c
    ERROR, // 0x5d
    ERROR, // 0x5e
    // byte string, byte strings follow, terminated by "break"
    BYTE_STRING_BREAK, // 0x5f
    // UTF-8 string (0x00..0x17 bytes follow)
    UTF8_STRING, // 0x60
    UTF8_STRING, // 0x61
    UTF8_STRING, // 0x62
    UTF8_STRING, // 0x63
    UTF8_STRING, // 0x64
    UTF8_STRING, // 0x65
    UTF8_STRING, // 0x66
    UTF8_STRING, // 0x67
    UTF8_STRING, // 0x68
    UTF8_STRING, // 0x69
    UTF8_STRING, // 0x6A
    UTF8_STRING, // 0x6B
    UTF8_STRING, // 0x6C
    UTF8_STRING, // 0x6D
    UTF8_STRING, // 0x6E
    UTF8_STRING, // 0x6F
    UTF8_STRING, // 0x70
    UTF8_STRING, // 0x71
    UTF8_STRING, // 0x72
    UTF8_STRING, // 0x73
    UTF8_STRING, // 0x74
    UTF8_STRING, // 0x75
    UTF8_STRING, // 0x76
    UTF8_STRING, // 0x77
    // UTF-8 string (one-byte uint8_t for n, and then n bytes follow)
    UTF8_STRING_8, // 0x78
    // UTF-8 string (two-byte uint16_t for n, and then n bytes follow)
    UTF8_STRING_16, // 0x79
    // UTF-8 string (four-byte uint32_t for n, and then n bytes follow)
    UTF8_STRING_32, // 0x7a
    // UTF-8 string (eight-byte uint64_t for n, and then n bytes follow)
    UTF8_STRING_64, // 0x7b
    // UTF-8 string, UTF-8 strings follow, terminated by "break"
    ERROR, // 0x7c
    ERROR, // 0x7d
    ERROR, // 0x7e
    UTF8_STRING_BREAK, // 0x7f
    // array (0x00..0x17 data items follow)
    ARRAY, // 0x80
    ARRAY, // 0x81
    ARRAY, // 0x82
    ARRAY, // 0x83
    ARRAY, // 0x84
    ARRAY, // 0x85
    ARRAY, // 0x86
    ARRAY, // 0x87
    ARRAY, // 0x88
    ARRAY, // 0x89
    ARRAY, // 0x8A
    ARRAY, // 0x8B
    ARRAY, // 0x8C
    ARRAY, // 0x8D
    ARRAY, // 0x8E
    ARRAY, // 0x8F
    ARRAY, // 0x90
    ARRAY, // 0x91
    ARRAY, // 0x92
    ARRAY, // 0x93
    ARRAY, // 0x94
    ARRAY, // 0x95
    ARRAY, // 0x96
    ARRAY, // 0x97
    // array (one-byte uint8_t fo, and then n data items follow)
    ARRAY_8, // 0x98
    // array (two-byte uint16_t for n, and then n data items follow)
    ARRAY_16, // 0x99
    // array (four-byte uint32_t for n, and then n data items follow)
    ARRAY_32, // 0x9a
    // array (eight-byte uint64_t for n, and then n data items follow)
    ARRAY_64, // 0x9b
    // array, data items follow, terminated by "break"
    ERROR, // 0x9c
    ERROR, // 0x9d
    ERROR, // 0x9e
    ARRAY_BREAK, // 0x9f
    // map (0x00..0x17 pairs of data items follow)
    MAP, // 0xa0
    MAP, // 0xa1
    MAP, // 0xa2
    MAP, // 0xa3
    MAP, // 0xa4
    MAP, // 0xa5
    MAP, // 0xa6
    MAP, // 0xa7
    MAP, // 0xa8
    MAP, // 0xa9
    MAP, // 0xaA
    MAP, // 0xaB
    MAP, // 0xaC
    MAP, // 0xaD
    MAP, // 0xaE
    MAP, // 0xaF
    MAP, // 0xb0
    MAP, // 0xb1
    MAP, // 0xb2
    MAP, // 0xb3
    MAP, // 0xb4
    MAP, // 0xb5
    MAP, // 0xb6
    MAP, // 0xb7
    // map (one-byte uint8_t for n, and then n pairs of data items follow)
    MAP_8, // 0xb8
    // map (two-byte uint16_t for n, and then n pairs of data items follow)
    MAP_16, // 0xb9
    // map (four-byte uint32_t for n, and then n pairs of data items follow)
    MAP_32, // 0xba
    // map (eight-byte uint64_t for n, and then n pairs of data items follow)
    MAP_64, // 0xbb
    ERROR, // 0xbc
    ERROR, // 0xbd
    ERROR, // 0xbe
    // map, pairs of data items follow, terminated by "break"
    MAP_BREAK, // 0xbf
    // Text-based date/time (data item follows; see Section 2.4.1)
    TAG_KNOWN, // 0xc0
    // Epoch-based date/time (data item follows; see Section 2.4.1)
    TAG_KNOWN, // 0xc1
    // Positive bignum (data item "byte string" follows)
    TAG_KNOWN, // 0xc2
    // Negative bignum (data item "byte string" follows)
    TAG_KNOWN, // 0xc3
    // Decimal Fraction (data item "array" follows; see Section 2.4.3)
    TAG_KNOWN, // 0xc4
    // Bigfloat (data item "array" follows; see Section 2.4.3)
    TAG_KNOWN, // 0xc5
    // (tagged item)
    TAG_UNASSIGNED, // 0xc6
    TAG_UNASSIGNED, // 0xc7
    TAG_UNASSIGNED, // 0xc8
    TAG_UNASSIGNED, // 0xc9
    TAG_UNASSIGNED, // 0xca
    TAG_UNASSIGNED, // 0xcb
    TAG_UNASSIGNED, // 0xcc
    TAG_UNASSIGNED, // 0xcd
    TAG_UNASSIGNED, // 0xce
    TAG_UNASSIGNED, // 0xcf
    TAG_UNASSIGNED, // 0xd0
    TAG_UNASSIGNED, // 0xd1
    TAG_UNASSIGNED, // 0xd2
    TAG_UNASSIGNED, // 0xd3
    TAG_UNASSIGNED, // 0xd4
    // Expected Conversion (data item follows; see Section 2.4.4.2)
    TAG_UNASSIGNED, // 0xd5
    TAG_UNASSIGNED, // 0xd6
    TAG_UNASSIGNED, // 0xd7
    // (more tagged items, 1/2/4/8 bytes and then a data item follow)
    TAG_MORE_1, // 0xd8
    TAG_MORE_2, // 0xd9
    TAG_MORE_4, // 0xda
    TAG_MORE_8, // 0xdb
    ERROR, // 0xdc
    ERROR, // 0xdd
    ERROR, // 0xde
    ERROR, // 0xdf
    // (simple value)
    SIMPLE_UNASSIGNED, // 0xe0
    SIMPLE_UNASSIGNED, // 0xe1
    SIMPLE_UNASSIGNED, // 0xe2
    SIMPLE_UNASSIGNED, // 0xe3
    SIMPLE_UNASSIGNED, // 0xe4
    SIMPLE_UNASSIGNED, // 0xe5
    SIMPLE_UNASSIGNED, // 0xe6
    SIMPLE_UNASSIGNED, // 0xe7
    SIMPLE_UNASSIGNED, // 0xe8
    SIMPLE_UNASSIGNED, // 0xe9
    SIMPLE_UNASSIGNED, // 0xea
    SIMPLE_UNASSIGNED, // 0xeb
    SIMPLE_UNASSIGNED, // 0xec
    SIMPLE_UNASSIGNED, // 0xed
    SIMPLE_UNASSIGNED, // 0xee
    SIMPLE_UNASSIGNED, // 0xef
    SIMPLE_UNASSIGNED, // 0xf0
    SIMPLE_UNASSIGNED, // 0xf1
    SIMPLE_UNASSIGNED, // 0xf2
    SIMPLE_UNASSIGNED, // 0xf3
    // False
    SIMPLE_FALSE, // 0xf4
    // True
    SIMPLE_TRUE, // 0xf5
    // Null
    SIMPLE_NULL, // 0xf6
    // Undefined
    SIMPLE_UNDEFINED, // 0xf7
    // (simple value, one byte follows)
    SIMPLE_BYTE, // 0xf8
    // Half-Precision Float (two-byte IEEE 754)
    SIMPLE_FLOAT_HALF, // 0xf9
    // Single-Precision Float (four-byte IEEE 754)
    SIMPLE_FLOAT_SINGLE, // 0xfa
    // Double-Precision Float (eight-byte IEEE 754)
    SIMPLE_FLOAT_DOUBLE, // 0xfb
    ERROR, // 0xfc
    ERROR, // 0xfd
    ERROR, // 0xfe
    // "break" stop code
    BREAK // 0xff
  ]

  // --

  return {
    parse: parse
  }
}


/***/ }),

/***/ "gb0s":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/byte/read.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 * @param {Number} byte one byte
 * @return {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (byte) {
    if (byte > 255 || byte < 0 || ~~byte !== byte)
        throw new RangeError('invalid byte');
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 8; i++)
        result[7 - i] = ((byte >> i) & 1);
    return result;
});


/***/ }),

/***/ "hDHj":
/*!******************************************!*\
  !*** ./node_modules/borc/src/decoder.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

const { Buffer } = __webpack_require__(/*! buffer */ "tjlA")
const ieee754 = __webpack_require__(/*! ieee754 */ "kVK+")
const Bignumber = __webpack_require__(/*! bignumber.js */ "kB5k").BigNumber

const parser = __webpack_require__(/*! ./decoder.asm */ "gYz7")
const utils = __webpack_require__(/*! ./utils */ "XuWj")
const c = __webpack_require__(/*! ./constants */ "hb4V")
const Simple = __webpack_require__(/*! ./simple */ "UHYx")
const Tagged = __webpack_require__(/*! ./tagged */ "IrRL")
const { URL } = __webpack_require__(/*! iso-url */ "Fq86")

/**
 * Transform binary cbor data into JavaScript objects.
 */
class Decoder {
  /**
   * @param {Object} [opts={}]
   * @param {number} [opts.size=65536] - Size of the allocated heap.
   */
  constructor (opts) {
    opts = opts || {}

    if (!opts.size || opts.size < 0x10000) {
      opts.size = 0x10000
    } else {
      // Ensure the size is a power of 2
      opts.size = utils.nextPowerOf2(opts.size)
    }

    // Heap use to share the input with the parser
    this._heap = new ArrayBuffer(opts.size)
    this._heap8 = new Uint8Array(this._heap)
    this._buffer = Buffer.from(this._heap)

    this._reset()

    // Known tags
    this._knownTags = Object.assign({
      0: (val) => new Date(val),
      1: (val) => new Date(val * 1000),
      2: (val) => utils.arrayBufferToBignumber(val),
      3: (val) => c.NEG_ONE.minus(utils.arrayBufferToBignumber(val)),
      4: (v) => {
        // const v = new Uint8Array(val)
        return c.TEN.pow(v[0]).times(v[1])
      },
      5: (v) => {
        // const v = new Uint8Array(val)
        return c.TWO.pow(v[0]).times(v[1])
      },
      32: (val) => new URL(val),
      35: (val) => new RegExp(val)
    }, opts.tags)

    // Initialize asm based parser
    this.parser = parser(global, {
      // eslint-disable-next-line no-console
      log: console.log.bind(console),
      pushInt: this.pushInt.bind(this),
      pushInt32: this.pushInt32.bind(this),
      pushInt32Neg: this.pushInt32Neg.bind(this),
      pushInt64: this.pushInt64.bind(this),
      pushInt64Neg: this.pushInt64Neg.bind(this),
      pushFloat: this.pushFloat.bind(this),
      pushFloatSingle: this.pushFloatSingle.bind(this),
      pushFloatDouble: this.pushFloatDouble.bind(this),
      pushTrue: this.pushTrue.bind(this),
      pushFalse: this.pushFalse.bind(this),
      pushUndefined: this.pushUndefined.bind(this),
      pushNull: this.pushNull.bind(this),
      pushInfinity: this.pushInfinity.bind(this),
      pushInfinityNeg: this.pushInfinityNeg.bind(this),
      pushNaN: this.pushNaN.bind(this),
      pushNaNNeg: this.pushNaNNeg.bind(this),
      pushArrayStart: this.pushArrayStart.bind(this),
      pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
      pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
      pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
      pushObjectStart: this.pushObjectStart.bind(this),
      pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
      pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
      pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
      pushByteString: this.pushByteString.bind(this),
      pushByteStringStart: this.pushByteStringStart.bind(this),
      pushUtf8String: this.pushUtf8String.bind(this),
      pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
      pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
      pushTagUnassigned: this.pushTagUnassigned.bind(this),
      pushTagStart: this.pushTagStart.bind(this),
      pushTagStart4: this.pushTagStart4.bind(this),
      pushTagStart8: this.pushTagStart8.bind(this),
      pushBreak: this.pushBreak.bind(this)
    }, this._heap)
  }

  get _depth () {
    return this._parents.length
  }

  get _currentParent () {
    return this._parents[this._depth - 1]
  }

  get _ref () {
    return this._currentParent.ref
  }

  // Finish the current parent
  _closeParent () {
    var p = this._parents.pop()

    if (p.length > 0) {
      throw new Error(`Missing ${p.length} elements`)
    }

    switch (p.type) {
      case c.PARENT.TAG:
        this._push(
          this.createTag(p.ref[0], p.ref[1])
        )
        break
      case c.PARENT.BYTE_STRING:
        this._push(this.createByteString(p.ref, p.length))
        break
      case c.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(p.ref, p.length))
        break
      case c.PARENT.MAP:
        if (p.values % 2 > 0) {
          throw new Error('Odd number of elements in the map')
        }
        this._push(this.createMap(p.ref, p.length))
        break
      case c.PARENT.OBJECT:
        if (p.values % 2 > 0) {
          throw new Error('Odd number of elements in the map')
        }
        this._push(this.createObject(p.ref, p.length))
        break
      case c.PARENT.ARRAY:
        this._push(this.createArray(p.ref, p.length))
        break
      default:
        break
    }

    if (this._currentParent && this._currentParent.type === c.PARENT.TAG) {
      this._dec()
    }
  }

  // Reduce the expected length of the current parent by one
  _dec () {
    const p = this._currentParent
    // The current parent does not know the epxected child length

    if (p.length < 0) {
      return
    }

    p.length--

    // All children were seen, we can close the current parent
    if (p.length === 0) {
      this._closeParent()
    }
  }

  // Push any value to the current parent
  _push (val, hasChildren) {
    const p = this._currentParent
    p.values++

    switch (p.type) {
      case c.PARENT.ARRAY:
      case c.PARENT.BYTE_STRING:
      case c.PARENT.UTF8_STRING:
        if (p.length > -1) {
          this._ref[this._ref.length - p.length] = val
        } else {
          this._ref.push(val)
        }
        this._dec()
        break
      case c.PARENT.OBJECT:
        if (p.tmpKey != null) {
          this._ref[p.tmpKey] = val
          p.tmpKey = null
          this._dec()
        } else {
          p.tmpKey = val

          if (typeof p.tmpKey !== 'string') {
            // too bad, convert to a Map
            p.type = c.PARENT.MAP
            p.ref = utils.buildMap(p.ref)
          }
        }
        break
      case c.PARENT.MAP:
        if (p.tmpKey != null) {
          this._ref.set(p.tmpKey, val)
          p.tmpKey = null
          this._dec()
        } else {
          p.tmpKey = val
        }
        break
      case c.PARENT.TAG:
        this._ref.push(val)
        if (!hasChildren) {
          this._dec()
        }
        break
      default:
        throw new Error('Unknown parent type')
    }
  }

  // Create a new parent in the parents list
  _createParent (obj, type, len) {
    this._parents[this._depth] = {
      type: type,
      length: len,
      ref: obj,
      values: 0,
      tmpKey: null
    }
  }

  // Reset all state back to the beginning, also used for initiatlization
  _reset () {
    this._res = []
    this._parents = [{
      type: c.PARENT.ARRAY,
      length: -1,
      ref: this._res,
      values: 0,
      tmpKey: null
    }]
  }

  // -- Interface to customize deoding behaviour
  createTag (tagNumber, value) {
    const typ = this._knownTags[tagNumber]

    if (!typ) {
      return new Tagged(tagNumber, value)
    }

    return typ(value)
  }

  createMap (obj, len) {
    return obj
  }

  createObject (obj, len) {
    return obj
  }

  createArray (arr, len) {
    return arr
  }

  createByteString (raw, len) {
    return Buffer.concat(raw)
  }

  createByteStringFromHeap (start, end) {
    if (start === end) {
      return Buffer.alloc(0)
    }

    return Buffer.from(this._heap.slice(start, end))
  }

  createInt (val) {
    return val
  }

  createInt32 (f, g) {
    return utils.buildInt32(f, g)
  }

  createInt64 (f1, f2, g1, g2) {
    return utils.buildInt64(f1, f2, g1, g2)
  }

  createFloat (val) {
    return val
  }

  createFloatSingle (a, b, c, d) {
    return ieee754.read([a, b, c, d], 0, false, 23, 4)
  }

  createFloatDouble (a, b, c, d, e, f, g, h) {
    return ieee754.read([a, b, c, d, e, f, g, h], 0, false, 52, 8)
  }

  createInt32Neg (f, g) {
    return -1 - utils.buildInt32(f, g)
  }

  createInt64Neg (f1, f2, g1, g2) {
    const f = utils.buildInt32(f1, f2)
    const g = utils.buildInt32(g1, g2)

    if (f > c.MAX_SAFE_HIGH) {
      return c.NEG_ONE.minus(new Bignumber(f).times(c.SHIFT32).plus(g))
    }

    return -1 - ((f * c.SHIFT32) + g)
  }

  createTrue () {
    return true
  }

  createFalse () {
    return false
  }

  createNull () {
    return null
  }

  createUndefined () {
    return undefined
  }

  createInfinity () {
    return Infinity
  }

  createInfinityNeg () {
    return -Infinity
  }

  createNaN () {
    return NaN
  }

  createNaNNeg () {
    return -NaN
  }

  createUtf8String (raw, len) {
    return raw.join('')
  }

  createUtf8StringFromHeap (start, end) {
    if (start === end) {
      return ''
    }

    return this._buffer.toString('utf8', start, end)
  }

  createSimpleUnassigned (val) {
    return new Simple(val)
  }

  // -- Interface for decoder.asm.js

  pushInt (val) {
    this._push(this.createInt(val))
  }

  pushInt32 (f, g) {
    this._push(this.createInt32(f, g))
  }

  pushInt64 (f1, f2, g1, g2) {
    this._push(this.createInt64(f1, f2, g1, g2))
  }

  pushFloat (val) {
    this._push(this.createFloat(val))
  }

  pushFloatSingle (a, b, c, d) {
    this._push(this.createFloatSingle(a, b, c, d))
  }

  pushFloatDouble (a, b, c, d, e, f, g, h) {
    this._push(this.createFloatDouble(a, b, c, d, e, f, g, h))
  }

  pushInt32Neg (f, g) {
    this._push(this.createInt32Neg(f, g))
  }

  pushInt64Neg (f1, f2, g1, g2) {
    this._push(this.createInt64Neg(f1, f2, g1, g2))
  }

  pushTrue () {
    this._push(this.createTrue())
  }

  pushFalse () {
    this._push(this.createFalse())
  }

  pushNull () {
    this._push(this.createNull())
  }

  pushUndefined () {
    this._push(this.createUndefined())
  }

  pushInfinity () {
    this._push(this.createInfinity())
  }

  pushInfinityNeg () {
    this._push(this.createInfinityNeg())
  }

  pushNaN () {
    this._push(this.createNaN())
  }

  pushNaNNeg () {
    this._push(this.createNaNNeg())
  }

  pushArrayStart () {
    this._createParent([], c.PARENT.ARRAY, -1)
  }

  pushArrayStartFixed (len) {
    this._createArrayStartFixed(len)
  }

  pushArrayStartFixed32 (len1, len2) {
    const len = utils.buildInt32(len1, len2)
    this._createArrayStartFixed(len)
  }

  pushArrayStartFixed64 (len1, len2, len3, len4) {
    const len = utils.buildInt64(len1, len2, len3, len4)
    this._createArrayStartFixed(len)
  }

  pushObjectStart () {
    this._createObjectStartFixed(-1)
  }

  pushObjectStartFixed (len) {
    this._createObjectStartFixed(len)
  }

  pushObjectStartFixed32 (len1, len2) {
    const len = utils.buildInt32(len1, len2)
    this._createObjectStartFixed(len)
  }

  pushObjectStartFixed64 (len1, len2, len3, len4) {
    const len = utils.buildInt64(len1, len2, len3, len4)
    this._createObjectStartFixed(len)
  }

  pushByteStringStart () {
    this._parents[this._depth] = {
      type: c.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    }
  }

  pushByteString (start, end) {
    this._push(this.createByteStringFromHeap(start, end))
  }

  pushUtf8StringStart () {
    this._parents[this._depth] = {
      type: c.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    }
  }

  pushUtf8String (start, end) {
    this._push(this.createUtf8StringFromHeap(start, end))
  }

  pushSimpleUnassigned (val) {
    this._push(this.createSimpleUnassigned(val))
  }

  pushTagStart (tag) {
    this._parents[this._depth] = {
      type: c.PARENT.TAG,
      length: 1,
      ref: [tag]
    }
  }

  pushTagStart4 (f, g) {
    this.pushTagStart(utils.buildInt32(f, g))
  }

  pushTagStart8 (f1, f2, g1, g2) {
    this.pushTagStart(utils.buildInt64(f1, f2, g1, g2))
  }

  pushTagUnassigned (tagNumber) {
    this._push(this.createTag(tagNumber))
  }

  pushBreak () {
    if (this._currentParent.length > -1) {
      throw new Error('Unexpected break')
    }

    this._closeParent()
  }

  _createObjectStartFixed (len) {
    if (len === 0) {
      this._push(this.createObject({}))
      return
    }

    this._createParent({}, c.PARENT.OBJECT, len)
  }

  _createArrayStartFixed (len) {
    if (len === 0) {
      this._push(this.createArray([]))
      return
    }

    this._createParent(new Array(len), c.PARENT.ARRAY, len)
  }

  _decode (input) {
    if (input.byteLength === 0) {
      throw new Error('Input too short')
    }

    this._reset()
    this._heap8.set(input)
    const code = this.parser.parse(input.byteLength)

    if (this._depth > 1) {
      while (this._currentParent.length === 0) {
        this._closeParent()
      }
      if (this._depth > 1) {
        throw new Error('Undeterminated nesting')
      }
    }

    if (code > 0) {
      throw new Error('Failed to parse')
    }

    if (this._res.length === 0) {
      throw new Error('No valid result')
    }
  }

  // -- Public Interface

  decodeFirst (input) {
    this._decode(input)

    return this._res[0]
  }

  decodeAll (input) {
    this._decode(input)

    return this._res
  }

  /**
   * Decode the first cbor object.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {*}
   */
  static decode (input, enc) {
    if (typeof input === 'string') {
      input = Buffer.from(input, enc || 'hex')
    }

    const dec = new Decoder({ size: input.length })
    return dec.decodeFirst(input)
  }

  /**
   * Decode all cbor objects.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {Array<*>}
   */
  static decodeAll (input, enc) {
    if (typeof input === 'string') {
      input = Buffer.from(input, enc || 'hex')
    }

    const dec = new Decoder({ size: input.length })
    return dec.decodeAll(input)
  }
}

Decoder.decodeFirst = Decoder.decode

module.exports = Decoder

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../@angular-builders/custom-webpack/node_modules/webpack/buildin/global.js */ "wg4m")))

/***/ }),

/***/ "hb/F":
/*!*********************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/bech32/dist/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bech32m = exports.bech32 = void 0;
const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const ALPHABET_MAP = {};
for (let z = 0; z < ALPHABET.length; z++) {
    const x = ALPHABET.charAt(z);
    ALPHABET_MAP[x] = z;
}
function polymodStep(pre) {
    const b = pre >> 25;
    return (((pre & 0x1ffffff) << 5) ^
        (-((b >> 0) & 1) & 0x3b6a57b2) ^
        (-((b >> 1) & 1) & 0x26508e6d) ^
        (-((b >> 2) & 1) & 0x1ea119fa) ^
        (-((b >> 3) & 1) & 0x3d4233dd) ^
        (-((b >> 4) & 1) & 0x2a1462b3));
}
function prefixChk(prefix) {
    let chk = 1;
    for (let i = 0; i < prefix.length; ++i) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            return 'Invalid prefix (' + prefix + ')';
        chk = polymodStep(chk) ^ (c >> 5);
    }
    chk = polymodStep(chk);
    for (let i = 0; i < prefix.length; ++i) {
        const v = prefix.charCodeAt(i);
        chk = polymodStep(chk) ^ (v & 0x1f);
    }
    return chk;
}
function convert(data, inBits, outBits, pad) {
    let value = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result = [];
    for (let i = 0; i < data.length; ++i) {
        value = (value << inBits) | data[i];
        bits += inBits;
        while (bits >= outBits) {
            bits -= outBits;
            result.push((value >> bits) & maxV);
        }
    }
    if (pad) {
        if (bits > 0) {
            result.push((value << (outBits - bits)) & maxV);
        }
    }
    else {
        if (bits >= inBits)
            return 'Excess padding';
        if ((value << (outBits - bits)) & maxV)
            return 'Non-zero padding';
    }
    return result;
}
function toWords(bytes) {
    return convert(bytes, 8, 5, true);
}
function fromWordsUnsafe(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res))
        return res;
}
function fromWords(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res))
        return res;
    throw new Error(res);
}
function getLibraryFromEncoding(encoding) {
    let ENCODING_CONST;
    if (encoding === 'bech32') {
        ENCODING_CONST = 1;
    }
    else {
        ENCODING_CONST = 0x2bc830a3;
    }
    function encode(prefix, words, LIMIT) {
        LIMIT = LIMIT || 90;
        if (prefix.length + 7 + words.length > LIMIT)
            throw new TypeError('Exceeds length limit');
        prefix = prefix.toLowerCase();
        // determine chk mod
        let chk = prefixChk(prefix);
        if (typeof chk === 'string')
            throw new Error(chk);
        let result = prefix + '1';
        for (let i = 0; i < words.length; ++i) {
            const x = words[i];
            if (x >> 5 !== 0)
                throw new Error('Non 5-bit word');
            chk = polymodStep(chk) ^ x;
            result += ALPHABET.charAt(x);
        }
        for (let i = 0; i < 6; ++i) {
            chk = polymodStep(chk);
        }
        chk ^= ENCODING_CONST;
        for (let i = 0; i < 6; ++i) {
            const v = (chk >> ((5 - i) * 5)) & 0x1f;
            result += ALPHABET.charAt(v);
        }
        return result;
    }
    function __decode(str, LIMIT) {
        LIMIT = LIMIT || 90;
        if (str.length < 8)
            return str + ' too short';
        if (str.length > LIMIT)
            return 'Exceeds length limit';
        // don't allow mixed case
        const lowered = str.toLowerCase();
        const uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered)
            return 'Mixed-case string ' + str;
        str = lowered;
        const split = str.lastIndexOf('1');
        if (split === -1)
            return 'No separator character for ' + str;
        if (split === 0)
            return 'Missing prefix for ' + str;
        const prefix = str.slice(0, split);
        const wordChars = str.slice(split + 1);
        if (wordChars.length < 6)
            return 'Data too short';
        let chk = prefixChk(prefix);
        if (typeof chk === 'string')
            return chk;
        const words = [];
        for (let i = 0; i < wordChars.length; ++i) {
            const c = wordChars.charAt(i);
            const v = ALPHABET_MAP[c];
            if (v === undefined)
                return 'Unknown character ' + c;
            chk = polymodStep(chk) ^ v;
            // not in the checksum?
            if (i + 6 >= wordChars.length)
                continue;
            words.push(v);
        }
        if (chk !== ENCODING_CONST)
            return 'Invalid checksum for ' + str;
        return { prefix, words };
    }
    function decodeUnsafe(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === 'object')
            return res;
    }
    function decode(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === 'object')
            return res;
        throw new Error(res);
    }
    return {
        decodeUnsafe,
        decode,
        encode,
        toWords,
        fromWordsUnsafe,
        fromWords,
    };
}
exports.bech32 = getLibraryFromEncoding('bech32');
exports.bech32m = getLibraryFromEncoding('bech32m');


/***/ }),

/***/ "hb4V":
/*!********************************************!*\
  !*** ./node_modules/borc/src/constants.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Bignumber = __webpack_require__(/*! bignumber.js */ "kB5k").BigNumber

exports.MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
}

exports.TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  REGEXP: 35,
  MIME: 36
}

exports.NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
}

exports.SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
}

exports.SYMS = {
  NULL: Symbol('null'),
  UNDEFINED: Symbol('undef'),
  PARENT: Symbol('parent'),
  BREAK: Symbol('break'),
  STREAM: Symbol('stream')
}

exports.SHIFT32 = Math.pow(2, 32)
exports.SHIFT16 = Math.pow(2, 16)

exports.MAX_SAFE_HIGH = 0x1fffff
exports.NEG_ONE = new Bignumber(-1)
exports.TEN = new Bignumber(10)
exports.TWO = new Bignumber(2)

exports.PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5
}


/***/ }),

/***/ "jO9I":
/*!**************************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/circular-shift-left.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Circular Shift Left
 *
 * @example
 * circularShiftLeft([1,0,1,1,0,1]) => [0,1,1,0,1,1]
 *
 * @see {@link https://en.wikipedia.org/wiki/Circular_shift}
 *
 * @param {Array} bits input data
 * @param {number} amount how far should it be shifted
 * @return {Array} [ROL bits]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits, amount) {
    var result = [];
    if (amount > bits.length)
        throw new Error('shift amount can’t be larger than bits array length');
    for (var i = 0; i < bits.length; i++)
        result[(bits.length + i - amount) % bits.length] = bits[i];
    return result;
});


/***/ }),

/***/ "jSm7":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/read.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * nibble.read(15) => [1,1,1,1]
 *
 * @param {Number} nibble one nibble
 * @return {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (nibble) {
    if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
        var result = [0, 0, 0, 0];
        for (var i = 0; i < 4; i++)
            result[3 - i] = ((nibble >> i) & 1);
        return result;
    }
    else
        throw new RangeError('invalid array length');
});


/***/ }),

/***/ "jpl7":
/*!*******************************************!*\
  !*** ./node_modules/borc/src/diagnose.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Buffer } = __webpack_require__(/*! buffer */ "tjlA")
const Decoder = __webpack_require__(/*! ./decoder */ "hDHj")
const utils = __webpack_require__(/*! ./utils */ "XuWj")

/**
 * Output the diagnostic format from a stream of CBOR bytes.
 *
 */
class Diagnose extends Decoder {
  createTag (tagNumber, value) {
    return `${tagNumber}(${value})`
  }

  createInt (val) {
    return super.createInt(val).toString()
  }

  createInt32 (f, g) {
    return super.createInt32(f, g).toString()
  }

  createInt64 (f1, f2, g1, g2) {
    return super.createInt64(f1, f2, g1, g2).toString()
  }

  createInt32Neg (f, g) {
    return super.createInt32Neg(f, g).toString()
  }

  createInt64Neg (f1, f2, g1, g2) {
    return super.createInt64Neg(f1, f2, g1, g2).toString()
  }

  createTrue () {
    return 'true'
  }

  createFalse () {
    return 'false'
  }

  createFloat (val) {
    const fl = super.createFloat(val)
    if (utils.isNegativeZero(val)) {
      return '-0_1'
    }

    return `${fl}_1`
  }

  createFloatSingle (a, b, c, d) {
    const fl = super.createFloatSingle(a, b, c, d)
    return `${fl}_2`
  }

  createFloatDouble (a, b, c, d, e, f, g, h) {
    const fl = super.createFloatDouble(a, b, c, d, e, f, g, h)
    return `${fl}_3`
  }

  createByteString (raw, len) {
    const val = raw.join(', ')

    if (len === -1) {
      return `(_ ${val})`
    }
    return `h'${val}`
  }

  createByteStringFromHeap (start, end) {
    const val = (Buffer.from(
      super.createByteStringFromHeap(start, end)
    )).toString('hex')

    return `h'${val}'`
  }

  createInfinity () {
    return 'Infinity_1'
  }

  createInfinityNeg () {
    return '-Infinity_1'
  }

  createNaN () {
    return 'NaN_1'
  }

  createNaNNeg () {
    return '-NaN_1'
  }

  createNull () {
    return 'null'
  }

  createUndefined () {
    return 'undefined'
  }

  createSimpleUnassigned (val) {
    return `simple(${val})`
  }

  createArray (arr, len) {
    const val = super.createArray(arr, len)

    if (len === -1) {
      // indefinite
      return `[_ ${val.join(', ')}]`
    }

    return `[${val.join(', ')}]`
  }

  createMap (map, len) {
    const val = super.createMap(map)
    const list = Array.from(val.keys())
      .reduce(collectObject(val), '')

    if (len === -1) {
      return `{_ ${list}}`
    }

    return `{${list}}`
  }

  createObject (obj, len) {
    const val = super.createObject(obj)
    const map = Object.keys(val)
      .reduce(collectObject(val), '')

    if (len === -1) {
      return `{_ ${map}}`
    }

    return `{${map}}`
  }

  createUtf8String (raw, len) {
    const val = raw.join(', ')

    if (len === -1) {
      return `(_ ${val})`
    }

    return `"${val}"`
  }

  createUtf8StringFromHeap (start, end) {
    const val = (Buffer.from(
      super.createUtf8StringFromHeap(start, end)
    )).toString('utf8')

    return `"${val}"`
  }

  static diagnose (input, enc) {
    if (typeof input === 'string') {
      input = Buffer.from(input, enc || 'hex')
    }

    const dec = new Diagnose()
    return dec.decodeFirst(input)
  }
}

module.exports = Diagnose

function collectObject (val) {
  return (acc, key) => {
    if (acc) {
      return `${acc}, ${key}: ${val[key]}`
    }
    return `${key}: ${val[key]}`
  }
}


/***/ }),

/***/ "kMlx":
/*!*****************************************************!*\
  !*** ./node_modules/superagent/lib/request-base.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(/*! ./is-object */ "8zgK");

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),

/***/ "ktnI":
/*!*******************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read-u-int.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "yE/9");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read */ "UPHr");


/**
 * Converts a section of a buffer to an unsigned integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => 22
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the unsigned integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @returns {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = 8; }
    var arr = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(buffer, offset, length);
    var result = 0;
    for (var i = 0; i < length; i++)
        result += arr[i] * _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
    return result;
});


/***/ }),

/***/ "lhXf":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/set-bit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sets the value of a specific bit.
 * @example bitwise.integer.set(128, 7, 0) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @param {Integer} value bit’s new value
 * @returns {Integer} resulting number
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position, value) {
    return (value === 1 ? int32 | (1 << position) : int32 & ~(1 << position));
});


/***/ }),

/***/ "lnXz":
/*!****************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/aes-js/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
(function(root) {
    "use strict";

    function checkInt(value) {
        return (parseInt(value) === value);
    }

    function checkInts(arrayish) {
        if (!checkInt(arrayish.length)) { return false; }

        for (var i = 0; i < arrayish.length; i++) {
            if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
                return false;
            }
        }

        return true;
    }

    function coerceArray(arg, copy) {

        // ArrayBuffer view
        if (arg.buffer && arg.name === 'Uint8Array') {

            if (copy) {
                if (arg.slice) {
                    arg = arg.slice();
                } else {
                    arg = Array.prototype.slice.call(arg);
                }
            }

            return arg;
        }

        // It's an array; check it is a valid representation of a byte
        if (Array.isArray(arg)) {
            if (!checkInts(arg)) {
                throw new Error('Array contains invalid value: ' + arg);
            }

            return new Uint8Array(arg);
        }

        // Something else, but behaves like an array (maybe a Buffer? Arguments?)
        if (checkInt(arg.length) && checkInts(arg)) {
            return new Uint8Array(arg);
        }

        throw new Error('unsupported array-like object');
    }

    function createArray(length) {
        return new Uint8Array(length);
    }

    function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
        if (sourceStart != null || sourceEnd != null) {
            if (sourceArray.slice) {
                sourceArray = sourceArray.slice(sourceStart, sourceEnd);
            } else {
                sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
            }
        }
        targetArray.set(sourceArray, targetStart);
    }



    var convertUtf8 = (function() {
        function toBytes(text) {
            var result = [], i = 0;
            text = encodeURI(text);
            while (i < text.length) {
                var c = text.charCodeAt(i++);

                // if it is a % sign, encode the following 2 bytes as a hex value
                if (c === 37) {
                    result.push(parseInt(text.substr(i, 2), 16))
                    i += 2;

                // otherwise, just the actual byte
                } else {
                    result.push(c)
                }
            }

            return coerceArray(result);
        }

        function fromBytes(bytes) {
            var result = [], i = 0;

            while (i < bytes.length) {
                var c = bytes[i];

                if (c < 128) {
                    result.push(String.fromCharCode(c));
                    i++;
                } else if (c > 191 && c < 224) {
                    result.push(String.fromCharCode(((c & 0x1f) << 6) | (bytes[i + 1] & 0x3f)));
                    i += 2;
                } else {
                    result.push(String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)));
                    i += 3;
                }
            }

            return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();

    var convertHex = (function() {
        function toBytes(text) {
            var result = [];
            for (var i = 0; i < text.length; i += 2) {
                result.push(parseInt(text.substr(i, 2), 16));
            }

            return result;
        }

        // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
        var Hex = '0123456789abcdef';

        function fromBytes(bytes) {
                var result = [];
                for (var i = 0; i < bytes.length; i++) {
                    var v = bytes[i];
                    result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
                }
                return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();


    // Number of rounds by keysize
    var numberOfRounds = {16: 10, 24: 12, 32: 14}

    // Round constant words
    var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

    // S-box and Inverse S-box (S is for Substitution)
    var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
    var Si =[0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

    // Transformations for encryption
    var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
    var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
    var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
    var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

    // Transformations for decryption
    var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
    var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
    var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
    var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

    // Transformations for decryption key expansion
    var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
    var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
    var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
    var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];

    function convertToInt32(bytes) {
        var result = [];
        for (var i = 0; i < bytes.length; i += 4) {
            result.push(
                (bytes[i    ] << 24) |
                (bytes[i + 1] << 16) |
                (bytes[i + 2] <<  8) |
                 bytes[i + 3]
            );
        }
        return result;
    }

    var AES = function(key) {
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }

        Object.defineProperty(this, 'key', {
            value: coerceArray(key, true)
        });

        this._prepare();
    }


    AES.prototype._prepare = function() {

        var rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
        }

        // encryption round keys
        this._Ke = [];

        // decryption round keys
        this._Kd = [];

        for (var i = 0; i <= rounds; i++) {
            this._Ke.push([0, 0, 0, 0]);
            this._Kd.push([0, 0, 0, 0]);
        }

        var roundKeyCount = (rounds + 1) * 4;
        var KC = this.key.length / 4;

        // convert the key into ints
        var tk = convertToInt32(this.key);

        // copy values into round key arrays
        var index;
        for (var i = 0; i < KC; i++) {
            index = i >> 2;
            this._Ke[index][i % 4] = tk[i];
            this._Kd[rounds - index][i % 4] = tk[i];
        }

        // key expansion (fips-197 section 5.2)
        var rconpointer = 0;
        var t = KC, tt;
        while (t < roundKeyCount) {
            tt = tk[KC - 1];
            tk[0] ^= ((S[(tt >> 16) & 0xFF] << 24) ^
                      (S[(tt >>  8) & 0xFF] << 16) ^
                      (S[ tt        & 0xFF] <<  8) ^
                       S[(tt >> 24) & 0xFF]        ^
                      (rcon[rconpointer] << 24));
            rconpointer += 1;

            // key expansion (for non-256 bit)
            if (KC != 8) {
                for (var i = 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }

            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for (var i = 1; i < (KC / 2); i++) {
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[(KC / 2) - 1];

                tk[KC / 2] ^= (S[ tt        & 0xFF]        ^
                              (S[(tt >>  8) & 0xFF] <<  8) ^
                              (S[(tt >> 16) & 0xFF] << 16) ^
                              (S[(tt >> 24) & 0xFF] << 24));

                for (var i = (KC / 2) + 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }
            }

            // copy values into round key arrays
            var i = 0, r, c;
            while (i < KC && t < roundKeyCount) {
                r = t >> 2;
                c = t % 4;
                this._Ke[r][c] = tk[i];
                this._Kd[rounds - r][c] = tk[i++];
                t++;
            }
        }

        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for (var r = 1; r < rounds; r++) {
            for (var c = 0; c < 4; c++) {
                tt = this._Kd[r][c];
                this._Kd[r][c] = (U1[(tt >> 24) & 0xFF] ^
                                  U2[(tt >> 16) & 0xFF] ^
                                  U3[(tt >>  8) & 0xFF] ^
                                  U4[ tt        & 0xFF]);
            }
        }
    }

    AES.prototype.encrypt = function(plaintext) {
        if (plaintext.length != 16) {
            throw new Error('invalid plaintext size (must be 16 bytes)');
        }

        var rounds = this._Ke.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(plaintext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Ke[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T1[(t[ i         ] >> 24) & 0xff] ^
                        T2[(t[(i + 1) % 4] >> 16) & 0xff] ^
                        T3[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T4[ t[(i + 3) % 4]        & 0xff] ^
                        this._Ke[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Ke[rounds][i];
            result[4 * i    ] = (S[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (S[(t[(i + 1) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (S[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (S[ t[(i + 3) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }

    AES.prototype.decrypt = function(ciphertext) {
        if (ciphertext.length != 16) {
            throw new Error('invalid ciphertext size (must be 16 bytes)');
        }

        var rounds = this._Kd.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(ciphertext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Kd[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T5[(t[ i          ] >> 24) & 0xff] ^
                        T6[(t[(i + 3) % 4] >> 16) & 0xff] ^
                        T7[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T8[ t[(i + 1) % 4]        & 0xff] ^
                        this._Kd[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Kd[rounds][i];
            result[4 * i    ] = (Si[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (Si[(t[(i + 3) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (Si[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (Si[ t[(i + 1) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }


    /**
     *  Mode Of Operation - Electonic Codebook (ECB)
     */
    var ModeOfOperationECB = function(key) {
        if (!(this instanceof ModeOfOperationECB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Electronic Code Block";
        this.name = "ecb";

        this._aes = new AES(key);
    }

    ModeOfOperationECB.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);
            block = this._aes.encrypt(block);
            copyArray(block, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationECB.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);
            copyArray(block, plaintext, i);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Block Chaining (CBC)
     */
    var ModeOfOperationCBC = function(key, iv) {
        if (!(this instanceof ModeOfOperationCBC)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Block Chaining";
        this.name = "cbc";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastCipherblock = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCBC.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);

            for (var j = 0; j < 16; j++) {
                block[j] ^= this._lastCipherblock[j];
            }

            this._lastCipherblock = this._aes.encrypt(block);
            copyArray(this._lastCipherblock, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationCBC.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);

            for (var j = 0; j < 16; j++) {
                plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
            }

            copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Feedback (CFB)
     */
    var ModeOfOperationCFB = function(key, iv, segmentSize) {
        if (!(this instanceof ModeOfOperationCFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Feedback";
        this.name = "cfb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 size)');
        }

        if (!segmentSize) { segmentSize = 1; }

        this.segmentSize = segmentSize;

        this._shiftRegister = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCFB.prototype.encrypt = function(plaintext) {
        if ((plaintext.length % this.segmentSize) != 0) {
            throw new Error('invalid plaintext size (must be segmentSize bytes)');
        }

        var encrypted = coerceArray(plaintext, true);

        var xorSegment;
        for (var i = 0; i < encrypted.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);
            for (var j = 0; j < this.segmentSize; j++) {
                encrypted[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return encrypted;
    }

    ModeOfOperationCFB.prototype.decrypt = function(ciphertext) {
        if ((ciphertext.length % this.segmentSize) != 0) {
            throw new Error('invalid ciphertext size (must be segmentSize bytes)');
        }

        var plaintext = coerceArray(ciphertext, true);

        var xorSegment;
        for (var i = 0; i < plaintext.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);

            for (var j = 0; j < this.segmentSize; j++) {
                plaintext[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return plaintext;
    }

    /**
     *  Mode Of Operation - Output Feedback (OFB)
     */
    var ModeOfOperationOFB = function(key, iv) {
        if (!(this instanceof ModeOfOperationOFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Output Feedback";
        this.name = "ofb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastPrecipher = coerceArray(iv, true);
        this._lastPrecipherIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationOFB.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._lastPrecipherIndex === 16) {
                this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
                this._lastPrecipherIndex = 0;
            }
            encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;


    /**
     *  Counter object for CTR common mode of operation
     */
    var Counter = function(initialValue) {
        if (!(this instanceof Counter)) {
            throw Error('Counter must be instanitated with `new`');
        }

        // We allow 0, but anything false-ish uses the default 1
        if (initialValue !== 0 && !initialValue) { initialValue = 1; }

        if (typeof(initialValue) === 'number') {
            this._counter = createArray(16);
            this.setValue(initialValue);

        } else {
            this.setBytes(initialValue);
        }
    }

    Counter.prototype.setValue = function(value) {
        if (typeof(value) !== 'number' || parseInt(value) != value) {
            throw new Error('invalid counter value (must be an integer)');
        }

        // We cannot safely handle numbers beyond the safe range for integers
        if (value > Number.MAX_SAFE_INTEGER) {
            throw new Error('integer value out of safe range');
        }

        for (var index = 15; index >= 0; --index) {
            this._counter[index] = value % 256;
            value = parseInt(value / 256);
        }
    }

    Counter.prototype.setBytes = function(bytes) {
        bytes = coerceArray(bytes, true);

        if (bytes.length != 16) {
            throw new Error('invalid counter bytes size (must be 16 bytes)');
        }

        this._counter = bytes;
    };

    Counter.prototype.increment = function() {
        for (var i = 15; i >= 0; i--) {
            if (this._counter[i] === 255) {
                this._counter[i] = 0;
            } else {
                this._counter[i]++;
                break;
            }
        }
    }


    /**
     *  Mode Of Operation - Counter (CTR)
     */
    var ModeOfOperationCTR = function(key, counter) {
        if (!(this instanceof ModeOfOperationCTR)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Counter";
        this.name = "ctr";

        if (!(counter instanceof Counter)) {
            counter = new Counter(counter)
        }

        this._counter = counter;

        this._remainingCounter = null;
        this._remainingCounterIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationCTR.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._remainingCounterIndex === 16) {
                this._remainingCounter = this._aes.encrypt(this._counter._counter);
                this._remainingCounterIndex = 0;
                this._counter.increment();
            }
            encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;


    ///////////////////////
    // Padding

    // See:https://tools.ietf.org/html/rfc2315
    function pkcs7pad(data) {
        data = coerceArray(data, true);
        var padder = 16 - (data.length % 16);
        var result = createArray(data.length + padder);
        copyArray(data, result);
        for (var i = data.length; i < result.length; i++) {
            result[i] = padder;
        }
        return result;
    }

    function pkcs7strip(data) {
        data = coerceArray(data, true);
        if (data.length < 16) { throw new Error('PKCS#7 invalid length'); }

        var padder = data[data.length - 1];
        if (padder > 16) { throw new Error('PKCS#7 padding byte out of range'); }

        var length = data.length - padder;
        for (var i = 0; i < padder; i++) {
            if (data[length + i] !== padder) {
                throw new Error('PKCS#7 invalid padding byte');
            }
        }

        var result = createArray(length);
        copyArray(data, result, 0, 0, length);
        return result;
    }

    ///////////////////////
    // Exporting


    // The block cipher
    var aesjs = {
        AES: AES,
        Counter: Counter,

        ModeOfOperation: {
            ecb: ModeOfOperationECB,
            cbc: ModeOfOperationCBC,
            cfb: ModeOfOperationCFB,
            ofb: ModeOfOperationOFB,
            ctr: ModeOfOperationCTR
        },

        utils: {
            hex: convertHex,
            utf8: convertUtf8
        },

        padding: {
            pkcs7: {
                pad: pkcs7pad,
                strip: pkcs7strip
            }
        },

        _arrayTest: {
            coerceArray: coerceArray,
            createArray: createArray,
            copyArray: copyArray,
        }
    };


    // node.js
    if (true) {
        module.exports = aesjs

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else {}


})(this);


/***/ }),

/***/ "n/ht":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/index.js ***!
  \***************************************************/
/*! exports provided: getBit, setBit, toggleBit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-bit */ "HEpO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBit", function() { return _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _set_bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-bit */ "lhXf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBit", function() { return _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _toggle_bit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-bit */ "SfLZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleBit", function() { return _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = ({ getBit: _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"], setBit: _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"], toggleBit: _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "nMdu":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/nand.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NAND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nand(a, b, false) => Buffer(a NAND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NAND b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] & b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "nZbv":
/*!***************************************************!*\
  !*** ./node_modules/superagent/lib/agent-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),

/***/ "oHnp":
/*!**********************************************!*\
  !*** ./node_modules/superagent/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),

/***/ "oMMx":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/string/to-bits.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 * @example
 * toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 * @param {String} string the string to convert
 * @returns {Array} resulting array of bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '1')
            result.push(1);
        else if (string[i] === '0')
            result.push(0);
    }
    return result;
});


/***/ }),

/***/ "pzNo":
/*!*************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/client.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const bitwise = __webpack_require__(/*! bitwise */ "2k3W");
const superagent = __webpack_require__(/*! superagent */ "24Ii");
const bitcoin = __webpack_require__(/*! ./bitcoin */ "6WMX");
const ethereum = __webpack_require__(/*! ./ethereum */ "xKF7");
const { buildAddAbiPayload, abiParsers, MAX_ABI_DEFS } = __webpack_require__(/*! ./ethereumAbi */ "u0zn");
const {
  isValidAssetPath,
  isValidCoinType,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  ensureHexBuffer,
  getP256KeyPair,
  getP256KeyPairFromPub,
  parseLattice1Response,
  toPaddedDER,
} = __webpack_require__(/*! ./util */ "PLHu");
const {
  getFwVersionConst,
  ADDR_STR_LEN,
  ENC_MSG_LEN,
  decResLengths,
  deviceCodes,
  encReqCodes,
  responseCodes,
  REQUEST_TYPE_BYTE,
  VERSION_BYTE,
  messageConstants,
  BASE_URL,
  signingSchema,
} = __webpack_require__(/*! ./constants */ "L21C");
const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer;
const EMPTY_WALLET_UID = Buffer.alloc(32);

class Client {
  constructor({ baseUrl, crypto, name, privKey, timeout, retryCount } = {}) {
    // Definitions
    // if (!baseUrl) throw new Error('baseUrl is required');
    if (name && name.length > 24) throw new Error('name must be less than 24 characters');
    if (!crypto) throw new Error('crypto provider is required');
    this.baseUrl = baseUrl || BASE_URL;
    this.crypto = crypto;
    this.name = name || 'Unknown';
    
    // Derive an ECDSA keypair using the p256 curve. The public key will
    // be used as an identifier
    this.privKey = privKey || this.crypto.randomBytes(32);
    this.key = getP256KeyPair(this.privKey);//.encode('hex');

    // Stateful params
    this.ephemeralPub = null;
    this.sharedSecret = null;
    this.timeout = timeout || 60000;
    this.deviceId = null;
    this.isPaired = false;
    this.retryCount = retryCount || 3;

    // Information about the current wallet. Should be null unless we know a wallet is present
    this.activeWallets = {
      internal: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: false,
      },
      external: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: true,
      }
    }
  }
  
  //=======================================================================
  // LATTICE FUNCTIONS
  //=======================================================================

  // `Connect` will attempt to contact a device based on its deviceId.
  // The response should include an ephemeral public key, which is used to
  // pair with the device in a later request
  connect(deviceId, cb) {
    // User may "re-connect" if a device ID has previously been stored
    if (typeof deviceId === 'function') {
      if (!this.deviceId) 
        return cb('No device ID has been stored. Please connect with your device ID first.')
      cb = deviceId;
    } else {
      // If the user passes in a device ID, connect to that device and save
      // the new ID for future use.
      this.deviceId = deviceId;
    }
    const param = this._buildRequest(deviceCodes.CONNECT, this.pubKeyBytes());
    this._request(param, (err, res) => {
      if (err) return cb(err);
      this.isPaired = this._handleConnect(res) || false;
      // Check for an active wallet. This will get bypassed if we are not paired.
      if (this.isPaired) {
        this._getActiveWallet((err) => {
          return cb(err, this.isPaired);
        }, true);
      } else {
        return cb(null);
      }
      
    });
  }

  pair(pairingSecret, cb) {
    // Build the secret hash from the salt
    const pubKey = this.pubKeyBytes();
    const nameBuf = Buffer.alloc(25);
    if (this.name.length > 24) {
      return cb('Name is too many characters. Please change it to <25 characters.');
    }
    nameBuf.write(this.name);
    // Make sure we add a null termination byte to the pairing secret
    const preImage = Buffer.concat([pubKey, nameBuf, Buffer.from(pairingSecret)]);
    const hash = this.crypto.createHash('sha256').update(preImage).digest();
    const sig = this.key.sign(hash); // returns an array, not a buffer
    const derSig = toPaddedDER(sig);
    const payload = Buffer.concat([nameBuf, derSig]);

    // Build the request
    const param = this._buildEncRequest(encReqCodes.FINALIZE_PAIRING, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      // Recover the ephemeral key
      const errStr = this._handlePair(res);
      if (errStr) return cb(errStr);
      // Try to get the active wallet once pairing is successful
      this._getActiveWallet((err) => {
        if (err) return cb(err);
        return cb(null, this.hasActiveWallet());
      }, true);
    })  
  }

  test(data, cb) {
    if (!data.payload)
      return cb('First argument must contain `testID` and `payload` fields.');
    const TEST_DATA_SZ = 500;
    const payload = Buffer.alloc(TEST_DATA_SZ + 6);
    payload.writeUInt32BE(data.testID, 0);
    payload.writeUInt16BE(data.payload.length, 4);
    data.payload.copy(payload, 6);
    const param = this._buildEncRequest(encReqCodes.TEST, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.test);
      if (decrypted.err !== null ) 
        return cb(decrypted.err);
      return cb(null, decrypted.data.slice(65)); // remove ephem pub
    })
  }

  getAddresses(opts, cb) {
    const SKIP_CACHE_FLAG = 1;
    const MAX_ADDR = 10;
    const { startPath, n, skipCache=true } = opts;
    if (startPath === undefined || n === undefined)
      return cb('Please provide `startPath` and `n` options');
    if (startPath.length < 2 || startPath.length > 5)
      return cb('Path must include between 2 and 5 indices');
    if (n > MAX_ADDR)
      return cb(`You may only request ${MAX_ADDR} addresses at once.`);

    if ((skipCache === false && false === isValidAssetPath(startPath)) ||
        (skipCache === true && false === isValidCoinType(startPath)) )
      return cb('Parent path is not supported');

    const fwConstants = getFwVersionConst(this.fwVersion);
    let sz = 32 + 20 + 1; // walletUID + 5 u32 indices + count/flag
    if (fwConstants.varAddrPathSzAllowed) {
      sz += 1;  // pathDepth
    } else if (startPath.length !== 5) {
      return cb('Your Lattice firmware only supports derivation paths with 5 indices. Please upgrade.')
    }
    const payload = Buffer.alloc(sz);
    let off = 0;

    // WalletUID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += 32;
    // Build the start path (5x u32 indices)
    if (fwConstants.varAddrPathSzAllowed) {
      payload.writeUInt8(startPath.length, off);
      off += 1;
    }
    for (let i = 0; i < 5; i++) {
      if (i <= startPath.length)
        payload.writeUInt32BE(startPath[i], off);
      off += 4;
    }
    // Specify the number of subsequent addresses to request.
    // We also allow the user to skip the cache and request any address related to the asset
    // in the wallet.
    let val;
    if (true === fwConstants.addrFlagsAllowed) {
      const flag = skipCache === true ? bitwise.nibble.read(SKIP_CACHE_FLAG) : bitwise.nibble.read(0);
      const count = bitwise.nibble.read(n);
      val = bitwise.byte.write(flag.concat(count));
    } else {
      val = n;
    }
    payload.writeUInt8(val, off); off++;
    const param = this._buildEncRequest(encReqCodes.GET_ADDRESSES, payload);
    return this._request(param, (err, res) => {
      if (err) return cb(err);
      const parsedRes = this._handleGetAddresses(res);
      if (parsedRes.err) return cb(parsedRes.err);
      return cb(null, parsedRes.data);
    })
  }

  sign(opts, cb, cachedData=null, nextCode=null) {
    const { currency } = opts;
    let { data } = opts;
    if (currency === undefined || data === undefined) {
      return cb('Please provide `currency` and `data` options');
    } else if (signReqResolver[currency] === undefined) {
      return cb('Unsupported currency');
    }
    // All transaction requests must be put into the same sized buffer.
    // This comes from sizeof(GpTransactionRequest_t), but note we remove
    // the 2-byte schemaId since it is not returned from our resolver.
    // Note that different firmware versions may have different data sizes.
    const fwConstants = getFwVersionConst(this.fwVersion);
    // Build the signing request payload to send to the device. If we catch
    // bad params, return an error instead
    data = { fwConstants, ...data};
    let req, reqPayload;
    let schema;
    if (cachedData !== null && nextCode !== null) {
      req = cachedData;
      reqPayload = Buffer.concat([nextCode, req.extraDataPayloads.shift()])
      schema = signingSchema.EXTRA_DATA;
    } else {
      req = signReqResolver[currency](data);
      if (req.err !== undefined) return cb(req.err);
      if (req.payload.length > fwConstants.reqMaxDataSz)
        return cb('Transaction is too large');
      reqPayload = req.payload;
      schema = req.schema;
    }

    // Build the payload
    const payload = Buffer.alloc(2 + fwConstants.reqMaxDataSz);
    let off = 0;
    // Whether there will be follow up requests
    const hasExtraPayloads = req.extraDataPayloads && Number(req.extraDataPayloads.length > 0);
    payload.writeUInt8(hasExtraPayloads, off); off += 1;  
    // Copy request schema (e.g. ETH or BTC transfer)
    payload.writeUInt8(schema, off); off += 1;
    // Copy the wallet UID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += wallet.uid.length;
    // Build data based on the type of request
    // Copy the payload of the request
    reqPayload.copy(payload, off);
    // Construct the encrypted request and send it
    const param = this._buildEncRequest(encReqCodes.SIGN_TRANSACTION, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.sign(opts, cb, cachedData, nextCode);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else if (hasExtraPayloads) {
        const decrypted = this._handleEncResponse(res, decResLengths.sign);
        nextCode = decrypted.data.slice(65, 73);
        if (!cachedData)
          cachedData = req;
        return this.sign(opts, cb, cachedData, nextCode);
      } else {
        // Correct wallet and no errors -- handle the response
        const parsedRes = this._handleSign(res, currency, req);
        return cb(parsedRes.err, parsedRes.data);
      }
    })
  }

  addAbiDefs(defs, cb, nextCode=null) {
    const defsToAdd = defs.slice(0, MAX_ABI_DEFS);
    defs = defs.slice(MAX_ABI_DEFS);
    let abiPayload;
    try {
      abiPayload = buildAddAbiPayload(defsToAdd);
    } catch (err) {
      return cb(err);
    }
    const payload = Buffer.alloc(abiPayload.length + 10);
    // Let the firmware know how many defs are remaining *after this one*.
    // If this is a positive number, firmware will send us a temporary code
    // to bypass user authorization if the user has configured easy ABI loading.
    payload.writeUInt16LE(defs.length);
    // If this is a follow-up request, we don't need to ask for user authorization
    // if we use the correct temporary u64
    if (nextCode !== null)
      nextCode.copy(payload, 2);
    abiPayload.copy(payload, 10);
    const param = this._buildEncRequest(encReqCodes.ADD_ABI_DEFS, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode && responseCode !== responseCodes.RESP_SUCCESS)
        return cb('Error making request.');
      else if (err)
        return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.addAbiDefs);
      // Grab the 8 byte code to fast track our next request, if needed
      nextCode = decrypted.data.slice(65, 73); 
      // No defs left? Return success
      if (defs.length === 0)
        return cb(null);
      // Add the next set
      this.addAbiDefs(defs, cb, nextCode, defs);
    })
  }
  
  addPermissionV0(opts, cb) {
    const { currency, timeWindow, limit, decimals, asset } = opts;
    if (!currency || timeWindow === undefined || limit === undefined || decimals === undefined ||
        timeWindow === null || limit === null || decimals === null)
      return cb('currency, timeWindow, decimals, and limit are all required options.');
    else if (timeWindow === 0 || limit === 0)
      return cb('Time window and spending limit must be positive.');
    // Build the name of the permission
    let name = currency;
    if (asset)
      name += `_${asset}`;
    // Start building the payload
    const payload = Buffer.alloc(293);
    // Copy the name
    if (Buffer.from(name).length > 255)
      return cb('Asset name too long.');
    Buffer.from(name).copy(payload, 0);
    // Convert the limit to a 32 byte hex buffer and copy it in
    const limitBuf = ensureHexBuffer(limit)
    if (limitBuf.length > 32)
      return cb('Limit too large.');
    limitBuf.copy(payload, 256 + (32 - limitBuf.length));
    // Copy the time window (seconds)
    payload.writeUInt32BE(timeWindow, 288);
    payload.writeUInt8(decimals, 292);
    // Encrypt the request and send it to the Lattice.
    const param = this._buildEncRequest(encReqCodes.ADD_PERMISSION_V0, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.addPermissionV0(opts, cb);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else {
        // Correct wallet and no errors -- handle the response
        const d = this._handleEncResponse(res, decResLengths.finalizePair);
        if (d.err)
          return cb(d.err);
        return cb(null);
      }
    })
  }

  //=======================================================================
  // INTERNAL FUNCTIONS
  // These handle the logic around building requests and consuming
  // responses. They take into account the Lattice's serialization scheme
  // among other protocols.
  //=======================================================================

  // Get the active wallet in the device. If we already have one recorded,
  // we don't need to do anything
  // returns cb(err) -- err is a string
  _getActiveWallet(cb, forceRefresh=false) {
    if (forceRefresh !== true && (this.hasActiveWallet() === true || this.isPaired !== true)) {
      // If the active wallet already exists, or if we are not paired, skip the request
      return cb(null);
    } else {
      // No active wallet? Get it from the device
      const payload = Buffer.alloc(0);
      const param = this._buildEncRequest(encReqCodes.GET_WALLETS, payload);
      return this._request(param, (err, res) => {
        if (err) {
          this._resetActiveWallets();
          return cb(err);
        }
        return cb(this._handleGetWallets(res));
      })
    }
  }

  // Get the shared secret, derived via ECDH from the local private key
  // and the ephemeral public key
  // @returns Buffer
  _getSharedSecret() {
    // Once every ~256 attempts, we will get a key that starts with a `00` byte, which
    // can lead to problems initializing AES if we don't force a 32 byte BE buffer.
    return Buffer.from(this.key.derive(this.ephemeralPub.getPublic()).toArray('be', 32));
  }

  // Get the ephemeral id, which is the first 4 bytes of the shared secret
  // generated from the local private key and the ephemeral public key from
  // the device.
  // @returns Buffer
  _getEphemId() {
    if (this.ephemeralPub === null) return null;
    // EphemId is the first 4 bytes of the hash of the shared secret
    const secret = this._getSharedSecret();
    const hash = this.crypto.createHash('sha256').update(secret).digest();
    return hash.slice(0, 4);
  }

  _buildEncRequest(enc_request_code, payload) {
    // Get the ephemeral id - all encrypted requests require there to be an
    // epehemeral public key in order to send
    const ephemId = parseInt(this._getEphemId().toString('hex'), 16)
    
    // Build the payload and checksum
    const payloadPreCs = Buffer.concat([Buffer.from([enc_request_code]), payload]);
    const cs = checksum(payloadPreCs);
    const payloadBuf = Buffer.alloc(payloadPreCs.length + 4);

    // Lattice validates checksums in little endian
    payloadPreCs.copy(payloadBuf, 0);
    payloadBuf.writeUInt32LE(cs, payloadPreCs.length);
    // Encrypt this payload
    const secret = this._getSharedSecret();
    const newEncPayload = aes256_encrypt(payloadBuf, secret);

    // Write to the overall payload. We must use the same length
    // for every encrypted request and must include a 32-bit ephemId
    // along with the encrypted data
    const newPayload = Buffer.alloc(ENC_MSG_LEN + 4);
    // First 4 bytes are the ephemeral id (in little endian)
    newPayload.writeUInt32LE(ephemId, 0);
    // Next N bytes
    newEncPayload.copy(newPayload, 4);
    return this._buildRequest(deviceCodes.ENCRYPTED_REQUEST, newPayload);
  
  }

  // Build a request to send to the device.
  // @param [request_code] {uint8}  - 8-bit unsigned integer representing the message request code
  // @param [id] {buffer} - 4 byte identifier (comes from HSM for subsequent encrypted reqs)
  // @param [payload] {buffer} - serialized payload
  // @returns {buffer}
  _buildRequest(request_code, payload) {
    // Length of payload;
    // we add 1 to the payload length to account for the request_code byte
    let L = payload && Buffer.isBuffer(payload) ? payload.length + 1 : 1;
    if (request_code === deviceCodes.ENCRYPTED_REQUEST) {
      L = 1 + payload.length;
    }
    let i = 0;
    const preReq = Buffer.alloc(L + 8);
    // Build the header
    i = preReq.writeUInt8(VERSION_BYTE, i);
    i = preReq.writeUInt8(REQUEST_TYPE_BYTE, i);
    const id = this.crypto.randomBytes(4);
    i = preReq.writeUInt32BE(parseInt(`0x${id.toString('hex')}`), i);
    i = preReq.writeUInt16BE(L, i);
    // Build the payload
    i = preReq.writeUInt8(request_code, i);
    if (L > 1) i = payload.copy(preReq, i);
    // Add the checksum
    const cs = checksum(preReq);
    const req = Buffer.alloc(preReq.length + 4); // 4-byte checksum
    i = preReq.copy(req);
    req.writeUInt32BE(cs, i);
    return req;
  }

  _request(data, cb, retryCount=this.retryCount) {
    if (!this.deviceId) return cb('Serial is not set. Please set it and try again.');
    const url = `${this.baseUrl}/${this.deviceId}`;
    superagent.post(url).timeout(this.timeout)
    .send({data})
    .then(res => {
      if (!res || !res.body) return cb(`Invalid response: ${res}`)
      else if (res.body.status !== 200) return cb(`Error code ${res.body.status}: ${res.body.message}`)
      const parsed = parseLattice1Response(res.body.message);
      // If the device is busy, retry if we can
      if (( parsed.responseCode === responseCodes.RESP_ERR_DEV_BUSY ||
            parsed.responseCode === responseCodes.RESP_ERR_GCE_TIMEOUT ) 
            && (retryCount > 0)) {
        return setTimeout(() => { this._request(data, cb, retryCount-1) }, 3000);
      }
      // If we caugh a `ErrWalletNotPresent` make sure we aren't caching an old ative walletUID
      if (parsed.responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) 
        this._resetActiveWallets();
      // If there was an error in the response, return it
      if (parsed.err) 
        return cb(parsed.err);
      return cb(null, parsed.data, parsed.responseCode); 
    })
    .catch((err) => {
      const isTimeout = err.code === 'ECONNABORTED' && err.errno === 'ETIME';
      if (isTimeout)
        return cb('Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.')
      else
        return cb('Failed to make request to device.');
    });
  }

  // ----- Device response handlers -----

  // Connect will call `StartPairingMode` on the device, which gives the
  // user 60 seconds to finalize the pairing
  // This will return an ephemeral public key, which is needed for the next
  // request. If the device is already paired, this ephemPub is simply used
  // to encrypt the next request. If the device is not paired, it is needed
  // to pair the device within 60 seconds.
  // @returns true if we are paired to the device already
  _handleConnect(res) {
    let off = 0;
    const pairingStatus = res.readUInt8(off); off++;
    // If we are already paired, we get the next ephemeral key
    const pub = res.slice(off, off + 65).toString('hex'); off += 65;
    // Grab the firmware version (will be 0-length for older fw versions)
    // It is of format |fix|minor|major|reserved|
    this.fwVersion = res.slice(off, off + 4);
    // Set the public key
    this.ephemeralPub = getP256KeyPairFromPub(pub);
    // return the state of our pairing
    return (pairingStatus === messageConstants.PAIRED);
  }

  // All encrypted responses must be decrypted with the previous shared secret. Per specification,
  // decrypted responses will all contain a 65-byte public key as the prefix, which becomes the 
  // new ephemeralPub.
  _handleEncResponse(encRes, len) {
    // Decrypt response
    const secret = this._getSharedSecret();
    const encData = encRes.slice(0, ENC_MSG_LEN);
    const res = aes256_decrypt(encData, secret);
    // len does not include a 65-byte pubkey that prefies each encResponse
    len += 65;
    // Validate checksum. It will be the last 4 bytes of the decrypted payload.
    // The length of the decrypted payload will be fixed for each given message type.
    const toCheck = res.slice(0, len);
    const cs = parseInt(`0x${res.slice(len, len+4).toString('hex')}`);
    const csCheck = checksum(toCheck);
    if (cs !== csCheck) return { err: `Checksum mismatch in response from Lattice (calculated ${csCheck}, wanted ${cs})` };

    // First 65 bytes is the next ephemeral pubkey
    const pub = res.slice(0, 65).toString('hex');
    try {
      this.ephemeralPub = getP256KeyPairFromPub(pub);
      return { err: null, data: res };
    } catch (e) {
      return { err: `Error handling getAddresses response: ${e.toString()}` };
    }
  }

  // Pair will create a new pairing if the user successfully enters the secret
  // into the device in time. If successful (status=0), the device will return
  // a new ephemeral public key, which is used to derive a shared secret
  // for the next request
  // @returns error (or null)
  _handlePair(encRes) {
    const d = this._handleEncResponse(encRes, decResLengths.finalizePair);
    if (d.err) return d.err;
    // Remove the pairing salt - we're paired!
    this.pairingSalt = null;
    this.isPaired = true;
    return null;
  }

  // GetAddresses will return an array of address strings
  _handleGetAddresses(encRes) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.getAddresses);
    if (decrypted.err !== null ) return decrypted;

    const addrData = decrypted.data;
    let off = 65; // Skip 65 byte pubkey prefix
    // Look for addresses until we reach the end (a 4 byte checksum)
    const addrs = [];
    while (off + 4 < decResLengths.getAddresses) {
      const addrBytes = addrData.slice(off, off+ADDR_STR_LEN); off += ADDR_STR_LEN;
      // Return the UTF-8 representation
      const len = addrBytes.indexOf(0); // First 0 is the null terminator
      if (len > 0)
        addrs.push(addrBytes.slice(0, len).toString());
    }
    return { data: addrs, err: null };
  }

  _handleGetWallets(encRes) {
    const decrypted = this._handleEncResponse(encRes, decResLengths.getWallets);
    if (decrypted.err !== null) return decrypted;
    const res = decrypted.data;
    let walletUID;
    // Read the external wallet data first. If it is non-null, the external wallet will
    // be the active wallet of the device and we should save it.
    // If the external wallet is blank, it means there is no card present and we should 
    // save and use the interal wallet.
    // If both wallets are empty, it means the device still needs to be set up.
    const walletDescriptorLen = 71;
    // Skip 65byte pubkey prefix. WalletDescriptor contains 32byte id + 4byte flag + 35byte name
    let off = 65;
    // Internal first
    let hasActiveWallet = false;
    walletUID = res.slice(off, off+32);
    this.activeWallets.internal.uid = walletUID;
    this.activeWallets.internal.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.internal.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;

    // Offset the first item
    off += walletDescriptorLen;
    
    // External
    walletUID = res.slice(off, off+32);
    this.activeWallets.external.uid = walletUID;
    this.activeWallets.external.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.external.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;
    if (hasActiveWallet === true)
      return null;
    else
      return 'No active wallet.';
  }

  _handleSign(encRes, currencyType, req=null) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.sign);
    if (decrypted.err !== null ) return { err: decrypted.err };
    const PUBKEY_PREFIX_LEN = 65;
    const PKH_PREFIX_LEN = 20;
    let off = PUBKEY_PREFIX_LEN; // Skip past pubkey prefix
    const res = decrypted.data;

    // Get the change data if we are making a BTC transaction
    let changeRecipient;
    if (currencyType === 'BTC') {
      const changeVersion = bitcoin.addressVersion[req.changeData.changeVersion];
      const changePubkeyhash = res.slice(off, off + PKH_PREFIX_LEN); off += PKH_PREFIX_LEN;
      changeRecipient = bitcoin.getBitcoinAddress(changePubkeyhash, changeVersion);
    }
    // Start building return data
    const returnData = { err: null, data: null };
    const DERLength = 74; // max size of a DER signature -- all Lattice sigs are this long
    const SIGS_OFFSET = 10 * DERLength; // 10 signature slots precede 10 pubkey slots
    const PUBKEYS_OFFSET = PUBKEY_PREFIX_LEN + PKH_PREFIX_LEN + SIGS_OFFSET;
    
    if (currencyType === 'BTC') {
      const compressedPubLength = 33;  // Size of compressed public key
      const pubkeys = [];
      const sigs = [];
      let n = 0;
      // Parse the signature for each output -- they are returned
      // in the serialized payload in form [pubkey, sig]
      // There is one signature per output
      while (off < res.length) {
        // Exit out if we have seen all the returned sigs and pubkeys
        if (res[off] !== 0x30) break;
        // Otherwise grab another set
        // Note that all DER sigs returned fill the maximum 74 byte buffer, but also
        // contain a length at off+1, which we use to parse the non-zero data.
        // First get the signature from its slot
        const sigStart = off;
        const sigEnd = off + 2 + res[off + 1];
        sigs.push(res.slice(sigStart, sigEnd));
        // Next, shift by the full set of signatures to hit the respective pubkey
        // NOTE: The data returned is: [<sig0>, <sig1>, ... <sig9>][<pubkey0>, <pubkey1>, ... <pubkey9>]
        const pubStart = (n * compressedPubLength) + PUBKEYS_OFFSET;
        const pubEnd = ((n+1) * compressedPubLength) + PUBKEYS_OFFSET;
        pubkeys.push(res.slice(pubStart, pubEnd));
        // Update offset to hit the next signature slot
        off += DERLength;
        n += 1;
      }
      // Build the transaction data to be serialized
      const preSerializedData = {
        inputs: [],
        outputs: [],
        spenderScriptType: req.spenderScriptType,
        network: req.origData.network,
        crypto: this.crypto,
      };

      // First output comes from request dta
      preSerializedData.outputs.push({
        value: req.origData.value,
        recipient: req.origData.recipient,
      });
      if (req.changeData.value > 0) {
        // Second output comes from change data
        preSerializedData.outputs.push({
          value: req.changeData.value,
          recipient: changeRecipient,
        });
      }
      
      // Add the inputs
      for (let i = 0; i < sigs.length; i++) {
        preSerializedData.inputs.push({
          hash: req.origData.prevOuts[i].txHash,
          index: req.origData.prevOuts[i].index,
          sig: sigs[i],
          pubkey: pubkeys[i],
        });
      }

      // Finally, serialize the transaction
      const serializedTx = bitcoin.serializeTx(preSerializedData);
      // Generate the transaction hash so the user can look this transaction up later
      let preImageTxHash = serializedTx;
      if (preSerializedData.isSegwitSpend === true) {
        // Segwit transactions need to be re-serialized using legacy serialization
        // before the transaction hash is calculated. This allows legacy clients
        // to validate the transactions.
        preSerializedData.isSegwitSpend = false;
        preImageTxHash = bitcoin.serializeTx(preSerializedData);
      }  
      let txHash = this.crypto.createHash('sha256').update(Buffer.from(preImageTxHash, 'hex')).digest();
      txHash = this.crypto.createHash('sha256').update(txHash).digest().reverse().toString('hex');
      
      // Add extra data for debugging/lookup purposes
      returnData.data = {
        tx: serializedTx,
        txHash,
        changeRecipient,
        sigs,
      }
    } else if (currencyType === 'ETH') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const ethAddr = res.slice(off, off + 20);
      // Determine the `v` param and add it to the sig before returning
      const rawTx = ethereum.buildEthRawTx(req, sig, ethAddr, req.useEIP155);
      returnData.data = {
        tx: `0x${rawTx}`,
        txHash: `0x${ethereum.hashTransaction(rawTx)}`,
        sig: {
          v: sig.v,
          r: sig.r.toString('hex'),
          s: sig.s.toString('hex'),
        },
        signer: ethAddr,
      };
    } else if (currencyType === 'ETH_MSG') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const signer = res.slice(off, off + 20);
      const validatedSig = ethereum.validateEthereumMsgResponse({ signer, sig }, req);
      returnData.data = {
        sig: {
          v: validatedSig.v,
          r: validatedSig.r.toString('hex'),
          s: validatedSig.s.toString('hex'),
        },
        signer,
      }
    }

    return returnData;
  }

  _resetActiveWallets() {
    this.activeWallets.internal.uid = EMPTY_WALLET_UID;
    this.activeWallets.internal.name = null;
    this.activeWallets.internal.capabilities = null;
    this.activeWallets.external.uid = EMPTY_WALLET_UID;
    this.activeWallets.external.name = null;
    this.activeWallets.external.capabilities = null;
    return;
  }

  getActiveWallet() {
    if (!EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)) {
      return this.activeWallets.external;
    } else if (!EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)) {
      return this.activeWallets.internal;
    } else {
      return null;
    }
  }

  hasActiveWallet() {
    return this.getActiveWallet() !== null;
  }
  
  // Get 64 bytes representing the public key
  // This is the uncompressed key without the leading 04 byte
  pubKeyBytes(LE=false) {
    const k = this.key.getPublic();
    const p = k.encode('hex');
    const pb = Buffer.from(p, 'hex');
    if (LE === true) {
      // Need to flip X and Y components to little endian
      const x = pb.slice(1, 33).reverse();
      const y = pb.slice(33, 65).reverse();
      return Buffer.concat([pb[0], x, y]);
    } else {
      return pb;
    }
  }

  // TODO: Find a better way to export this.
  parseAbi(source, data, skipErrors=false) {
    switch (source) {
      case 'etherscan':
        return abiParsers[source](data, skipErrors);
      default:
        return { err: `No ${source} parser available.` };

    }
  }
}

module.exports = Client;


/***/ }),

/***/ "qVBC":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/xnor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XNOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] ^ bits2[i] ^ 1);
    return result;
});


/***/ }),

/***/ "u0zn":
/*!******************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/ethereumAbi.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer
const keccak256 = __webpack_require__(/*! js-sha3 */ "zNmP").keccak256;
const { ETH_ABI_LATTICE_FW_TYPE_MAP } = __webpack_require__(/*! ./constants */ "L21C");
const NAME_MAX_SZ = 100;
const HEADER_SZ = 5 + NAME_MAX_SZ; // 4 byte sig + name + 1 byte param count
const CATEGORY_SZ = 32;
const PARAM_SZ = 26; // 20 byte name + 6 byte def
const MAX_PARAMS = 18;
const MAX_ABI_DEFS = 2;
exports.MAX_ABI_DEFS = MAX_ABI_DEFS;

// Build a request to add ABI data
exports.buildAddAbiPayload = function(defs) {
  if (!defs || !Array.isArray(defs))
    throw new Error('Missing definitions.');
  if (defs.length > exports.MAX_ABI_DEFS)
    throw new Error(`You may only add ${MAX_ABI_DEFS} ABI definitions per request.`);
  const b = Buffer.alloc(1 + (MAX_ABI_DEFS * (HEADER_SZ + CATEGORY_SZ + (PARAM_SZ * MAX_PARAMS))));
  let off = 0;
  b.writeUInt8(defs.length, off); off++;
  defs.forEach((def) => {
    if (!def.sig || !def.name || !def.params)
      throw new Error('name, sig, and params must be present for every ABI definition.')
    // -- Header data --
    const sig = Buffer.from(def.sig, 'hex');
    if (sig.length !== 4)
      throw new Error('Function signatures must always be four bytes.');
    sig.copy(b, off); off += sig.length;
    const name = Buffer.from(def.name);
    if (name.length > NAME_MAX_SZ - 1) // The -1 accounts for the null terminator
      throw new Error(`Only function names shorter than ${NAME_MAX_SZ-1} characters are supported.`);
    Buffer.from(def.name).slice(0, NAME_MAX_SZ).copy(b, off); off += NAME_MAX_SZ;
    // Number of parameters
    const numParams = Array.isArray(def.params) ? def.params.length : 0;
    b.writeUInt8(numParams, off); off++;
    // -- (optional) Category name --
    if (def.category && typeof def.category === 'string') {
      const category = Buffer.from(def.category);
      if (category.length > CATEGORY_SZ - 1) // -1 accounts for null terminator
        throw new Error(`Category name must be shorter than ${CATEGORY_SZ - 1}. Got ${category.length}`);
      category.copy(b, off);
    }
    off += CATEGORY_SZ;
    // -- Param data --
    if (numParams > MAX_PARAMS)
      throw new Error('Currently only ABI defintions with <=10 parameters are supported.');
    if (numParams > 0) {
      // First copy param names (first 20 bytes)
      def.params.forEach((param) => {
        if (param.name === undefined || param.latticeTypeIdx === undefined || param.isArray === undefined || param.arraySz === undefined)
          throw new Error('name, latticeTypeIdx, isArray, and arraySz must be defined for all ABI params.');
        Buffer.from(param.name).slice(0, 20).copy(b, off); off += 20;
      })
      // Bump offset to account for blank param slots
      off += 20 * (MAX_PARAMS - numParams);
      // Next copy the definitions
      def.params.forEach((param) => {
        b.writeUInt8(param.latticeTypeIdx, off); off++;
        b.writeUInt8(param.isArray === true, off); off++;
        b.writeUInt32LE(param.arraySz, off); off += 4;
      })
      // Bump offset again
      off += 6 * (MAX_PARAMS - numParams);
    } else {
      // If there are no params, just bump the offset
      off += PARAM_SZ * MAX_PARAMS;
    }
  })
  return b;
}

// Get the 4-byte function identifier based on the canonical name
exports.getFuncSig = function(f) {
  // Canonical name is:
  // funcName(paramType0, ..., paramTypeN)
  let canonicalName = `${f.name}(`;
  f.inputs.forEach((input) => {
    if (input.type.indexOf('tuple') > -1) {
      const arrSuffix = input.type.slice(input.type.indexOf('tuple') + 5);
      canonicalName += '('
      input.components.forEach((c, i) => {
        canonicalName += `${c.type}${i === input.components.length - 1 ? '' : ','}`;
      })
      canonicalName += `)${arrSuffix},`
    } else {
      canonicalName += `${input.type},`
    }
  })
  if (f.inputs.length > 0)
    canonicalName = canonicalName.slice(0, canonicalName.length - 1)
  canonicalName += ')'
  return keccak256(canonicalName).slice(0, 8);
}

//--------------------------------------
// PARSERS
//--------------------------------------
function parseEtherscanAbiDefs(_defs, skipErrors=false) { // `_defs` are `result` of the parsed response
  const defs = [];
  _defs.forEach((d) => {
    if (d.name && d.inputs && d.type === 'function' && d.stateMutability !== 'view' && d.constant !== true) {
      try {
        const sig = exports.getFuncSig(d);
        const params = parseEtherscanAbiInputs(d.inputs);
        defs.push({
          name: d.name,
          sig,
          params,
        })
      } catch (err) {
        if (skipErrors === true)
          console.error('Failed to load def:', d.name, err.toString())
        else
          throw new Error(err)
      }
    }
  })
  return defs;
}

exports.abiParsers = {
  etherscan: parseEtherscanAbiDefs,
}

//--------------------------------------
// HELPERS
//--------------------------------------
// Parse the ABI param data into structs Lattice firmware will recognize.
function parseEtherscanAbiInputs(inputs, data=[], isNestedTuple=false) {
  let tupleParams = [];
  inputs.forEach((input) => {
    const typeName = input.type;
    const d = { isArray: false, arraySz: 0, name: input.name, };
    const openBracketIdx = typeName.indexOf('[');
    const closeBracketIdx = typeName.indexOf(']');
    const isMultiDim = typeName.split('[').length > 2;
    if (isMultiDim) {
      throw new Error('Skipping function with unsupported multidimensional array type')
    } else {
      if (openBracketIdx > -1 && closeBracketIdx > -1) {
        if (openBracketIdx >= closeBracketIdx) {
          ; // not a valid param -- skip it
        } else if ((openBracketIdx + 1) === closeBracketIdx) {
          d.isArray = true;
        } else {
          // Parse the array size if applicable
          const number = parseInt(typeName.slice(openBracketIdx, closeBracketIdx))
          if (isNaN(number)) {
            return d;
          }
          d.isArray = true;
          d.arraySz = number;
        }
      }
      let singularTypeName = openBracketIdx > -1 ? typeName.slice(0, openBracketIdx) : typeName;
      if (singularTypeName === 'tuple') {
        if (isNestedTuple === true)
          throw new Error('Nested tuples are not supported')
        singularTypeName = `tuple${input.components.length}`;
        tupleParams = parseEtherscanAbiInputs(input.components, tupleParams, true);
      }
      d.latticeTypeIdx = getTypeIdxLatticeFw(singularTypeName)
      if (!d.latticeTypeIdx)
        throw new Error(`Unsupported type: ${typeName}`)
      data.push(d)
    }
  })
  const params = data.concat(tupleParams)
  if (params.length > 18)
    throw new Error('Function has too many parameters for Lattice firmware (18 max)')
  return data.concat(tupleParams);
}

// Enum values from inside Lattice firmware
function getTypeIdxLatticeFw(type) {
  return ETH_ABI_LATTICE_FW_TYPE_MAP[type];
}


/***/ }),

/***/ "vGFC":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/xnor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise XNOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xnor(a, b, false) => Buffer(a XNOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XNOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] ^ b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "xKF7":
/*!***************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/ethereum.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Utils for Ethereum transactions. This is effecitvely a shim of ethereumjs-util, which
// does not have browser (or, by proxy, React-Native) support.
const BN = __webpack_require__(/*! bignumber.js */ "kB5k");
const Buffer = __webpack_require__(/*! buffer/ */ "tjlA").Buffer;
const cbor = __webpack_require__(/*! borc */ "AREZ");
const constants = __webpack_require__(/*! ./constants */ "L21C");
const ethers = __webpack_require__(/*! ethers */ "wDBh");
const eip712 = __webpack_require__(/*! ethers-eip712 */ "1B/i");
const keccak256 = __webpack_require__(/*! js-sha3 */ "zNmP").keccak256;
const rlp = __webpack_require__(/*! rlp-browser */ "MbHH");
const secp256k1 = __webpack_require__(/*! secp256k1 */ "IzB8");

exports.buildEthereumMsgRequest = function(input) {
  if (!input.payload || !input.protocol || !input.signerPath)
    throw new Error('You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request');
  if (input.signerPath.length > 5 || input.signerPath.length < 2) 
    throw new Error('Please provide a signer path with 2-5 indices');
  const req = {
    schema: constants.signingSchema.ETH_MSG,
    payload: null,
    input, // Save the input for later
    msg: null, // Save the buffered message for later
  }
  try {
    switch (input.protocol) {
      case 'signPersonal':
        return buildPersonalSignRequest(req, input)
      case 'eip712':
        if (!input.fwConstants.eip712Supported)
          throw new Error('EIP712 is not supported by your Lattice firmware version. Please upgrade.')
        return buildEIP712Request(req, input)
      default:
        throw new Error('Unsupported protocol');
    }
  } catch (err) {
    return { err: err.toString() }
  }
}

exports.validateEthereumMsgResponse = function(res, req) {
  const { signer, sig } = res;
  const { input, msg, prehash=null } = req;
  if (input.protocol === 'signPersonal') {
    // NOTE: We are currently hardcoding networkID=1 and useEIP155=false but these
    //       may be configurable in future versions
    const hash =  prehash ? 
                  prehash : 
                  Buffer.from(keccak256(Buffer.concat([get_personal_sign_prefix(msg.length), msg])), 'hex');
    return addRecoveryParam(hash, sig, signer, 1, false)
  } else if (input.protocol === 'eip712') {
    const digest = prehash ? prehash : eip712.TypedDataUtils.encodeDigest(req.input.payload);
    return addRecoveryParam(digest, sig, signer)
  } else {
    throw new Error('Unsupported protocol');
  }
}

exports.buildEthereumTxRequest = function(data) {
  try {
    let { chainId=1 } = data;
    const { signerPath, eip155=null, fwConstants } = data;
    const { extraDataFrameSz, extraDataMaxFrames, prehashAllowed } = fwConstants;
    const EXTRA_DATA_ALLOWED = extraDataFrameSz > 0 && extraDataMaxFrames > 0;
    const MAX_BASE_DATA_SZ = fwConstants.ethMaxDataSz;
    const VAR_PATH_SZ = fwConstants.varAddrPathSzAllowed;

    // Sanity checks:
    // There are a handful of named chains we allow the user to reference (`chainIds`)
    // Custom chainIDs should be either numerical or hex strings
    if (typeof chainId !== 'number' && isValidChainIdHexNumStr(chainId) === false) 
      chainId = chainIds[chainId];
    // If this was not a custom chainID and we cannot find the name of it, exit
    if (!chainId) 
      throw new Error('Unsupported chain ID or name');
    // Sanity check on signePath
    if (!signerPath) 
      throw new Error('`signerPath` not provided');

    // Determine if we should use EIP155 given the chainID.
    // If we are explicitly told to use eip155, we will use it. Otherwise,
    // we will look up if the specified chainId is associated with a chain
    // that does not use EIP155 by default. Note that most do use EIP155.
    let useEIP155 = chainUsesEIP155(chainId);
    if (eip155 !== null && typeof eip155 === 'boolean')
      useEIP155 = eip155;

    // Hack for metamask, which sends value=null for 0 ETH transactions
    if (!data.value)
      data.value = 0;
      
    //--------------
    // 1. BUILD THE RAW TX FOR FUTURE RLP ENCODING
    //--------------

    // Ensure all fields are 0x-prefixed hex strings
    const rawTx = [];
    // Build the transaction buffer array
    const nonceBytes = ensureHexBuffer(data.nonce);
    const gasPriceBytes = ensureHexBuffer(data.gasPrice);
    const gasLimitBytes = ensureHexBuffer(data.gasLimit);
    const toBytes = ensureHexBuffer(data.to);
    const valueBytes = ensureHexBuffer(data.value);
    const dataBytes = ensureHexBuffer(data.data);
    rawTx.push(nonceBytes);
    rawTx.push(gasPriceBytes);
    rawTx.push(gasLimitBytes);
    rawTx.push(toBytes);
    rawTx.push(valueBytes);
    rawTx.push(dataBytes);
    // Add empty v,r,s values
    if (useEIP155 === true) {
      rawTx.push(ensureHexBuffer(chainId)); // v
      rawTx.push(ensureHexBuffer(null));    // r
      rawTx.push(ensureHexBuffer(null));    // s
    }
    //--------------
    // 2. BUILD THE LATTICE REQUEST PAYLOAD
    //--------------
    const ETH_TX_NON_DATA_SZ = 122; // Accounts for metadata and non-data params
    const txReqPayload = Buffer.alloc(MAX_BASE_DATA_SZ + ETH_TX_NON_DATA_SZ);
    let off = 0;
    // 1. EIP155 switch and chainID
    //------------------
    txReqPayload.writeUInt8(Number(useEIP155), off); off++;
    // NOTE: Originally we designed for a 1-byte chainID, but modern rollup chains use much larger
    // chainID values. To account for these, we will put the chainID into the `data` buffer if it
    // is >=255. Values up to UINT64_MAX will be allowed.
    let chainIdBuf; 
    let chainIdBufSz = 0;
    if (useChainIdBuffer(chainId) === true) {
      chainIdBuf = getChainIdBuf(chainId);
      chainIdBufSz = chainIdBuf.length;
      if (chainIdBufSz > constants.MAX_CHAIN_ID_BYTES)
        throw new Error('ChainID provided is too large.');
      // Signal to Lattice firmware that it needs to read the chainId from the tx.data buffer
      txReqPayload.writeUInt8(constants.HANDLE_LARGER_CHAIN_ID, off); off++;
    } else {
      // For chainIDs <255, write it to the chainId u8 slot in the main tx buffer
      chainIdBuf = ensureHexBuffer(chainId);
      if (chainIdBuf.length !== 1)
        throw new Error('Error parsing chainID');
      chainIdBuf.copy(txReqPayload, off); off += chainIdBuf.length;
    }

    // 2. Signer Path
    //------------------
    const signerPathBuf = buildSignerPathBuf(signerPath, VAR_PATH_SZ);
    signerPathBuf.copy(txReqPayload, off);
    off += signerPathBuf.length;

    // 3. ETH TX request data
    //------------------
    if (nonceBytes.length > 4)
      throw new Error('Nonce too large');
    nonceBytes.copy(txReqPayload, off + (4 - nonceBytes.length)); off += 4;
    if (gasPriceBytes.length > 8)
      throw new Error('Gas price too large');
    gasPriceBytes.copy(txReqPayload, off + (8 - gasPriceBytes.length)); off += 8;
    if (gasLimitBytes.length > 4)
      throw new Error('Gas limit too large');
    gasLimitBytes.copy(txReqPayload, off + (4 - gasLimitBytes.length)); off += 4;
    if (toBytes.length !== 20)
      throw new Error('Invalid `to` address');
    toBytes.copy(txReqPayload, off); off += 20;
    if (valueBytes.length > 32)
      throw new Error('Value too large');
    valueBytes.copy(txReqPayload, off + (32 - valueBytes.length)); off += 32;
    // Flow data into extraData requests, which will follow-up transaction requests, if supported/applicable    
    const extraDataPayloads = [];
    let prehash = null;
    if (dataBytes && dataBytes.length > MAX_BASE_DATA_SZ) {
      // Determine sizes and run through sanity checks
      const chainIdExtraSz = chainIdBufSz > 0 ? chainIdBufSz + 1 : 0;
      const totalSz = dataBytes.length + chainIdExtraSz;
      const maxSzAllowed = MAX_BASE_DATA_SZ + (extraDataMaxFrames * extraDataFrameSz);

      // Copy the data into a tmp buffer. Account for larger chain ID sizes if applicable.
      const dataToCopy = Buffer.alloc(dataBytes.length + chainIdExtraSz)
      if (chainIdExtraSz > 0) {
        dataToCopy.writeUInt8(chainIdBufSz, 0);
        chainIdBuf.copy(dataToCopy, 1);
        dataBytes.copy(dataToCopy, chainIdExtraSz);
      } else {
        dataBytes.copy(dataToCopy, 0);
      }

      if (prehashAllowed && totalSz > maxSzAllowed) {
        // If this payload is too large to send, but the Lattice allows a prehashed message, do that
        prehash = Buffer.from(keccak256(rlp.encode(rawTx)), 'hex')
      } else {
        if ((!EXTRA_DATA_ALLOWED) || (EXTRA_DATA_ALLOWED && totalSz > maxSzAllowed))
          throw new Error(`Data field too large (got ${dataBytes.length}; must be <=${maxSzAllowed-chainIdExtraSz} bytes)`);
        // Split overflow data into extraData frames
        const frames = splitFrames(dataToCopy.slice(MAX_BASE_DATA_SZ), extraDataFrameSz);
        frames.forEach((frame) => {
          const szLE = Buffer.alloc(4);
          szLE.writeUInt32LE(frame.length);
          extraDataPayloads.push(Buffer.concat([szLE, frame]));
        })
      }
    }
    // Write the data size (does *NOT* include the chainId buffer, if that exists)
    txReqPayload.writeUInt16BE(dataBytes.length, off); off += 2;
    // Copy in the chainId buffer if needed
    if (chainIdBufSz > 0) {
      txReqPayload.writeUInt8(chainIdBufSz, off); off++;
      chainIdBuf.copy(txReqPayload, off); off += chainIdBufSz;
    }
    // Copy the first slice of the data itself. If this payload has been pre-hashed, include it
    // in the `data` field. This will result in a different Lattice screen being drawn.
    if (prehash) {
      prehash.copy(txReqPayload, off); off += MAX_BASE_DATA_SZ;
    } else {
      dataBytes.slice(0, MAX_BASE_DATA_SZ).copy(txReqPayload, off); off += MAX_BASE_DATA_SZ;
    }
    return {
      rawTx,
      payload: txReqPayload.slice(0, off),
      extraDataPayloads,
      schema: constants.signingSchema.ETH_TRANSFER,  // We will use eth transfer for all ETH txs for v1 
      chainId,
      useEIP155,
      signerPath,
    };
  } catch (err) {
    return { err: err.message };
  }
}

// From ethereumjs-util
function stripZeros(a) {
  let first = a[0]
  while (a.length > 0 && first.toString() === '0') {
    a = a.slice(1)
    first = a[0]
  }
  return a
}

// Given a 64-byte signature [r,s] we need to figure out the v value
// and attah the full signature to the end of the transaction payload
exports.buildEthRawTx = function(tx, sig, address, useEIP155=true) {
  // RLP-encode the data we sent to the lattice
  const rlpEncoded = rlp.encode(tx.rawTx);
  const hash = Buffer.from(keccak256(rlpEncoded), 'hex')
  const newSig = addRecoveryParam(hash, sig, address, tx.chainId, useEIP155);
  // Use the signature to generate a new raw transaction payload
  const newRawTx = tx.rawTx.slice(0, 6);
  newRawTx.push(newSig.v);
  // Per `ethereumjs-tx`, RLP encoding should include signature components w/ stripped zeros
  // See: https://github.com/ethereumjs/ethereumjs-tx/blob/master/src/transaction.ts#L187
  newRawTx.push(stripZeros(newSig.r));
  newRawTx.push(stripZeros(newSig.s));
  return rlp.encode(newRawTx).toString('hex');
}

// Attach a recovery parameter to a signature by brute-forcing ECRecover
function addRecoveryParam(hashBuf, sig, address, chainId, useEIP155) {
  try {
    // Rebuild the keccak256 hash here so we can `ecrecover`
    const hash = new Uint8Array(hashBuf);
    let v = 0;
    // Fix signature componenet lengths to 32 bytes each
    const r = fixLen(sig.r, 32); sig.r = r;
    const s = fixLen(sig.s, 32); sig.s = s;
    // Calculate the recovery param
    const rs = new Uint8Array(Buffer.concat([r, s]));
    let pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    // If the first `v` value is a match, return the sig!
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    }
    // Otherwise, try the other `v` value
    v = 1;
    pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    } else {
      // If neither is a match, we should return an error
      throw new Error('Invalid Ethereum signature returned.');
    }
  } catch (err) {
    throw new Error(err);
  }
}

// Convert an RLP-serialized transaction (plus signature) into a transaction hash
exports.hashTransaction = function(serializedTx) {
  return keccak256(Buffer.from(serializedTx, 'hex')); 
}

// Returns address string given public key buffer
function pubToAddrStr(pub) {
  return keccak256(pub).slice(-40);
}

function fixLen(msg, length) {
  const buf = Buffer.alloc(length)
  if (msg.length < length) {
    msg.copy(buf, length - msg.length)
    return buf
  }
  return msg.slice(-length)
}

// Convert a 0/1 `v` into a recovery param:
// * For non-EIP155 transactions, return `27 + v`
// * For EIP155 transactions, return `(CHAIN_ID*2) + 35 + v`
function getRecoveryParam(v, useEIP155, chainId=null) {
  // If we are not using EIP155, convert v directly to a buffer and return it
  if (false === useEIP155 || chainId === null)
    return Buffer.from(new BN(v).plus(27).toString(16), 'hex');
  // We will use EIP155 in most cases. Convert v to a bignum and operate on it.
  // Note that the protocol calls for v = (CHAIN_ID*2) + 35/36, where 35 or 36
  // is decided on based on the ecrecover result. `v` is passed in as either 0 or 1
  // so we add 35 to that.
  const chainIdBuf = getChainIdBuf(chainId);
  const chainIdBN = new BN(chainIdBuf.toString('hex'), 16);
  return ensureHexBuffer(`0x${chainIdBN.times(2).plus(35).plus(v).toString(16)}`);
}

function isHexStr(str) {
  return (/^[0-9a-fA-F]+$/).test(str)
}

function isASCIIStr(str) {
  return (/^[\x00-\x7F]+$/).test(str)
}

// Determine if the Lattice can display a string we give it. Currently, the Lattice can only
// display ASCII strings, so we will reject other UTF8 codes.
// In the future we may add a mechanism to display certain UTF8 codes such as popular emojis.
function latticeCanDisplayStr(str) {
  for (let i = 0; i < str.length; i++)
    if (str.charCodeAt(i) < 0x0020 || str.charCodeAt(i) > 0x007f)
      return false;
  return true;
}

const chainIds = {
  mainnet: 1,
  roptsten: 3,
  rinkeby: 4,
  kovan: 42,
  goerli: 5
}

// Get a buffer containing the chainId value.
// Returns a 1, 2, 4, or 8 byte buffer with the chainId encoded in big endian
function getChainIdBuf(chainId) {
  let b;
  // If our chainID is a hex string, we can convert it to a hex
  // buffer directly
  if (true === isValidChainIdHexNumStr(chainId))
    b = ensureHexBuffer(chainId);
  // If our chainID is a base-10 number, parse with bignumber.js and convert to hex buffer
  else
    b = ensureHexBuffer(`0x${new BN(chainId).toString(16)}`);
  // Make sure the buffer is an allowed size
  if (b.length > 8)
    throw new Error('ChainID provided is too large.');
  // If this matches a u16, u32, or u64 size, return it now
  if (b.length <= 2 || b.length === 4 || b.length === 8)
    return b;
  // For other size buffers, we need to pack into u32 or u64 before returning;
  let buf;
  if (b.length === 3) {
    buf = Buffer.alloc(4);
    buf.writeUInt32BE(chainId);
  } else if (b.length <= 8) {
    buf = Buffer.alloc(8);
    b.copy(buf, 8 - b.length)
  }
  return buf;
}

// Determine if the chain uses EIP155 by default, based on the chainID
function chainUsesEIP155(chainID) {
  switch (chainID) {
    case 3: // ropsten
    case 4: // rinkeby
      return false;
    case 1: // mainnet
    case 42: // kovan
    case 5: // goerli
    default: // all others should use eip155
      return true;
  }
}

// Determine if a valid number was passed in as a hex string
function isValidChainIdHexNumStr(s) {
  if (typeof s !== 'string')
    return false;
  if (s.slice(0, 2) !== '0x')
    return false;
  try {
    const b = new BN(s, 16)
    return b.isNaN() === false;
  } catch (err) {
    return false;
  }
}

// If this is a nubmer that fits in one byte, we don't need to add it
// to the `data` buffer of the main transaction. 
// Note the one edge case: we still need to use the `data` field for chainID=255.
function useChainIdBuffer(id) {
  const buf = getChainIdBuf(id);
  if (buf.length === 1)
    return buf.readUInt8(0) === 255;
  return true;
}

exports.chainIds = chainIds;

function isBase10NumStr(x) {
  const bn = new BN(x).toString().split('.').join('');
  const s = new String(x)
  // Note that the JS native `String()` loses precision for large numbers, but we only
  // want to validate the base of the number so we don't care about far out precision.
  return bn.slice(0, 8) === s.slice(0, 8)
}

// Ensure a param is represented by a buffer
// TODO: Remove circular dependency in util.js so that we can put this function there
function ensureHexBuffer(x, zeroIsNull=true) {
  try {
    // For null values, return a 0-sized buffer. For most situations we assume
    // 0 should be represented with a zero-length buffer (e.g. for RLP-building
    // txs), but it can also be treated as a 1-byte buffer (`00`) if needed
    if (x === null || (x === 0 && zeroIsNull === true)) 
      return Buffer.alloc(0);
    const isNumber = typeof x === 'number' || isBase10NumStr(x);
    // Otherwise try to get this converted to a hex string
    if (isNumber) {
      // If this is a number or a base-10 number string, convert it to hex
      x = `${new BN(x).toString(16)}`;
    } else if (typeof x === 'string' && x.slice(0, 2) === '0x') {
      x = x.slice(2);
    } else {
      x = x.toString('hex')
    }
    if (x.length % 2 > 0) x = `0${x}`;
    if (x === '00' && !isNumber)
      return Buffer.alloc(0);
    return Buffer.from(x, 'hex');
  } catch (err) {
    throw new Error(`Cannot convert ${x.toString()} to hex buffer (${err.toString()})`);
  }
}
exports.ensureHexBuffer = ensureHexBuffer;


function buildPersonalSignRequest(req, input) {
  const MAX_BASE_MSG_SZ = input.fwConstants.ethMaxMsgSz;
  const VAR_PATH_SZ = input.fwConstants.varAddrPathSzAllowed;
  const L = (24) + MAX_BASE_MSG_SZ + 4;
  let off = 0;
  req.payload = Buffer.alloc(L);
  req.payload.writeUInt8(constants.ethMsgProtocol.SIGN_PERSONAL, 0); off += 1;
  // Write the signer path into the buffer
  const signerPathBuf = buildSignerPathBuf(input.signerPath, VAR_PATH_SZ);
  signerPathBuf.copy(req.payload, off);
  off += signerPathBuf.length;
  // Write the payload buffer. The payload can come in either as a buffer or as a string
  let payload = input.payload;
  // Determine if this is a hex string
  let displayHex = false;
  if (typeof input.payload === 'string') {
    if (input.payload.slice(0, 2) === '0x') {
      payload = ensureHexBuffer(input.payload)
      displayHex = false === isASCIIStr(Buffer.from(input.payload.slice(2), 'hex').toString())
    } else {
      if (false === latticeCanDisplayStr(input.payload))
        throw new Error('Currently, the Lattice can only display ASCII strings.');
      payload = Buffer.from(input.payload)
    }
  } else if (typeof input.displayHex === 'boolean') {
    // If this is a buffer and the user has specified whether or not this
    // is a hex buffer with the optional argument, write that
    displayHex = input.displayHex
  } else {
    // Otherwise, determine if this buffer is an ASCII string. If it is, set `displayHex` accordingly.
    // NOTE: THIS MEANS THAT NON-ASCII STRINGS WILL DISPLAY AS HEX SINCE WE CANNOT KNOW IF THE REQUESTER
    //        EXPECTED NON-ASCII CHARACTERS TO DISPLAY IN A STRING
    // TODO: Develop a more elegant solution for this
    if (!input.payload.toString)
      throw new Error('Unsupported input data type');
    displayHex = false === isASCIIStr(input.payload.toString())
  }
  const fwConst = input.fwConstants;
  const maxSzAllowed = MAX_BASE_MSG_SZ + (fwConst.extraDataMaxFrames * fwConst.extraDataFrameSz);
  if (fwConst.ethMsgPreHashAllowed && payload.length > maxSzAllowed) {
    // If this message will not fit and pre-hashing is allowed, do that
    req.payload.writeUInt8(displayHex, off); off += 1;
    req.payload.writeUInt16LE(payload.length, off); off += 2;
    const prehash = Buffer.from(keccak256(Buffer.concat([get_personal_sign_prefix(payload.length), payload])), 'hex');
    prehash.copy(req.payload, off);
    req.prehash = prehash;
  } else {
    // Otherwise we can fit the payload.
    // Flow data into extraData requests, which will follow-up transaction requests, if supported/applicable    
    const extraDataPayloads = getExtraData(payload, input);
    // Write the payload and metadata into our buffer
    req.extraDataPayloads = extraDataPayloads
    req.msg = payload;
    req.payload.writeUInt8(displayHex, off); off += 1;
    req.payload.writeUInt16LE(payload.length, off); off += 2;
    payload.copy(req.payload, off);
  }
  return req;
}

function buildEIP712Request(req, input) {
  try {
    const MAX_BASE_MSG_SZ = input.fwConstants.ethMaxMsgSz;
    const VAR_PATH_SZ = input.fwConstants.varAddrPathSzAllowed;
    const TYPED_DATA = constants.ethMsgProtocol.TYPED_DATA;
    const L = (24) + MAX_BASE_MSG_SZ + 4;
    let off = 0;
    req.payload = Buffer.alloc(L);
    req.payload.writeUInt8(TYPED_DATA.enumIdx, 0); off += 1;
    // Write the signer path
    const signerPathBuf = buildSignerPathBuf(input.signerPath, VAR_PATH_SZ);
    signerPathBuf.copy(req.payload, off);
    off += signerPathBuf.length;
    // Parse/clean the EIP712 payload, serialize with CBOR, and write to the payload
    const data = JSON.parse(JSON.stringify(input.payload));
    if (!data.primaryType || !data.types[data.primaryType])
      throw new Error('primaryType must be specified and the type must be included.')
    if (!data.message || !data.domain)
      throw new Error('message and domain must be specified.')
    if (0 > Object.keys(data.types).indexOf('EIP712Domain'))
      throw new Error('EIP712Domain type must be defined.')
    // Parse the payload to ensure we have valid EIP712 data types and that
    // they are encoded such that Lattice firmware can parse them.
    // We need two different encodings:
    // 1. Use `ethers` BigNumber when building the request to be validated by ethers-eip712.
    //    Make sure we use a copy of the data to avoid mutation problems
    input.payload.message = parseEIP712Msg( JSON.parse(JSON.stringify(data.message)), 
                                            JSON.parse(JSON.stringify(data.primaryType)), 
                                            JSON.parse(JSON.stringify(data.types)), 
                                            true);
    input.payload.domain = parseEIP712Msg( JSON.parse(JSON.stringify(data.domain)), 
                                            'EIP712Domain', 
                                            JSON.parse(JSON.stringify(data.types)), 
                                            true);
    // 2. Use `bignumber.js` for the request going to the Lattice, since it's the required
    //    BigNumber lib for `cbor`, which we use to encode the request data to the Lattice.
    data.domain = parseEIP712Msg(data.domain, 'EIP712Domain', data.types, false);
    data.message = parseEIP712Msg(data.message, data.primaryType, data.types, false);
    // Now build the message to be sent to the Lattice
    const payload = Buffer.from(cbor.encode(data));
    const fwConst = input.fwConstants;
    const maxSzAllowed = MAX_BASE_MSG_SZ + (fwConst.extraDataMaxFrames * fwConst.extraDataFrameSz);
    if (fwConst.ethMsgPreHashAllowed && payload.length > maxSzAllowed) {
      // If this payload is too large to send, but the Lattice allows a prehashed message, do that
      req.payload.writeUInt16LE(payload.length, off); off += 2;
      const prehash = Buffer.from(keccak256(eip712.TypedDataUtils.encodeDigest(req.input.payload), 'hex'), 'hex');
      prehash.copy(req.payload, off);
      req.prehash = prehash;
    } else {
      const extraDataPayloads = getExtraData(payload, input);
      req.extraDataPayloads = extraDataPayloads;
      req.payload.writeUInt16LE(payload.length, off); off += 2;
      payload.copy(req.payload, off); off += payload.length;
      // Slice out the part of the buffer that we didn't use.
      req.payload = req.payload.slice(0, off);
    }
    return req;
  } catch (err) {
    return { err: `Failed to build EIP712 request: ${err.message}` };
  }
}

function buildSignerPathBuf(signerPath, varAddrPathSzAllowed) {
  const buf = Buffer.alloc(24);
  let off = 0;
  if (varAddrPathSzAllowed && signerPath.length > 5)
    throw new Error('Signer path must be <=5 indices.');
  if (!varAddrPathSzAllowed && signerPath.length !== 5)
    throw new Error('Your Lattice firmware only supports 5-index derivation paths. Please upgrade.');
  buf.writeUInt32LE(signerPath.length, off); off += 4;
  for (let i = 0; i < 5; i++) {
    if (i < signerPath.length)
      buf.writeUInt32LE(signerPath[i], off); 
    else
      buf.writeUInt32LE(0, off);
    off += 4;
  }
  return buf;
}

function getExtraData(payload, input) {
  const { ethMaxMsgSz, extraDataFrameSz, extraDataMaxFrames } = input.fwConstants;
  const MAX_BASE_MSG_SZ = ethMaxMsgSz;
  const EXTRA_DATA_ALLOWED = extraDataFrameSz > 0 && extraDataMaxFrames > 0;
  const extraDataPayloads = [];
  if (payload.length > MAX_BASE_MSG_SZ) {
    // Determine sizes and run through sanity checks
    const maxSzAllowed = MAX_BASE_MSG_SZ + (extraDataMaxFrames * extraDataFrameSz);
    if (!EXTRA_DATA_ALLOWED)
      throw new Error(`Your message is ${payload.length} bytes, but can only be a maximum of ${MAX_BASE_MSG_SZ}`);
    else if (EXTRA_DATA_ALLOWED && payload.length > maxSzAllowed)
      throw new Error(`Your message is ${payload.length} bytes, but can only be a maximum of ${maxSzAllowed}`);
    // Split overflow data into extraData frames
    const frames = splitFrames(payload.slice(MAX_BASE_MSG_SZ), extraDataFrameSz);
    frames.forEach((frame) => {
      const szLE = Buffer.alloc(4);
      szLE.writeUInt32LE(frame.length);
      extraDataPayloads.push(Buffer.concat([szLE, frame]));
    })
  }
  return extraDataPayloads;
}

function splitFrames(data, frameSz) {
  const frames = []
  const n = Math.ceil(data.length / frameSz);
  let off = 0;
  for (let i = 0; i < n; i++) {
    frames.push(data.slice(off, off + frameSz));
    off += frameSz;
  }
  return frames;
}

function parseEIP712Msg(msg, typeName, types, isEthers=false) {
  try {
    const type = types[typeName];
    type.forEach((item) => {
      const isCustomType = Object.keys(types).indexOf(item.type) > -1;
      if (true === isCustomType) {
        msg[item.name] = parseEIP712Msg(msg[item.name], item.type, types, isEthers)
      } else {
        msg[item.name] = parseEIP712Item(msg[item.name], item.type, isEthers)
      }
    })
  } catch (err) {
    throw new Error(err.message);
  }
  return msg;
}

function parseEIP712Item(data, type, isEthers=false) {
  if (type === 'bytes') {
    // Variable sized bytes need to be buffer type
    data = ensureHexBuffer(data);
  } else if (type.slice(0, 5) === 'bytes') {
    // Fixed sizes bytes need to be buffer type. We also add some sanity checks.
    const nBytes = parseInt(type.slice(5));
    data = ensureHexBuffer(data);
    if (data.length !== nBytes)
      throw new Error(`Expected ${type} type, but got ${data.length} bytes`);
  } else if (type === 'address') {
    // Address must be a 20 byte buffer
    data = ensureHexBuffer(data);
    // Edge case to handle the 0-address
    if (data.length === 0) {
      data = Buffer.alloc(20);
    }
    if (data.length !== 20)
      throw new Error(`Address type must be 20 bytes, but got ${data.length} bytes`);
    // Ethers wants addresses as hex strings
    if (isEthers === true) {
      data = `0x${data.toString('hex')}`
    }
  } else if ( (constants.ethMsgProtocol.TYPED_DATA.typeCodes[type]) && 
              (type.indexOf('uint') > -1 || type.indexOf('int') > -1)) {
    let b = ensureHexBuffer(data);
    // Edge case to handle 0-value bignums
    if (b.length === 0) {
      b = Buffer.from('00', 'hex');
    }
    // Uint256s should be encoded as bignums.
    if (isEthers === true) {
      // `ethers` uses their own BigNumber lib
      data = ethers.BigNumber.from(`0x${b.toString('hex')}`)
    } else {
      // `bignumber.js` is needed for `cbor` encoding, which gets sent to the Lattice and plays
      // nicely with its firmware cbor lib.
      // NOTE: If we instantiate a `bignumber.js` object, it will not match what `borc` creates
      // when run inside of the browser (i.e. MetaMask). Thus we introduce this hack to make sure
      // we are creating a compatible type.
      // TODO: Find another cbor lib that is compataible with the firmware's lib in a browser
      // context. This is surprisingly difficult - I tried several libs and only cbor/borc have
      // worked (borc is a supposedly "browser compatible" version of cbor)
      data = new cbor.Encoder().semanticTypes[1][0](b.toString('hex'), 16)
    }
  } else if (type === 'bool') {
    // Booleans need to be cast to a u8
    data = data === true ? 1 : 0;
  }
  // Other types don't need to be modified
  return data;
}

function get_personal_sign_prefix(L) {
  return Buffer.from(
    `\u0019Ethereum Signed Message:\n${L.toString()}`,
    'utf-8',
  );
}

/***/ }),

/***/ "xvdF":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/nor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,0,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = ((bits1[i] | bits2[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "yE/9":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/utilities.js ***!
  \***********************************************/
/*! exports provided: p2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p2", function() { return p2; });
// 32-bit powers of two wouldn't be possible with <<
var p2 = [];
for (var i = 0; i < 32; i++)
    p2[i] = Math.pow(2, i);


/***/ }),

/***/ "yoIl":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/index.js ***!
  \************************************************/
/*! exports provided: and, circularShiftLeft, circularShiftRight, nand, nor, not, or, reduceAnd, reduceNand, reduceNor, reduceOr, reduceXnor, reduceXor, toBoolean, toString, xnor, xor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and */ "UBEi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _circular_shift_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular-shift-left */ "jO9I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circularShiftLeft", function() { return _circular_shift_left__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _circular_shift_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circular-shift-right */ "4NEJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circularShiftRight", function() { return _circular_shift_right__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nand */ "+u1v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nand", function() { return _nand__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nor */ "xvdF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nor", function() { return _nor__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not */ "IunX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./or */ "+FMq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _reduce_and__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reduce-and */ "Qhm4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceAnd", function() { return _reduce_and__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _reduce_nand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reduce-nand */ "Jtfa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceNand", function() { return _reduce_nand__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _reduce_nor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reduce-nor */ "0d0U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceNor", function() { return _reduce_nor__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _reduce_or__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reduce-or */ "AuWn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceOr", function() { return _reduce_or__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _reduce_xnor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reduce-xnor */ "Mh05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceXnor", function() { return _reduce_xnor__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _reduce_xor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduce-xor */ "fxaz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceXor", function() { return _reduce_xor__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _to_boolean__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-boolean */ "XYxn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _to_boolean__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./to-string */ "evRY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _to_string__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _xnor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xnor */ "qVBC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xnor", function() { return _xnor__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _xor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xor */ "WtjK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _xor__WEBPACK_IMPORTED_MODULE_16__["default"]; });



















/* harmony default export */ __webpack_exports__["default"] = ({
    and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
    circularShiftLeft: _circular_shift_left__WEBPACK_IMPORTED_MODULE_1__["default"],
    circularShiftRight: _circular_shift_right__WEBPACK_IMPORTED_MODULE_2__["default"],
    nand: _nand__WEBPACK_IMPORTED_MODULE_3__["default"],
    nor: _nor__WEBPACK_IMPORTED_MODULE_4__["default"],
    not: _not__WEBPACK_IMPORTED_MODULE_5__["default"],
    or: _or__WEBPACK_IMPORTED_MODULE_6__["default"],
    reduceAnd: _reduce_and__WEBPACK_IMPORTED_MODULE_7__["default"],
    reduceNand: _reduce_nand__WEBPACK_IMPORTED_MODULE_8__["default"],
    reduceNor: _reduce_nor__WEBPACK_IMPORTED_MODULE_9__["default"],
    reduceOr: _reduce_or__WEBPACK_IMPORTED_MODULE_10__["default"],
    reduceXnor: _reduce_xnor__WEBPACK_IMPORTED_MODULE_11__["default"],
    reduceXor: _reduce_xor__WEBPACK_IMPORTED_MODULE_12__["default"],
    toBoolean: _to_boolean__WEBPACK_IMPORTED_MODULE_13__["default"],
    toString: _to_string__WEBPACK_IMPORTED_MODULE_14__["default"],
    xnor: _xnor__WEBPACK_IMPORTED_MODULE_15__["default"],
    xor: _xor__WEBPACK_IMPORTED_MODULE_16__["default"],
});


/***/ })

}]);


/***/ })

}]);
//# sourceMappingURL=eth-lattice-keyring.js.map