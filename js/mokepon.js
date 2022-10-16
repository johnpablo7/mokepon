let playerAttack;
let enemyAttack;
let playerLives = 3;
let enemyLives = 3;

function startGame() {
  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "none";

  let sectionRestart = document.getElementById("restart");
  sectionRestart.style.display = "none";

  let buttonSelectPet = document.querySelector(".button-pet");
  buttonSelectPet.addEventListener("click", selectPlayerPet);

  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", fireAttack);
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", waterAttack);
  let buttonEarth = document.getElementById("button-earth");
  buttonEarth.addEventListener("click", earthAttack);

  let buttonRestart = document.getElementById("button-restart");
  buttonRestart.addEventListener("click", restartGame);
}

function selectPlayerPet() {
  let sectionSelectPet = document.getElementById("select-pet");
  sectionSelectPet.style.display = "none";

  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "flex";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputTorchigueya = document.getElementById("torchigueya");
  let spanPlayerPet = document.getElementById("player-pet");

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
  let spanEnemyPet = document.getElementById("enemy-pet");

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

  let spanPlayerLives = document.getElementById("player-lives");
  let spanEnemyLives = document.getElementById("enemy-lives");

  spanPlayerLives.innerHTML = playerLives;
  spanEnemyLives.innerHTML = enemyLives;

  if (enemyAttack == playerAttack) {
    createMessage("Empate");
  } else if (
    (playerAttack == "Fuego" && enemyAttack == "Tierra") ||
    (playerAttack == "Agua" && enemyAttack == "Fuego") ||
    (playerAttack == "Tierra" && enemyAttack == "Agua")
  ) {
    createMessage("Ganaste");
    enemyLives--;
    spanEnemyLives.innerHTML = enemyLives;
  } else {
    createMessage("Perdiste");
    playerLives--;
    spanPlayerLives.innerHTML = playerLives;
  }

  reviewLives();
}

function reviewLives() {
  if (enemyLives == 0) {
    createEndMessage("¡FELICITACIONES! Ganaste✨");
  } else if (playerLives == 0) {
    createEndMessage("¡LO SIENTO! perdiste 💀");
  }
}

function createMessage(result) {
  let pResult = document.getElementById("result");
  let divPlayerAttack = document.getElementById("player-attack");
  let divEnemyAttack = document.getElementById("enemy-attack");

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
  let pResult = document.getElementById("result");
  pResult.innerHTML = finalScore;

  let buttonFire = document.getElementById("button-fire");
  buttonFire.disabled = true;
  let buttonWater = document.getElementById("button-water");
  buttonWater.disabled = true;
  let buttonEarth = document.getElementById("button-earth");
  buttonEarth.disabled = true;

  let sectionRestart = document.getElementById("restart");
  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
