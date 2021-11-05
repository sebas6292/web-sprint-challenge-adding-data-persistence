const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.find()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
    // try {
    //     const project = await Project.find()
    //     res.json(project)
    //    } catch (err) {
    //        next(err)
    //    }
})

router.post('/', (req, res, next) => {
   const project = req.body 
   
   Project.add(project)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;