const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
   const resource = req.body 
   
   Resource.add(resource)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;
