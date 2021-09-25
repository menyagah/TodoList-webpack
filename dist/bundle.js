(()=>{"use strict";var n={222:(n,r,e)=>{e.d(r,{Z:()=>h});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),d=new URL(e(201),e.b),p=new URL(e(494),e.b),l=a()(o()),u=s()(d),f=s()(p);l.push([n.id,'*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.main-content {\r\n  min-height: 49vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.form-content {\r\n  grid-column-start: 2;\r\n  grid-column-end: 4;\r\n  grid-row-start: 2;\r\n  grid-row-end: 4;\r\n  box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -webkit-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -moz-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n}\r\n\r\n.d-height {\r\n  height: 50px;\r\n  padding-right: 9px;\r\n  padding-left: 9px;\r\n  border-bottom: 1px solid #d9d1d1;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 25px;\r\n  font-family: "Lato", sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.header-img {\r\n  background-image: url('+u+');\r\n  background-size: cover;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.data {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-field {\r\n  border: none;\r\n}\r\n\r\n.input-field:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: "Lato", sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 100;\r\n}\r\n\r\n.check-box {\r\n  margin-right: 4px;\r\n}\r\n\r\n.delete-icon {\r\n  background-image: url('+f+");\r\n  background-size: cover;\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(245, 242, 242);\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  font-size: 20px;\r\n  color: rgb(139, 139, 139);\r\n}\r\n",""]);const h=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var p=e(i[d]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},494:(n,r,e)=>{n.exports=e.p+"b18266b40d400f0d8724.png"},201:(n,r,e)=>{n.exports=e.p+"573f8bf282d92beace11.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),d=e(216),p=e.n(d),l=e(589),u=e.n(l),f=e(222),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".data");[{description:"wash the dishes",completed:!1,id:1},{description:"complete the dishes",completed:!1,id:2},{description:"complete To Do list project",completed:!1,id:3}].forEach((({description:n})=>{const r=document.createElement("div");r.classList.add("d-height"),r.classList.add("todo-cont"),r.innerHTML=`<li><input type="checkbox" class="check-box"   id="check">${n}</li>\n    <div class="delete-icon"></div>`,g.appendChild(r)}))})()})();