// // View is stand for DOM changing
import humidity from "url:../../img/humidity.svg";
import wind from "url:../../img/wind.svg";
import barometer from "url:../../img/barometer.svg";
import spinner from "url:../../img/spinner.svg";
import icon01d from "url:../../img/01d.svg";
import icon01n from "url:../../img/01n.svg";
import icon02d from "url:../../img/02d.svg";
import icon02n from "url:../../img/02n.svg";
import icon03d from "url:../../img/03d.svg";
import icon03n from "url:../../img/03n.svg";
import icon04d from "url:../../img/04d.svg";
import icon04n from "url:../../img/04n.svg";
import icon09d from "url:../../img/09d.svg";
import icon09n from "url:../../img/09n.svg";
import icon10d from "url:../../img/10d.svg";
import icon10n from "url:../../img/10n.svg";
import icon11d from "url:../../img/11d.svg";
import icon11n from "url:../../img/11n.svg";
import icon13d from "url:../../img/13d.svg";
import icon13n from "url:../../img/13n.svg";
import icon50d from "url:../../img/50d.svg";
import icon50n from "url:../../img/50n.svg";

class WeatherView {
  #parentElement = document.querySelector(".weather");
  #cardElement = document.querySelector(".card");
  #data;
  #errorMessage = "We could not find that city name. Please try another one!";

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();

    this._clearUI();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _clearUI() {
    this.#parentElement.innerHTML = "";
  }

  _renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${spinner}#icon-loader"></use>
        </svg>
      </div>
      `;

    this._clearUI();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _renderError(message = this.#errorMessage) {
    const markup = `
      <div class="error">
        <p>${message}</p>
      </div>
    `;
    this._clearUI();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearClassList() {
    this.#cardElement.classList = "card";
  }

  #generateIcon() {
    if (this.#data.icon === "01d") {
      this._clearClassList();
      this.#cardElement.classList.add("sunny");
      return icon01d;
    }
    if (this.#data.icon === "01n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon01n;
    }
    if (this.#data.icon === "02d") {
      this._clearClassList();
      this.#cardElement.classList.add("partly-cloudy");
      return icon02d;
    }
    if (this.#data.icon === "02n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon02n;
    }
    if (this.#data.icon === "03d") {
      this._clearClassList();
      this.#cardElement.classList.add("cloudy");
      return icon03d;
    }
    if (this.#data.icon === "03n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon03n;
    }
    if (this.#data.icon === "04d") {
      this._clearClassList();
      this.#cardElement.classList.add("cloudy");
      return icon04d;
    }
    if (this.#data.icon === "04n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon04n;
    }
    if (this.#data.icon === "09d") {
      this._clearClassList();
      this.#cardElement.classList.add("rain");
      return icon09d;
    }
    if (this.#data.icon === "09n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon09n;
    }
    if (this.#data.icon === "10d") {
      this._clearClassList();
      this.#cardElement.classList.add("rain");
      return icon10d;
    }
    if (this.#data.icon === "10n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon10n;
    }
    if (this.#data.icon === "11d") {
      this._clearClassList();
      this.#cardElement.classList.add("rain");
      return icon11d;
    }
    if (this.#data.icon === "11n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon11n;
    }
    if (this.#data.icon === "13d") {
      this._clearClassList();
      this.#cardElement.classList.add("rain");
      return icon13d;
    }
    if (this.#data.icon === "13n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon13n;
    }
    if (this.#data.icon === "50d") {
      this._clearClassList();
      this.#cardElement.classList.add("partly-cloudy");
      return icon50d;
    }
    if (this.#data.icon === "50n") {
      this._clearClassList();
      this.#cardElement.classList.add("night");
      return icon50n;
    }
  }

  #generateMarkup() {
    return `
       <div class="weather-icon">
        <img src="${this.#generateIcon()}" alt="weather icon"/>
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
