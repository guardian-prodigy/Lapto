function getElement(selection) {
  const value = document.querySelector(selection);
  if (value) {
    return value;
  } else {
    throw new Error(`The selection of ${selection} does not exist`);
  }
}
export default getElement;