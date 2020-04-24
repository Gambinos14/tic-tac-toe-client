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
  const displayStatus = $('#game-message').css('display')
  console.log('Display status: ' + displayStatus)
  if (displayStatus === 'block') {
    $('#game-message').hide()
  }
}

const onTie = () => {
  $('#game-message').show()
  $('#game-message').html("It's a Tie!")
}

const gameStartSuccess = apiResponse => {
  $('#game-start-message').show()
  $('#game-start-message').removeClass()
  $('#game-start-message').addClass('success')
  $('#game-start-message').text(`Game has begun! The current game ID is: ${apiResponse.game.id}`)
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
  $('#game-move-status').show()
  $('#game-move-status').removeClass()
  $('#game-move-status').addClass('failure')
  $('#game-move-status').text('Issue Logging The Last Move...')
  console.log('ui.updateGameFailed ran', apiResponse)
}

const getGameSuccess = apiResponse => {
  console.log('getGameSuccess ran', apiResponse)
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
  const gameCells = apiResponse.game.cells
  const boardChildren = $('.apiReturnBoard').children()
  const boardArray = Object.values(boardChildren)
  boardArray.forEach((element, index) => {
    if (gameCells[index]) {
      const toUpper = gameCells[index].toUpperCase()
      $(boardArray[index]).text(toUpper)
    } else {
      $(boardArray[index]).text(gameCells[index])
    }
  })

  $('.game-id-display').show()
}

const getGameFailed = apiResponse => {
  console.log('getGameFailed ran', apiResponse)
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
}

const allGamesSuccess = apiResponse => {
  $('.game-id-display').css('display', 'none')
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('bannerMessage')
  $('#game-message').text(`YOU'VE PLAYED ${apiResponse.games.length} GAMES`)
  console.log('allGamesSuccess ran', apiResponse)
}

const allGamesFailed = apiResponse => {
  $('.game-id-display').css('display', 'none')
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('ISSUE GETTING PREVIOUS GAME DATA')
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
  allGamesSuccess,
}
