// build your `Resource` model here
const db = require('../../data/dbConfig')

async function find(resource_id) {
    const resourceRows = await db('resource as r')
        .where('resource_id', resource_id)
        return resourceRows
    // return db('resource as r')
    //     .leftJoin('task as t', 'p.project_id', 'r.project_id')
    //     .select('p.*')
    // return Promise.resolve('awesome')
}

function add(resource) {
    return db('resource').insert(resource)
    .then(([resource_id]) => {
        return db('resource').where('resource_id', resource_id).first()
    })
    // return Promise.resolve(`${resource}`)
}

module.exports = { find, add }