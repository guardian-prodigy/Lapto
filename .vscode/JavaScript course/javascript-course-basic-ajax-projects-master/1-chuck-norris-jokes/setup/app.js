import get from "./GetElement.js";
import { displayData } from "./getData.js";
const btn = get(".btn");
const content = get(".content");
const img = get("img");

const url = "https://api.chucknorris.io/jokes/random";

//  OLD WAY

// btn.addEventListener("click", () => {
//   getData(url)
//     .then((data) => displayData(data, content, img))
//     .catch((err) => console.log(err));
// });

// END OF OLD WAY

// NEW WAY
// btn.addEventListener("click", () => {
//   fetch(url)
//     .then((data) => data.json())
//     .then((data) => displayData(data, content, img));
// });
// END OF NEW WAY

// USING THE ASYNC AWAIT
btn.addEventListener("click", async () => {
  try {
    const data = await fetch(url);
    let json = await data.json();
    displayData(json, content, img);
  } catch (error) {
    console.log(error);
  }
});
// END OF USING THE ASYNC AWAIT
