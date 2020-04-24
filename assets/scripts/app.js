'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')
const navUi = require('./nav/ui.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('.game-box').on('click', gameEvents.onClick)
  $('#home').on('click', navUi.displayHome)
  $('#signIn').on('click', navUi.displaySignIn)
  $('#nav-btn').on('click', navUi.displaySignUp)
  $('#password').on('click', navUi.displayChangePassword)
  $('#game').on('click', navUi.displayGame)
  $('#restart').on('click', gameEvents.onRestart)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#game-by-id').on('click', navUi.displayIdForm)
  $('#game-id-data').on('submit', gameEvents.getGameById)
  $('#all-games').on('click', gameEvents.allGames)
})
