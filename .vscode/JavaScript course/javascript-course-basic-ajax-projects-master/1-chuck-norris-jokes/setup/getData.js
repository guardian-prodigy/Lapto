// export function getData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== 4) {
//         return;
//       } else if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(xhr.responseText);
//       } else {
//         reject({
//           status: xhr.status,
//           text: xhr.statusText,
//         });
//       }
//     };
//   });
// }
export function displayData(data, paragraph, img) {
  img.classList.add("shake-img");
  const { value: joke } = data;
  paragraph.textContent = `${joke}`;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}

