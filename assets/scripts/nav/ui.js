'use strict'

const displayHome = event => {
  $('.sign-up-view').css('display', 'none')
  $('.sign-in-view').css('display', 'none')
  $('.game-view').css('display', 'none')
  $('.home-view').css('display', 'flex')
  $('.change-password-view').css('display', 'none')
  $('#game-id-data').css('display','none')
  $('.game-id-display').css('display','none')
}

const displaySignIn = event => {
  $('.sign-up-view').css('display', 'none')
  $('.sign-in-view').css('display', 'flex')
  $('.game-view').css('display', 'none')
  $('.home-view').css('display', 'none')
  $('.change-password-view').css('display', 'none')
}

const displaySignUp = event => {
  $('.sign-up-view').css('display', 'flex')
  $('.sign-in-view').css('display', 'none')
  $('.game-view').css('display', 'none')
  $('.home-view').css('display', 'none')
  $('.change-password-view').css('display', 'none')
}

const displayGame = event => {
  $('.sign-up-view').css('display', 'none')
  $('.sign-in-view').css('display', 'none')
  $('.game-view').css('display', 'flex')
  $('.home-view').css('display', 'none')
  $('.change-password-view').css('display', 'none')
  $('#password').css('display','list-item')
  $('#signOut').css('display', 'list-item')
  $('#game').css('display', 'list-item')
  $('#signIn').css('display', 'none')
  $('#game-id-data').css('display','none')
  $('.game-id-display').css('display','none')
}

const displayChangePassword = event => {
  $('.sign-up-view').css('display', 'none')
  $('.sign-in-view').css('display', 'none')
  $('.game-view').css('display', 'none')
  $('.home-view').css('display', 'none')
  $('.change-password-view').css('display', 'flex')
  $('#game-id-data').css('display','none')
  $('.game-id-display').css('display','none')
}

const resetBoard = () => {
  $('.box').html("")
  $('game-message').html("")
  $('#game-message').css('display', 'none')
  $('#game-id-data').css('display','none')
  $('.game-id-display').css('display','none')
}

const displayIdForm = () => {
  $('#game-id-data').css('display','flex')
}

module.exports = {
  displayHome,
  displaySignIn,
  displaySignUp,
  displayGame,
  displayChangePassword,
  resetBoard,
  displayIdForm
}
