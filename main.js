(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]),i.push([n.id,"@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n  margin: 0;\n  padding: 20px;\n}\n\n.container {\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 2rem;\n  border-radius: 15px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  max-width: 400px;\n  width: 100%;\n  animation: fadeIn 0.5s ease-in;\n}\n\nh1 {\n  text-align: center;\n  color: #2c3e50;\n  margin-bottom: 1.5rem;\n}\n\n#weather-form {\n  display: flex;\n  margin-bottom: 1.5rem;\n}\n\n#location-input {\n  flex-grow: 1;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 25px 0 0 25px;\n  font-size: 1rem;\n}\n\nbutton {\n  padding: 0.75rem 1.5rem;\n  background-color: #3498db;\n  color: white;\n  border: none;\n  border-radius: 0 25px 25px 0;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\nbutton:hover {\n  background-color: #2980b9;\n}\n\n#weather-display {\n  text-align: center;\n}\n\n.weather-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin-top: 1.5rem;\n}\n\n.weather-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.loading {\n  display: none;\n  text-align: center;\n}\n\n.loading::after {\n  content: '';\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\nfooter {\n  margin-top: 2rem;\n  text-align: center;\n  color: #2c3e50;\n  font-size: 0.9rem;\n}\n\nfooter i {\n  color: #e74c3c;\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),d=t(56),l=t.n(d),u=t(540),f=t.n(u),p=t(113),m=t.n(p),h=t(208),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals,document.getElementById("weather-form").addEventListener("submit",(async n=>{n.preventDefault();const e=document.getElementById("location-input").value,t=document.getElementById("loading"),r=document.getElementById("weather-display");t.style.display="block",r.innerHTML="";try{const n=await async function(n){try{console.log("Fetching weather for:",n);const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=7d4fe55e851847b389d154616241107&q=${n}`);console.log("Response status:",e.status);const t=await e.json();if(console.log("API Response:",t),e.ok)return function(n){return{location:n.location.name,temperature:n.current.temp_c,description:n.current.condition.text,humidity:n.current.humidity,windSpeed:n.current.wind_kph,icon:n.current.condition.icon}}(t);throw new Error(t.error.message||"Location not found")}catch(n){throw console.error("Error fetching weather data:",n),n}}(e);!function(n){const e=document.getElementById("weather-display"),t={"01d":"fas fa-sun","01n":"fas fa-moon","02d":"fas fa-cloud-sun","02n":"fas fa-cloud-moon","03d":"fas fa-cloud","03n":"fas fa-cloud","04d":"fas fa-cloud","04n":"fas fa-cloud","09d":"fas fa-cloud-showers-heavy","09n":"fas fa-cloud-showers-heavy","10d":"fas fa-cloud-rain","10n":"fas fa-cloud-rain","11d":"fas fa-bolt","11n":"fas fa-bolt","13d":"fas fa-snowflake","13n":"fas fa-snowflake","50d":"fas fa-smog","50n":"fas fa-smog"}[n.icon]||"fas fa-question";e.innerHTML=`\n        <div class="weather-card">\n            <i class="${t} weather-icon"></i>\n            <h2>${n.location}</h2>\n            <p class="temperature">${Math.round(n.temperature)}°C</p>\n            <p class="description">${n.description}</p>\n            <p>Humidity: ${n.humidity}%</p>\n            <p>Wind Speed: ${n.windSpeed} m/s</p>\n        </div>\n    `}(n)}catch(n){r.innerHTML=`<p class="error">Error: ${n.message}</p>`}finally{t.style.display="none"}}))})();