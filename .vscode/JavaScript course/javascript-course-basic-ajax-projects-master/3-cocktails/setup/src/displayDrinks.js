import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const displayDrinks = ({ drinks }) => {
  const title = get(".title");
  const section = get(".section-center");
  if (!drinks) {
    hideLoading();
    title.textContent = "There are no drinks related to your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { strDrink: name, idDrink: id, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="cocktail" />
            <h3>${name}</h3>
          </article>
        </a>
    `;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};
export default displayDrinks;
