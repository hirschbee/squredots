let i = 10;
console.log(i);
const title = document.querySelector("#logo");
const button = document.querySelector("#btn");
button.addEventListener("click", (e) => {
  console.log(title.value);
});
