import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";
const displayDrink = (data) => {
  console.log(data);
  let drink = data.drinks[0];
  const {
    strDrinkThumb: image,
    strDrink: namedrink,
    strInstructions: desc,
  } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
  ];
  hideLoading();
  const img = get(".drink-img");
  const name = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  name.textContent = namedrink;
  document.title = namedrink;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (item == null) {
        return;
      } else {
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
      }
    })
    .join("");
};
export default displayDrink;
