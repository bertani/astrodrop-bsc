(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-link-d1311bd5-js"],{

/***/ "edIQ":
/*!*******************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/wallet-link-d1311bd5.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_coinbase_7f74eb94_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-coinbase-7f74eb94.js */ "Q0pZ");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function walletLink(options) {
  var rpcUrl = options.rpcUrl,
      appName = options.appName,
      appLogoUrl = options.appLogoUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Coinbase Wallet',
    svg: svg || _icon_coinbase_7f74eb94_js__WEBPACK_IMPORTED_MODULE_0__["c"],
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getBalance, getAddress, getNetwork, _yield$import, WalletLink, instance, provider;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getBalance = helpers.getBalance, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork;
                _context.next = 3;
                return __webpack_require__.e(/*! import() | walletlink */ "walletlink").then(__webpack_require__.t.bind(null, /*! walletlink */ "t5Mr", 7));

              case 3:
                _yield$import = _context.sent;
                WalletLink = _yield$import["default"];
                instance = new WalletLink({
                  appName: appName,
                  appLogoUrl: appLogoUrl
                });
                provider = instance.makeWeb3Provider(rpcUrl, networkId);
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Coinbase Wallet',
                    connect: function connect() {
                      return new Promise(function (resolve, reject) {
                        provider.enable().then(function (res) {
                          return resolve(res);
                        })["catch"](function () {
                          return reject({
                            message: 'This dapp needs access to your account information.'
                          });
                        });
                      });
                    },
                    disconnect: function disconnect() {
                      provider.disconnect();
                    },
                    address: {
                      get: function get() {
                        return getAddress(provider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(provider);
                      }
                    },
                    balance: {
                      get: function get() {
                        return getBalance(provider);
                      }
                    }
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (walletLink);

/***/ })

}]);
//# sourceMappingURL=wallet-link-d1311bd5-js.js.map