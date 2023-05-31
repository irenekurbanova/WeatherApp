import * as model from "./model";
// import View from "./Views/weatherView";
import weatherView from "./Views/weatherView";
import spinner from "url:../img/spinner.svg";

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

const showWeather = async function () {
  try {
    // 1. Render spinner
    weatherView._renderSpinner();

    // 2. Getting current location
    await model.geocodingCityName();

    // 3. Loading current weather by geolocation
    await model.loadWeather(model.state.search);

    // 3. Rendering weather
    weatherView.render(model.state.weather);
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("load", showWeather);
searchBtn.addEventListener("click", function (e) {
  model.state.search = searchBox.value;
  console.log(model.state.search);
  showWeather(model.state.search);
});

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
