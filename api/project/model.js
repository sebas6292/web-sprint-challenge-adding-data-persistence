const db = require('../../data/dbConfig')

function get() {
    return Promise.resolve('awesome')
}

function add() {
    return Promise.resolve('awesomeness')
}

module.exports = { get, add }