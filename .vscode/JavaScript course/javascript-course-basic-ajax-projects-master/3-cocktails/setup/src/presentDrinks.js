import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
import fetchDrinks from "./fetchDrinks.js";
const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const section =  displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};
export default showDrinks;
