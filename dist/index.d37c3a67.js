function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=a.parcelRequirebbde;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},a.parcelRequirebbde=s),s.register("4gCme",(function(t,a){var r,n;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var s={};r=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)s[t[a]]=e[t[a]]},n=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("4gCme").register(JSON.parse('{"hINUa":"index.d37c3a67.js","5RkgK":"humidity.43cb81cd.svg","7Y1dA":"wind.185202d4.svg","7nkAt":"barometer.0906d87f.svg","kdclW":"spinner.99c1bfb0.svg","ancs7":"01d.be5cefad.svg","42UIW":"01n.5f88c907.svg","adhEr":"02d.ad41bb3a.svg","2OeNt":"02n.904f6ebc.svg","5VgCk":"03d.c3931e9a.svg","46kbT":"03n.c3931e9a.svg","86xGw":"04d.c3931e9a.svg","lW0P6":"04n.c3931e9a.svg","6D2ty":"09d.1ac9419b.svg","h8f6R":"09n.1ac9419b.svg","iIUHg":"10d.a09ad844.svg","9DpIj":"10n.2c610c06.svg","eHTVp":"11d.adbf0ab4.svg","3xhoY":"11n.adbf0ab4.svg","30gsC":"13d.3696cede.svg","l6ok0":"13n.3696cede.svg","i78K2":"50d.3be25a0f.svg","g98eX":"50n.3be25a0f.svg"}'));const i="63a7e2a14a9ec168471f7c2d8cd6e676",d="https://api.openweathermap.org/data/2.5/weather?units=metric&",o=async function(e){try{const a=await Promise.race([fetch(e),(t=10,new Promise((function(e,a){setTimeout((function(){a(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),r=await a.json();if(!a.ok)throw new Error;return r}catch(e){throw e}var t},c={geolocationWeather:{},searchWeather:{query:"",result:[]}};const l=function(e){const t=e;return{cityName:t.name,description:t.weather[0].description,temp:t.main.temp,humidity:t.main.humidity,pressure:t.main.pressure,wind:t.wind.speed,icon:t.weather[0].icon}},h=async function(){try{const e=await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition(e,t)})),{latitude:t,longitude:a}=e.coords,r=await o(`${d}lat=${t}&lon=${a}&appid=${i}`);c.geolocationWeather=l(r)}catch(e){throw console.log(e),e}};var m;m=new URL(s("4gCme").resolve("5RkgK"),import.meta.url).toString();var g;g=new URL(s("4gCme").resolve("7Y1dA"),import.meta.url).toString();var u;u=new URL(s("4gCme").resolve("7nkAt"),import.meta.url).toString();var v;v=new URL(s("4gCme").resolve("kdclW"),import.meta.url).toString();var p;p=new URL(s("4gCme").resolve("ancs7"),import.meta.url).toString();var _;_=new URL(s("4gCme").resolve("42UIW"),import.meta.url).toString();var f;f=new URL(s("4gCme").resolve("adhEr"),import.meta.url).toString();var L;L=new URL(s("4gCme").resolve("2OeNt"),import.meta.url).toString();var w;w=new URL(s("4gCme").resolve("5VgCk"),import.meta.url).toString();var E;E=new URL(s("4gCme").resolve("46kbT"),import.meta.url).toString();var H;H=new URL(s("4gCme").resolve("86xGw"),import.meta.url).toString();var R;R=new URL(s("4gCme").resolve("lW0P6"),import.meta.url).toString();var C;C=new URL(s("4gCme").resolve("6D2ty"),import.meta.url).toString();var S;S=new URL(s("4gCme").resolve("h8f6R"),import.meta.url).toString();var y;y=new URL(s("4gCme").resolve("iIUHg"),import.meta.url).toString();var b;b=new URL(s("4gCme").resolve("9DpIj"),import.meta.url).toString();var U;U=new URL(s("4gCme").resolve("eHTVp"),import.meta.url).toString();var A;A=new URL(s("4gCme").resolve("3xhoY"),import.meta.url).toString();var F;F=new URL(s("4gCme").resolve("30gsC"),import.meta.url).toString();var $;$=new URL(s("4gCme").resolve("l6ok0"),import.meta.url).toString();var k;k=new URL(s("4gCme").resolve("i78K2"),import.meta.url).toString();var W;W=new URL(s("4gCme").resolve("g98eX"),import.meta.url).toString();var I=new class{#e=document.querySelector(".weather");#t=document.querySelector(".card");#a;render(e){this.#a=e;const t=this.#r();this._clearUI(),this.#e.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){window.addEventListener("load",e)}_clearUI(){this.#e.innerHTML=""}_renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${t(v)}#icon-loader"></use>\n        </svg>\n      </div>\n      `;this._clearUI(),this.#e.insertAdjacentHTML("afterbegin",e)}_renderError(e){const t=`\n      <div class="error">\n        <p>${e}</p>\n      </div>\n    `;this._clearUI(),this._clearClassList(),this.#e.insertAdjacentHTML("afterbegin",t)}_clearClassList(){this.#t.classList="card"}#n(){return"01d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("sunny"),t(p)):"01n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(_)):"02d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("partly-cloudy"),t(f)):"02n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(L)):"03d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("cloudy"),t(w)):"03n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(E)):"04d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("cloudy"),t(H)):"04n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(R)):"09d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("rain"),t(C)):"09n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(S)):"10d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("rain"),t(y)):"10n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(b)):"11d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("rain"),t(U)):"11n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(A)):"13d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("rain"),t(F)):"13n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t($)):"50d"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("partly-cloudy"),t(k)):"50n"===this.#a.icon?(this._clearClassList(),this.#t.classList.add("night"),t(W)):void 0}#r(){return`\n       <div class="weather-icon">\n        <img src="${this.#n()}" alt="weather icon"/>\n       </div>\n       <div class="city"><span>${this.#a.cityName}</span></div>\n       <div class="temp"><span>${Math.floor(this.#a.temp)}&#8451;</span></div>\n       <div class="description"><span>${this.#a.description.charAt(0).toUpperCase()+this.#a.description.slice(1)}</span></div>\n       <div class="details">\n         <div class="col">\n           <div class="col__icon"><img src="${t(m)}" alt="humidity icon"/></div>\n           <div>\n             <p class="humidity">${this.#a.humidity}&percnt;</p>\n             <p>Humidity</p>\n           </div>\n         </div>\n         <div class="col">\n          <div class="col__icon"><img src="${t(g)}" alt="wind icon"/></div>\n          <div>\n             <p class="wind">${Math.floor(this.#a.wind)} m/s</p>\n             <p>Wind speed</p>\n           </div>\n         </div>\n         <div class="col">\n          <div class="col__icon"><img src="${t(u)}" alt="wind icon"/></div>\n          <div>\n             <p class="wind">${Math.floor(this.#a.pressure)} hPa</p>\n             <p>Pressure</p>\n           </div>\n         </div>\n       </div> \n    `}};var T=new class{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector("input").value}addHandlerRender(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};const x=async function(){try{I._renderSpinner(),await h(),I.render(c.geolocationWeather)}catch(e){I._renderError(`OOPS! Could not find your location: ${e.message.toLowerCase()}`)}},M=async function(){try{const e=T.getQuery();if(!e)return;console.log(e),await async function(e){try{const t=await o(`${d}q=${e}&appid=${i}`);c.searchWeather.result=l(t),console.log(c.searchWeather.result)}catch(e){throw e}}(e),I.render(c.searchWeather.result)}catch(e){console.log(e),I._renderError("We could not find that city name. Please try another one!")}};I.addHandlerRender(x),T.addHandlerRender(M);
//# sourceMappingURL=index.d37c3a67.js.map
