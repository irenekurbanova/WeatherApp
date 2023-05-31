// // View is stand for DOM changing
// export const city = document.querySelector(".city");
// export const temp = document.querySelector(".temp");
// export const humidity = document.querySelector(".humidity");
// export const wind = document.querySelector(".wind");
// export const weatherIcon = document.querySelector(".weather-icon");
// export const enterEvent = document.querySelector(".enter-event");
// export const card = document.querySelector(".card");
// import View from "./View.js";
import humidity from "../../img/humidity.png";
import wind from "../../img/wind.png";
import spinner from "url:../../img/spinner.svg";
import icon01d from "url:../../img/openweathermap/01d.svg";
import icon01n from "url:../../img/openweathermap/01n.svg";
import icon02d from "url:../../img/openweathermap/02d.svg";
import icon02n from "url:../../img/openweathermap/02n.svg";
import icon03d from "url:../../img/openweathermap/03d.svg";
import icon03n from "url:../../img/openweathermap/03n.svg";
import icon04d from "url:../../img/openweathermap/04d.svg";
import icon04n from "url:../../img/openweathermap/04n.svg";
import icon09d from "url:../../img/openweathermap/09d.svg";
import icon09n from "url:../../img/openweathermap/09n.svg";
import icon10d from "url:../../img/openweathermap/10d.svg";
import icon10n from "url:../../img/openweathermap/10n.svg";
import icon11d from "url:../../img/openweathermap/11d.svg";
import icon11n from "url:../../img/openweathermap/11n.svg";
import icon13d from "url:../../img/openweathermap/13d.svg";
import icon13n from "url:../../img/openweathermap/13n.svg";
import icon50d from "url:../../img/openweathermap/50d.svg";
import icon50n from "url:../../img/openweathermap/50n.svg";

class WeatherView {
  #parentElement = document.querySelector(".weather");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();

    this._clearUI();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearUI() {
    this.#parentElement.innerHTML = "";
  }

  _renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${spinner}#icon-loader"></use>
        </svg>
      </div>
      `;

    this._clearUI();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  #generateIcon() {
    if (this.#data.icon === "01d") return icon01d;
    if (this.#data.icon === "01n") return icon01n;
    if (this.#data.icon === "02d") return icon02d;
    if (this.#data.icon === "02n") return icon02n;
    if (this.#data.icon === "03d") return icon03d;
    if (this.#data.icon === "03n") return icon03n;
    if (this.#data.icon === "04d") return icon04d;
    if (this.#data.icon === "04n") return icon04n;
    if (this.#data.icon === "09d") return icon09d;
    if (this.#data.icon === "09n") return icon09n;
    if (this.#data.icon === "10d") return icon10d;
    if (this.#data.icon === "10n") return icon10n;
    if (this.#data.icon === "11d") return icon11d;
    if (this.#data.icon === "11n") return icon11n;
    if (this.#data.icon === "13d") return icon13d;
    if (this.#data.icon === "13n") return icon13n;
    if (this.#data.icon === "50d") return icon50d;
    if (this.#data.icon === "50n") return icon50n;
  }

  #generateMarkup() {
    return `
       <div class="weather-icon">
        <img src="${this.#generateIcon()}.svg" alt="weather icon"/>
       </div>
       <h1 class="temp">${Math.floor(this.#data.temp)}&#8451;</h1>
       <h2 class="city">${this.#data.cityName}</h2>
       <div class="details">
         <div class="col">
           <img src="${humidity}" alt="humidity icon" />
           <div>
             <p class="humidity">${this.#data.humidity}&percnt;</p>
             <p>Humidity</p>
           </div>
         </div>
         <div class="col">
           <img src="${wind}" alt="wind icon" />
           <div>
             <p class="wind">${Math.floor(this.#data.wind)} m/s</p>
             <p>Wind speed</p>
           </div>
         </div>
       </div> 
    `;
  }
}

export default new WeatherView();

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
