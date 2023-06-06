import * as model from "./model";
import weatherView from "./Views/weatherView";

// Controller is stand for Event Handling
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

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
    weatherView._renderError(`${err.message}`);
  }
};

const controlSearchResults = async function () {};

const init = function () {
  weatherView.addHandlerRender(controlWeatherForecast);
};

init();

searchBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  await model.loadWeather(searchBox.value);
  weatherView.render(model.state.weather);
  console.log(model.state.weather);
});

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
