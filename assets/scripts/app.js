'use strict'

// $display-hide: none;
// $display-show: flex;

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')

$(() => {
  $('.col-4').on('click', gameEvents.onClick)
  $('#home').on('click', event => {
    $('.sign-up-view').css('display', 'none')
    $('.sign-in-view').css('display', 'none')
    $('.game-view').css('display', 'none')
    $('.home-view').css('display', 'flex')
  })
  $('#signIn').on('click', event => {
    $('.sign-up-view').css('display', 'none')
    $('.sign-in-view').css('display', 'flex')
    $('.game-view').css('display', 'none')
    $('.home-view').css('display', 'none')
  })
  $('#nav-btn').on('click', event => {
    $('.sign-up-view').css('display', 'flex')
    $('.sign-in-view').css('display', 'none')
    $('.game-view').css('display', 'none')
    $('.home-view').css('display', 'none')
  })
})
