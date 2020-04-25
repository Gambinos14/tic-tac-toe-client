'use strict'
const store = require('../store.js')

const announceWinner = winner => {
  const upperCaseWinner = winner.toUpperCase()
  $('#game-message').removeClass()
  $('#game-message').addClass('bannerMessage')
  $('#game-message').show()
  $('#game-message').html(`Winner is ${upperCaseWinner}`)
}

const resetBoard = () => {
  $('.game-box').html("")
  $('.game-box').css('background', '#f7faf7')
  $('#game-message').hide()
  $('#game-id-data').hide()
  $('.game-id-display').hide()
}

const placeGamePiece = (position, player) => {
  $('#game-message').hide()
  $('.game-id-display').hide()
  $('#game-id-data').hide()
  const upperCasePlayer = player.toUpperCase()
  $(position).css('background', 'transparent').html(upperCasePlayer)
}

const onTie = () => {
  $('#game-message').removeClass()
  $('#game-message').addClass('bannerMessage')
  $('#game-message').show()
  $('#game-message').html("It's a Tie!")
}

const gameStartSuccess = apiResponse => {
  $('#game-message').removeClass()
  $('#game-message').addClass('success')
  $('#game-message').text(`Game has begun! The current game ID is: ${apiResponse.game.id}`)
  $('#game-message').show()
  store.game = null
  store.game = apiResponse.game
  console.log('ui.gameStartSuccess ran', apiResponse)
}

const gameStartFailure = apiResponse => {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('Issue with Game Engine!')
  $('#game-message').show()
  console.log('ui.gameStartFailure ran')
}

const updateGameComplete = apiResponse => {
  console.log('ui.updateGameComplete ran', apiResponse)
}

const updateGameFailed = apiResponse => {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('Issue Sending The Last Move...')
  $('#game-message').show()
  console.log('ui.updateGameFailed ran', apiResponse)
}

const getGameSuccess = apiResponse => {
  const gameCells = apiResponse.game.cells
  const childrenObj = $('.apiReturnBoard').children()
  const boardArray = Object.values(childrenObj)
  boardArray.forEach((element, index) => {
    if (gameCells[index]) {
      const toUpper = gameCells[index].toUpperCase()
      $(boardArray[index]).text(toUpper)
    } else {
      $(boardArray[index]).text(gameCells[index])
    }
  })
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
  $('.game-id-display').show()
  console.log('getGameSuccess ran', apiResponse)
}

const getGameFailed = apiResponse => {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('PLEASE TRY AGAIN')
  $('#game-message').show()
  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
  console.log('getGameFailed ran', apiResponse)
}

const allGamesSuccess = apiResponse => {
  $('.game-id-display').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('bannerMessage')
  if (apiResponse.games.length === 1) {
    $('#game-message').text('WELCOME, THIS IS YOUR FIRST GAME')
  } else {
    $('#game-message').text(`YOU'VE PLAYED ${apiResponse.games.length} GAMES`)
  }
  $('#game-message').show()
  console.log('allGamesSuccess ran', apiResponse)
}

const allGamesFailed = apiResponse => {
  $('.game-id-display').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('ISSUE GETTING PREVIOUS GAME DATA')
  $('#game-message').show()
  console.log('allGamesFailed ran', apiResponse)
}

module.exports = {
  announceWinner,
  placeGamePiece,
  onTie,
  gameStartSuccess,
  gameStartFailure,
  updateGameComplete,
  updateGameFailed,
  getGameSuccess,
  getGameFailed,
  allGamesFailed,
  allGamesSuccess,
  resetBoard
}
