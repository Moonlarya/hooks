(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],[,,,function(e,t,a){},,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),i=a.n(o),r=(a(10),a(3),a(1)),s=function(e){var t,a=Object(n.useState)(e.time),o=Object(r.a)(a,2),i=o[0],s=o[1],l=Object(n.useState)(!1),m=Object(r.a)(l,2),u=m[0],f=m[1],b=Object(n.useState)(100),d=Object(r.a)(b,2),h=d[0],E=d[1];return Object(n.useEffect)((function(){i>0&&u&&(t=setTimeout((function(){s(i-1),E((e.time-i)/e.time*100)}),1e3)),i<=0&&u&&f(!1)}),[i,u]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"timer"},i),c.a.createElement("div",{className:"progress",style:{width:"".concat(100-h,"%")}}),c.a.createElement("div",{className:"timerbtn"},c.a.createElement("button",{className:"btn",onClick:function(){u?(f(!1),clearTimeout(t)):f(!0)}},u?"Pause":"Start"),c.a.createElement("button",{className:"btn",onClick:function(){s(e.time),f(!1),E(100),clearTimeout(t)}},"Reset")))};var l=function(){return c.a.createElement("div",{className:"flexwrap"},c.a.createElement(s,{time:22}),c.a.createElement(s,{time:60}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.686f340c.chunk.js.map