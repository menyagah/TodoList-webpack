(()=>{"use strict";var e={222:(e,n,r)=>{r.d(n,{Z:()=>h});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),c=r(667),s=r.n(c),d=new URL(r(201),r.b),l=new URL(r(494),r.b),p=a()(o()),u=s()(d),f=s()(l);p.push([e.id,'*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.main-content {\r\n  min-height: 49vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.form-content {\r\n  grid-column-start: 2;\r\n  grid-column-end: 4;\r\n  grid-row-start: 2;\r\n  grid-row-end: 4;\r\n  box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -webkit-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n  -moz-box-shadow: -3px 2px 14px 1px rgba(0, 0, 0, 0.63);\r\n}\r\n\r\n.d-height {\r\n  height: 50px;\r\n  padding-right: 9px;\r\n  padding-left: 9px;\r\n  border-bottom: 1px solid #d9d1d1;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 25px;\r\n  font-family: "Lato", sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.header-img {\r\n  background-image: url('+u+');\r\n  background-size: cover;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.data {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-field {\r\n  border: none;\r\n}\r\n\r\n.input-field:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: "Lato", sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 100;\r\n}\r\n\r\n.check-box {\r\n  margin-right: 4px;\r\n}\r\n\r\n.delete-icon {\r\n  background-image: url('+f+");\r\n  background-size: cover;\r\n  height: 13px;\r\n  width: 13px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(245, 242, 242);\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  font-size: 20px;\r\n  color: rgb(66, 60, 60);\r\n}\r\n",""]);const h=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var s=t(e,o),d=0;d<i.length;d++){var l=r(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},494:(e,n,r)=>{e.exports=r.p+"b18266b40d400f0d8724.png"},201:(e,n,r)=>{e.exports=r.p+"573f8bf282d92beace11.png"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),f=r(222),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".input-field"),m=document.querySelector(".data"),v=new class{constructor(e){this.input=e}displayTodos(){this.input=g,m.innerHTML="",localStorage.getItem("todo"),JSON.parse(localStorage.getItem("todo")||"[]").forEach((({description:e,id:n,completed:r})=>{const t=document.createElement("div");t.classList.add("d-height"),t.classList.add("todo-cont"),t.innerHTML=`<li><input type="checkbox" ${r&&"checked"} class="check-box"   id="check-${n}">${e}</li>\n          <div class="delete-icon"></div>`,m.appendChild(t)}))}checkItem(e,n,r){return this.input=g,r[e].completed=n.target.checked,r[e]}}(g),b=document.querySelector(".input-field");b.addEventListener("keypress",(e=>{if("Enter"===e.key)if(""===b.value)alert("You cannot add empty fields");else{const e=JSON.parse(localStorage.getItem("todo")||"[]"),n=Math.random().toString(36).substr(0,5);e.push({description:b.value,completed:!1,id:n}),localStorage.setItem("todo",JSON.stringify(e)),v.displayTodos(),b.value=""}})),(()=>{const e=JSON.parse(localStorage.getItem("todo")||"[]");for(let n=0;n<e.length;n+=1)document.querySelector(`#check-${e[n].id}`).addEventListener("change",(r=>{v.checkItem(n,r,e),localStorage.setItem("todo",JSON.stringify(e))}))})(),v.displayTodos()})()})();