(()=>{"use strict";var e={974:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,":root {\n    --blue: #102041;\n    --white: #ffffff;\n    --gold: #d8bf5a;\n}\n\nhtml {\n    background-color: var(--blue);\n}\n\n#navContainer {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-start: 2; \n        color: var(--gold)\n}\n\nh1 {\n    margin-left: 5%;\n    font-size: 4em;\n}\n\nul {\n    display: grid;\n    list-style-type: none;\n    grid-template-columns: repeat(3, 1fr);\n    font-size: 2em;\n}\n\nbutton {\n    font-size: 1.4em;\n    margin-top: 6%;\n    background: none;\n    border: none;\n    color: var(--gold);\n}\n\n#homeContent {\n    width: 100%;\n    height: 100%;\n    color: white;\n}\n\nh2 {\n    color: var(--gold);\n    font-size: 6em;\n    text-align: center;\n    width: 100%;\n}\n\n#tagline {\n    font-size: 2.5em;\n    width: 100%;\n    text-align: center;\n    font-style: italic;\n    color: var(--gold);\n    \n}\n\n#aboutTxt {\n    color: var(--gold);\n    width: 50%;\n    text-align: center;\n    font-size: 2.5em;\n    margin: 0 auto;\n    line-height: 1.2em;\n}",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=a(s),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:s,updater:h(m,n),references:1}),o.push(s)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function h(e,n){var t,o,r;if(n.singleton){var i=p++;t=f||(f=d(n)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(974);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","navContainer");const t=document.createElement("h1");t.textContent="Stormwind Inn";const o=document.createElement("nav"),r=document.createElement("ul"),i=document.createElement("button");i.textContent="Home",i.setAttribute("id","homePg");const a=document.createElement("button");a.textContent="Menu",a.setAttribute("id","menuPg");const c=document.createElement("button");c.textContent="About",c.setAttribute("id","aboutPg"),n.appendChild(t),n.appendChild(o),o.appendChild(r),r.appendChild(i),r.appendChild(a),r.appendChild(c);const d=document.createElement("div");d.setAttribute("id","pgContent");const l=document.createElement("h2");l.textContent="For The Alliance!",d.appendChild(l);const s=document.createElement("p");s.textContent="The best Food in all of  Azeroth",s.setAttribute("id","tagline"),d.appendChild(s),e.appendChild(n),e.appendChild(d)}();const r=function(){const e=document.getElementById("pgContent"),n=document.getElementById("tagline");e.removeChild(n);const t=document.createElement("h3");t.setAttribute("id","tagline"),t.textContent="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis nobis nulla facere! Modi dignissimos corporis ipsa nam ullam reprehenderit, est error, consequuntur dolor hic commodi? Exercitationem neque dignissimos maxime.    ",e.appendChild(t)},i=function(){document.getElementById("pgContent"),document.getElementById("tagline").textContent="The best food in all of Azeroth"};console.log("working"),function(){const e=document.getElementById("homePg"),n=(document.getElementById("menuPg"),document.getElementById("aboutPg"));e.addEventListener("click",i),n.addEventListener("click",r)}()})()})();