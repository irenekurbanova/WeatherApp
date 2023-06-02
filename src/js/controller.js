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

const controlWeatherForecast = async function () {
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

window.addEventListener("load", controlWeatherForecast);
searchBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  await model.loadWeather(searchBox.value);
  weatherView.render(model.state.weather);
  console.log(model.state.weather);
});

// //rendering errors in the UI
// export const handleError = (errorText, placeToRender) => {
//   placeToRender.textContent = errorText;
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
