// // View is stand for DOM changing
// import clear from "../../img/clear.png";
// import clouds from "../../img/clouds.png";
// import rain from "../../img/rain.png";
// import drizzle from "../../img/drizzle.png";
// import mist from "../../img/mist.png";
// import snow from "../../img/snow.png";
// export const city = document.querySelector(".city");
// export const temp = document.querySelector(".temp");
// export const humidity = document.querySelector(".humidity");
// export const wind = document.querySelector(".wind");
// export const weatherIcon = document.querySelector(".weather-icon");
// export const enterEvent = document.querySelector(".enter-event");
// export const card = document.querySelector(".card");
// import View from "./View.js";

// class weatherView extends View {
//   _parentElement = document.querySelector(".weather");

//   // _generateIcon() {
//   //   let iconURL;
//   //   if (this._data.weather[0].main === "Clouds")
//   //     iconURL = "./src/img/clouds.png";
//   //   if (this._data.weather[0].main === "Clear") iconURL = "./src/img/clear.png";
//   //   if (this._data.weather[0].main === "Rain") iconURL = "./src/img/rain.png";
//   //   if (this._data.weather[0].main === "Drizzle")
//   //     iconURL = "./src/img/drizzle.png";
//   //   if (this._data.weather[0].main === "Snow") iconURL = "./src/img/snow.png";
//   //   if (this._data.weather[0].main === "Thunderstorm")
//   //     iconURL = "./src/img/rain.png";
//   //   if (this._data.weather[0].main === "Atmosphere")
//   //     iconURL = "./src/img/mist.png";
//   //   console.log(iconURL);
//   //   return iconURL;
//   // }

//   _generateMarkup() {
//     return `
//     <img src="${this._generateIcon(
//       this._data.description
//     )}" class="weather-icon" />
//     <h1 class="temp">${Math.floor(this._data.temp)}&degC</h1>
//     <h2 class="city">${this._data.cityName}</h2>
//     <div class="details">
//       <div class="col">
//         <img src="./src/img/humidity.png" alt="himidity icon" />
//         <div>
//           <p class="humidity">${this._data.humidity}%</p>
//           <p>Humidity</p>
//         </div>
//       </div>
//         <div class="col">
//           <img src="./src/img/wind.png" alt="wind icon" />
//           <div>
//             <p class="wind">${Math.floor(this._data.wind)} m/s</p>
//             <p>Wind speed</p>
//          </div>
//       </div>
//     `;
//   }
// }

// export default new weatherView();
