(this["webpackJsonpios-poc"]=this["webpackJsonpios-poc"]||[]).push([[0],{101:function(e,n,o){},102:function(e,n,o){},183:function(e,n,o){"use strict";o.r(n);var t=o(13),i=o.n(t),r=o(94),c=o.n(r),a=(o(101),o(95)),s=o.n(a),l=(o(102),o(55));var d=function(){var e=new l.BrowserQRCodeReader;return e.listVideoInputDevices().then((function(n){e.decodeOnceFromVideoDevice(n[0].deviceId,"video").then((function(e){console.log(e.text)})).catch((function(e){return console.log(e)}))})),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),i.a.createElement("video",{id:"video",height:"300",width:"400",style:{border:"5px solid red"}})))},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ios-poc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/ios-poc","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()},95:function(e,n,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},96:function(e,n,o){e.exports=o(183)}},[[96,1,2]]]);
//# sourceMappingURL=main.938a9646.chunk.js.map