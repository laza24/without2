const Model = require('../models/model')

class Controller {
    static prodHouse(req, res) {
        Model.prodHouse((err, datas) => {
            if (err) res.send(err)
            else {
                res.render('production-houses', { datas })
            }
        })
    }

    static index(req, res) {
        Model.index((err, datas) => {
            if (err) res.send(err)
            else {
                res.render('movies/index', { datas })
            }
        })
    }

    static createForm(req, res) {
        Model.createForm((err, datas) => {
            if (err) res.send(err)
            else {
                res.render('movies/create', { datas })
            }
        })
    }

    static create(req, res) {
        const { name, released_year, genre, ph } = req.body
        const data = {
            name,
            genre,
            ph,
            released_year: +released_year,
        }
        Model.create(data, (err, datas) => {
            if (err) res.send(err)
            else {
                res.redirect('/movies')
            }
        })
    }

    static updateForm(req, res) {
        const id = +req.params.id
        Model.createForm((err, ph) => {
            if (err) res.send(err)
            else {
                Model.updateForm(id, (err, movie) => {
                    if (err) res.send(err)
                    else {
                        console.log(ph, movie)
                        res.render('movies/update', { ph, movie })
                    }
                })
            }
        })
    }

    static update(req, res) {
        const { name, released_year, genre, ph } = req.body
        const data = {
            id: +req.params.id,
            name,
            genre,
            ph: +ph,
            released_year: +released_year,
        }
        Model.update(data, (err, datas) => {
            if (err) res.send(err)
            else res.redirect('/movies')
        })
    }

    static destroy(req, res) {
        const id = +req.params.id
        Model.destroy(id, (err, datas) => {
            if (err) res.send(err)
            else {
                res.redirect('/movies')
            }
        })
    }
}

module.exports = Controller
