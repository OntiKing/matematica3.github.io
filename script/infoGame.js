const $containerDataReport = document.getElementById("containerDataReport");
let title, chapter, instructions;

async function obtenerDatos() {
  const response = await fetch("./json/infoOda.json");
  const json = await response.json();

  title = json.titulo;
  chapter = json.chapter;
  instructions = json.instructions;

  let $title = document.getElementById("title");
  let $chapter = document.getElementById("chapter");
  let $instructions = document.getElementById("instructions");

  $title.textContent = title;
  $chapter.textContent = chapter;
  $instructions.textContent = instructions;
}

obtenerDatos();

/* Evento boton star */
// Aqui ocultamos el contenedor inicial para mostrar el de la opcion de dados
const $infoBtn = document.getElementById("infoBtn__star"),
  $container__infoGame = document.getElementById("container__infoGame"),
  $container__selectOption = document.getElementById("container__selectOption");

$infoBtn.addEventListener("click", screenActive);

function screenActive() {
  $container__infoGame.classList.add("hideInfoGame");
  $container__selectOption.classList.remove("container__selectOption--hide");
}

//Ahora ocultamos la opcion de dados para ir a starGame

const $dadoOne = document.getElementById("diceOne"),
  $dadoTwo = document.getElementById("diceTwo"),
  $container__startGame = document.getElementById("container__startGame");

$dadoOne.addEventListener("click", hideInfoGame);
$dadoTwo.addEventListener("click", hideInfoGame);

function hideInfoGame() {
  $container__selectOption.classList.add("container__selectOption--hide");
  $container__startGame.classList.remove("container__startGame--hide");
}

//Boton para ver reporte

document.getElementById("btn__btnReport").addEventListener("click", () => {
  $container__startGame.classList.add("container__startGame--hide");
  $containerDataReport.classList.remove("containerDataReport--hide");
  seeReport();
});
