import * as model from "./model";
import weatherView from "./Views/weatherView";
import searchView from "./Views/searchView";

const controlGeolocationWeatherForecast = async function () {
  try {
    // 1. Render spinner
    weatherView._renderSpinner();

    // 3. Loading current weather by geolocation
    await model.loadGeolocationWeather();

    // 3. Rendering weather
    weatherView.render(model.state.geolocationWeather);
  } catch (err) {
    weatherView._renderError(
      `OOPS! Could not find your location: ${err.message.toLowerCase()}`
    );
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    console.log(query);

    // 2. Loading weather by query
    await model.loadSearchResults(query);

    // 3. Rendering weather
    weatherView.render(model.state.searchWeather.result);
  } catch (err) {
    console.log(err);
    weatherView._renderError(
      "We could not find that city name. Please try another one!"
    );
  }
};

const init = function () {
  weatherView.addHandlerRender(controlGeolocationWeatherForecast);
  searchView.addHandlerRender(controlSearchResults);
};

init();
