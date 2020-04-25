'use strict'

const displayHome = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').hide()
  $('.game-view').hide()
  $('.home-view').show()
  $('.change-password-view').hide()

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
}

const displaySignIn = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').css('display', 'flex')
  $('.game-view').hide()
  $('.home-view').hide()
  $('.change-password-view').hide()

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
}

const displaySignUp = () => {
  $('.sign-up-view').css('display', 'flex')
  $('.sign-in-view').hide()
  $('.game-view').hide()
  $('.home-view').hide()
  $('.change-password-view').hide()

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
}

const displayGame = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').hide()
  $('.game-view').css('display', 'flex')
  $('.home-view').hide()
  $('.change-password-view').hide()

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
}

const displayChangePassword = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').hide()
  $('.game-view').hide()
  $('.home-view').hide()
  $('.change-password-view').css('display', 'flex')

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
}

module.exports = {
  displayHome,
  displaySignIn,
  displaySignUp,
  displayGame,
  displayChangePassword,
}
