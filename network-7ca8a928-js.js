(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-7ca8a928-js"],{

/***/ "xhLS":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/network-7ca8a928.js ***!
  \***************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function network() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon,
      html = options.html,
      button = options.button;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(stateAndHelpers) {
      var network, appNetworkId, walletSelect, walletCheck, exit, stateSyncStatus, stateStore, wallet, _wallet$provider;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              network = stateAndHelpers.network, appNetworkId = stateAndHelpers.appNetworkId, walletSelect = stateAndHelpers.walletSelect, walletCheck = stateAndHelpers.walletCheck, exit = stateAndHelpers.exit, stateSyncStatus = stateAndHelpers.stateSyncStatus, stateStore = stateAndHelpers.stateStore, wallet = stateAndHelpers.wallet;

              if (!(network === null)) {
                _context2.next = 5;
                break;
              }

              if (!stateSyncStatus.network) {
                _context2.next = 5;
                break;
              }

              _context2.next = 5;
              return new Promise(function (resolve) {
                stateSyncStatus.network && stateSyncStatus.network.then(resolve);
                setTimeout(function () {
                  if (network === null) {
                    // if prom isn't resolving after 500ms, then stop waiting
                    resolve(undefined);
                  }
                }, 500);
              });

            case 5:
              if (!(Object(_onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["f"])(wallet === null || wallet === void 0 ? void 0 : wallet.provider) !== 'WalletConnect')) {
                _context2.next = 13;
                break;
              }

              _context2.prev = 6;
              _context2.next = 9;
              return wallet === null || wallet === void 0 ? void 0 : (_wallet$provider = wallet.provider) === null || _wallet$provider === void 0 ? void 0 : _wallet$provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x' + (appNetworkId === null || appNetworkId === void 0 ? void 0 : appNetworkId.toString(16))
                }]
              });

            case 9:
              _context2.next = 13;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](6);

            case 13:
              if (!(stateStore.network.get() != appNetworkId)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", {
                heading: heading || 'You Must Change Networks',
                description: description || "We've detected that you need to switch your wallet's network from <b>".concat(Object(_onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["n"])(network), "</b> to <b>").concat(Object(_onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["n"])(appNetworkId), "</b> for this Dapp. <br><br> <i style=\"font-size: inherit; font-family: inherit;\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),
                eventCode: 'networkFail',
                button: button || {
                  onclick: function () {
                    var _onclick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var walletSelected, walletReady;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              exit(false, {
                                switchingWallets: true
                              });
                              _context.next = 3;
                              return walletSelect();

                            case 3:
                              walletSelected = _context.sent;
                              _context.t0 = walletSelected;

                              if (!_context.t0) {
                                _context.next = 9;
                                break;
                              }

                              _context.next = 8;
                              return walletCheck();

                            case 8:
                              _context.t0 = _context.sent;

                            case 9:
                              walletReady = _context.t0;
                              _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["a"].update(function (store) {
                                return _objectSpread(_objectSpread({}, store), {}, {
                                  switchingWallets: false,
                                  walletCheckCompleted: walletReady
                                });
                              });

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function onclick() {
                      return _onclick.apply(this, arguments);
                    }

                    return onclick;
                  }(),
                  text: 'Switch Wallet'
                },
                html: html,
                icon: icon || _onboard_4399156e_js__WEBPACK_IMPORTED_MODULE_1__["h"]
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/* harmony default export */ __webpack_exports__["default"] = (network);

/***/ })

}]);
//# sourceMappingURL=network-7ca8a928-js.js.map