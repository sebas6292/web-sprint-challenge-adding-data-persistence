const db = require('../../data/dbConfig')

function get() {
    return db('project as p')
        .leftJoin('resource as r', 'p.project_id', 'r.project_id')
        .select('p.*')
    // return Promise.resolve('awesome')
}

function add(project) {
    return db('project').insert(project)
    .then(([project_id]) => {
        return db('project').where('project_id', project_id).first()
    })
    // return Promise.resolve(`${project}`)
}

module.exports = { get, add }