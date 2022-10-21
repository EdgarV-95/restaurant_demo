(()=>{"use strict";var n={426:(n,r,t)=>{t.d(r,{Z:()=>u});var e=t(537),o=t.n(e),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(460),t.b),A=a()(o()),l=s()(d);A.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url("+l+");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100vh;\r\n}\r\n\r\n/* LOGO */\r\n\r\n.logo {\r\n    position: absolute;\r\n    margin-top: -5vh;\r\n    margin-left: 10vw;\r\n}\r\n\r\n.icon {\r\n    width: 20vh;\r\n    height: fit-content;\r\n}\r\n\r\n/* NAVBAR */\r\n\r\n.distinction-line {\r\n    border-bottom: 2px solid gray;\r\n    padding-bottom: 4.5vh;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n}\r\n\r\n.active-menu {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 7vh;\r\n    padding-left: 35vw;\r\n    padding-right: 10vw;\r\n    font-size: 2.5vh;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-bar {\r\n    display: flex;\r\n    gap: 2.5vw;\r\n}\r\n\r\n.mobile-nr {\r\n    border: 8px solid black;\r\n    padding: 1vh;\r\n    margin-top: -2vh;\r\n}\r\n\r\n/* MAIN CONTENT */\r\n\r\n.active-content[data-tab-content] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 4.5vh;\r\n    padding-top: 12vh;\r\n}\r\n\r\n[data-tab-content] {\r\n    display: none;\r\n}\r\n\r\n.welcome-txt, .main-txt, .bla-bla {\r\n    background-color: rgb(218, 165, 32, .6);\r\n    border-radius: 4vw;\r\n    padding: 1vh;\r\n    font-weight: bold;\r\n    font-size: 3vh;\r\n}\r\n\r\n.about-txt {\r\n    padding-left: 25vw;\r\n    padding-right: 25vw;\r\n}\r\n\r\n.about-txt > p, .about-title {\r\n    background-color: rgb(218, 165, 32, .6);\r\n    padding: 2.5vh;\r\n    border-radius: 4vw;\r\n    font-size: 2vh;\r\n}\r\n\r\n.menu-btn {\r\n    background-color: goldenrod;\r\n    font-weight: bold;\r\n    font-size: 1.5vh;\r\n    margin-top: 2vh;\r\n    width: 10vw;\r\n    height: 7.5vh;\r\n    border-radius: 4vw;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* MENU PAGE */\r\n\r\n.menu-content {\r\n    background-color: rgb(128, 128, 128, .8);\r\n    padding: 2.5vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n    gap: 2.5vw;\r\n}\r\n\r\n.menu-item {\r\n    background-color: rgb(121, 112, 112);\r\n    display: flex;\r\n    gap: 2vh;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.food {\r\n    width: 25vw;\r\n    height: 25vh;\r\n}\r\n\r\n.food-div {\r\n    padding-top: 3vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1vw;\r\n}\r\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yDAA0C;IAC1C,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA,WAAW;;AAEX;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;AACpB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA,cAAc;;AAEd;IACI,wCAAwC;IACxC,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url(./assets/mainbg.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100vh;\r\n}\r\n\r\n/* LOGO */\r\n\r\n.logo {\r\n    position: absolute;\r\n    margin-top: -5vh;\r\n    margin-left: 10vw;\r\n}\r\n\r\n.icon {\r\n    width: 20vh;\r\n    height: fit-content;\r\n}\r\n\r\n/* NAVBAR */\r\n\r\n.distinction-line {\r\n    border-bottom: 2px solid gray;\r\n    padding-bottom: 4.5vh;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n}\r\n\r\n.active-menu {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 7vh;\r\n    padding-left: 35vw;\r\n    padding-right: 10vw;\r\n    font-size: 2.5vh;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-bar {\r\n    display: flex;\r\n    gap: 2.5vw;\r\n}\r\n\r\n.mobile-nr {\r\n    border: 8px solid black;\r\n    padding: 1vh;\r\n    margin-top: -2vh;\r\n}\r\n\r\n/* MAIN CONTENT */\r\n\r\n.active-content[data-tab-content] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 4.5vh;\r\n    padding-top: 12vh;\r\n}\r\n\r\n[data-tab-content] {\r\n    display: none;\r\n}\r\n\r\n.welcome-txt, .main-txt, .bla-bla {\r\n    background-color: rgb(218, 165, 32, .6);\r\n    border-radius: 4vw;\r\n    padding: 1vh;\r\n    font-weight: bold;\r\n    font-size: 3vh;\r\n}\r\n\r\n.about-txt {\r\n    padding-left: 25vw;\r\n    padding-right: 25vw;\r\n}\r\n\r\n.about-txt > p, .about-title {\r\n    background-color: rgb(218, 165, 32, .6);\r\n    padding: 2.5vh;\r\n    border-radius: 4vw;\r\n    font-size: 2vh;\r\n}\r\n\r\n.menu-btn {\r\n    background-color: goldenrod;\r\n    font-weight: bold;\r\n    font-size: 1.5vh;\r\n    margin-top: 2vh;\r\n    width: 10vw;\r\n    height: 7.5vh;\r\n    border-radius: 4vw;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* MENU PAGE */\r\n\r\n.menu-content {\r\n    background-color: rgb(128, 128, 128, .8);\r\n    padding: 2.5vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n    gap: 2.5vw;\r\n}\r\n\r\n.menu-item {\r\n    background-color: rgb(121, 112, 112);\r\n    display: flex;\r\n    gap: 2vh;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.food {\r\n    width: 25vw;\r\n    height: 25vh;\r\n}\r\n\r\n.food-div {\r\n    padding-top: 3vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1vw;\r\n}\r\n"],sourceRoot:""}]);const u=A},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var A=[].concat(n[d]);e&&a[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),r.push(A))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=e.base?s[0]+e.base:s[0],A=i[d]||0,l="".concat(d," ").concat(A);i[d]=A+1;var u=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var m=o(p,e);e.byIndex=c,r.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var s=e(n,o),d=0;d<i.length;d++){var A=t(i[d]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}i=s}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},460:(n,r,t)=>{n.exports=t.p+"1d9ea7fd43108d532e4c.jpg"}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),r=t.n(n),e=t(795),o=t.n(e),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),A=t.n(d),l=t(589),u=t.n(l),p=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=A(),r()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const v=t.p+"0535cbf19d3f8257b931.png",g=((()=>{const n=document.createElement("header");n.innerHTML=`<div class="logo">\n        <img class="icon" src="${v}">\n    </div>\n    <div class="navbar">\n        <div class="menu-bar">\n            <div data-tab-target="#home" class="tab active-menu">HOME</div>\n            <div data-tab-target="#aboutUs" class="tab">ABOUT US</div>\n            <div data-tab-target="#menu" class="tab">MENU</div>\n            <div data-tab-target="#contact" class="tab">CONTACT</div>\n        </div>\n        <div class="mobile-nr">Reservation: +44 1234567890</div>\n    </div>\n    <div class="distinction-line"></div>`,document.body.appendChild(n)})(),(()=>{const n=document.createElement("div");n.setAttribute("id","home"),n.setAttribute("data-tab-content",""),n.classList.add("active-content"),n.innerHTML='<p class="welcome-txt">Welcome to Ailleen\'s kitchen</p>\n    <h1 class="main-txt">Great Filipino Food</h1>\n    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>\n    <button data-tab-target=\'#menu\' class="menu-btn">See our Menu</button>',document.body.appendChild(n)})(),(()=>{const n=document.createElement("div");n.setAttribute("id","aboutUs"),n.setAttribute("data-tab-content",""),n.innerHTML='<h1 class="about-title">Lorem ipsum dolor sit amet, consectetur</h1>\n    <div class="about-txt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus,\n    pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit.\n    Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam.\n    Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p></div>\n    ',document.body.appendChild(n)})(),t.p+"2563514ea2c571309621.jpg"),b=t.p+"3465420826def7e78e4b.jpg",f=t.p+"44144356fc584e1f6588.jpg",h=t.p+"a8ac3b0e8906755c2825.jpg",C=((()=>{const n=document.createElement("div");n.setAttribute("id","menu"),n.setAttribute("data-tab-content",""),n.innerHTML=`<div class="menu-content">\n        <div class="menu-item">\n            <img class="food" src="${g}">\n            <div class="food-div">\n                <h2>Food Title</h2>\n                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <img class="food" src="${b}">\n            <div class="food-div">\n                <h2>Food Title</h2>\n                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <img class="food" src="${f}">\n            <div class="food-div">\n                <h2>Food Title</h2>\n                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <img class="food" src="${h}">\n            <div class="food-div">\n                <h2>Food Title</h2>\n                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>\n            </div>\n        </div>\n    </div>`,document.body.appendChild(n)})(),(()=>{const n=document.createElement("div");n.setAttribute("id","contact"),n.setAttribute("data-tab-content",""),n.innerHTML='<button class="menu-btn test-btn">Contact</button>',document.body.appendChild(n)})(),document.querySelectorAll("[data-tab-target]")),B=document.querySelectorAll("[data-tab-content]");C.forEach((n=>{n.style.cursor="pointer",n.addEventListener("click",(()=>{const r=document.querySelector(n.dataset.tabTarget);B.forEach((n=>{n.classList.remove("active-content")})),C.forEach((n=>{n.classList.remove("active-menu")})),n.classList.add("active-menu"),r.classList.add("active-content")}))})),document.querySelector(".menu-btn").addEventListener("click",(()=>{document.querySelector('[data-tab-target="#menu"]').classList.add("active-menu")})),document.querySelector(".test-btn").addEventListener("click",(()=>{console.log("fasz")}))})()})();
//# sourceMappingURL=main.js.map