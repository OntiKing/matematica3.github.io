const $diceOne = document.getElementById("diceOne");
const $diceTwo = document.getElementById("diceTwo");
let quantityOption = 0;

$diceOne.addEventListener("click", () => {
  document.getElementById("cuboOne").classList.remove("cuboOne--hide");
  document.getElementById("throw").textContent = "Lanzar dado";
  quantityOption = 1;
});

$diceTwo.addEventListener("click", () => {
  document.getElementById("cuboOne").classList.remove("cuboOne--hide");
  document.getElementById("cuboTwo").classList.remove("cuboTwo--hide");
  document.getElementById("throw").textContent = "Lanzar dados";
  quantityOption = 2;
});
