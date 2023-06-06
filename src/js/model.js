// // Model is stand for working with data - all the Ajax calls
import { API_KEY, API_URL_GEOreverse } from "./config";
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  geolocationWeather: {},
  searchWeather: {
    query: "",
    result: [],
  },
};

// Getting current location
function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const createWeatherObject = function (data) {
  const weather = data;
  return {
    cityName: weather.name,
    description: weather.weather[0].description,
    temp: weather.main.temp,
    humidity: weather.main.humidity,
    pressure: weather.main.pressure,
    wind: weather.wind.speed,
    icon: weather.weather[0].icon,
  };
};

// Getting current location cityName
// export const geocodingCityName = async function () {
//   try {
//     const position = await getLocation();
//     const { latitude, longitude } = position.coords;

//     const data = await getJSON(
//       `${API_URL_GEOreverse}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//     );

//     state.search = data[0].name;
//   } catch (err) {
//     throw new Error(
//       `OOPS! Could not find your location: ${err.message.toLowerCase()}`
//     );
//   }
// };

// Loading weather by Geolocation
export const loadGeolocationWeather = async function () {
  try {
    const position = await getLocation();
    const { latitude, longitude } = position.coords;

    const data = await getJSON(
      `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    state.geolocationWeather = createWeatherObject(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await getJSON(`${API_URL}q=${query}&appid=${API_KEY}`);
    state.searchWeather.result = createWeatherObject(data);
    console.log(state.searchWeather.result);
  } catch (err) {
    throw err;
  }
};
