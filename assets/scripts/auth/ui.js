'use strict'

const store = require('../store.js')
const navUi = require('../nav/ui.js')

const signUpSuccess = apiResponse => {
  navUi.displaySignIn()
  $('#sign-up').trigger('reset')
  // console.log(apiResponse)
}

const signUpFailed = apiResponse => {
  $('#sign-up-message').addClass('failure')
  $('#sign-up-message').text('Sign Up Failed. Please Try Again!')
  $('#sign-up-message').show()
  $('#sign-up').trigger('reset')
  // console.log('Issue with Sign Up', apiResponse)
}

const signInSuccess = apiResponse => {
  navUi.displaySelection()
  $('#nav-btn').hide()
  $('#signIn').hide()
  $('#home').hide()
  $('#signOut').css('display', 'list-item')
  $('#sign-in').trigger('reset')

  store.user = apiResponse.user
  // console.log("Current User: ", store.user)
}

const signInFailed = apiResponse => {
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Sign In Failed. Please Try Again!')
  $('#sign-in-message').show()
  $('#sign-in').trigger('reset')
  // console.log('Issue with Sign In', apiResponse)
}

const signOutSuccess = apiResponse => {
  navUi.displayHome()
  $('#password').hide()
  $('#signOut').hide()
  $('#game').hide()
  $('#signIn').show()
  $('#nav-btn').show()
  $('#home').show()
  store.user = null
  // console.log('ui.signOutSuccess ran')
}

const signOutFailed = apiResponse => {
  $('#universal-failure').show()
  $('#universal-failure').addClass('failure')
  $('#universal-failure').text('Please Try Again....')
  // console.log('ui.singOutFailed ran')
}

const changePasswordSuccess = apiResponse => {
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('success')
  $('#change-password-message').text('Password Successfully Changed!')
  $('#change-password-message').show()
  $('#change-pw').trigger('reset')
  // console.log('ui.changePasswordSuccess ran')
}

const changePasswordFailed = apiResponse => {
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('failure')
  $('#change-password-message').text('Please Try Again...')
  $('#change-password-message').show()
  $('#change-pw').trigger('reset')
  // console.log('ui.changePasswordFailed ran')
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
