(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-76da7453-js"],{

/***/ "ZqdC":
/*!*************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/index-76da7453.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-4399156e.js */ "NcyZ");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ "/TMw");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "M39V");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethereumjs-util */ "tnHP");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_5__);
var _errorMessages;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var HANDLE_PIN_PRESS = 'handlePinPress';
var BUTTON_COLOR = "#EBEBED";
var BUTTON_DOT_COLOR = "#33394B";
var ModalType;

(function (ModalType) {
  ModalType[ModalType["Pin"] = 0] = "Pin";
  ModalType[ModalType["Passphrase"] = 1] = "Passphrase";
})(ModalType || (ModalType = {}));

var pinButton = function pinButton(value, slot) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '64px';
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '64px';
  return "\n  <button\n    class=\"pin-button\"\n    style=\"width: ".concat(width, "; height: ").concat(height, ";\"\n    type=\"button\"\n    onclick=\"window.").concat(HANDLE_PIN_PRESS, "(").concat(value, ")\">\n      ").concat(slot || "<svg class=\"pin-button-dot\" viewBox=\"0 0 18 18\" width=\"18\" height=\"18\">\n          <circle cx=\"9\" cy=\"9\" r=\"9\" ></circle>\n        </svg>", "\n      <div class=\"pin-button-bg\">\n  </button>\n");
};

var pinButtons = "\n  <div class=\"pin-pad-buttons\">\n    ".concat([7, 8, 9, 4, 5, 6, 1, 2, 3].map(function (val) {
  return pinButton(val);
}).join(''), "\n  </div>\n");
var delButtonIcon = "<svg class=\"del-button-icon\" viewBox=\"0 0 24 24\" focusable=\"false\" class=\"chakra-icon css-onkibi\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></svg>";

var pinPhraseInput = function pinPhraseInput(modalType) {
  return "\n<form id=\"pin-phrase-form\" class=\"pin-phrase-input-container\">\n  <input\n    id=\"pin-phrase-input\"\n    placeholder=\"".concat(modalType === ModalType.Pin ? 'PIN' : '', "\"\n    type=\"password\"\n    autocomplete=\"current-password\"\n  />\n  ").concat(modalType === ModalType.Pin ? " <div class=\"del-button-wrapper\">\n            ".concat(pinButton(-1, delButtonIcon, '38px', '38px'), "\n          </div>") : '', "\n</form>\n");
}; // Contains styles used by both the pin entry modal and the passphrase entry modal


var baseStyles = "\n  .keepkey-modal {\n    max-width: 22rem;\n    padding: 20px 10px;\n  }\n  .pin-phrase-input-container {\n    display: flex;\n    position: relative;\n    align-items: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  #pin-phrase-input {\n    background: inherit;\n    font-size: 0.889em;\n    font-family: inherit;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #242835;\n    border-radius: 4px;\n    padding-left: 0.5rem;\n    padding-right: 4.1rem;\n    transition: opacity 150ms ease-in-out;\n    height: 42px;\n    width: 100%;\n    opacity: 0.6;\n    outline: none;\n  }\n  #pin-phrase-input:hover, #pin-phrase-input:focus {\n    opacity: 1;\n  }\n  .unlock-button {\n    height: 26px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n  }\n  \n  /* Overrides the branding on the modal*/\n  .keepkey-modal + .bn-branding { visibility: hidden !important; }\n  .keepkey-modal .bn-onboard-prepare-button {\n    width: 100%;\n  }\n";
var pinModalStyles = "\n  #entry {\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    padding: 20px;\n  }\n  .pin-pad-buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 75px);\n    grid-template-rows: repeat(3, 75px);\n    align-items: center;\n    justify-items: center;\n    margin-bottom: 15px;\n  }\n  .pin-button {\n    align-items: center;\n    border-radius: 6px;\n    border: 1px solid ".concat(BUTTON_COLOR, ";\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    font-size: 18px;\n    overflow: hidden;\n    padding: 0;\n    background-color: unset;\n    overflow: hidden;\n  }\n  .pin-button-bg {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    overflow: hidden;\n    background-color: ").concat(BUTTON_COLOR, ";\n    transition: opacity 100ms ease-in;\n  }\n  .pin-button-bg:hover {\n    opacity: .2;\n  }\n  .pin-button-dot {\n    fill: ").concat(BUTTON_DOT_COLOR, ";\n    position: absolute;\n    pointer-events: none;\n    z-index: 2;\n  }\n  .del-button-wrapper {\n    position: absolute;\n    height: 42px;\n    width: 42px;\n    right: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .del-button-wrapper > .pin-button {\n    border: none;\n  }\n  .del-button-icon {\n    position: absolute;\n    width: 20px;\n    z-index: 2;\n    pointer-events: none;\n  }\n  .del-button-icon + div {\n    opacity: .5;\n  }\n  .del-button-icon + div:hover {\n    opacity: 1;\n  }\n");
var passphraseModalStyles = "\n  .keepkey-modal {\n    padding: 40px 30px;\n  }\n";
var pinHTML = "\n    <style>".concat(baseStyles).concat(pinModalStyles, "</style>\n    <h2>Enter Your Pin</h2>\n    <p>\n      Use PIN layout shown on your device to find the location to press on this pin pad.\n    </p>\n    <div id=\"entry\" class=\"bn-onboard-custom\">\n      ").concat(pinButtons, "\n      ").concat(pinPhraseInput(ModalType.Pin), "\n    </div>\n  ");
var passphraseHTML = "\n  <style>".concat(baseStyles).concat(passphraseModalStyles, "</style>\n  <h2 style=\"margin-bottom: 35px\">Enter Your Passphrase</h2>\n  <div id=\"entry\" class=\"bn-onboard-custom\">\n    ").concat(pinPhraseInput(ModalType.Passphrase), "\n  </div>\n");

var renderModal = function renderModal(wallet, modalType) {
  var _document$getElementB;

  var modalHtml = modalType === ModalType.Pin ? pinHTML : passphraseHTML;

  var getInput = function getInput() {
    return document.getElementById('pin-phrase-input');
  };

  var deleteWindowProperties = function deleteWindowProperties() {
    delete window[HANDLE_PIN_PRESS];
  };

  if (modalType === ModalType.Pin) {
    window[HANDLE_PIN_PRESS] = function (value) {
      var input = getInput(); // A value of -1 signals a backspace e.g. we delete the last char from the input

      input.value = value === -1 ? input.value.slice(0, -1) : input.value + value;
    };
  } // Creates a modal component which gets mounted to the body and is passed the pin html into it's slot


  var div = document.createElement('div');
  div.innerHTML = modalHtml;
  div.className = 'keepkey-modal';
  var pinModal = new _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["M"]({
    target: document.body,
    props: {
      closeModal: function closeModal() {
        // Cancels any action that the keepkey wallet may be doing
        wallet.cancel();
        deleteWindowProperties();
        pinModal.$destroy();
      },
      $$slots: createSlot(div),
      $$scope: {}
    }
  }); // Submits the pin or passphrase to the Keepkey device

  var submit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var value;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = getInput().value;

              if (!(modalType === ModalType.Pin)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return wallet.sendPin(value);

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return wallet.sendPassphrase(value);

            case 8:
              pinModal.$destroy();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  (_document$getElementB = document.getElementById('pin-phrase-form')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('submit', function (e) {
    e.preventDefault();
    submit();
  }); // Creates a new Button component used to trigger sending the pin to Keepkey

  var entryEl = document.getElementById('entry');

  if (entryEl) {
    var span = document.createElement('span');
    span.innerHTML = "Unlock";
    span.className = "unlock-button";
    new _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["B"]({
      target: entryEl,
      props: {
        onclick: function () {
          var _onclick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    submit();
                    deleteWindowProperties();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function onclick() {
            return _onclick.apply(this, arguments);
          }

          return onclick;
        }(),
        $$slots: createSlot(span),
        $$scope: {}
      }
    });
  }
};
/**
 * createSlot - creates the necessary object needed to pass
 * arbitrary html into a component's default slot
 * @param element The html element which is inserted into the components slot
 */


function createSlot(element) {
  return {
    "default": [function () {
      return {
        c: _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["b"],
        m: function mount(target, anchor) {
          Object(_onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["c"])(target, element, anchor);
        },
        d: function destroy(detaching) {
          if (detaching) {
            Object(_onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["d"])(element);
          }
        },
        l: _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["b"]
      };
    }]
  };
}

var img = "data:image/png;base64,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";
/* eslint-disable @typescript-eslint/camelcase */

/* -= CONSTANTS =- */

var ACCOUNTS_TO_GET = 5;
var WALLET_NAME = 'KeepKey';
var ERROR_BUSY = 'busy';
var ERROR_PAIRING = 'pairing';
var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, ERROR_BUSY, "Your KeepKey is currently connected to another application.\n  Please close any other browser tabs or applications that may be connected to your device and try again."), _defineProperty(_errorMessages, ERROR_PAIRING, 'There was an error pairing the device. Please disconnect and reconnect the device and try again.'), _errorMessages);

function keepkey(options) {
  var label = options.label,
      iconSrc = options.iconSrc,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred; // Used to signal if the keep key could not be paired or if the keep key is already paired with another app

  var _installMessage;

  return {
    name: label || WALLET_NAME,
    iconSrc: iconSrc || img,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
        var BigNumber, resetWalletState, _yield$createKeepKeyP, provider, error;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                BigNumber = _ref2.BigNumber, resetWalletState = _ref2.resetWalletState;
                _context6.next = 3;
                return createKeepKeyProvider({
                  resetWalletState: resetWalletState,
                  BigNumber: BigNumber,
                  rpcUrl: rpcUrl,
                  networkId: networkId
                });

              case 3:
                _yield$createKeepKeyP = _context6.sent;
                provider = _yield$createKeepKeyP.provider;
                error = _yield$createKeepKeyP.error;
                _installMessage = errorMessages[error] || '';
                return _context6.abrupt("return", {
                  provider: provider,
                  "interface": !error ? {
                    name: WALLET_NAME,
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  return _context3.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  return _context4.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context5.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  } : null
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    // The style tag here is used to hide the 'Open KeepKey button'
    installMessage: function installMessage() {
      return _installMessage ? "<style>footer a > button { display: none !important }</style>\n        <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n          ".concat(_installMessage, "\n        </p>") : '';
    },
    type: 'hardware',
    mobile: false,
    desktop: true,
    preferred: preferred
  };
}

function createKeepKeyProvider(_x2) {
  return _createKeepKeyProvider.apply(this, arguments);
}

function _createKeepKeyProvider() {
  _createKeepKeyProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref3) {
    var BigNumber, rpcUrl, resetWalletState, networkId, _yield$import, WebUSBKeepKeyAdapter, _yield$import2, Keyring, Events, bip32ToAddressNList, HDWalletErrorType, _yield$import3, createProvider, _yield$import4, isValidPath, keyring, keepKeyAdapter, keepKeyWallet, DEFAULT_DERIVATION_PATH, dPath, addressToPath, enabled, customPath, provider, enable, _enable, disconnect, setPath, _setPath, isCustomPath, getAddress, _getAddress, addresses, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref8) {
                var message, addressNList, _yield$keepKeyWallet$2, signature;

                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        message = _ref8.data;

                        if (!(addressToPath.size === 0)) {
                          _context15.next = 4;
                          break;
                        }

                        _context15.next = 4;
                        return enable();

                      case 4:
                        addressNList = _toConsumableArray(addressToPath.values())[0];
                        _context15.next = 7;
                        return keepKeyWallet.ethSignMessage({
                          addressNList: addressNList,
                          message: Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_5__["toBuffer"])(message).toString('utf8')
                        });

                      case 7:
                        _yield$keepKeyWallet$2 = _context15.sent;
                        signature = _yield$keepKeyWallet$2.signature;
                        return _context15.abrupt("return", signature);

                      case 10:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x10) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(transactionData) {
                var addressNList, nonce, gasPrice, gas, to, value, data, _yield$keepKeyWallet$, serialized;

                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context14.next = 3;
                          break;
                        }

                        _context14.next = 3;
                        return enable();

                      case 3:
                        addressNList = _toConsumableArray(addressToPath.values())[0];
                        nonce = transactionData.nonce, gasPrice = transactionData.gasPrice, gas = transactionData.gas, to = transactionData.to, value = transactionData.value, data = transactionData.data;
                        _context14.next = 7;
                        return keepKeyWallet.ethSignTx({
                          addressNList: addressNList,
                          nonce: nonce,
                          gasPrice: gasPrice,
                          gasLimit: gas,
                          to: to,
                          value: value || '0x0',
                          data: data || '',
                          chainId: networkId
                        });

                      case 7:
                        _yield$keepKeyWallet$ = _context14.sent;
                        serialized = _yield$keepKeyWallet$.serialized;
                        return _context14.abrupt("return", serialized);

                      case 10:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x9) {
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
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context8.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x8) {
                    return _ref7.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(getMore) {
                var _keepKeyWallet$descri, accountIdx, startingIndex, i, addressNList, address;

                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (enabled) {
                          _context13.next = 2;
                          break;
                        }

                        return _context13.abrupt("return", []);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context13.next = 4;
                          break;
                        }

                        return _context13.abrupt("return", addresses());

                      case 4:
                        dPath = dPath || DEFAULT_DERIVATION_PATH; // Get the account index from the derivation path

                        _keepKeyWallet$descri = keepKeyWallet.describePath({
                          path: bip32ToAddressNList(dPath),
                          coin: 'Ethereum'
                        }), accountIdx = _keepKeyWallet$descri.accountIdx; // This would only happen if the user provides an invalid dPath and it wasn't caught by the setPath method

                        if (!(accountIdx === undefined)) {
                          _context13.next = 8;
                          break;
                        }

                        throw new Error("Could not derive account from path: ".concat(dPath));

                      case 8:
                        // Calculate the index to start from based on the dPath index and the current number of generated addresses
                        startingIndex = accountIdx + addressToPath.size;
                        i = startingIndex;

                      case 10:
                        if (!(i < ACCOUNTS_TO_GET + startingIndex)) {
                          _context13.next = 19;
                          break;
                        }

                        // Retrieve the array form of the derivation path for a given account index
                        addressNList = keepKeyWallet.ethGetAccountPaths({
                          coin: 'Ethereum',
                          accountIdx: i
                        })[0].addressNList; // Retrieve the address associated with the given account index

                        _context13.next = 14;
                        return keepKeyWallet.ethGetAddress({
                          addressNList: addressNList,
                          showDisplay: false
                        });

                      case 14:
                        address = _context13.sent;
                        // Store the address in our set of generated addresses
                        addressToPath.set(address, addressNList);

                      case 16:
                        i++;
                        _context13.next = 10;
                        break;

                      case 19:
                        return _context13.abrupt("return", addresses());

                      case 20:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x7) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context12.sent;
                        return _context12.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return enabled ? addresses()[0] : undefined;
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              // make a copy and put in an array
              var accounts = _toConsumableArray(addressToPath.entries());

              var accountIndex = accounts.findIndex(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 1),
                    accountAddress = _ref6[0];

                return accountAddress === address;
              }); // pull the item at the account index out of the array and place at the front

              accounts.unshift(accounts.splice(accountIndex, 1)[0]); // reassign addressToPath to new ordered accounts

              addressToPath = new Map(accounts);
            };

            addresses = function _addresses() {
              return Array.from(addressToPath.keys());
            };

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(addressNList, path) {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.prev = 0;
                        return _context11.abrupt("return", keepKeyWallet.ethGetAddress({
                          addressNList: addressNList
                        }));

                      case 4:
                        _context11.prev = 4;
                        _context11.t0 = _context11["catch"](0);
                        throw new Error("Unable to derive address from path ".concat(path));

                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[0, 4]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5, _x6) {
              return _getAddress.apply(this, arguments);
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(path, custom) {
                var addressNList, address;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (isValidPath(path)) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return", false);

                      case 2:
                        if (path !== dPath) {
                          // clear any existing addresses if different path
                          addressToPath = new Map();
                        }

                        if (!custom) {
                          _context10.next = 18;
                          break;
                        }

                        _context10.prev = 4;
                        // Convert the path to the addressNList which is what is used by keepkey for signing
                        addressNList = bip32ToAddressNList(path);
                        _context10.next = 8;
                        return getAddress(addressNList, path);

                      case 8:
                        address = _context10.sent;
                        addressToPath.set(address, addressNList);
                        dPath = path;
                        customPath = true;
                        return _context10.abrupt("return", true);

                      case 15:
                        _context10.prev = 15;
                        _context10.t0 = _context10["catch"](4);
                        throw new Error("There was a problem deriving an address from path ".concat(path));

                      case 18:
                        customPath = false;
                        dPath = path;
                        return _context10.abrupt("return", true);

                      case 21:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[4, 15]]);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3, _x4) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              addressToPath = new Map();
              enabled = false;
              keepKeyWallet.clearSession();
              provider.stop();
            };

            _enable = function _enable3() {
              _enable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        // Cancel any user prompt that may be displayed on the keepkey i.e. the pin matrix
                        keepKeyWallet.cancel()["catch"](function (err) {
                          return err;
                        });
                        enabled = true;
                        return _context9.abrupt("return", _getAccounts()["catch"](function (error) {
                          var _error$message;

                          // If the error.message is an object, then the error message originated from keepkey
                          // So we grab the string and rethrow so the walletcheck can capture and display
                          if (error !== null && error !== void 0 && (_error$message = error.message) !== null && _error$message !== void 0 && _error$message.message) {
                            var _error$message2;

                            throw new Error(error === null || error === void 0 ? void 0 : (_error$message2 = error.message) === null || _error$message2 === void 0 ? void 0 : _error$message2.message);
                          }

                          return [];
                        }));

                      case 3:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));
              return _enable.apply(this, arguments);
            };

            enable = function _enable2() {
              return _enable.apply(this, arguments);
            };

            BigNumber = _ref3.BigNumber, rpcUrl = _ref3.rpcUrl, resetWalletState = _ref3.resetWalletState, networkId = _ref3.networkId;
            _context16.next = 24;
            return Promise.all(/*! import() | shapeshiftoss-hdwallet-keepkey-webusb */[__webpack_require__.e("default~authereum~eth-sig-util~providerEngine-771e7e5b-js~shapeshiftoss-hdwallet-keepkey-webusb~wall~b11e4352"), __webpack_require__.e("default~shapeshiftoss-hdwallet-core~shapeshiftoss-hdwallet-keepkey-webusb"), __webpack_require__.e("default~shapeshiftoss-hdwallet-keepkey-webusb~walletconnect-web3-provider"), __webpack_require__.e("common"), __webpack_require__.e("shapeshiftoss-hdwallet-keepkey-webusb")]).then(__webpack_require__.t.bind(null, /*! @shapeshiftoss/hdwallet-keepkey-webusb */ "V/Gv", 7));

          case 24:
            _yield$import = _context16.sent;
            WebUSBKeepKeyAdapter = _yield$import.WebUSBKeepKeyAdapter;
            _context16.next = 28;
            return __webpack_require__.e(/*! import() | shapeshiftoss-hdwallet-core */ "default~shapeshiftoss-hdwallet-core~shapeshiftoss-hdwallet-keepkey-webusb").then(__webpack_require__.t.bind(null, /*! @shapeshiftoss/hdwallet-core */ "ypPM", 7));

          case 28:
            _yield$import2 = _context16.sent;
            Keyring = _yield$import2.Keyring;
            Events = _yield$import2.Events;
            bip32ToAddressNList = _yield$import2.bip32ToAddressNList;
            HDWalletErrorType = _yield$import2.HDWalletErrorType;
            _context16.next = 35;
            return Promise.all(/*! import() | providerEngine-771e7e5b-js */[__webpack_require__.e("default~authereum~eth-sig-util~ethereumjs-tx~providerEngine-771e7e5b-js~walletconnect-web3-provider"), __webpack_require__.e("default~authereum~eth-sig-util~providerEngine-771e7e5b-js~shapeshiftoss-hdwallet-keepkey-webusb~wall~b11e4352"), __webpack_require__.e("default~authereum~providerEngine-771e7e5b-js~walletconnect-web3-provider~walletlink"), __webpack_require__.e("default~authereum~eth-sig-util~providerEngine-771e7e5b-js~walletconnect-web3-provider"), __webpack_require__.e("default~authereum~providerEngine-771e7e5b-js~walletconnect-web3-provider"), __webpack_require__.e("providerEngine-771e7e5b-js")]).then(__webpack_require__.bind(null, /*! ./providerEngine-771e7e5b.js */ "468V"));

          case 35:
            _yield$import3 = _context16.sent;
            createProvider = _yield$import3["default"];
            _context16.next = 39;
            return __webpack_require__.e(/*! import() | hd-wallet-51018814-js */ "hd-wallet-51018814-js").then(__webpack_require__.bind(null, /*! ./hd-wallet-51018814.js */ "QFga"));

          case 39:
            _yield$import4 = _context16.sent;
            isValidPath = _yield$import4.isValidPath;
            // Initialize the adapter and pair the device
            keyring = new Keyring();
            keepKeyAdapter = WebUSBKeepKeyAdapter.useKeyring(keyring);
            _context16.prev = 43;
            _context16.next = 46;
            return keepKeyAdapter.pairDevice();

          case 46:
            keepKeyWallet = _context16.sent;
            _context16.next = 57;
            break;

          case 49:
            _context16.prev = 49;
            _context16.t0 = _context16["catch"](43);

            if (!(_context16.t0.name === HDWalletErrorType.ConflictingApp)) {
              _context16.next = 55;
              break;
            }

            return _context16.abrupt("return", {
              provider: undefined,
              error: ERROR_BUSY
            });

          case 55:
            if (!(_context16.t0.name === HDWalletErrorType.WebUSBCouldNotPair)) {
              _context16.next = 57;
              break;
            }

            return _context16.abrupt("return", {
              provider: undefined,
              error: ERROR_PAIRING
            });

          case 57:
            DEFAULT_DERIVATION_PATH = "m/44'/60'/0'/0/0"; // The currently selected derivation path

            dPath = '';
            addressToPath = new Map();
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
            keyring.on(['*', '*', Events.DISCONNECT], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      resetWalletState({
                        disconnected: true,
                        walletName: WALLET_NAME
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))); // If the wallet asks for a PIN, open the PIN modal

            keyring.on(['*', '*', Events.PIN_REQUEST], function () {
              renderModal(keepKeyWallet, ModalType.Pin);
            }); // If the wallet asks for a PIN, open the PIN modal

            keyring.on(['*', '*', Events.PASSPHRASE_REQUEST], function () {
              renderModal(keepKeyWallet, ModalType.Passphrase);
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
            return _context16.abrupt("return", {
              provider: provider
            });

          case 79:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[43, 49]]);
  }));
  return _createKeepKeyProvider.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (keepkey);

/***/ })

}]);
//# sourceMappingURL=index-76da7453-js.js.map