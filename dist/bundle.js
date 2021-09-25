(()=>{"use strict";var n={222:(n,e,r)=>{r.d(e,{Z:()=>h});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),c=r(667),s=r.n(c),d=new URL(r(201),r.b),l=new URL(r(494),r.b),p=a()(o()),u=s()(d),f=s()(l);p.push([n.id,'*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.main-content {\r\n  min-height: 49vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.form-content {\r\n  grid-column-start: 2;\r\n  grid-column-end: 4;\r\n  grid-row-start: 2;\r\n  grid-row-end: 4;\r\n  box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -webkit-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -moz-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n}\r\n\r\n.d-height {\r\n  height: 50px;\r\n  padding-right: 9px;\r\n  padding-left: 9px;\r\n  border-bottom: 1px solid #d9d1d1;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 25px;\r\n  font-family: "Lato", sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.header-img {\r\n  background-image: url('+u+');\r\n  background-size: cover;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.data {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-field {\r\n  border: none;\r\n}\r\n\r\n.input-field:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: "Lato", sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 100;\r\n}\r\n\r\n.check-box {\r\n  margin-right: 4px;\r\n}\r\n\r\n.delete-icon {\r\n  background-image: url('+f+");\r\n  background-size: cover;\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(245, 242, 242);\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  font-size: 20px;\r\n  color: rgb(66, 60, 60);\r\n}\r\n",""]);const h=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},494:(n,e,r)=>{n.exports=r.p+"b18266b40d400f0d8724.png"},201:(n,e,r)=>{n.exports=r.p+"573f8bf282d92beace11.png"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),f=r(222),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".input-field"),m=document.querySelector(".data"),v=new class{constructor(n){this.input=n}displayTodos(){this.input=g,m.innerHTML="",localStorage.getItem("todo"),JSON.parse(localStorage.getItem("todo")||"[]").forEach((({description:n,id:e,completed:r})=>{const t=document.createElement("div");t.classList.add("d-height"),t.classList.add("todo-cont"),t.innerHTML=`<li><input type="checkbox" ${r&&"checked"} class="check-box"   id="check-${e}">${n}</li>\n          <div class="delete-icon"></div>`,m.appendChild(t)}))}}(g),b=document.querySelector(".input-field");b.addEventListener("keypress",(n=>{if("Enter"===n.key)if(""===b.value)alert("You cannot add empty fields");else{const n=JSON.parse(localStorage.getItem("todo")||"[]"),e=Math.random().toString(36).substr(0,5);n.push({description:b.value,completed:!1,id:e}),localStorage.setItem("todo",JSON.stringify(n)),v.displayTodos(),b.value=""}})),v.displayTodos()})()})();