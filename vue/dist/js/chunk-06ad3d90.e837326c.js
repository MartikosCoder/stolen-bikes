(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ad3d90"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=E(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",l="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,i)&&(g=b);var x=m.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){h.value=t,a(h)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=h;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),c=r("7b0b"),u=r("50c4"),s=r("8418"),h=r("65f0"),f=r("1dde"),l=r("b622"),p=r("2d00"),d=l("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=f("concat"),w=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)},b=!m||!g;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,o,i,a=c(this),f=h(a,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],w(i)){if(o=u(i.length),l+o>v)throw TypeError(y);for(r=0;r<o;r++,l++)r in i&&s(f,l,i[r])}else{if(l>=v)throw TypeError(y);s(f,l++,i)}return f.length=l,f}})},"9eee":function(t,e,r){"use strict";var n=r("e1e7"),o=r.n(n);o.a},bdec:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[t.status.length>0?r("div",{staticClass:"status-block"},[t._v(t._s(t.status))]):t._e(),r("div",{staticClass:"selector"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.bike_number,expression:"bike_number"}],attrs:{type:"text",placeholder:"Enter your bike number:"},domProps:{value:t.bike_number},on:{input:function(e){e.target.composing||(t.bike_number=e.target.value)}}}),r("div",{staticClass:"buttons"},[r("button",{on:{click:t.sendNewReport}},[t._v("Create new report")]),r("button",{on:{click:t.checkReport}},[t._v("Check your report status")])])])])},o=[],i=(r("99af"),r("d3b7"),r("96cf"),r("1da1")),a={name:"ClientBody",data:function(){return{bike_number:"",status:""}},methods:{sendNewReport:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/bikes",{method:"POST",body:JSON.stringify({number:t.bike_number}),headers:{"Content-Type":"application/json"}});case 2:if(r=e.sent,!r.ok){e.next=14;break}return e.t0=t,e.t1=t,e.t2="Your report ID: ",e.next=9,r.json();case 9:e.t3=e.sent.id,e.t4=e.t2.concat.call(e.t2,e.t3),e.t0.$set.call(e.t0,e.t1,"status",e.t4),e.next=15;break;case 14:t.$set(t,"status","Error in your report. Try later");case 15:case"end":return e.stop()}}),e)})))()},checkReport:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/".concat(t.bike_number,"/info"));case 2:if(r=e.sent,!r.ok){e.next=17;break}return e.next=6,r.json();case 6:n=e.sent.status,e.t0=n,e.next="new"===e.t0?10:"wip"===e.t0?12:"found"===e.t0?14:15;break;case 10:return t.$set(t,"status","Your report status: New"),e.abrupt("break",15);case 12:return t.$set(t,"status","Your report status: Work In Progress"),e.abrupt("break",15);case 14:t.$set(t,"status","Your report status: Found");case 15:e.next=18;break;case 17:t.$set(t,"status","Error in your request. Try later");case 18:case"end":return e.stop()}}),e)})))()}}},c=a,u=(r("9eee"),r("2877")),s=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=s.exports},e1e7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-06ad3d90.e837326c.js.map