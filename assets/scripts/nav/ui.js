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
  $('#display-stats').hide()

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
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
  $('#display-stats').hide()

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
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
  $('#display-stats').hide()

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
}

const displayGame = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').hide()
  $('.game-view').css('display', 'flex')
  $('.home-view').hide()
  $('.change-password-view').hide()
  $('.icon-choice').hide()

  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-up-message').hide()
  $('#game-message').hide()
  $('#universal-failure').hide()
  $('#display-stats').hide()

  $('#game-id-data').trigger('reset')
  $('#game-id-data').hide()
  $('.game-id-display').hide()

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
}

const displaySelection = () => {
  $('.sign-up-view').hide()
  $('.sign-in-view').hide()
  $('.game-view').hide()
  $('.home-view').hide()
  $('.change-password-view').hide()
  $('.icon-choice').css('display', 'flex')
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
  $('#display-stats').hide()

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
}

module.exports = {
  displayHome,
  displaySignIn,
  displaySignUp,
  displayGame,
  displayChangePassword,
  displaySelection
}
