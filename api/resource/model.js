// build your `Resource` model here
const db = require('../../data/dbConfig')

function get() {
    return db('resource as r')
        .leftJoin('resource as r', 'r.resource_id', 'r.resource_id')
        .select('r.*')
    // return Promise.resolve('awesome')
}

function add(resource) {
    return db('resource').insert(resource)
    .then(([resource_id]) => {
        return db('resource').where('resource_id', resource_id).first()
    })
    // return Promise.resolve(`${resource}`)
}

module.exports = { get, add }