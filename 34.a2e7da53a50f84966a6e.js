(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{TF7D:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var a=s("lEF9");Object.defineProperty(t,"SafeAppProvider",{enumerable:!0,get:function(){return a.SafeAppProvider}})},lEF9:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;const a=s("+qE3"),n=s("xYEA");t.SafeAppProvider=class{constructor(e,t){this.submittedTxs=new Map,this.events=new a.EventEmitter,this.safe=e,this.sdk=t}async connect(){this.events.emit("connect",{chainId:this.chainId})}async disconnect(){}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}get chainId(){return this.safe.chainId}async request(e){const{method:t,params:s=[]}=e;switch(t){case"eth_accounts":return[this.safe.safeAddress];case"net_version":case"eth_chainId":return`0x${this.chainId.toString(16)}`;case"eth_sendTransaction":const t=Object.assign({value:"0",data:"0x"},s[0]),r=await this.sdk.txs.send({txs:[t]});return this.submittedTxs.set(r.safeTxHash,{from:this.safe.safeAddress,hash:r.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:t.data,value:t.value,to:t.to,blockHash:null,blockNumber:null,transactionIndex:null}),r.safeTxHash;case"eth_blockNumber":return(await this.sdk.eth.getBlockByNumber(["latest"])).number;case"eth_getBalance":return this.sdk.eth.getBalance([n.getLowerCase(s[0]),s[1]]);case"eth_getCode":return this.sdk.eth.getCode([n.getLowerCase(s[0]),s[1]]);case"eth_getStorageAt":return this.sdk.eth.getStorageAt([n.getLowerCase(s[0]),s[1],s[2]]);case"eth_getBlockByNumber":return this.sdk.eth.getBlockByNumber([s[0],s[1]]);case"eth_getBlockByHash":return this.sdk.eth.getBlockByHash([s[0],s[1]]);case"eth_getTransactionByHash":let i=s[0];try{i=(await this.sdk.txs.getBySafeTxHash(i)).transactionHash||i}catch(a){}return this.submittedTxs.has(i)?this.submittedTxs.get(i):this.sdk.eth.getTransactionByHash([i]).then(e=>(e&&(e.hash=s[0]),e));case"eth_getTransactionReceipt":{let e=s[0];try{e=(await this.sdk.txs.getBySafeTxHash(e)).transactionHash||e}catch(a){}return this.sdk.eth.getTransactionReceipt([e]).then(e=>(e&&(e.transactionHash=s[0]),e))}case"eth_estimateGas":return 0;case"eth_call":return this.sdk.eth.call([s[0],s[1]]);case"eth_getLogs":return this.sdk.eth.getPastLogs([s[0]]);default:throw Error(`"${e.method}" not implemented`)}}send(e,t){e||t("Undefined request"),this.request(e).then(s=>t(null,{jsonrpc:"2.0",id:e.id,result:s})).catch(e=>t(e,null))}}},xYEA:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLowerCase=void 0,t.getLowerCase=function(e){return e?e.toLowerCase():e}}}]);