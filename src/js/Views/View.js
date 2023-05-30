// export default class View {
//   _data;

//   /**
//    * Render the recieved object to the DOM
//    * @param {Object | Object[]} data The data to be rendered
//    * @param {boolean} [render = true] If false create markup string instead of rendering to the DOM
//    * @returns {undifined | string} A markup string is returned if render = false
//    * @this {Object} View instance
//    */
//   render(data, render = true) {
//     if (!data || (Array.isArray(data) && data.length === 0))
//       // return this.renderError();

//       this._data = data;
//     const markup = this._generateMarkup();

//     if (!render) return markup;

//     this._clear();
//     this._parentElement.insertAdjacentHTML("afterbegin", markup);
//   }

//   _clear() {
//     this._parentElement.innerHTML = "";
//   }

//   renderSpinner() {
//     const markup = `
//       <div class="spinner">
//         <svg>
//           <use href="${icons}#icon-loader"></use>
//         </svg>
//       </div>
//       `;

//     this._clear();
//     this._parentElement.insertAdjacentHTML("afterbegin", markup);
//   }

//   handleError(errorText, placeToRender) {
//     placeToRender.textContent = errorText;
//     // placeToRender.classList.add = "error";
//   }
// }
