(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/J/K":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.METHODS=void 0,t.METHODS={getEnvInfo:"getEnvInfo",sendTransactions:"sendTransactions",rpcCall:"rpcCall",getSafeInfo:"getSafeInfo"}},"/Zv1":function(e,t,s){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),n=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;const o=i(s("xmst"));t.default=o.default,n(s("xmst"),t),n(s("zLkO"),t),n(s("/J/K"),t),n(s("lsUA"),t);var a=s("bWE+");Object.defineProperty(t,"getSDKVersion",{enumerable:!0,get:function(){return a.getSDKVersion}})},"0ilK":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TXs=void 0;const r=s("/J/K");t.TXs=class{constructor(e){this.txServiceUrl=null,this.communicator=e}async getBySafeTxHash(e){if(!this.txServiceUrl)throw new Error("ENV information hasn't been synced yet or there was an error during the process");const t=new AbortController,s={method:"GET",signal:t.signal};setTimeout(()=>t.abort(),1e4);try{const t=await fetch(`${this.txServiceUrl}/transactions/${e}`,s);if(200!==t.status)throw new Error("Failed to get the transaction. Either safeTxHash is incorrect or transaction hasn't been indexed by the service yet");return await t.json()}catch(r){throw r}}async send({txs:e,params:t}){if(!e||!e.length)throw new Error("No transactions were passed");const s={txs:e,params:t},n=await this.communicator.send(r.METHODS.sendTransactions,s);if(!n.success)throw new Error(n.error);return n.data}setTxServiceUrl(e){this.txServiceUrl=e}}},E9UQ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateRequestId=void 0;const r=e=>e.toString(16).padStart(2,"0");t.generateRequestId=()=>"undefined"!=typeof window?(e=>{const t=new Uint8Array(5);return window.crypto.getRandomValues(t),Array.from(t,r).join("")})():(new Date).getTime().toString(36)},OuGp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Eth=void 0;const r=s("Yy5R"),n=s("/J/K"),i={defaultBlockParam:(e="latest")=>e,returnFullTxObjectParam:(e=!1)=>e,blockNumberToHex:e=>Number.isInteger(e)?`0x${e.toString(16)}`:e};t.Eth=class{constructor(e){this.communicator=e,this.call=this.buildRequest({call:r.RPC_CALLS.eth_call,formatters:[null,i.defaultBlockParam]}),this.getBalance=this.buildRequest({call:r.RPC_CALLS.eth_getBalance,formatters:[null,i.defaultBlockParam]}),this.getCode=this.buildRequest({call:r.RPC_CALLS.eth_getCode,formatters:[null,i.defaultBlockParam]}),this.getStorageAt=this.buildRequest({call:r.RPC_CALLS.eth_getStorageAt,formatters:[null,i.blockNumberToHex,i.defaultBlockParam]}),this.getPastLogs=this.buildRequest({call:r.RPC_CALLS.eth_getLogs}),this.getBlockByHash=this.buildRequest({call:r.RPC_CALLS.eth_getBlockByHash,formatters:[null,i.returnFullTxObjectParam]}),this.getBlockByNumber=this.buildRequest({call:r.RPC_CALLS.eth_getBlockByNumber,formatters:[i.blockNumberToHex,i.returnFullTxObjectParam]}),this.getTransactionByHash=this.buildRequest({call:r.RPC_CALLS.eth_getTransactionByHash}),this.getTransactionReceipt=this.buildRequest({call:r.RPC_CALLS.eth_getTransactionReceipt})}buildRequest({call:e,formatters:t}){return async s=>{t&&Array.isArray(s)&&t.forEach((e,t)=>{e&&(s[t]=e(s[t]))});const r={call:e,params:s},i=await this.communicator.send(n.METHODS.rpcCall,r);if(!i.success)throw new Error(i.error);return i.data}}}},Wtvj:function(e,t,s){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),n=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0});const i=s("lsUA");t.default=class{constructor(e=null,t=!1){this.allowedOrigins=null,this.callbacks=new Map,this.debugMode=!1,this.isValidMessage=({origin:e,data:t,source:s})=>{const r=!t,n=s===window.parent,i=(void 0!==t.version&&parseInt(t.version.split(".")[0]))>=1;let o=!0;return Array.isArray(this.allowedOrigins)&&(o=void 0!==this.allowedOrigins.find(t=>t.test(e))),!r&&n&&i&&o},this.logIncomingMessage=e=>{console.info(`Safe Apps SDK v1: A message was received from origin ${e.origin}. `,e.data)},this.onParentMessage=e=>{this.isValidMessage(e)&&(this.debugMode&&this.logIncomingMessage(e),this.handleIncomingMessage(e.data))},this.handleIncomingMessage=e=>{const{id:t}=e,s=this.callbacks.get(t);s&&(s(e),this.callbacks.delete(t))},this.send=(e,t)=>{const s=i.MessageFormatter.makeRequest(e,t);if("undefined"==typeof window)throw new Error("Window doesn't exist");return window.parent.postMessage(s,"*"),new Promise(e=>{this.callbacks.set(s.id,t=>{e(t)})})},this.allowedOrigins=e,this.debugMode=t,window.addEventListener("message",this.onParentMessage)}},n(s("/J/K"),t)},Yy5R:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RPC_CALLS=void 0,t.RPC_CALLS={eth_call:"eth_call",eth_getLogs:"eth_getLogs",eth_getBalance:"eth_getBalance",eth_getCode:"eth_getCode",eth_getBlockByHash:"eth_getBlockByHash",eth_getBlockByNumber:"eth_getBlockByNumber",eth_getStorageAt:"eth_getStorageAt",eth_getTransactionByHash:"eth_getTransactionByHash",eth_getTransactionReceipt:"eth_getTransactionReceipt"}},"bWE+":function(e,t,s){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;const n=r(s("igqm"));t.getSDKVersion=()=>n.default.version.slice(0,5)},igqm:function(e){e.exports=JSON.parse('{"name":"@gnosis.pm/safe-apps-sdk","version":"3.0.0","description":"SDK developed to integrate third-party apps with Safe-Multisig app.","main":"dist/src/index.js","typings":"dist/src/index.d.ts","_files":["dist/**/*","README.md"],"keywords":["Gnosis","sdk","apps"],"scripts":{"test":"jest","format-dist":"sed -i \'\' \'s/\\"files\\":/\\"_files\\":/\' dist/package.json","build":"yarn rimraf dist && tsc && yarn format-dist","format":"prettier --write \\"src/**/*.ts\\"","lint":"tslint -p tsconfig.json","prepublishOnly":"yarn build"},"author":"Gnosis (https://gnosis.io)","license":"MIT","dependencies":{},"devDependencies":{"@types/jest":"^26.0.23","@types/node":"^15.3.0","husky":"^6.0.0","lint-staged":"^11.0.0","prettier":"^2.2.1","rimraf":"^3.0.2"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/!(*test).ts":["yarn lint","prettier --write"]},"repository":{"type":"git","url":"git+https://github.com/gnosis/safe-apps-sdk.git"},"bugs":{"url":"https://github.com/gnosis/safe-apps-sdk/issues"},"homepage":"https://github.com/gnosis/safe-apps-sdk#readme"}')},lsUA:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageFormatter=void 0;const r=s("E9UQ"),n=s("bWE+");class i{}t.MessageFormatter=i,i.makeRequest=(e,t)=>({id:r.generateRequestId(),method:e,params:t,env:{sdkVersion:n.getSDKVersion()}}),i.makeResponse=(e,t,s)=>({id:e,success:!0,version:s,data:t}),i.makeErrorResponse=(e,t,s)=>({id:e,success:!1,error:t,version:s})},xmst:function(e,t,s){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s("Wtvj"),i=r(s("Wtvj")),o=s("0ilK"),a=s("OuGp");t.default=class{constructor(e={}){if("undefined"==typeof window)throw new Error("Error initializing the sdk: window is undefined");const{whitelistedDomains:t=null,debug:s=!1}=e;this.communicator=new i.default(t,s),this.eth=new a.Eth(this.communicator),this.txs=new o.TXs(this.communicator),this.bootstrap()}async bootstrap(){const{txServiceUrl:e}=await this.getEnvInfo();this.txs.setTxServiceUrl(e)}async getEnvInfo(){const e=await this.communicator.send(n.METHODS.getEnvInfo,void 0);if(!e.success)throw new Error(e.error);return e.data}async getSafeInfo(){const e=await this.communicator.send(n.METHODS.getSafeInfo,void 0);if(!e.success)throw new Error(e.error);return e.data}}},zLkO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsChangeMethods=t.TransferMethods=t.Operation=void 0,s("/J/K"),t.Operation=function(e){return e[e.CALL=0]="CALL",e[e.DELEGATE_CALL=1]="DELEGATE_CALL",e[e.CREATE=2]="CREATE",e}(t.Operation||{}),t.TransferMethods=function(e){return e.TRANSFER="transfer",e.TRANSFER_FROM="transferFrom",e.SAFE_TRANSFER_FROM="safeTransferFrom",e}(t.TransferMethods||{}),t.SettingsChangeMethods=function(e){return e.SETUP="setup",e.SET_FALLBACK_HANDLER="setFallbackHandler",e.ADD_OWNER_WITH_THRESHOLD="addOwnerWithThreshold",e.REMOVE_OWNER="removeOwner",e.REMOVE_OWNER_WITH_THRESHOLD="removeOwnerWithThreshold",e.SWAP_OWNER="swapOwner",e.CHANGE_THRESHOLD="changeThreshold",e.CHANGE_MASTER_COPY="changeMasterCopy",e.ENABLE_MODULE="enableModule",e.DISABLE_MODULE="disableModule",e.EXEC_TRANSACTION_FROM_MODULE="execTransactionFromModule",e.APPROVE_HASH="approveHash",e.EXEC_TRANSACTION="execTransaction",e}(t.SettingsChangeMethods||{})}}]);