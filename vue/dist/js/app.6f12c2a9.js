(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],d=0,s=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-18eeb74c":"1d2ce15b","chunk-218c1347":"0427fdde","chunk-80221e68":"a44ecd7a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-18eeb74c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-18eeb74c":"6650d124","chunk-218c1347":"31d6cfe0","chunk-80221e68":"31d6cfe0"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u=(n("034f"),n("2877")),a={},i=Object(u["a"])(a,o,c,!1,null,null,null),l=i.exports,d=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TabletHeader"),e.mode_selected?n("OfficerBody"):n("ClientBody")],1)},f=[],p=(n("d3b7"),n("5530")),m=n("2f62"),h={name:"Home",components:{TabletHeader:function(){return n.e("chunk-18eeb74c").then(n.bind(null,"0830"))},ClientBody:function(){return n.e("chunk-218c1347").then(n.bind(null,"bdec"))},OfficerBody:function(){return n.e("chunk-80221e68").then(n.bind(null,"caeb"))}},computed:Object(p["a"])({},Object(m["c"])(["mode_selected"]))},v=h,b=(n("cccb"),Object(u["a"])(v,s,f,!1,null,null,null)),g=b.exports;r["a"].use(d["a"]);var y=[{path:"/",name:"Home",component:g}],_=new d["a"]({routes:y}),O=_;r["a"].use(m["a"]);var w=new m["a"].Store({state:{mode_selected:void 0!==localStorage.getItem("mode")&&"true"===localStorage.getItem("mode")},getters:{mode_selected:function(e){return e.mode_selected}},mutations:{CHANGE_MODE:function(e){e.mode_selected=!e.mode_selected,localStorage.setItem("mode",e.mode_selected)}},actions:{change_mode:function(e){var t=e.commit;t("CHANGE_MODE")}}});r["a"].config.productionTip=!1,new r["a"]({router:O,store:w,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a}});
//# sourceMappingURL=app.6f12c2a9.js.map