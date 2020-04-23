'use strict'
const store = require('../store.js')

const onGameOver = () => {
  const gameOver = 'Game Over'
  $('#game-message').show()
  $('#game-message').html(gameOver)
}

const announceWinner = winner => {
  const upperCaseWinner = winner.toUpperCase()
  $('#game-message').show()
  $('#game-message').html(`Winner is ${upperCaseWinner}`)
}

const placeGamePiece = (position, player) => {
  const upperCasePlayer = player.toUpperCase()
  $(position).html(upperCasePlayer)
}

const onTie = () => {
  $('#game-message').show()
  $('#game-message').html("It's a Tie!")
}

const gameStartSuccess = apiResponse => {
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('success')
  $('#game-message').text('Game has begun!')
  store.game = apiResponse.game
  console.log('ui.gameStartSuccess ran', apiResponse)
  console.log('Store: ', store)
}

const gameStartFailure = apiResponse => {
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('Issue with Game Engine!')
  console.log('ui.gameStartFailure ran')
}

const hideMessages = () => {
  $('#game-message').hide()
}

module.exports = {
  onGameOver,
  announceWinner,
  placeGamePiece,
  onTie,
  gameStartSuccess,
  gameStartFailure,
  hideMessages
}
