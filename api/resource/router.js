const router = require('express').Router()
// const Recipe = require('./recipes-model')

router.get('/', (req, res, next) => {
        
})

router.post('/', (req, res, next) => {
        
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside project router',
        message: err.message, 
        stack: err.stack,
    })
})

module.exports = router;
