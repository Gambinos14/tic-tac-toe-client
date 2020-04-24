'use strict'

const config = require('../config.js')
const store = require('../store.js')

const startGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {}
  })
}

const updateGame = data => {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: data
  })
}

module.exports = {
  startGame,
  updateGame
}
