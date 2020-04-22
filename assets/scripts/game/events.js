'use strict'

const ui = require('./ui.js')

let gameCounter = 0
let gameBoard = new Array(9)

const onClick = event => {

  let gamePiece = null;
  if (gameCounter % 2 === 0) {
    gamePiece = 'X'
  } else {
    gamePiece = "O"
  }

  if (gameCounter < gameBoard.length) {
    gameCounter++
  } else {
    const gameOver = 'Game Over'
    $('#game-message').html(gameOver)
    return
  }

  const boxNumber = parseInt($(event.target).data('box-num'))
  if (!gameBoard[boxNumber]) {
    const gamePieceLower = gamePiece.toLowerCase()
    gameBoard[boxNumber] = gamePieceLower
  } else {
    return
  }

  $(event.target).html(gamePiece)

  if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== undefined) ||
    (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== undefined) ||
    (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== undefined) ||
    (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== undefined) ||
    (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== undefined)) {
    const winner = gamePiece
    $('#game-message').html(`Winner is ${gamePiece}`)
    gameCounter = 9
  } else if (gameCounter === 9 && (!((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== undefined) ||
    (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== undefined) ||
    (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== undefined) ||
    (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== undefined) ||
    (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== undefined) ||
    (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== undefined)))) {
    $('#game-message').html("It's a Tie!")
    }

  console.log(gameBoard)
}

module.exports = {
  onClick
}
