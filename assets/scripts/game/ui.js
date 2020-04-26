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
  $('#display-stats').hide()
}

const placeGamePiece = (position, player) => {
  $('#display-stats').hide()
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
  $('#display-stats').hide()
  $('#game-id-data').hide()
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
  $('#display-stats').hide()
  $('.game-id-display').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('ISSUE GETTING PREVIOUS GAME DATA')
  $('#game-message').show()
  console.log('allGamesFailed ran', apiResponse)
}

const checkWinner = array => {
  if (array.length !== 9) {
    return null
  }
  if (array[0] === array[1] && array[1] === array[2]) {
    return array[2]
  } else if (array[3] === array[4] && array[4] === array[5]) {
    return array[5]
  } else if (array[6] === array[7] && array[7] === array[8]) {
    return array[8]
  } else if (array[0] === array[3] && array[3] === array[6]) {
    return array[6]
  } else if (array[1] === array[4] && array[4] === array[7]) {
    return array[7]
  } else if (array[2] === array[5] && array[5] === array[8]) {
    return array[8]
  } else if (array[0] === array[4] && array[4] === array[8]) {
    return array[8]
  } else if (array[2] === array[4] && array[4] === array[6]) {
    return array[6]
  } else {
    return null
  }
}

const gameStatsSuccess = apiResponse => {
  console.log('gameStatsSuccess ran', apiResponse)
  let winsByX = 0
  let winsByO = 0
  const totalGamesComplete = apiResponse.games.length

  const callbackFunction = (element, index) => {
    const tempArray = apiResponse.games[index].cells
    const theWinner = checkWinner(tempArray)
    if (theWinner) {
      if (theWinner === 'x') {
        winsByX++
      } else if (theWinner === 'o') {
        winsByO++
      }
    }
  }

  apiResponse.games.forEach(callbackFunction)

  const gamesTied = totalGamesComplete - (winsByX + winsByO)

  const stats1 = (`
    <p class="underline"> Wins by X </p>
    <p> ${winsByX} </p>
    `)
  const stats2 = (`
    <p class="underline"> Wins by O </p>
    <p> ${winsByO} </p>
    `)
  const stats3 =(`
    <p class="underline"> Games Tied </p>
    <p> ${gamesTied} </p>
    `)

  $('#game-id-data').hide()
  $('.game-id-display').hide()
  $('.stats-wrapper1').html(stats1)
  $('.stats-wrapper2').html(stats2)
  $('.stats-wrapper3').html(stats3)
  $('#display-stats').css('display', 'flex')
}

const gameStatsFailed = apiResponse => {
  console.log('gameStatsFailed ran', apiResponse)
  $('#game-message').removeClass()
  $('#game-message').addClass('failure')
  $('#game-message').text('PROBLEM WITH GAME STATS')
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
  resetBoard,
  gameStatsSuccess,
  gameStatsFailed,
  checkWinner
}
