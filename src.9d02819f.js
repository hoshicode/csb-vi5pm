parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=function(){var e=document.getElementById("add-text").value;document.getElementById("add-text").value="";var l=document.createElement("div");l.className="list-row";var a=document.createElement("li"),i=document.createElement("p");i.innerText=e;var o=document.createElement("button");o.innerText="完了",o.addEventListener("click",function(){n(o.parentNode.parentNode);var e=o.parentNode.parentNode;e.lastElementChild.lastElementChild.remove(),e.lastElementChild.lastElementChild.remove();var l=document.createElement("button");l.innerText="戻る",l.addEventListener("click",function(){d(l.parentNode.parentNode);var e=l.parentNode.firstElementChild.innerText;t(e)}),e.lastElementChild.appendChild(l),console.log(e),document.getElementById("complete-list").appendChild(e)});var r=document.createElement("button");r.innerText="削除",r.addEventListener("click",function(){n(r.parentNode.parentNode)}),a.appendChild(l),l.appendChild(i),l.appendChild(o),l.appendChild(r),document.getElementById("incomplete-list").appendChild(a)},t=function(e){var t=document.createElement("div");t.className="list-row";var l=document.createElement("li"),a=document.createElement("p");a.innerText=e;var i=document.createElement("button");i.innerText="完了",i.addEventListener("click",function(){n(i.parentNode.parentNode);var e=i.parentNode.parentNode;e.lastElementChild.lastElementChild.remove(),e.lastElementChild.lastElementChild.remove();var t=document.createElement("button");t.innerText="戻る",t.addEventListener("click",function(){d(t.parentNode.parentNode);i.parentNode.firstElementChild.innerText}),e.lastElementChild.appendChild(t),console.log(e),document.getElementById("complete-list").appendChild(e)});var o=document.createElement("button");o.innerText="削除",o.addEventListener("click",function(){n(o.parentNode.parentNode)}),l.appendChild(t),t.appendChild(a),t.appendChild(i),t.appendChild(o),document.getElementById("incomplete-list").appendChild(l)},n=function(e){document.getElementById("incomplete-list").removeChild(e)},d=function(e){document.getElementById("complete-list").removeChild(e)};document.getElementById("add-button").addEventListener("click",function(){return e()});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-vi5pm/src.9d02819f.js.map