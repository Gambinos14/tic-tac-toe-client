'use strict'

const store = require('../store.js')
const navUi = require('../nav/ui.js')
const gameApi = require('../game/api.js')
const gameUi = require('../game/ui.js')

const signUpSuccess = apiResponse => {
  $('#sign-up').trigger('reset')
  navUi.displaySignIn()
  console.log(apiResponse)
}

const signUpFailed = apiResponse => {
  $('#sign-up-message').addClass('failure')
  $('#sign-up-message').text('Sign Up Failed. Please Try Again!')
  $('#sign-up').trigger('reset')
  console.log("Issue with Sign Up", apiResponse)
}

const signInSuccess = apiResponse => {
  navUi.displayGame()
  $('#nav-btn').hide()
  store.user = apiResponse.user
  $('#sign-in').trigger('reset')
  gameApi.startGame()
    .then(gameUi.gameStartSuccess)
    .catch(gameUi.gameStartFailure)
}

const signInFailed = apiResponse => {
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Sign In Failed. Please Try Again!')
  $('#sign-in').trigger('reset')
  console.log("Issue with Sign In", apiResponse)
}

const signOutSuccess = apiResponse => {
  navUi.displayHome()
  $('#password').css('display','none')
  $('#signOut').css('display', 'none')
  $('#game').css('display', 'none')
  $('#signIn').css('display', 'list-item')
  $('#nav-btn').show()
  store.game = null
  store.user = null
  console.log('ui.signOutSuccess ran', store)
}

const signOutFailed = apiResponse => {
  $('#universal-failure').show()
  $('#universal-failure').addClass('failure')
  $('#universal-failure').text('Please Try Again....')
  console.log('ui.singOutFailed ran')
}

const changePasswordSuccess = apiResponse => {
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('success')
  $('#change-password-message').text('Password Successfully Changed!')
  $('#change-pw').trigger('reset')
  console.log('ui.changePasswordSuccess ran')
}

const changePasswordFailed = apiResponse => {
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('failure')
  $('#change-password-message').text('Please Try Again...')
  $('#change-pw').trigger('reset')
  console.log('ui.changePasswordFailed ran')
}


module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
  changePasswordSuccess,
  changePasswordFailed
}
