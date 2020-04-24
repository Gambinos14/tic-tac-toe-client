'use strict'
const store = require('../store.js')

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
  $('#game-start-message').show()
  $('#game-start-message').removeClass()
  $('#game-start-message').addClass('success')
  $('#game-start-message').text(`Game has begun! The game current game ID is: ${apiResponse.game.id}`)
  store.game = null
  store.game = apiResponse.game
  console.log('ui.gameStartSuccess ran', apiResponse)
  console.log('Store: ', store)
}

const gameStartFailure = apiResponse => {
  $('#game-start-message').show()
  $('#game-start-message').removeClass()
  $('#game-start-message').addClass('failure')
  $('#game-start-message').text('Issue with Game Engine!')
  console.log('ui.gameStartFailure ran')
}

const hideStartMessage = () => {
  $('#game-start-message').hide()
}

const updateGameComplete = apiResponse => {
  console.log('ui.updateGameComplete ran', apiResponse)
}

const updateGameFailed = apiResponse => {
  console.log('ui.updateGameFailed ran', apiResponse)
}

const getGameSuccess = apiResponse => {
  console.log('getGameSuccess ran', apiResponse)
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
}

const getGameFailed = apiResponse => {
  console.log('getGameFailed ran', apiResponse)
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
}

const allGamesSuccess = apiResponse => {
  console.log('allGamesSuccess ran', apiResponse)
}

const allGamesFailed = apiResponse => {
  console.log('allGamesFailed ran', apiResponse)
}

module.exports = {
  announceWinner,
  placeGamePiece,
  onTie,
  gameStartSuccess,
  gameStartFailure,
  hideStartMessage,
  updateGameComplete,
  updateGameFailed,
  getGameSuccess,
  getGameFailed,
  allGamesFailed,
  allGamesSuccess
}
