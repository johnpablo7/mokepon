let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
  let sectionSelectAttack = document.getElementById('select-attack')
  sectionSelectAttack.style.display = 'none'

  let sectionRestart = document.getElementById('restart')
  sectionRestart.style.display = 'none'

  let buttonSelectPet = document.getElementById('button-pet')
  buttonSelectPet.addEventListener('click', selectPlayerPet)

  let buttonFire = document.getElementById('button-fire')
  buttonFire.addEventListener('click', fireAttack)
  let buttonWater = document.getElementById('button-water')
  buttonWater.addEventListener('click', waterAttack)
  let buttonEarth = document.getElementById('button-earth')
  buttonEarth.addEventListener('click', earthAttack)

  let buttonRestart = document.getElementById('button-restart')
  buttonRestart.addEventListener('click', restartGame)
}

function selectPlayerPet() {
  let sectionSelectPet = document.getElementById('select-pet')
  sectionSelectPet.style.display = 'none'

  let sectionSelectAttack = document.getElementById('select-attack')
  sectionSelectAttack.style.display = 'block'

  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')
  let spanPlayerPet = document.getElementById('player-pet')

  if (inputHipodoge.checked) {
    spanPlayerPet.innerHTML = 'Hipodoge'
  } else if (inputCapipepo.checked) {
    spanPlayerPet.innerHTML = 'Capipepo'
  } else if (inputRatigueya.checked) {
    spanPlayerPet.innerHTML = 'Ratigueya'
  } else {
    alert('Seleccione un mokepon')
    sectionSelectPet.style.display = 'block'
    sectionSelectAttack.style.display = 'none'
    // restartGame()
  }
  selectEnemyPet()
}

function selectEnemyPet() {
  let aleatoryPet = aleatory(1, 3)
  let spanEnemyPet = document.getElementById('enemy-pet')

  if (aleatoryPet == 1) {
    spanEnemyPet.innerHTML = 'Hipodoge'
  } else if (aleatoryPet == 2) {
    spanEnemyPet.innerHTML = 'Capipepo'
  } else {
    spanEnemyPet.innerHTML = 'Ratigueya'
  }
}

function fireAttack() {
  playerAttack = 'Fuego'
  enemyAleatoryAttack()
}

function waterAttack() {
  playerAttack = 'Agua'
  enemyAleatoryAttack()
}

function earthAttack() {
  playerAttack = 'Tierra'
  enemyAleatoryAttack()
}

function enemyAleatoryAttack() {
  let aleatoryAttack = aleatory(1, 3)

  if (aleatoryAttack == 1) {
    enemyAttack = 'Fuego'
  } else if (aleatoryAttack == 2) {
    enemyAttack = 'Agua'
  } else {
    enemyAttack = 'Tierra'
  }

  battle()
}

function battle() {
  let spanPlayerLives = document.getElementById('player-lives')
  let spanEnemyLives = document.getElementById('enemy-lives')

  if (enemyAttack == playerAttack) {
    createMessage("Empate")
  } else if ((playerAttack == 'Fuego' && enemyAttack == 'Tierra') || (playerAttack == 'Agua' && enemyAttack == 'Fuego') || (playerAttack == 'Tierra' && enemyAttack == 'Agua')) {
    createMessage("Ganaste")
    enemyLives--
    spanEnemyLives.innerHTML = enemyLives
  } else {
    createMessage("Perdiste")
    playerLives--
    spanPlayerLives.innerHTML = playerLives
  }

  reviewLives()
}

function reviewLives() {
  if (enemyLives == 0) {
    createEndMessage('Felicitaciones 🎉')
  } else if (playerLives == 0) {
    createEndMessage('Lo siento, perdistes 😞')
  }
}

function createMessage(result) {
  let sectionMessages = document.getElementById('messages')

  let paragraph = document.createElement('p')
  paragraph.innerHTML = 'Tu mokepon atacó con ' + playerAttack + ', el mokepon del enemigo atacó con ' + enemyAttack + ' - ' + result

  sectionMessages.appendChild(paragraph)
}

function createEndMessage(finalScore) {
  let sectionMessages = document.getElementById('messages')

  let paragraph = document.createElement('p')
  paragraph.innerHTML = finalScore

  sectionMessages.appendChild(paragraph)

  let buttonFire = document.getElementById('button-fire')
  buttonFire.disabled = true
  let buttonWater = document.getElementById('button-water')
  buttonWater.disabled = true
  let buttonEarth = document.getElementById('button-earth')
  buttonEarth.disabled = true

  let sectionRestart = document.getElementById('restart')
  sectionRestart.style.display = 'block'
}

function restartGame() {
  location.reload()
}

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)
