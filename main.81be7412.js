parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".container"),r=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),c=document.querySelector(".append-column"),t=document.querySelector(".remove-column"),n=4,d=4;e.addEventListener("click",function(e){e.preventDefault();var a=document.querySelector("tbody"),u=document.querySelector("tr"),l=document.querySelectorAll("tr");switch(e.target.classList[0]){case"append-row":n++;var m=u.cloneNode(!0);a.append(m);break;case"remove-row":n--,a.removeChild(u);break;case"append-column":d++,l.forEach(function(e){var r=document.createElement("td");e.append(r)});break;case"remove-column":d--,l.forEach(function(e){var r=e.querySelector("td");e.removeChild(r)})}r.disabled=10===n,o.disabled=2===n,c.disabled=10===d,t.disabled=2===d});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.81be7412.js.map