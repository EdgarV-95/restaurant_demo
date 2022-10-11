(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>p});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),d=new URL(e(460),e.b),l=i()(o()),u=c()(d);l.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url("+u+");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100vh;\r\n}\r\n\r\n/* LOGO */\r\n\r\n.logo {\r\n    position: absolute;\r\n    margin-top: -5vh;\r\n    margin-left: 10vw;\r\n}\r\n\r\n.icon {\r\n    width: 20vh;\r\n    height: fit-content;\r\n}\r\n\r\n/* NAVBAR */\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 7vh;\r\n    padding-left: 25vw;\r\n    padding-right: 10vw;\r\n    font-size: 2.5vh;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-bar {\r\n    display: flex;\r\n    gap: 2.5vw;\r\n}\r\n\r\n.menu {\r\n    cursor: pointer;\r\n}\r\n\r\n.menu:hover {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.mobile-nr {\r\n    border: 8px solid black;\r\n    padding: 1vh;\r\n    margin-top: -2vh;\r\n}\r\n\r\n/* MAIN CONTENT */\r\n\r\n.main-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 4.5vh;\r\n    padding-top: 12vh;\r\n    font-size: 3vh;\r\n}\r\n\r\n.welcome-txt, .main-txt, .bla-bla {\r\n    background-color: goldenrod;\r\n    border-radius: 4vw;\r\n    padding: 1vh;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-btn {\r\n    background-color: goldenrod;\r\n    font-weight: bold;\r\n    font-size: 1.5vh;\r\n    margin-top: 2vh;\r\n    width: 10vw;\r\n    height: 7.5vh;\r\n    border-radius: 4vw;\r\n    border: none;\r\n    cursor: pointer;\r\n}",""]);const p=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(v);else{var f=o(v,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},460:(n,r,e)=>{n.exports=e.p+"1d9ea7fd43108d532e4c.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),l=e.n(d),u=e(589),p=e.n(u),v=e(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const m=e.p+"0535cbf19d3f8257b931.png",h=document.createElement("div");h.setAttribute("id","content"),h.innerHTML=`<div class="logo">\n        <img class="icon" src="${m}">\n    </div>\n    <div class="navbar">\n        <div class="menu-bar">\n            <div class="menu">HOME</div>\n            <div class="menu">ABOUT US</div>\n            <div class="menu">MENU</div>\n            <div class="menu">DELIVERY</div>\n            <div class="menu">BLOG</div>\n            <div class="menu">CONTACT</div>\n        </div>\n        <div class="mobile-nr">Reservation: +44 1234567890</div>\n    </div>\n    <div class="main-content">\n        <p class="welcome-txt">Welcome to Ailleen's kitchen</p>\n        <h1 class="main-txt">Great Filipino Food</h1>\n        <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>\n        <button class="menu-btn">Order Now</button>\n  </div>`,document.body.appendChild(h)})()})();