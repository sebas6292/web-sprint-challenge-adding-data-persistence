// build your `Task` model here
const db = require('../../data/dbConfig')

async function find(task_id) {
    const taskRows = await db('task as t')
        .where('task_id', task_id)
        return taskRows
    // return db('task as t')
    //     .leftJoin('resource as r', 'p.project_id', 'r.project_id')
    //     .select('t.*')
    // return Promise.resolve('awesome')
}

function add(task) {
    return db('task').insert(task)
    .then(([task_id]) => {
        return db('task').where('task_id', task_id).first()
    })
    // return Promise.resolve(`${task}`)
}

module.exports = { find, add }