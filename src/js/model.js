// // Model is stand for working with data - all the Ajax calls
// import { API_KEY } from "./config";
// import { API_URL } from "./config";

// export const state = {
//   weather: {},
// };

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

// // Getting current location
// export const getLocation = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // Getting current city based on geolocation
// export const getCurrentLocationCityName = async function () {
//   try {
//     const position = await getLocation();
//     const { latitude, longitude } = position.coords;
//     const res = await fetch(
//       `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//     );
//     const data = await res.json();
//     console.log(data[0].name);
//     const cityName = data[0].name;
//     return cityName;
//   } catch (err) {
//     throw err;
//   }
// };

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