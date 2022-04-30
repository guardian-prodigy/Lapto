import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
    showLoading();
    try {
        let data = await fetch(url);
        let parsedResult = await data.json();
        return parsedResult;
    } catch (error) {
        console.log(`there was an error with ${url}`);
    }
}
export default fetchDrinks;
