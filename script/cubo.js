const $cuboUno = document.getElementById("cubo");
const $throw = document.getElementById("throw");
const time = 4;

$throw.addEventListener("click", () => {
  $cuboUno.style.transition = "";
  $cuboUno.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  setTimeout(() => {
    $cuboUno.style.transition = `transform ${time}s`;
    const randomValue = Math.floor(Math.random() * 6 + 1);

    switch (randomValue) {
      case 1:
        $cuboUno.style.transform = `translateY(30px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 2:
        $cuboUno.style.transform = `translateY(30px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 3:
        $cuboUno.style.transform = `translateY(30px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
        break;
      case 4:
        $cuboUno.style.transform = `translateY(30px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
        break;
      case 5:
        $cuboUno.style.transform = `translateY(30px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 6:
        $cuboUno.style.transform = `translateY(30px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
        break;
    }
    console.log(`Dado Uno:  ${randomValue}`);
    // setTimeout(() => {
    //   resultadoUno.innerHTML = `Resultado dado Uno ${randomValue}`;
    //   dadoUno.push(randomValue);
    //   console.log(dadoUno);
    // }, 4000);
  }, time);
});

const $cuboDos = document.querySelector(".cubeDos");
const timeDos = 4;
const resultadoDos = document.querySelector(".resultadoDos");

$throw.addEventListener("click", () => {
  $cuboDos.style.transition = "";
  $cuboDos.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  setTimeout(() => {
    $cuboDos.style.transition = `transform ${timeDos}s`;
    const randomValueDos = Math.floor(Math.random() * 6 + 1);

    switch (randomValueDos) {
      case 1:
        $cuboDos.style.transform = `translateY(30px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;

        break;
      case 2:
        $cuboDos.style.transform = `translateY(30px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 3:
        $cuboDos.style.transform = `translateY(30px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
        break;
      case 4:
        $cuboDos.style.transform = `translateY(30px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
        break;
      case 5:
        $cuboDos.style.transform = `translateY(30px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 6:
        $cuboDos.style.transform = `translateY(30px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
        break;
    }

    setTimeout(() => {
      console.log(`Dado Dos:  ${randomValueDos}`);
    }, 4000);
    // setTimeout(() => {
    //   resultadoDos.innerHTML = `Resultado dado Uno ${randomValueDos}`;
    //   dadoDos.push(randomValueDos);
    //   console.log(dadoDos);
    // }, 4000);
  }, timeDos);
});
