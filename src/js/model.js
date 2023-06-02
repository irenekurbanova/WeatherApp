// // Model is stand for working with data - all the Ajax calls
import { API_KEY, API_URL_GEOreverse } from "./config";
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  weather: {},
  search: {},
};

// const createWeatherObject = function (data) {
//   const weather = data;
//   return {
//     cityName: weather.name,
//     description: weather.weather[0].description,
//     temp: weather.main.temp,
//     humidity: weather.main.humidity,
//     pressure: weather.main.pressure,
//     wind: weather.wind.speed,
//     icon: weather.weather[0].icon,
//   };
// };

// Getting current location
function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Getting current location cityName
export const geocodingCityName = async function () {
  try {
    const position = await getLocation();
    const { latitude, longitude } = position.coords;

    const data = await getJSON(
      `${API_URL_GEOreverse}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    state.search = data[0].name;
  } catch (err) {
    console.log(err);
  }
};

// Loading weather by cityName
export const loadWeather = async function (cityName) {
  try {
    const data = await getJSON(`${API_URL}&q=${cityName}&appid=${API_KEY}`);

    const weather = data;
    console.log(data);

    state.weather = {
      cityName: weather.name,
      description: weather.weather[0].description,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
      wind: weather.wind.speed,
      icon: weather.weather[0].icon,
    };
    console.log(state.weather);
  } catch (err) {
    console.log(err);
  }
};
