// build your `Task` model here
const db = require('../../data/dbConfig')

function get() {
    return db('task as t')
        .leftJoin('resource as r', 't.task_id', 'r.task_id')
        .select('t.*')
    // return Promise.resolve('awesome')
}

function add(task) {
    return db('task').insert(task)
    .then(([task_id]) => {
        return db('task').where('task_id', task_id).first()
    })
    // return Promise.resolve(`${task}`)
}

module.exports = { get, add }