import get from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from './utils/displayUser.js';

let url = "https://randomuser.me/api/";
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
let btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  let promise = await getUser(url);
  displayUser(promise, img, value, title, btns);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
