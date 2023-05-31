// // Model is stand for working with data - all the Ajax calls
import { API_KEY, API_URL_GEOreverse } from "./config";
import { API_URL } from "./config";

export const state = {
  weather: {},
  search: {},
};

// const createWeatherObject = function (data) {
//   const weather = data;
//   return {
//     cityName: weather.name,
//     description: weather.weather[0].main,
//     temp: weather.main.temp,
//     humidity: weather.main.humidity,
//     wind: weather.wind.speed,
//   };
// };

// Getting current location
function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const geocodingCityName = async function () {
  try {
    const position = await getLocation();
    const { latitude, longitude } = position.coords;
    // state.geolocationCoords.push(latitude, longitude);
    const res = await fetch(
      `${API_URL_GEOreverse}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const data = await res.json();
    state.search = data[0].name;
  } catch (err) {
    console.log(err);
  }
};

// Loading current weather by current geolocation
export const loadWeather = async function (cityName) {
  try {
    const res = await fetch(`${API_URL}&q=${cityName}&appid=${API_KEY}`);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

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

// export const loadWeather = async function (cityName) {
//   try {
//     const res = await fetch(`${API_URL}&q=${cityName}&appid=${API_KEY}`);
//     if (!res.ok) throw new Error("Could not find city name");
//     const data = await res.json();
//     state.weather = createWeatherObject(data);
//     // console.log(data);
//     // toggleWindow();

//     // city.innerHTML = data.name;
//     // temp.innerHTML = `${Math.floor(data.main.temp)}&degC`;
//     // humidity.innerHTML = `${data.main.humidity}%`;
//     // wind.innerHTML = `${Math.floor(data.wind.speed)} m/s`;

//     // if (data.weather[0].main === "Clouds") weatherIcon.src = `${clouds}`;
//     // if (data.weather[0].main === "Clear") weatherIcon.src = `${clear}`;
//     // if (data.weather[0].main === "Rain") weatherIcon.src = `${rain}`;
//     // if (data.weather[0].main === "Drizzle") weatherIcon.src = `${drizzle}`;
//     // if (data.weather[0].main === "Snow") weatherIcon.src = `${snow}`;
//     // if (data.weather[0].main === "Thunderstorm") weatherIcon.src = `${rain}`;
//     // if (data.weather[0].main === "Atmosphere") weatherIcon.src = `${mist}`;
//   } catch (err) {
//     throw err;
//   }
// };
