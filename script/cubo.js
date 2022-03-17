const $cuboUno = document.getElementById("cubo");
const $throw = document.getElementById("throw");
const $btn__btnReport = document.getElementById("btn__btnReport");
const time = 2;

let one = 0,
  two = 0,
  three = 0,
  four = 0,
  five = 0,
  six = 0;
// variable que acumula el total de tiradas
let totalThrow = 0;

//habilitar Boton
let active = 1;

//Variable del numero aleatoreo
let randomValue = 0;
$throw.addEventListener("click", () => {
  if (active === 1) {
    $cuboUno.style.transition = "";
    $cuboUno.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
      $cuboUno.style.transition = `transform ${time}s`;
      randomValue = Math.floor(Math.random() * 6 + 1);

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

      addRandomNumber();
      totalThrow = totalThrow + 1;
      document.getElementById("totalThrow").textContent = totalThrow;

      // setTimeout(() => {
      //   resultadoUno.innerHTML = `Resultado dado Uno ${randomValue}`;
      //   dadoUno.push(randomValue);
      //   console.log(dadoUno);
      // }, 4000);
      disableBtn();
    }, time);
  }
});

const $cuboDos = document.querySelector(".cubeDos");
const timeDos = 2;
let randomValueDos = 0;
const resultadoDos = document.querySelector(".resultadoDos");

$throw.addEventListener("click", () => {
  if (active === 1) {
    if (quantityOption === 2) {
      $cuboDos.style.transition = "";
      $cuboDos.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      setTimeout(() => {
        $cuboDos.style.transition = `transform ${timeDos}s`;
        randomValueDos = Math.floor(Math.random() * 6 + 1);

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

        addRandomNumberTwo();

        // setTimeout(() => {
        //   resultadoDos.innerHTML = `Resultado dado Uno ${randomValueDos}`;
        //   dadoDos.push(randomValueDos);
        //   console.log(dadoDos);
        // }, 4000);
      }, timeDos);
      disableBtn();
    } else {
    }
  }
});

const disableBtn = () => {
  active = 0;
  $throw.classList.add("btnthrow--enable");
};

const addRandomNumber = () => {
  if (randomValue === 1) {
    one = one + 1;
  } else if (randomValue === 2) {
    two = two + 1;
  } else if (randomValue === 3) {
    three = three + 1;
  } else if (randomValue === 4) {
    four = four + 1;
  } else if (randomValue === 5) {
    five = five + 1;
  } else if (randomValue === 6) {
    six = six + 1;
  }

  setTimeout(() => {
    seeResults();
  }, 2000);
};

const addRandomNumberTwo = () => {
  if (randomValueDos === 1) {
    one = one + 1;
  } else if (randomValueDos === 2) {
    two = two + 1;
  } else if (randomValueDos === 3) {
    three = three + 1;
  } else if (randomValueDos === 4) {
    four = four + 1;
  } else if (randomValueDos === 5) {
    five = five + 1;
  } else if (randomValueDos === 6) {
    six = six + 1;
  }
  setTimeout(() => {
    seeResults();
  }, 1800);
};

const seeResults = () => {
  document.getElementById("one").textContent = one;
  document.getElementById("two").textContent = two;
  document.getElementById("three").textContent = three;
  document.getElementById("four").textContent = four;
  document.getElementById("five").textContent = five;
  document.getElementById("six").textContent = six;
  active = 1;
  $throw.classList.remove("btnthrow--enable");
};
