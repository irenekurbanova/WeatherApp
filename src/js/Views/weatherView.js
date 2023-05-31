// // View is stand for DOM changing
// export const city = document.querySelector(".city");
// export const temp = document.querySelector(".temp");
// export const humidity = document.querySelector(".humidity");
// export const wind = document.querySelector(".wind");
// export const weatherIcon = document.querySelector(".weather-icon");
// export const enterEvent = document.querySelector(".enter-event");
// export const card = document.querySelector(".card");
// import View from "./View.js";
// import humidity from "../../img/humidity.png";
import humidity from "url:../../img/humidity.svg";
import wind from "url:../../img/wind.svg";
import barometer from "../../img/barometer.svg";
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
  #cardElement = document.querySelector(".card");
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
    if (this.#data.icon === "01d") {
      this.#cardElement.classList.add("sunny");
      return icon01d;
    }
    if (this.#data.icon === "01n") {
      this.#cardElement.classList.add("sunny");
      return icon01n;
    }
    if (this.#data.icon === "02d") {
      this.#cardElement.classList.add("partly-cloudy");
      return icon02d;
    }
    if (this.#data.icon === "02n") {
      this.#cardElement.classList.add("partly-cloudy");
      return icon02n;
    }
    if (this.#data.icon === "03d") {
      this.#cardElement.classList.add("cloudy");
      return icon03d;
    }
    if (this.#data.icon === "03n") {
      this.#cardElement.classList.add("cloudy");
      return icon03n;
    }
    if (this.#data.icon === "04d") {
      this.#cardElement.classList.add("cloudy");
      return icon04d;
    }
    if (this.#data.icon === "04n") {
      this.#cardElement.classList.add("cloudy");
      return icon04n;
    }
    if (this.#data.icon === "09d") {
      this.#cardElement.classList.add("rain");
      return icon09d;
    }
    if (this.#data.icon === "09n") {
      this.#cardElement.classList.add("rain");
      return icon09n;
    }
    if (this.#data.icon === "10d") {
      this.#cardElement.classList.add("rain");
      return icon10d;
    }
    if (this.#data.icon === "10n") {
      this.#cardElement.classList.add("rain");
      return icon10n;
    }
    if (this.#data.icon === "11d") {
      this.#cardElement.classList.add("rain");
      return icon11d;
    }
    if (this.#data.icon === "11n") {
      this.#cardElement.classList.add("rain");
      return icon11n;
    }
    if (this.#data.icon === "13d") {
      this.#cardElement.classList.add("rain");
      return icon13d;
    }
    if (this.#data.icon === "13n") {
      this.#cardElement.classList.add("rain");
      return icon13n;
    }
    if (this.#data.icon === "50d") {
      this.#cardElement.classList.add("partly-cloudy");
      return icon50d;
    }
    if (this.#data.icon === "50n") {
      this.#cardElement.classList.add("partly-cloudy");
      return icon50n;
    }
  }

  #generateMarkup() {
    return `
       <div class="weather-icon">
        <img src="${this.#generateIcon()}.svg" alt="weather icon"/>
       </div>
       <div class="city"><span>${this.#data.cityName}</span></div>
       <div class="temp"><span>${Math.floor(
         this.#data.temp
       )}&#8451;</span></div>
       <div class="description"><span>${
         this.#data.description.charAt(0).toUpperCase() +
         this.#data.description.slice(1)
       }</span></div>
       <div class="details">
         <div class="col">
           <div class="col__icon"><img src="${humidity}" alt="humidity icon"/></div>
           <div>
             <p class="humidity">${this.#data.humidity}&percnt;</p>
             <p>Humidity</p>
           </div>
         </div>
         <div class="col">
          <div class="col__icon"><img src="${wind}" alt="wind icon"/></div>
          <div>
             <p class="wind">${Math.floor(this.#data.wind)} m/s</p>
             <p>Wind speed</p>
           </div>
         </div>
         <div class="col">
          <div class="col__icon"><img src="${barometer}" alt="wind icon"/></div>
          <div>
             <p class="wind">${Math.floor(this.#data.pressure)} hPa</p>
             <p>Pressure</p>
           </div>
         </div>
       </div> 
    `;
  }
}

export default new WeatherView();
