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
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let playerPet;
let playerAttackType;

let playerSaveAttacks;
let attacksMokepon;
let enemyMokeponAttacks;
let buttons = [];
let indexPlayerAttack;
let indexEnemyAttack;
let playerWin = 0;
let enemyWin = 0;
let playerAttack = [];
let enemyAttack = [];
let playerLives = 3;
let enemyLives = 3;

class Mokepon {
  constructor(name, image, live, type) {
    this.name = name;
    this.image = image;
    this.live = live;
    this.type = type;
    this.attacks = [];
  }
}

const WATER = "Agua";
const FIRE = "Fuego";
const EARTH = "Tierra";

const emojis = {
  [WATER]: "💧",
  [FIRE]: "🔥",
  [EARTH]: "🌱",
};

let hipodoge = new Mokepon("Hipodoge", "../assets/hipodoge.png", 5, EARTH);
let capipepo = new Mokepon("Capipepo", "../assets/capipepo.png", 5, WATER);
let torchigueya = new Mokepon(
  "Torchigueya",
  "../assets/torchigueya.png",
  5,
  FIRE
);
let langostelvis = new Mokepon(
  "Langostelvis",
  "../assets/langostelvis.png",
  5,
  FIRE
);
let tucapalma = new Mokepon("Tucapalma", "../assets/tucapalma.png", 5, EARTH);
let pydos = new Mokepon("Pydos", "../assets/pydos.png", 5, WATER);
// console.log(hipodoge);

hipodoge.attacks.push(
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" }
);

capipepo.attacks.push(
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" }
);

torchigueya.attacks.push(
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" }
);

langostelvis.attacks.push(
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" }
);

tucapalma.attacks.push(
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" }
);

pydos.attacks.push(
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: WATER, id: "button-water", image: "../assets/medalla-agua.png" },
  { name: EARTH, id: "button-earth", image: "../assets/medalla-tierra.png" },
  { name: FIRE, id: "button-fire", image: "../assets/medalla-fuego.png" }
);

mokepones.push(hipodoge, capipepo, torchigueya, langostelvis, tucapalma, pydos);
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
    inputLangostelvis = document.getElementById("Langostelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");
  });

  buttonSelectPet.addEventListener("click", selectPlayerPet);
  buttonRestart.addEventListener("click", restartGame);
}

function selectPlayerPet() {
  let indicator = 0;
  if (
    inputHipodoge.checked ||
    inputCapipepo.checked ||
    inputTorchigueya.checked ||
    inputLangostelvis.checked ||
    inputTucapalma.checked ||
    inputPydos.checked
  ) {
    sectionSelectPet.style.display = "none";
    sectionSelectAttack.style.display = "flex";
    indicator = 1;
  }

  if (inputHipodoge.checked) {
    spanPlayerPet.innerHTML = inputHipodoge.id;
    playerPet = inputHipodoge.id;
    playerAttackType = hipodoge.tipo;
    playerSaveAttacks = hipodoge.attacks;
  } else if (inputCapipepo.checked) {
    spanPlayerPet.innerHTML = inputCapipepo.id;
    playerPet = inputCapipepo.id;
    playerAttackType = capipepo.tipo;
    playerSaveAttacks = capipepo.attacks;
  } else if (inputTorchigueya.checked) {
    spanPlayerPet.innerHTML = inputTorchigueya.id;
    playerPet = inputTorchigueya.id;
    playerAttackType = torchigueya.tipo;
    playerSaveAttacks = torchigueya.attacks;
  } else if (inputLangostelvis.checked) {
    spanPlayerPet.innerHTML = inputLangostelvis.id;
    playerPet = inputLangostelvis.id;
    playerAttackType = langostelvis.tipo;
    playerSaveAttacks = langostelvis.attacks;
  } else if (inputTucapalma.checked) {
    spanPlayerPet.innerHTML = inputTucapalma.id;
    playerPet = inputTucapalma.id;
    playerAttackType = tucapalma.tipo;
    playerSaveAttacks = tucapalma.attacks;
  } else if (inputPydos.checked) {
    spanPlayerPet.innerHTML = inputPydos.id;
    playerPet = inputPydos.id;
    playerAttackType = pydos.tipo;
    playerSaveAttacks = pydos.attacks;
  } else {
    alert("Seleccione un mokepon");
    sectionSelectPet.style.display = "flex";
    sectionSelectAttack.style.display = "none";
  }
  if (indicator === 1) {
    selectEnemyPet();
  }

  extractAttacks(playerPet);
}

function extractAttacks(playerPet) {
  let attacks;
  let type;

  for (let i = 0; i < mokepones.length; i++) {
    if (playerPet === mokepones[i].name) {
      attacks = mokepones[i].attacks;
      type = mokepones[i].type;
    }
  }

  // console.log(type);
  showAttacks(attacks, type);
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
  // console.log(buttons);
}

function sequenceAttack() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentButton = e.currentTarget;
      if (currentButton.dataset.attackName === FIRE) {
        playerAttack.push(FIRE);
        currentButton.style.background = "#edf2f4";
        button.disabled = true;
      } else if (currentButton.dataset.attackName === WATER) {
        playerAttack.push(WATER);
        currentButton.style.background = "#edf2f4";
        button.disabled = true;
      } else {
        playerAttack.push(EARTH);
        currentButton.style.background = "#edf2f4";
        button.disabled = true;
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

// Esta Hard codeado similar a los ataques del jugador
function enemyAleatoryAttack() {
  let aleatoryAttack = aleatory(0, enemyMokeponAttacks.length - 1);

  if (aleatoryAttack == 0 || aleatoryAttack == 1) {
    enemyAttack.push(FIRE);
  } else if (aleatoryAttack == 3 || aleatoryAttack == 4) {
    enemyAttack.push(WATER);
  } else {
    enemyAttack.push(EARTH);
  }
  console.log(enemyAttack);

  startFight();
}

function startFight() {
  if (playerAttack.length === 5) {
    battle();
  }
}

function indexBothOpponent(player, enemy) {
  indexPlayerAttack = playerAttack[player];
  indexEnemyAttack = enemyAttack[enemy];

  indexPlayerAttack += " " + emojis[indexPlayerAttack];
  indexEnemyAttack += " " + emojis[indexEnemyAttack];
}

function battle() {
  console.log(playerAttack, enemyAttack);
  for (let i = 0; i < playerAttack.length; i++) {
    // console.log(playerAttack[i]);
    if (playerAttack[i] === enemyAttack[i]) {
      indexBothOpponent(i, i);
      createMessage("EMPATE");
    } else if (playerAttack[i] === FIRE && enemyAttack[i] === EARTH) {
      indexBothOpponent(i, i);
      createMessage("GANASTE");
      playerWin++;
      spanPlayerLives.innerHTML = playerWin;
    } else if (playerAttack[i] === WATER && enemyAttack[i] === FIRE) {
      indexBothOpponent(i, i);
      createMessage("GANASTE");
      playerWin++;
      spanPlayerLives.innerHTML = playerWin;
    } else if (playerAttack[i] === EARTH && enemyAttack[i] === WATER) {
      indexBothOpponent(i, i);
      createMessage("GANASTE");
      playerWin++;
      spanPlayerLives.innerHTML = playerWin;
    } else {
      indexBothOpponent(i, i);
      createMessage("PERDISTE");
      enemyWin++;
      spanEnemyLives.innerHTML = enemyWin;
    }
  }

  reviewLives();
}

function reviewLives() {
  if (playerWin === enemyWin) {
    createEndMessage("¡EMPATE! intentalo de nuevo 🎮");
  } else if (playerWin > enemyWin) {
    createEndMessage("¡FELICITACIONES! Ganaste ✨");
  } else {
    createEndMessage("¡LO SIENTO! perdiste 💀");
  }
}

function createMessage(result) {
  let newPlayerAttack = document.createElement("p");
  let newEnemyAttack = document.createElement("p");

  pResult.innerHTML = result;
  newPlayerAttack.innerHTML = indexPlayerAttack;
  newEnemyAttack.innerHTML = indexEnemyAttack;

  // divPlayerAttack.innerHTML = "";
  // divEnemyAttack.innerHTML = "";

  divPlayerAttack.appendChild(newPlayerAttack);
  divEnemyAttack.appendChild(newEnemyAttack);
}

function createEndMessage(finalScore) {
  pResult.innerHTML = finalScore;

  // buttons.forEach((button) => {
  //   button.disabled = true;
  // });
  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
