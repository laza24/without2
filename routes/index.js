const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/production-houses', Controller.prodHouse)
router.get('/movies', Controller.index)
router.get('/movies/add', Controller.createForm)
router.post('/movies/add', Controller.create)
router.get('/movies/edit/:id', Controller.updateForm)
router.post('/movies/edit/:id', Controller.update)
router.get('/movies/delete/:id', Controller.destroy)

module.exports = router
