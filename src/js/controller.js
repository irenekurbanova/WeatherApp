import clear from "../img/clear.png";
import clouds from "../img/clouds.png";
import rain from "../img/rain.png";
import drizzle from "../img/drizzle.png";
import mist from "../img/mist.png";
import snow from "../img/snow.png";
import humidity from "../img/humidity.png";
import wind from "../img/wind.png";
import icons from "url:../img/icons.svg";

import * as model from "./model";
// import { API_KEY } from "./config";
// import { API_URL } from "./config";
// import View from "./Views/weatherView";
// import weatherView from "./Views/weatherView";

// // Controller is stand for Event Handling

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

const timeout = function (s) {
  return new Promise((_, rej) => {
    setTimeout(function () {
      rej(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

// Getting current location
// const getLocation = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

const renderSpinner = function (parentElement) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;

  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", markup);
};

const showWeather = async function () {
  try {
    // 1. Render spinner
    renderSpinner(weatherContainer);

    // 2. Getting current location
    await model.geocodingCityName();

    // 3. Loading current weather by geolocation
    await model.loadWeather(model.state.search);

    // 3. Rendering weather
    const markup = `
       <img src="${clear}" class="weather-icon" />
       <h1 class="temp">${Math.floor(model.state.weather.temp)}&#8451;</h1>
       <h2 class="city">${model.state.weather.cityName}</h2>
       <div class="details">
         <div class="col">
           <img src="${humidity}" alt="humidity icon" />
           <div>
             <p class="humidity">${model.state.weather.humidity}&percnt;</p>
             <p>Humidity</p>
           </div>
         </div>
         <div class="col">
           <img src="${wind}" alt="wind icon" />
           <div>
             <p class="wind">${model.state.weather.wind} m/s</p>
             <p>Wind speed</p>
           </div>
         </div>
       </div> 
    `;
    weatherContainer.innerHTML = "";
    weatherContainer.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    console.log(err);
  }
};

// showWeather();

window.addEventListener("load", showWeather);

// //rendering errors in the UI
// export const handleError = (errorText, placeToRender) => {
//   placeToRender.textContent = errorText;
// };

// //removing content from the UI
// export const clearUI = (placeToClear) => {
//   placeToClear.innerHTML = "";
//   placeToClear.textContent = "";
// };

// function toggleWindow() {
//   weatherContainer.classList.toggle("hidden");
// }

// searchBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   model.loadWeather(searchBox.value);
//   weatherView.render(model.state.weather);
// });

// window.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     model.loadWeather(searchBox.value);
//     weatherView.render(model.state.weather);
//     // console.log("enter was pressed");
//     // toggleWindow();
//     // confetti({
//     //   particleCount: 100,
//     //   spread: 70,
//     //   origin: { y: 0.6 },
//     // });

//     // this.setTimeout(toggleWindow, 2500);
//   }
// });
