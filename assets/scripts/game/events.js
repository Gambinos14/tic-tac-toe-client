'use strict'

const ui = require('./ui.js')

// currentMove
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

  if (gameCounter < gameBoard.length) {
    gameCounter++
  } else {
    ui.onGameOver()
    return
  }

  const boxNumber = parseInt($(event.target).data('box-num'))
  if (!gameBoard[boxNumber]) {
    gameBoard[boxNumber] = currentMove.game.cell.value
  } else {
    return
  }

  ui.placeGamePiece(event.target, currentMove.game.cell.value)

  if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== undefined) ||
    (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== undefined) ||
    (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== undefined) ||
    (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== undefined) ||
    (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== undefined)) {
    const winner = currentMove.game.cell.value
    ui.announceWinner(winner)
    gameCounter = 9
  } else if (gameCounter === 9 && (!((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== undefined) ||
    (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== undefined) ||
    (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== undefined) ||
    (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== undefined) ||
    (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== undefined)))) {
    ui.onTie()
  }

  console.log(currentMove)
}

module.exports = {
  onClick
}
