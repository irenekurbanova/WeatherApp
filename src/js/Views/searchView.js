class SearchView {
  #parentElement = document.querySelector(".search");

  getQuery() {
    return this.#parentElement.querySelector("input").value;
  }

  addHandlerRender(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
