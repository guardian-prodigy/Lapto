function getElement(selection) {
    let value = document.querySelector(selection);
    if (value) return value;
    else throw new Error(`the ${selection} is incorrect`);
}
export default getElement;