import fetchDrinks from "./src/fetchDrinks.js";
import getElement from "./src/getElement.js";
import displayDrink from "./src/displaySingleDrink.js";
let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const presentDrink = async () => {
  let item = localStorage.getItem("drink");
  if (!item) window.location.replace("index.html");
  let URL = `${url}${item}`;
  let drink = await fetchDrinks(URL);
  displayDrink(drink);
};
window.addEventListener("DOMContentLoaded", presentDrink);
