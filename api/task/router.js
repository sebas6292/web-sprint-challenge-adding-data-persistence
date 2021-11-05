const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
   const task = req.body 
   
   Task.add(task)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            next(err)
        })
})
module.exports = router;
