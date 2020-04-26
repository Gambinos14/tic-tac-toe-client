'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const currentMove = {
  game: {
    cell: {
      index: null,
      value: null,
    },
    over: false
  }
}

let gameCounter = 0
let gameBoard = new Array(9)

const onClick = event => {

  if (gameCounter % 2 === 0) {
    currentMove.game.cell.value = 'x'
  } else {
    currentMove.game.cell.value = "o"
  }

  const boxNumber = parseInt($(event.target).data('box-num'))

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

  ui.placeGamePiece(event.target, currentMove.game.cell.value)

  const gameWinner = ui.checkWinner(gameBoard)

  if (gameWinner) {
    currentMove.game.over = true
    ui.announceWinner(currentMove.game.cell.value)
    gameCounter = 9
  } else if (gameCounter === 9 && !gameWinner) {
    currentMove.game.over = true
    ui.onTie()
  }

  api.updateGame(currentMove)
    .then(ui.updateGameComplete)
    .catch(ui.updateGameFailed)
}

const onRestart = () => {
  gameCounter = 0;
  gameBoard = new Array(9)
  currentMove.game.cell.value = null
  currentMove.game.cell.index = null
  currentMove.game.over = false
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

module.exports = {
  onClick,
  onRestart,
  getGameById,
  allGames,
  onGameStats
}
