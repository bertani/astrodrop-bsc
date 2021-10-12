(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cobovault-126a45e3-js"],{

/***/ "+85N":
/*!******************************************************!*\
  !*** ./node_modules/@cvbb/eth-keyring/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! events */ "+qE3");
var hash_js_1 = __importDefault(__webpack_require__(/*! hash.js */ "fZJM"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var hdkey_1 = __importDefault(__webpack_require__(/*! hdkey */ "vUa2"));
var sdk_1 = __importDefault(__webpack_require__(/*! @cvbb/sdk */ "2hAF"));
var ethereumjs_util_1 = __webpack_require__(/*! ethereumjs-util */ "eIIK");
var keyringType = 'Air Gaped Device';
var pathBase = 'm';
var MAX_INDEX = 1000;
var readKeyringDescription = function () { return __awaiter(void 0, void 0, void 0, function () {
    var decodedResult, type, result, _a, xfp, xpub, path;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, sdk_1.default.read({
                    title: 'Sync Cobo Vault',
                    description: "Please click 'Sync' in Cobo Vault and scan the QR code displayed later",
                })];
            case 1:
                decodedResult = _b.sent();
                type = decodedResult.type, result = decodedResult.result;
                if (type === 'json') {
                    _a = JSON.parse(result), xfp = _a.xfp, xpub = _a.xpub, path = _a.path;
                    if (xfp && xpub && path) {
                        return [2 /*return*/, {
                                xfp: xfp,
                                xpub: xpub,
                                hdPath: path,
                            }];
                    }
                }
                else if (type === 'none') {
                    throw new Error('Reading canceled');
                }
                throw new Error('Invalid qrcode');
        }
    });
}); };
var AirGapedKeyring = /** @class */ (function (_super) {
    __extends(AirGapedKeyring, _super);
    function AirGapedKeyring(opts) {
        var _this = _super.call(this) || this;
        _this.xfp = '';
        _this.xpub = '';
        _this.hdPath = '';
        _this.page = 0;
        _this.perPage = 5;
        _this.type = keyringType;
        _this.accounts = [];
        _this.currentAccount = 0;
        _this.paths = {};
        _this.latestAccount = 0;
        _this.deserialize(opts);
        return _this;
    }
    AirGapedKeyring.getKeyring = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, xpub, xfp, hdPath;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, readKeyringDescription()];
                    case 1:
                        _a = _b.sent(), xpub = _a.xpub, xfp = _a.xfp, hdPath = _a.hdPath;
                        return [2 /*return*/, new AirGapedKeyring({
                                xfp: xfp,
                                xpub: xpub,
                                hdPath: hdPath,
                                perPage: 5,
                                page: 0,
                                accounts: [],
                                currentAccount: 0,
                                paths: {},
                            })];
                }
            });
        });
    };
    AirGapedKeyring.getEmptyKeyring = function () {
        return new AirGapedKeyring({
            xfp: '',
            xpub: '',
            hdPath: '',
            perPage: 5,
            page: 0,
            accounts: [],
            currentAccount: 0,
            paths: {},
        });
    };
    AirGapedKeyring.prototype.readKeyring = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, xpub, xfp, hdPath;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, readKeyringDescription()];
                    case 1:
                        _a = _b.sent(), xpub = _a.xpub, xfp = _a.xfp, hdPath = _a.hdPath;
                        this.xfp = xfp;
                        this.xpub = xpub;
                        this.hdPath = hdPath;
                        return [2 /*return*/];
                }
            });
        });
    };
    AirGapedKeyring.prototype.checkKeyring = function () {
        if (!this.xfp || !this.xpub || !this.hdPath) {
            throw new Error('keyring not fulfilled, please call function `readKeyring` firstly');
        }
    };
    AirGapedKeyring.prototype.serialize = function () {
        return Promise.resolve({
            xfp: this.xfp,
            xpub: this.xpub,
            hdPath: this.hdPath,
            accounts: this.accounts,
            currentAccount: this.currentAccount,
            page: this.page,
            perPage: this.perPage,
            paths: this.paths,
        });
    };
    AirGapedKeyring.prototype.deserialize = function (opts) {
        this.xfp = opts.xfp;
        this.xpub = opts.xpub;
        this.hdPath = opts.hdPath;
        this.accounts = opts.accounts;
        this.currentAccount = opts.currentAccount;
        this.page = opts.page;
        this.perPage = opts.perPage;
        this.paths = opts.paths;
    };
    AirGapedKeyring.prototype.setCurrentAccount = function (index) {
        this.currentAccount = index;
    };
    AirGapedKeyring.prototype.getCurrentAccount = function () {
        return this.currentAccount;
    };
    AirGapedKeyring.prototype.getCurrentAddress = function () {
        return this.accounts[this.currentAccount];
    };
    AirGapedKeyring.prototype.addAccounts = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var from = _this.latestAccount;
                var to = from + n;
                var newAccounts = [];
                for (var i = from; i < to; i++) {
                    var address = _this._addressFromIndex(pathBase, i);
                    newAccounts.push(address);
                    _this.page = 0;
                    _this.latestAccount++;
                }
                _this.accounts = _this.accounts.concat(newAccounts);
                resolve(_this.accounts);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    AirGapedKeyring.prototype.getFirstPage = function () {
        this.page = 0;
        return this.__getPage(1);
    };
    AirGapedKeyring.prototype.getNextPage = function () {
        return this.__getPage(1);
    };
    AirGapedKeyring.prototype.getPreviousPage = function () {
        return this.__getPage(-1);
    };
    AirGapedKeyring.prototype.__getPage = function (increment) {
        var _this = this;
        this.page += increment;
        if (this.page <= 0) {
            this.page = 1;
        }
        return new Promise(function (resolve, reject) {
            try {
                var from = (_this.page - 1) * _this.perPage;
                var to = from + _this.perPage;
                var accounts = [];
                for (var i = from; i < to; i++) {
                    var address = _this._addressFromIndex(pathBase, i);
                    accounts.push({
                        address: address,
                        balance: null,
                        index: i,
                    });
                    _this.paths[ethereumjs_util_1.toChecksumAddress(address)] = i;
                }
                resolve(accounts);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    AirGapedKeyring.prototype.getAccounts = function () {
        return this.accounts;
    };
    AirGapedKeyring.prototype.removeAccount = function (address) {
        if (!this.accounts.map(function (a) { return a.toLowerCase(); }).includes(address.toLowerCase())) {
            throw new Error("Address " + address + " not found in this keyring");
        }
        this.accounts = this.accounts.filter(function (a) { return a.toLowerCase() !== address.toLowerCase(); });
    };
    AirGapedKeyring.prototype.readSignature = function (signId) {
        return __awaiter(this, void 0, void 0, function () {
            var signature, _a, peerSignId, signatureHex, r, s, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, sdk_1.default.read({
                            title: 'Submit signing result',
                            description: 'Please scan signing result QR code displayed on your Cobo Vault',
                        })];
                    case 1:
                        signature = _b.sent();
                        if (signature) {
                            if (signature.type === 'ur') {
                                _a = JSON.parse(Buffer.from(signature.result, 'hex').toString('utf-8')), peerSignId = _a.signId, signatureHex = _a.signature;
                                if (peerSignId && signatureHex) {
                                    if (peerSignId !== signId) {
                                        throw new Error('read signature error: mismatched signId');
                                    }
                                    r = Buffer.from(signatureHex.slice(0, 64), 'hex');
                                    s = Buffer.from(signatureHex.slice(64, 128), 'hex');
                                    v = Buffer.from(signatureHex.slice(128), 'hex');
                                    return [2 /*return*/, {
                                            r: r,
                                            s: s,
                                            v: v,
                                        }];
                                }
                                throw new Error('invalid signature qrcode');
                            }
                            else {
                                throw new Error('invalid signature qrcode');
                            }
                        }
                        throw new Error('read signature canceled');
                }
            });
        });
    };
    // tx is an instance of the ethereumjs-transaction class.
    AirGapedKeyring.serializeTx = function (tx) {
        var items = __spreadArray(__spreadArray([], tx.raw.slice(0, 6)), [
            ethereumjs_util_1.toBuffer(tx.getChainId()),
            // TODO: stripping zeros should probably be a responsibility of the rlp module
            ethereumjs_util_1.unpadBuffer(ethereumjs_util_1.toBuffer(0)),
            ethereumjs_util_1.unpadBuffer(ethereumjs_util_1.toBuffer(0)),
        ]);
        return ethereumjs_util_1.rlp.encode(items);
    };
    AirGapedKeyring.prototype.signTransaction = function (address, tx) {
        return __awaiter(this, void 0, void 0, function () {
            var txHex, hdPath, signId, signPayload, _a, r, s, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        txHex = AirGapedKeyring.serializeTx(tx).toString('hex');
                        hdPath = this._pathFromAddress(address);
                        signId = hash_js_1.default.sha256().update("" + txHex + hdPath + this.xfp).digest('hex').slice(0, 8);
                        signPayload = {
                            txHex: txHex,
                            xfp: this.xfp,
                            hdPath: hdPath,
                            signId: signId,
                        };
                        return [4 /*yield*/, sdk_1.default.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
                                hasNext: true,
                                title: 'Request signing transaction',
                                description: 'Please scan the QR code below with Cobo Vault, review transaction information and authorize to sign',
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.readSignature(signId)];
                    case 2:
                        _a = _b.sent(), r = _a.r, s = _a.s, v = _a.v;
                        tx.r = r;
                        tx.s = s;
                        tx.v = v;
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    AirGapedKeyring.prototype.signMessage = function (withAccount, data) {
        return this.signPersonalMessage(withAccount, data);
    };
    AirGapedKeyring.prototype.signPersonalMessage = function (withAccount, messageHex) {
        return __awaiter(this, void 0, void 0, function () {
            var hdPath, signId, signPayload, _a, r, s, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        hdPath = this._pathFromAddress(withAccount);
                        signId = hash_js_1.default.sha256().update("" + messageHex + hdPath + this.xfp).digest('hex').slice(0, 8);
                        signPayload = {
                            messageHex: messageHex,
                            xfp: this.xfp,
                            hdPath: hdPath,
                            signId: signId,
                        };
                        return [4 /*yield*/, sdk_1.default.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
                                hasNext: true,
                                title: 'Request signing message',
                                description: 'Please scan the QR code below with Cobo Vault, review message and authorize to sign',
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.readSignature(signId)];
                    case 2:
                        _a = _b.sent(), r = _a.r, s = _a.s, v = _a.v;
                        return [2 /*return*/, '0x' + r + s + v];
                }
            });
        });
    };
    AirGapedKeyring.prototype.signTypedData = function (withAccount, typedData) {
        return __awaiter(this, void 0, void 0, function () {
            var hdPath, signId, signPayload, _a, r, s, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        hdPath = this._pathFromAddress(withAccount);
                        signId = hash_js_1.default
                            .sha256()
                            .update("" + JSON.stringify(typedData) + hdPath + this.xfp)
                            .digest('hex')
                            .slice(0, 8);
                        signPayload = {
                            data: typedData,
                            xfp: this.xfp,
                            hdPath: hdPath,
                            signId: signId,
                        };
                        return [4 /*yield*/, sdk_1.default.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
                                hasNext: true,
                                title: 'Request signing typed data',
                                description: 'Please scan the QR code below with Cobo Vault, review data and authorize to sign',
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.readSignature(signId)];
                    case 2:
                        _a = _b.sent(), r = _a.r, s = _a.s, v = _a.v;
                        return [2 /*return*/, Buffer.concat([r, s, v])];
                }
            });
        });
    };
    AirGapedKeyring.prototype._addressFromIndex = function (pb, i) {
        this.checkKeyring();
        if (!this.hdk) {
            this.hdk = hdkey_1.default.fromExtendedKey(this.xpub);
        }
        var dkey = this.hdk.derive(pb + "/0/" + i);
        var address = '0x' + ethereumjs_util_1.publicToAddress(dkey.publicKey, true).toString('hex');
        return ethereumjs_util_1.toChecksumAddress(address);
    };
    AirGapedKeyring.prototype._pathFromAddress = function (address) {
        var checksummedAddress = ethereumjs_util_1.toChecksumAddress(address);
        var index = this.paths[checksummedAddress];
        if (typeof index === 'undefined') {
            for (var i = 0; i < MAX_INDEX; i++) {
                if (checksummedAddress === this._addressFromIndex(pathBase, i)) {
                    index = i;
                    break;
                }
            }
        }
        if (typeof index === 'undefined') {
            throw new Error('Unknown address');
        }
        return this.hdPath + "/0/" + index;
    };
    AirGapedKeyring.type = keyringType;
    return AirGapedKeyring;
}(events_1.EventEmitter));
exports.default = AirGapedKeyring;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "1C+a":
/*!************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/components/Progress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
const Progress = ({ progress, total }) => {
    return react_1.default.createElement("p", null, `${progress} / ${total}`);
};
exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map

/***/ }),

/***/ "2Q9u":
/*!**********************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/components/Button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
const styleBase = {
    minWidth: 64,
    height: 24,
    background: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    outline: 'none',
    margin: 2,
};
const Button = (props) => {
    const { onClick, children } = props;
    return (react_1.default.createElement("button", { onClick: onClick, style: styleBase }, children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map

/***/ }),

/***/ "2hAF":
/*!**********************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(__webpack_require__(/*! ./service */ "BuVO"));
service_1.default.bootstrap();
exports.default = service_1.default.makeService();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "BuVO":
/*!************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "i8i4"));
const Root_1 = __importDefault(__webpack_require__(/*! ./Root */ "iWd9"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
const react_modal_1 = __importDefault(__webpack_require__(/*! react-modal */ "9rZX"));
let initialized = false;
const bootstrap = () => {
    const htmlBody = document.getElementsByTagName('body').item(0);
    const sdkDiv = document.createElement('div');
    sdkDiv.id = 'cv_sdk_container';
    htmlBody.appendChild(sdkDiv);
    react_modal_1.default.setAppElement('#cv_sdk_container');
    react_dom_1.default.render(react_1.default.createElement(Root_1.default), sdkDiv);
};
const setup = (r, p) => {
    initialized = true;
    read = r;
    play = p;
};
let read;
let play;
exports.default = {
    bootstrap,
    setup,
    makeService: () => {
        if (initialized) {
            return {
                read,
                play,
            };
        }
        else {
            throw new Error('SDK is not initialized');
        }
    },
};
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "CxSg":
/*!**********************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/hooks/useAnimatedQRCodeReader.js ***!
  \**********************************************************************/
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedQRCodeReader = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
const react_qr_reader_1 = __importDefault(__webpack_require__(/*! react-qr-reader */ "RnoV"));
const bc_ur_1 = __webpack_require__(/*! @cvbb/bc-ur */ "zs2r");
const events_1 = __webpack_require__(/*! events */ "+qE3");
const Button_1 = __webpack_require__(/*! ../components/Button */ "2Q9u");
const Progress_1 = __webpack_require__(/*! ../components/Progress */ "1C+a");
const ButtonGroup_1 = __webpack_require__(/*! ../components/ButtonGroup */ "lZNz");
const useAnimatedQRCodeReader = () => {
    const [urCodes, setURCodes] = react_1.useState([]);
    const [error, setError] = react_1.useState('');
    const ee = react_1.useMemo(() => new events_1.EventEmitter(), []);
    const [title, setTitle] = react_1.useState(null);
    const [description, setDescription] = react_1.useState(null);
    const reset = () => {
        setURCodes([]);
        setError('');
    };
    const processQRCode = (qr) => {
        try {
            processJSON(qr);
        }
        catch (e1) {
            try {
                processUR(qr);
            }
            catch (e2) {
                processText(qr);
            }
        }
    };
    const handleStop = () => {
        ee.emit('read', {
            type: 'none',
            result: '',
        });
    };
    const handleRetry = () => {
        reset();
    };
    const processJSON = (data) => {
        JSON.parse(data);
        ee.emit('read', {
            type: 'json',
            result: data,
        });
    };
    const processText = (data) => {
        ee.emit('read', {
            type: 'text',
            result: data,
        });
    };
    const processUR = (ur) => {
        try {
            const [index, total] = bc_ur_1.extractSingleWorkload(ur);
            if (urCodes.length > 0) {
                const currentTotal = urCodes[0].total;
                if (total !== currentTotal) {
                    setError('invalid animated qrcode: mismatching qrs, please retry');
                }
            }
            if (!urCodes.find((item) => item.index === index)) {
                const newCodes = [...urCodes, { index, total, data: ur }];
                setURCodes(newCodes);
                if (newCodes.length === total) {
                    const result = bc_ur_1.decodeUR(newCodes.map((item) => item.data));
                    ee.emit('read', {
                        type: 'ur',
                        result,
                    });
                }
            }
        }
        catch (e) {
            setError(e.message);
        }
    };
    const element = (react_1.default.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        } },
        title && react_1.default.createElement("p", null, title),
        description && react_1.default.createElement("p", null, description),
        react_1.default.createElement(react_qr_reader_1.default, { onScan: (data) => {
                if (data) {
                    processQRCode(data);
                }
            }, delay: 100, style: { width: '100%' }, onError: (e) => {
                setError(e.message);
            } }),
        react_1.default.createElement("p", null, urCodes[0] && urCodes[0].total > 1 && react_1.default.createElement(Progress_1.Progress, { progress: urCodes.length, total: urCodes[0].total })),
        react_1.default.createElement(ButtonGroup_1.ButtonGroup, null,
            react_1.default.createElement(Button_1.Button, { onClick: handleStop }, "Close"),
            error && react_1.default.createElement(Button_1.Button, { onClick: handleRetry }, "Retry")),
        error && react_1.default.createElement("p", { style: { color: 'red' } }, error)));
    return [
        element,
        {
            read: (options) => {
                return new Promise((resolve) => {
                    console.log(options);
                    if (options) {
                        options.title && setTitle(options.title);
                        options.description && setDescription(options.description);
                    }
                    ee.once('read', (result) => {
                        reset();
                        resolve(result);
                    });
                });
            },
        },
    ];
};
exports.useAnimatedQRCodeReader = useAnimatedQRCodeReader;
//# sourceMappingURL=useAnimatedQRCodeReader.js.map

/***/ }),

/***/ "Ir3a":
/*!***************************************************!*\
  !*** ./node_modules/@cvbb/bc-ur/dist/miniCbor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSimpleCBOR = exports.encodeSimpleCBOR = exports.composeHeader = void 0;
/*
    this an simple cbor implementation which is just using
    on BCR-05
*/
var composeHeader = function (length) {
    var header;
    if (length > 0 && length <= 23) {
        header = Buffer.from([0x40 + length]);
    }
    else if (length >= 24 && length <= 255) {
        var headerLength = Buffer.alloc(1);
        headerLength.writeUInt8(length, 0);
        header = Buffer.concat([Buffer.from([0x58]), headerLength]);
    }
    else if (length >= 256 && length <= 65535) {
        var headerLength = Buffer.alloc(2);
        headerLength.writeUInt16BE(length, 0);
        header = Buffer.concat([Buffer.from([0x59]), headerLength]);
    }
    else if (length >= 65536 && length <= Math.pow(2, 32) - 1) {
        var headerLength = Buffer.alloc(4);
        headerLength.writeUInt32BE(length, 0);
        header = Buffer.concat([Buffer.from([0x60]), headerLength]);
    }
    else {
        throw new Error('length exceeded');
    }
    return header;
};
exports.composeHeader = composeHeader;
var encodeSimpleCBOR = function (data) {
    var bufferData = Buffer.from(data, 'hex');
    if (bufferData.length <= 0 || bufferData.length >= Math.pow(2, 32)) {
        throw new Error('data is too large');
    }
    var header = exports.composeHeader(bufferData.length);
    var endcoded = Buffer.concat([header, bufferData]);
    return endcoded.toString('hex');
};
exports.encodeSimpleCBOR = encodeSimpleCBOR;
var decodeSimpleCBOR = function (data) {
    var dataBuffer = Buffer.from(data, 'hex');
    if (dataBuffer.length <= 0) {
        throw new Error('invalid input');
    }
    var header = dataBuffer[0];
    if (header < 0x58) {
        var dataLength = header - 0x40;
        return dataBuffer.slice(1, 1 + dataLength).toString('hex');
    }
    else if (header == 0x58) {
        var dataLength = dataBuffer.slice(1, 2).readUInt8(0);
        return dataBuffer.slice(2, 2 + dataLength).toString('hex');
    }
    else if (header == 0x59) {
        var dataLength = dataBuffer.slice(1, 3).readUInt16BE(0);
        return dataBuffer.slice(3, 3 + dataLength).toString('hex');
    }
    else if (header == 0x60) {
        var dataLength = dataBuffer.slice(1, 5).readUInt32BE(0);
        return dataBuffer.slice(5, 5 + dataLength).toString('hex');
    }
    else {
        throw new Error('invalid input');
    }
};
exports.decodeSimpleCBOR = decodeSimpleCBOR;
//# sourceMappingURL=miniCbor.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "QjJ2":
/*!**************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/components/BaseQRCode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQRCode = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
const qrcode_react_1 = __importDefault(__webpack_require__(/*! qrcode.react */ "D1Df"));
const BaseQRCode = ({ size = 200, data = '', ecl = 'L', }) => {
    return react_1.default.createElement(qrcode_react_1.default, { value: data, size: size, level: ecl });
};
exports.BaseQRCode = BaseQRCode;
//# sourceMappingURL=BaseQRCode.js.map

/***/ }),

/***/ "V/Dm":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/cobovault-126a45e3.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cvbb_eth_keyring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cvbb/eth-keyring */ "+85N");
/* harmony import */ var _cvbb_eth_keyring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cvbb_eth_keyring__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function cobovault(options) {
  var appName = options.appName,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'CoboVault',
    svg: svg,
    iconSrc: img,
    iconSrcSet: iconSrc || img$1,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return cobovaultProvider({
                  appName: appName,
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'CoboVault',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: [],
    preferred: preferred
  };
}

function cobovaultProvider(_x2) {
  return _cobovaultProvider.apply(this, arguments);
}

function _cobovaultProvider() {
  _cobovaultProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(options) {
    var _yield$import, Transaction, _yield$import2, createProvider, BASE_PATH, networkId, rpcUrl, BigNumber, networkName, keyring, dPath, addressList, enabled, customPath, provider, disconnect, setPath, _setPath, isCustomPath, enable, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(message) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context10.next = 3;
                          break;
                        }

                        _context10.next = 3;
                        return enable();

                      case 3:
                        _context10.prev = 3;
                        return _context10.abrupt("return", keyring.signPersonalMessage(getPrimaryAddress(), message.data));

                      case 7:
                        _context10.prev = 7;
                        _context10.t0 = _context10["catch"](3);
                        throw _context10.t0;

                      case 10:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[3, 7]]);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x7) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(transactionData) {
                var transaction, signedTx;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context9.next = 3;
                          break;
                        }

                        _context9.next = 3;
                        return enable();

                      case 3:
                        transaction = Transaction.fromTxData(transactionData, {
                          chain: networkName(networkId)
                        });
                        _context9.prev = 4;
                        _context9.next = 7;
                        return keyring.signTransaction(getPrimaryAddress(), transaction);

                      case 7:
                        signedTx = _context9.sent;
                        return _context9.abrupt("return", "0x".concat(signedTx.serialize().toString('hex')));

                      case 11:
                        _context9.prev = 11;
                        _context9.t0 = _context9["catch"](4);
                        throw _context9.t0;

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[4, 11]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x6) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(getMore) {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (enabled) {
                          _context8.next = 2;
                          break;
                        }

                        return _context8.abrupt("return", []);

                      case 2:
                        if (!(keyring.getAccounts().length > 0 && !getMore)) {
                          _context8.next = 4;
                          break;
                        }

                        return _context8.abrupt("return", keyring.getAccounts());

                      case 4:
                        _context8.prev = 4;
                        _context8.next = 7;
                        return keyring.addAccounts(keyring.getAccounts().length + 5);

                      case 7:
                        addressList = _context8.sent;
                        _context8.next = 13;
                        break;

                      case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](4);
                        throw _context8.t0;

                      case 13:
                        return _context8.abrupt("return", addressList);

                      case 14:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[4, 10]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x4) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context7.sent;
                        return _context7.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return keyring.getCurrentAddress();
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              return keyring.setCurrentAccount(addressList.findIndex(function (addr) {
                return addr === address;
              }) || 0);
            };

            enable = function _enable() {
              if (enabled) {
                return _getAccounts();
              }

              return keyring.readKeyring().then(function () {
                enabled = true;
                return _getAccounts();
              });
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(path !== BASE_PATH)) {
                          _context6.next = 2;
                          break;
                        }

                        throw new Error("CoboVault only supports standard path: m/44'/0'/0'/0/x");

                      case 2:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              enabled = false;
              provider.stop();
            };

            _context11.next = 19;
            return __webpack_require__.e(/*! import() | ethereumjs-tx */ "default~ethereumjs-tx~shapeshiftoss-hdwallet-keepkey-webusb~walletconnect-web3-provider").then(__webpack_require__.t.bind(null, /*! @ethereumjs/tx */ "ztCV", 7));

          case 19:
            _yield$import = _context11.sent;
            Transaction = _yield$import.Transaction;
            _context11.next = 23;
            return Promise.all(/*! import() | providerEngine-771e7e5b-js */[__webpack_require__.e("default~eth-sig-util~providerEngine-771e7e5b-js~walletconnect-web3-provider"), __webpack_require__.e("default~providerEngine-771e7e5b-js~walletconnect-web3-provider"), __webpack_require__.e("providerEngine-771e7e5b-js")]).then(__webpack_require__.bind(null, /*! ./providerEngine-771e7e5b.js */ "468V"));

          case 23:
            _yield$import2 = _context11.sent;
            createProvider = _yield$import2["default"];
            BASE_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName;
            keyring = _cvbb_eth_keyring__WEBPACK_IMPORTED_MODULE_0___default.a.getEmptyKeyring();
            dPath = '';
            addressList = Array.from([]);
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context11.abrupt("return", provider);

          case 46:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _cobovaultProvider.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (cobovault);

/***/ }),

/***/ "VP3s":
/*!****************************************************!*\
  !*** ./node_modules/@cvbb/bc-bech32/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBc32Data = exports.encodeBc32Data = exports.encodeSegwitAddress = exports.decodeSegwitAddress = exports.Bech32Version = void 0;
var bech32_1 = __importDefault(__webpack_require__(/*! ./bech32 */ "wUHp"));
var Bech32Version;
(function (Bech32Version) {
    Bech32Version[Bech32Version["Origin"] = 1] = "Origin";
    Bech32Version[Bech32Version["bis"] = 2] = "bis";
})(Bech32Version = exports.Bech32Version || (exports.Bech32Version = {}));
var convertBits = function (data, fromBits, toBits, pad) {
    var acc = 0;
    var bits = 0;
    var ret = [];
    var maxv = (1 << toBits) - 1;
    for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || value >> fromBits !== 0) {
            return null;
        }
        acc = (acc << fromBits) | value;
        bits += fromBits;
        while (bits >= toBits) {
            bits -= toBits;
            ret.push((acc >> bits) & maxv);
        }
    }
    if (pad) {
        if (bits > 0) {
            ret.push((acc << (toBits - bits)) & maxv);
        }
    }
    else if (bits >= fromBits || (acc << (toBits - bits)) & maxv) {
        return null;
    }
    return ret;
};
var decodeSegwitAddress = function (hrp, addr) {
    var dec = bech32_1.default.decode(addr);
    if (dec === null || dec.hrp !== hrp || dec.data.length < 1 || dec.data[0] > 16) {
        return null;
    }
    var res = convertBits(Uint8Array.from(dec.data.slice(1)), 5, 8, false);
    if (res === null || res.length < 2 || res.length > 40) {
        return null;
    }
    if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
        return null;
    }
    return { version: dec.data[0], program: res };
};
exports.decodeSegwitAddress = decodeSegwitAddress;
var encodeSegwitAddress = function (hrp, version, program) {
    var u82u5 = convertBits(program, 8, 5, true);
    if (!u82u5) {
        return null;
    }
    var ret = bech32_1.default.encode(hrp, [version].concat(u82u5), Bech32Version.Origin);
    if (exports.decodeSegwitAddress(hrp, ret) === null) {
        return null;
    }
    return ret;
};
exports.encodeSegwitAddress = encodeSegwitAddress;
var encodeBc32Data = function (hex) {
    var data = Buffer.from(hex, 'hex');
    var u82u5 = convertBits(data, 8, 5, true);
    if (!u82u5) {
        throw new Error('invalid input');
    }
    else {
        return bech32_1.default.encode(undefined, u82u5, Bech32Version.bis);
    }
};
exports.encodeBc32Data = encodeBc32Data;
var decodeBc32Data = function (data) {
    var result = bech32_1.default.decode(data);
    if (result) {
        var res = convertBits(Buffer.from(result.data), 5, 8, false);
        if (res)
            return Buffer.from(res).toString('hex');
        return null;
    }
    else {
        return null;
    }
};
exports.decodeBc32Data = decodeBc32Data;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "iWd9":
/*!*********************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/Root.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(__webpack_require__(/*! ./service */ "BuVO"));
const useController_1 = __webpack_require__(/*! ./hooks/useController */ "yUcP");
exports.default = () => {
    const [Controller, { read, play }] = useController_1.useController();
    service_1.default.setup(read, play);
    return Controller;
};
//# sourceMappingURL=Root.js.map

/***/ }),

/***/ "l470":
/*!***************************************************!*\
  !*** ./node_modules/@cvbb/bc-ur/dist/decodeUR.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSingleWorkload = exports.smartDecodeUR = exports.decodeUR = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "xOHM");
var miniCbor_1 = __webpack_require__(/*! ./miniCbor */ "Ir3a");
var bc_bech32_1 = __webpack_require__(/*! @cvbb/bc-bech32 */ "VP3s");
var checkAndGetSequence = function (sequence) {
    var pieces = sequence.toUpperCase().split('OF');
    if (pieces.length !== 2)
        throw new Error("invalid sequence: " + sequence);
    var index = pieces[0], total = pieces[1];
    return [+index, +total];
};
var checkDigest = function (digest, payload) {
    var decoded = bc_bech32_1.decodeBc32Data(payload);
    if (!decoded)
        throw new Error("can not decode payload: " + payload);
    if (bc_bech32_1.decodeBc32Data(digest) !== utils_1.sha256Hash(Buffer.from(decoded, 'hex')).toString('hex')) {
        throw new Error("invalid digest: \n digest:" + digest + " \n payload:" + payload);
    }
};
var checkURHeader = function (UR, type) {
    if (type === void 0) { type = 'bytes'; }
    if (UR.toUpperCase() !== ("ur:" + type).toUpperCase())
        throw new Error("invalid UR header: " + UR);
};
var dealWithSingleWorkload = function (workload, type) {
    if (type === void 0) { type = 'bytes'; }
    var pieces = workload.split('/');
    switch (pieces.length) {
        case 2: {
            //UR:Type/[Fragment]
            checkURHeader(pieces[0], type);
            return pieces[1];
        }
        case 3: {
            //UR:Type/[Digest]/[Fragment] when Sequencing is omitted, Digest MAY be omitted;
            //should check digest
            checkURHeader(pieces[0], type);
            var digest = pieces[1];
            var fragment = pieces[2];
            checkDigest(digest, fragment);
            return fragment;
        }
        case 4: {
            //UR:Type/[Sequencing]/[Digest]/[Fragment]
            //should check sequencing and digest
            checkURHeader(pieces[0], type);
            checkAndGetSequence(pieces[1]);
            var digest = pieces[2];
            var fragment = pieces[3];
            checkDigest(digest, fragment);
            return fragment;
        }
        default:
            throw new Error("invalid workload pieces length: expect 2 / 3 / 4 bug got " + pieces.length);
    }
};
var dealWithMultipleWorkloads = function (workloads, type) {
    if (type === void 0) { type = 'bytes'; }
    var length = workloads.length;
    var fragments = new Array(length).fill('');
    var digest = '';
    workloads.forEach(function (workload) {
        var pieces = workload.split('/');
        checkURHeader(pieces[0], type);
        var _a = checkAndGetSequence(pieces[1]), index = _a[0], total = _a[1];
        if (total !== length)
            throw new Error("invalid workload: " + workload + ", total " + total + " not equal workloads length " + length);
        if (digest && digest !== pieces[2])
            throw new Error("invalid workload: " + workload + ", checksum changed " + digest + ", " + pieces[2]);
        digest = pieces[2];
        if (fragments[index - 1])
            throw new Error("invalid workload: " + workload + ", index " + index + " has already been set");
        fragments[index - 1] = pieces[3];
    });
    var payload = fragments.join('');
    checkDigest(digest, payload);
    return payload;
};
var getBC32Payload = function (workloads, type) {
    if (type === void 0) { type = 'bytes'; }
    try {
        var length_1 = workloads.length;
        if (length_1 === 1) {
            return dealWithSingleWorkload(workloads[0], type);
        }
        else {
            return dealWithMultipleWorkloads(workloads, type);
        }
    }
    catch (e) {
        throw new Error("invalid workloads: " + workloads + "\n " + e);
    }
};
var decodeUR = function (workloads, type) {
    if (type === void 0) { type = 'bytes'; }
    var bc32Payload = getBC32Payload(workloads, type);
    var cborPayload = bc_bech32_1.decodeBc32Data(bc32Payload);
    if (!cborPayload) {
        throw new Error('invalid data');
    }
    return miniCbor_1.decodeSimpleCBOR(cborPayload);
};
exports.decodeUR = decodeUR;
var onlyUniq = function (value, index, self) {
    return self.indexOf(value) === index;
};
var smartDecodeUR = function (workloads) {
    if (workloads.length > 0) {
        var _a = exports.extractSingleWorkload(workloads[0]), index = _a[0], total = _a[1];
        if (workloads.length === total) {
            return {
                success: true,
                current: workloads.length,
                length: total,
                workloads: [],
                result: exports.decodeUR(workloads),
            };
        }
        else {
            return {
                success: false,
                current: workloads.length,
                length: total,
                workloads: workloads.filter(onlyUniq),
                result: '',
            };
        }
    }
    else {
        return {
            success: false,
            current: 0,
            length: 0,
            workloads: [],
            result: '',
        };
    }
};
exports.smartDecodeUR = smartDecodeUR;
var extractSingleWorkload = function (workload) {
    var pieces = workload.toUpperCase().split('/');
    switch (pieces.length) {
        case 2: //UR:Type/[Fragment]
        case 3: {
            //UR:Type/[Digest]/[Fragment] when Sequencing is omitted, Digest MAY be omitted;
            return [1, 1];
        }
        case 4: {
            //UR:Type/[Sequencing]/[Digest]/[Fragment]
            return checkAndGetSequence(pieces[1]);
        }
        default:
            throw new Error("invalid workload pieces length: expect 2 / 3 / 4 bug got " + pieces.length);
    }
};
exports.extractSingleWorkload = extractSingleWorkload;
//# sourceMappingURL=decodeUR.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "lZNz":
/*!***************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/components/ButtonGroup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
const ButtonGroup = (props) => {
    return (react_1.default.createElement("div", { style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'flex-start',
        } }, props.children));
};
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map

/***/ }),

/***/ "tTlE":
/*!**********************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/hooks/useAnimatedQRCodePlayer.js ***!
  \**********************************************************************/
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedQRCodePlayer = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
const BaseQRCode_1 = __webpack_require__(/*! ../components/BaseQRCode */ "QjJ2");
const bc_ur_1 = __webpack_require__(/*! @cvbb/bc-ur */ "zs2r");
const events_1 = __webpack_require__(/*! events */ "+qE3");
const Button_1 = __webpack_require__(/*! ../components/Button */ "2Q9u");
const ButtonGroup_1 = __webpack_require__(/*! ../components/ButtonGroup */ "lZNz");
const useAnimatedQRCodePlayer = () => {
    const [data, setData] = react_1.useState([]);
    const [refreshSpeed, setRefreshSpeed] = react_1.useState(500);
    const [hasNext, setHasNext] = react_1.useState(false);
    const [index, setIndex] = react_1.useState(0);
    const [title, setTitle] = react_1.useState(null);
    const [description, setDescription] = react_1.useState(null);
    const [isPause, setPause] = react_1.useState(false);
    const pause = () => {
        setPause(true);
    };
    const play = () => {
        setPause(false);
    };
    const next = () => {
        setIndex((index) => {
            if (index >= splitArray.length - 1) {
                return 0;
            }
            else {
                return index + 1;
            }
        });
    };
    const prev = () => {
        setIndex((index) => {
            if (index < 0) {
                return splitArray.length - 1;
            }
            else {
                return index - 1;
            }
        });
    };
    const ee = react_1.useMemo(() => new events_1.EventEmitter(), []);
    const splitArray = data;
    const reset = () => {
        setData([]);
        setRefreshSpeed(500);
        setIndex(0);
    };
    react_1.useEffect(() => {
        if (!isPause) {
            const subscribe = rxjs_1.interval(refreshSpeed).subscribe(() => {
                next();
            });
            return () => {
                subscribe.unsubscribe();
            };
        }
    }, [refreshSpeed, splitArray, isPause]);
    const finish = () => {
        ee.emit('finish', true);
    };
    const element = (react_1.default.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        } },
        title && react_1.default.createElement("p", null, title),
        description && react_1.default.createElement("p", null, description),
        react_1.default.createElement(BaseQRCode_1.BaseQRCode, { size: 288, data: splitArray[index] }),
        react_1.default.createElement("p", { style: { textAlign: 'center' } },
            index + 1,
            "/",
            splitArray.length),
        react_1.default.createElement(ButtonGroup_1.ButtonGroup, null,
            isPause ? react_1.default.createElement(Button_1.Button, { onClick: play }, "Play") : react_1.default.createElement(Button_1.Button, { onClick: pause }, "Pause"),
            react_1.default.createElement(Button_1.Button, { onClick: next }, "Next"),
            react_1.default.createElement(Button_1.Button, { onClick: prev }, "Prev")),
        react_1.default.createElement(ButtonGroup_1.ButtonGroup, null,
            react_1.default.createElement(Button_1.Button, { onClick: finish }, hasNext ? 'Next' : 'Finish'))));
    return [
        element,
        {
            play: (data, options) => {
                return new Promise((resolve) => {
                    const urs = bc_ur_1.encodeUR(data, 800);
                    setData(urs);
                    if (options) {
                        options.refreshSpeed && setRefreshSpeed(options.refreshSpeed);
                        options.hasNext && setHasNext(options.hasNext);
                        options.title && setTitle(options.title);
                        options.description && setDescription(options.description);
                    }
                    ee.once('finish', () => {
                        reset();
                        resolve();
                    });
                });
            },
        },
    ];
};
exports.useAnimatedQRCodePlayer = useAnimatedQRCodePlayer;
//# sourceMappingURL=useAnimatedQRCodePlayer.js.map

/***/ }),

/***/ "vI2P":
/*!***************************************************!*\
  !*** ./node_modules/@cvbb/bc-ur/dist/encodeUR.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeUR = void 0;
var miniCbor_1 = __webpack_require__(/*! ./miniCbor */ "Ir3a");
var bc_bech32_1 = __webpack_require__(/*! @cvbb/bc-bech32 */ "VP3s");
var utils_1 = __webpack_require__(/*! ./utils */ "xOHM");
var composeUR = function (payload, type) {
    if (type === void 0) { type = 'bytes'; }
    return "ur:" + type + "/" + payload;
};
var composeDigest = function (payload, digest) {
    return digest + "/" + payload;
};
var composeSequencing = function (payload, index, total) {
    return index + 1 + "of" + total + "/" + payload;
};
var composeHeadersToFragments = function (fragments, digest, type) {
    if (type === void 0) { type = 'bytes'; }
    if (fragments.length === 1) {
        return [composeUR(fragments[0])];
    }
    else {
        return fragments.map(function (f, index) {
            return utils_1.compose3(function (payload) { return composeUR(payload, type); }, function (payload) { return composeSequencing(payload, index, fragments.length); }, function (payload) { return composeDigest(payload, digest); })(f);
        });
    }
};
var encodeUR = function (payload, fragmentCapacity) {
    if (fragmentCapacity === void 0) { fragmentCapacity = 200; }
    var cborPayload = miniCbor_1.encodeSimpleCBOR(payload);
    var bc32Payload = bc_bech32_1.encodeBc32Data(cborPayload);
    var digest = utils_1.sha256Hash(Buffer.from(cborPayload, 'hex')).toString('hex');
    var bc32Digest = bc_bech32_1.encodeBc32Data(digest);
    var fragments = bc32Payload.match(new RegExp('.{1,' + fragmentCapacity + '}', 'g'));
    if (!fragments) {
        throw new Error('Unexpected error when encoding');
    }
    return composeHeadersToFragments(fragments, bc32Digest, 'bytes').map(function (str) { return str.toUpperCase(); });
};
exports.encodeUR = encodeUR;
//# sourceMappingURL=encodeUR.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "wUHp":
/*!*****************************************************!*\
  !*** ./node_modules/@cvbb/bc-bech32/dist/bech32.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./index */ "VP3s");
var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
var GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
var polymod = function (values) {
    var chk = 1;
    for (var p = 0; p < values.length; ++p) {
        var top_1 = chk >> 25;
        chk = ((chk & 0x1ffffff) << 5) ^ values[p];
        for (var i = 0; i < 6; ++i) {
            if ((top_1 >> i) & 1) {
                chk ^= GENERATOR[i];
            }
        }
    }
    return chk;
};
var hrpExpand = function (hrp) {
    var ret = [];
    var p;
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) >> 5);
    }
    ret.push(0);
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) & 31);
    }
    return ret;
};
var verifyChecksum = function (hrp, data, version) {
    var header;
    if (hrp) {
        header = hrpExpand(hrp);
    }
    else {
        header = [0];
    }
    var check = version === index_1.Bech32Version.Origin ? 1 : 0x3fffffff;
    return polymod(header.concat(data)) === check;
};
var createChecksum = function (hrp, data, bech32Version) {
    var values;
    if (hrp) {
        values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
    }
    else {
        values = [0].concat(data).concat([0, 0, 0, 0, 0, 0]);
    }
    var chk = bech32Version === index_1.Bech32Version.Origin ? 1 : 0x3fffffff;
    var mod = polymod(values) ^ chk;
    var ret = [];
    for (var p = 0; p < 6; ++p) {
        ret.push((mod >> (5 * (5 - p))) & 31);
    }
    return ret;
};
var encode = function (hrp, data, version) {
    var combined = data.concat(createChecksum(hrp, data, version));
    var ret;
    if (hrp) {
        ret = hrp + '1';
    }
    else {
        ret = '';
    }
    for (var p = 0; p < combined.length; ++p) {
        ret += CHARSET.charAt(combined[p]);
    }
    return ret;
};
var decodeBc32 = function (bechString) {
    var data = [];
    for (var p = 0; p < bechString.length; ++p) {
        var d = CHARSET.indexOf(bechString.charAt(p));
        if (d === -1) {
            return null;
        }
        data.push(d);
    }
    if (!verifyChecksum(undefined, data, index_1.Bech32Version.bis)) {
        return null;
    }
    return { hrp: null, data: data.slice(0, data.length - 6) };
};
var decode = function (bechString) {
    var p;
    var hasLower = false;
    var hasUpper = false;
    for (p = 0; p < bechString.length; ++p) {
        if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
            return null;
        }
        if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
            hasLower = true;
        }
        if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
            hasUpper = true;
        }
    }
    if (hasLower && hasUpper) {
        return null;
    }
    bechString = bechString.toLowerCase();
    var pos = bechString.lastIndexOf('1');
    if (pos === -1) {
        return decodeBc32(bechString);
    }
    if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
        return null;
    }
    var hrp = bechString.substring(0, pos);
    var data = [];
    for (p = pos + 1; p < bechString.length; ++p) {
        var d = CHARSET.indexOf(bechString.charAt(p));
        if (d === -1) {
            return null;
        }
        data.push(d);
    }
    if (!verifyChecksum(hrp, data, index_1.Bech32Version.Origin)) {
        return null;
    }
    return { hrp: hrp, data: data.slice(0, data.length - 6) };
};
exports.default = {
    encode: encode,
    decode: decode,
};
//# sourceMappingURL=bech32.js.map

/***/ }),

/***/ "xOHM":
/*!************************************************!*\
  !*** ./node_modules/@cvbb/bc-ur/dist/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose3 = exports.sha256Hash = void 0;
var sha_js_1 = __importDefault(__webpack_require__(/*! sha.js */ "afKu"));
var sha256Hash = function (data) {
    return sha_js_1.default('sha256').update(data).digest();
};
exports.sha256Hash = sha256Hash;
var compose3 = function (f, g, h) { return function (x) {
    return f(g(h(x)));
}; };
exports.compose3 = compose3;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "yUcP":
/*!************************************************************!*\
  !*** ./node_modules/@cvbb/sdk/dist/hooks/useController.js ***!
  \************************************************************/
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useController = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
const react_modal_1 = __importDefault(__webpack_require__(/*! react-modal */ "9rZX"));
const useAnimatedQRCodePlayer_1 = __webpack_require__(/*! ./useAnimatedQRCodePlayer */ "tTlE");
const useAnimatedQRCodeReader_1 = __webpack_require__(/*! ./useAnimatedQRCodeReader */ "CxSg");
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const useController = () => {
    const [visible, setVisible] = react_1.useState(false);
    const [mode, setMode] = react_1.useState('play');
    const [AnimatedQRCodePlayer, { play }] = useAnimatedQRCodePlayer_1.useAnimatedQRCodePlayer();
    const [AnimatedQRCodeReader, { read }] = useAnimatedQRCodeReader_1.useAnimatedQRCodeReader();
    const reset = () => {
        setVisible(false);
        setMode('play');
    };
    const element = (react_1.default.createElement(react_modal_1.default, { isOpen: visible, style: customStyles },
        react_1.default.createElement("div", { style: {
                width: 320,
                boxSizing: 'border-box',
                padding: 16,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            } }, mode === 'read' ? AnimatedQRCodeReader : AnimatedQRCodePlayer)));
    return [
        element,
        {
            play: (data, options) => __awaiter(void 0, void 0, void 0, function* () {
                setVisible(true);
                setMode('play');
                yield play(data, options);
                reset();
                return;
            }),
            read: (options) => __awaiter(void 0, void 0, void 0, function* () {
                setVisible(true);
                setMode('read');
                const result = yield read(options);
                reset();
                return result;
            }),
        },
    ];
};
exports.useController = useController;
//# sourceMappingURL=useController.js.map

/***/ }),

/***/ "zs2r":
/*!************************************************!*\
  !*** ./node_modules/@cvbb/bc-ur/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSingleWorkload = exports.decodeUR = exports.encodeUR = void 0;
var encodeUR_1 = __webpack_require__(/*! ./encodeUR */ "vI2P");
Object.defineProperty(exports, "encodeUR", { enumerable: true, get: function () { return encodeUR_1.encodeUR; } });
var decodeUR_1 = __webpack_require__(/*! ./decodeUR */ "l470");
Object.defineProperty(exports, "decodeUR", { enumerable: true, get: function () { return decodeUR_1.decodeUR; } });
Object.defineProperty(exports, "extractSingleWorkload", { enumerable: true, get: function () { return decodeUR_1.extractSingleWorkload; } });
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=cobovault-126a45e3-js.js.map