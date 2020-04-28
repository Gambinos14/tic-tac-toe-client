'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const currentMove = {
  game: {
    cell: {
      index: null,
      value: null
    },
    over: false
  }
}

let gameCounter = 0
let gameBoard = new Array(9)

const onClick = event => {
  // console.log('Counter: ', gameCounter)

  if (gameCounter % 2 === 0) {
    currentMove.game.cell.value = 'x'
  } else {
    currentMove.game.cell.value = 'o'
  }

  const boxNumber = parseInt($(event.target).data('box-num'))

  // Instead of returning the div number, logo images placed on the board would
  // trigger click events that returned a value of NaN for boxNumber and so the
  // onClick function would run to the end causing issues with the game logic.
  if (!boxNumber && boxNumber !== 0) {
    return
  }

  if (!gameBoard[boxNumber]) {
    gameBoard[boxNumber] = currentMove.game.cell.value
    currentMove.game.cell.index = boxNumber
  } else {
    return
  }

  if (gameCounter < gameBoard.length) {
    gameCounter++
  } else {
    return
  }

  // console.log(`place ${currentMove.game.cell.value} at position: ${boxNumber}`)
  ui.placeGamePiece(event.target, currentMove.game.cell.value)

  const gameWinner = ui.checkWinner(gameBoard)

  if (gameWinner) {
    currentMove.game.over = true
    ui.announceWinner(currentMove.game.cell.value)
    gameCounter = 9
    $('#gol')[0].play()
  } else if (gameCounter === 9 && !gameWinner) {
    currentMove.game.over = true
    ui.onTie()
  }

  api.updateGame(currentMove)
    .then(ui.updateGameComplete)
    .catch(ui.updateGameFailed)
}

const onRestart = () => {
  gameCounter = 0
  gameBoard = new Array(9)
  currentMove.game.cell.value = null
  currentMove.game.cell.index = null
  currentMove.game.over = false
  $('#gol')[0].pause()
  $('#gol')[0].currentTime = 0
  ui.resetBoard()
  api.startGame()
    .then(ui.gameStartSuccess)
    .catch(ui.gameStartFailure)
}

const getGameById = event => {
  event.preventDefault()
  const formData = $('#game-id').val()
  api.getGame(formData)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailed)
}

const allGames = () => {
  api.getAllGames()
    .then(ui.allGamesSuccess)
    .catch(ui.allGamesFailed)
}

const onGameStats = () => {
  api.gameStats()
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailed)
}

const onSelection = event => {
  onRestart()
  ui.confirmSelection($(event.target).attr('src'))
}

module.exports = {
  onClick,
  onRestart,
  getGameById,
  allGames,
  onGameStats,
  onSelection
}
