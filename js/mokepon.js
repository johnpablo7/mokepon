const sectionSelectAttack = document.getElementById("select-attack");
const sectionRestart = document.getElementById("restart");
const buttonSelectPet = document.querySelector(".button-pet");
const buttonFire = document.getElementById("button-fire");
const buttonWater = document.getElementById("button-water");
const buttonEarth = document.getElementById("button-earth");
const buttonRestart = document.getElementById("button-restart");

const sectionSelectPet = document.getElementById("select-pet");
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputTorchigueya = document.getElementById("torchigueya");
const spanPlayerPet = document.getElementById("player-pet");

const spanEnemyPet = document.getElementById("enemy-pet");

const spanPlayerLives = document.getElementById("player-lives");
const spanEnemyLives = document.getElementById("enemy-lives");

const pResult = document.getElementById("result");
const divPlayerAttack = document.getElementById("player-attack");
const divEnemyAttack = document.getElementById("enemy-attack");

let mokepones = [];
let mokeponsOption;

let playerAttack;
let enemyAttack;
let playerLives = 3;
let enemyLives = 3;

class Mokepon {
  constructor(name, image, live) {
    this.name = name;
    this.image = image;
    this.live = live;
    this.attacks = [];
  }
}

let hipodoge = new Mokepon("Hipodoge", "../assets/hipodoge.png", 5);
let capipepo = new Mokepon("Capipepo", "../assets/capipepo.png", 5);
let torchigueya = new Mokepon("Torchigueya", "../assets/torchigueya.png", 5);
// console.log(hipodoge);

hipodoge.attacks.push(
  { name: "Tierra", id: "button-earth" },
  { name: "Tierra", id: "button-earth" },
  { name: "Tierra", id: "button-earth" },
  { name: "Fuego", id: "button-fire" },
  { name: "Agua", id: "button-water" }
);

capipepo.attacks.push(
  { name: "Agua", id: "button-water" },
  { name: "Agua", id: "button-water" },
  { name: "Agua", id: "button-water" },
  { name: "Tierra", id: "button-earth" },
  { name: "Fuego", id: "button-fire" }
);

torchigueya.attacks.push(
  { name: "Fuego", id: "button-fire" },
  { name: "Fuego", id: "button-fire" },
  { name: "Fuego", id: "button-fire" },
  { name: "Tierra", id: "button-earth" },
  { name: "Agua", id: "button-water" }
);

mokepones.push(hipodoge, capipepo, torchigueya);
// console.log(mokepones);

function startGame() {
  sectionSelectAttack.style.display = "none";
  sectionRestart.style.display = "none";

  mokepones.forEach((mokepon) => {
    // console.log(mokepon.name);
    mokeponsOption = `
      <div class="mokepon-card">
          <input type="radio" name="mokepon" id="hipodoge" />
          <label for="hipodoge">
            <img src="../assets/hipodoge.png" alt="Hipodoge" />
            <p>Hipodoge</p>
          </label>
      </div>
    `;
  });

  buttonSelectPet.addEventListener("click", selectPlayerPet);

  buttonFire.addEventListener("click", fireAttack);
  buttonWater.addEventListener("click", waterAttack);
  buttonEarth.addEventListener("click", earthAttack);

  buttonRestart.addEventListener("click", restartGame);
}

function selectPlayerPet() {
  sectionSelectPet.style.display = "none";
  sectionSelectAttack.style.display = "flex";

  if (inputHipodoge.checked) {
    spanPlayerPet.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanPlayerPet.innerHTML = "Capipepo";
  } else if (inputTorchigueya.checked) {
    spanPlayerPet.innerHTML = "Torchigueya";
  } else {
    alert("Seleccione un mokepon");
    sectionSelectPet.style.display = "flex";
    sectionSelectAttack.style.display = "none";
  }
  selectEnemyPet();
}

function selectEnemyPet() {
  let aleatoryPet = aleatory(1, 3);

  if (aleatoryPet == 1) {
    spanEnemyPet.innerHTML = "Hipodoge";
  } else if (aleatoryPet == 2) {
    spanEnemyPet.innerHTML = "Capipepo";
  } else {
    spanEnemyPet.innerHTML = "Torchigueya";
  }
}

function fireAttack() {
  playerAttack = "Fuego";
  enemyAleatoryAttack();
}

function waterAttack() {
  playerAttack = "Agua";
  enemyAleatoryAttack();
}

function earthAttack() {
  playerAttack = "Tierra";
  enemyAleatoryAttack();
}

function enemyAleatoryAttack() {
  let aleatoryAttack = aleatory(1, 3);

  if (aleatoryAttack == 1) {
    enemyAttack = "Fuego";
  } else if (aleatoryAttack == 2) {
    enemyAttack = "Agua";
  } else {
    enemyAttack = "Tierra";
  }

  battle();
}

function battle() {
  if (playerLives === 0 || enemyLives === 0) {
    return;
  }

  spanPlayerLives.innerHTML = playerLives;
  spanEnemyLives.innerHTML = enemyLives;

  if (enemyAttack == playerAttack) {
    createMessage("EMPATE");
  } else if (
    (playerAttack == "Fuego" && enemyAttack == "Tierra") ||
    (playerAttack == "Agua" && enemyAttack == "Fuego") ||
    (playerAttack == "Tierra" && enemyAttack == "Agua")
  ) {
    createMessage("GANASTE");
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
  } else {
    createMessage("PERDISTE");
    playerLives--;
    spanPlayerLives.innerHTML = playerLives;
  }

  reviewLives();
}

function reviewLives() {
  if (enemyLives == 0) {
    createEndMessage("¡FELICITACIONES! Ganaste ✨");
  } else if (playerLives == 0) {
    createEndMessage("¡LO SIENTO! perdiste 💀");
  }
}

function createMessage(result) {
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");

  pResult.innerHTML = result;
  newPlayerAttack.innerHTML = playerAttack;
  newEnemyAttack.innerHTML = enemyAttack;

  divPlayerAttack.innerHTML = "";
  divEnemyAttack.innerHTML = "";

  divPlayerAttack.appendChild(newPlayerAttack);
  divEnemyAttack.appendChild(newEnemyAttack);
}

function createEndMessage(finalScore) {
  pResult.innerHTML = finalScore;
  buttonFire.disabled = true;
  buttonWater.disabled = true;
  buttonEarth.disabled = true;
  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
