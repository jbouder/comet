const h=e=>e&&typeof e=="object"&&e.nodeType===1;var B=(e,t)=>{if(typeof e!="string")return[];(!t||!h(t))&&(t=window.document);const n=t.querySelectorAll(e);return Array.prototype.slice.call(n)};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function y(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function j(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(o){a[o]=o}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var v=j()?Object.assign:function(e,t){for(var n,r=y(e),a,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var c in n)b.call(n,c)&&(r[c]=n[c]);if(i){a=i(n);for(var s=0;s<a.length;s++)m.call(n,a[s])&&(r[a[s]]=n[a[s]])}}return r};(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(n){for(var r=this,a=(r.document||r.ownerDocument).querySelectorAll(n),o=0;a[o]&&a[o]!==r;)++o;return!!a[o]}),typeof e.closest!="function"&&(e.closest=function(n){for(var r=this;r&&r.nodeType===1;){if(r.matches(n))return r;r=r.parentNode}return null})})(window.Element.prototype);var d=function(t,n){return function(a){var o=a.target.closest(t);if(o)return n.call(o,a)}},O=function(t){return function(n){return t.some(function(r){return r.call(this,n)===!1},this)}};const w=d,A=O,u="*";var S=function(t){const n=Object.keys(t);if(n.length===1&&n[0]===u)return t[u];const r=n.reduce(function(a,o){return a.push(w(o,t[o])),a},[]);return A(r)};const g=v,E=d,T=S,$=/^(.+):delegate\((.+)\)$/,f=" ",k=function(e,t){var n=e.match($),r;n&&(e=n[1],r=n[2]);var a;typeof t=="object"&&(a={capture:l(t,"capture"),passive:l(t,"passive")});var o={selector:r,delegate:typeof t=="object"?T(t):r?E(r,t):t,options:a};return e.indexOf(f)>-1?e.split(f).map(function(c){return g({type:c},o)}):(o.type=e,[o])};var l=function(e,t){var n=e[t];return delete e[t],n},q=function(t,n){const r=Object.keys(t).reduce(function(a,o){var c=k(o,t[o]);return a.concat(c)},[]);return g({add:function(o){r.forEach(function(c){o.addEventListener(c.type,c.delegate,c.options)})},remove:function(o){r.forEach(function(c){o.removeEventListener(c.type,c.delegate,c.options)})}},n)};const L=v,N=q,p=(...e)=>function(n=document.body){e.forEach(r=>{typeof this[r]=="function"&&this[r].call(this,n)})};var C=(e,t)=>N(e,L({on:p("init","add"),off:p("teardown","remove")},t)),M={prefix:"usa"};export{q as a,C as b,M as c,d,S as e,v as o,B as s};
