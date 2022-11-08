const sectionSelectAttack = document.getElementById("select-attack");
const sectionRestart = document.getElementById("restart");
const buttonSelectPet = document.querySelector(".button-pet");
const buttonRestart = document.getElementById("button-restart");

const sectionSelectPet = document.getElementById("select-pet");

const spanPlayerPet = document.getElementById("player-pet");

const spanEnemyPet = document.getElementById("enemy-pet");

const spanPlayerLives = document.getElementById("player-lives");
const spanEnemyLives = document.getElementById("enemy-lives");

const pResult = document.getElementById("result");
const divPlayerAttack = document.getElementById("player-attack");
const divEnemyAttack = document.getElementById("enemy-attack");
const cardsContainer = document.getElementById("cards-container");
const elementsContainer = document.getElementById("elements-container");

let mokepones = [];
let mokeponsOption;

let inputHipodoge;
let inputCapipepo;
let inputTorchigueya;

let playerPet;

let attacksMokepon;
let enemyMokeponAttacks;

let buttons = [];

let indexPlayerAttack;
let indexEnemyAttack;

let playerAttack = [];
let enemyAttack = [];
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
  { name: "Tierra", id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: "Tierra", id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: "Tierra", id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: "Fuego", id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: "Agua", id: "button-water", image: "../assets/medalla-agua.png" }
);

capipepo.attacks.push(
  { name: "Agua", id: "button-water", image: "../assets/medalla-agua.png" },
  { name: "Agua", id: "button-water", image: "../assets/medalla-agua.png" },
  { name: "Agua", id: "button-water", image: "../assets/medalla-agua.png" },
  { name: "Tierra", id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: "Fuego", id: "button-fire", image: "../assets/medalla-fuego.png" }
);

torchigueya.attacks.push(
  { name: "Fuego", id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: "Fuego", id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: "Fuego", id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: "Tierra", id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: "Agua", id: "button-water", image: "../assets/medalla-agua.png" }
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
        <input type="radio" name="mokepon" id="${mokepon.name}" />
        <label for="${mokepon.name}">
          <img src="${mokepon.image}" alt="${mokepon.name}" />
          <p>${mokepon.name}</p>
        </label>
      </div>
    `;

    cardsContainer.innerHTML += mokeponsOption;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputTorchigueya = document.getElementById("Torchigueya");
  });

  buttonSelectPet.addEventListener("click", selectPlayerPet);
  buttonRestart.addEventListener("click", restartGame);
}

function selectPlayerPet() {
  sectionSelectPet.style.display = "none";
  sectionSelectAttack.style.display = "flex";

  if (inputHipodoge.checked) {
    spanPlayerPet.innerHTML = inputHipodoge.id;
    playerPet = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanPlayerPet.innerHTML = inputCapipepo.id;
    playerPet = inputCapipepo.id;
  } else if (inputTorchigueya.checked) {
    spanPlayerPet.innerHTML = inputTorchigueya.id;
    playerPet = inputTorchigueya.id;
  } else {
    alert("Seleccione un mokepon");
    sectionSelectPet.style.display = "flex";
    sectionSelectAttack.style.display = "none";
  }

  extractAttacks(playerPet);
  selectEnemyPet();
}

function extractAttacks(playerPet) {
  let attacks;
  for (let i = 0; i < mokepones.length; i++) {
    if (playerPet === mokepones[i].name) {
      attacks = mokepones[i].attacks;
    }
  }

  // console.log(attacks);
  showAttacks(attacks);
}

function showAttacks(attacks) {
  attacks.forEach((attack) => {
    attacksMokepon = `
      <div>
        <button data-attack-name="${attack.name}" class="button-card attack-button">
          <img src="${attack.image}" alt="${attack.name}" />
        </button>
        <p class="name-elements">${attack.name}</p>
      </div>
    `;

    elementsContainer.innerHTML += attacksMokepon;
  });

  buttons = document.querySelectorAll(".attack-button");
  console.log(buttons);
}

function sequenceAttack() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentButton = e.currentTarget;
      if (currentButton.dataset.attackName === "Fuego") {
        playerAttack.push("FUEGO");
        currentButton.style.background = "#112f58";
      } else if (currentButton.dataset.attackName === "Agua") {
        playerAttack.push("AGUA");
        currentButton.style.background = "#112f58";
      } else {
        playerAttack.push("TIERRA");
        currentButton.style.background = "#112f58";
      }
      console.log(playerAttack);
      enemyAleatoryAttack();
    });
  });
}

function selectEnemyPet() {
  let aleatoryPet = aleatory(0, mokepones.length - 1);

  spanEnemyPet.innerHTML = mokepones[aleatoryPet].name;
  enemyMokeponAttacks = mokepones[aleatoryPet].attacks;
  sequenceAttack();
}

function enemyAleatoryAttack() {
  let aleatoryAttack = aleatory(0, enemyMokeponAttacks.length - 1);

  if (aleatoryAttack == 0 || aleatoryAttack == 1) {
    enemyAttack.push("FUEGO");
  } else if (aleatoryAttack == 3 || aleatoryAttack == 4) {
    enemyAttack.push("AGUA");
  } else {
    enemyAttack.push("TIERRA");
  }
  console.log(enemyAttack);

  startFight();
}

function startFight() {
  if (playerAttack.length === 5) {
    battle();
  }
}

function indexBothOpponents(player, enemy) {
  indexPlayerAttack = enemyAttack[player];
  indexEnemyAttack = enemyAttack[enemy];
}

function battle() {
  for (let i = 0; i < playerAttack.length; i++) {
    // console.log(playerAttack[i]);
    if (playerAttack[i] === enemyAttack[i]) {
      indexBothOpponents(i, i);
      createMessage("EMPATE");
    }
  }

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
  newPlayerAttack.innerHTML = indexPlayerAttack;
  newEnemyAttack.innerHTML = indexEnemyAttack;

  divPlayerAttack.innerHTML = "";
  divEnemyAttack.innerHTML = "";

  divPlayerAttack.appendChild(newPlayerAttack);
  divEnemyAttack.appendChild(newEnemyAttack);
}

function createEndMessage(finalScore) {
  pResult.innerHTML = finalScore;
  buttons.forEach((button) => {
    button.disabled = true;
  });
  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
