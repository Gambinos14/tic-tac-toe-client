'use strict'

const onGameOver = () => {
  const gameOver = 'Game Over'
  $('#game-message').css('display','block')
  $('#game-message').html(gameOver)
}

const announceWinner = winner => {
  const upperCaseWinner = winner.toUpperCase()
  $('#game-message').css('display','block')
  $('#game-message').html(`Winner is ${upperCaseWinner}`)
}

const placeGamePiece = (position, player) => {
  const upperCasePlayer = player.toUpperCase()
  $(position).html(upperCasePlayer)
}

const onTie = () => {
  $('#game-message').css('display','block')
  $('#game-message').html("It's a Tie!")
}

module.exports = {
  onGameOver,
  announceWinner,
  placeGamePiece,
  onTie
}
