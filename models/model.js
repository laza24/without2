const pool = require('../config/connection')
const Factory = require('./Factory')

class Model {
    static prodHouse(callback) {
        const query = `SELECT * FROM "ProductionHouses" ORDER BY "name_prodHouse" ASC`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                const ph = Factory.prodHouse(data.rows)
                callback(null, ph)
            }
        })
    }

    static index(callback) {
        const query = `SELECT m."id", m."name", m."released_year", m."genre", m."ProductionHouseId", p."name_prodHouse" AS "ProductionName"  FROM "Movies" m
        INNER JOIN "ProductionHouses" p ON m."ProductionHouseId" = p."id"
        ORDER BY m."released_year" DESC`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                const movie = Factory.manyMovies(data.rows)
                callback(null, movie)
            }
        })
    }

    static createForm(callback) {
        const query = `SELECT * FROM "ProductionHouses" ORDER BY "name_prodHouse" ASC`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                const ph = Factory.prodHouse(data.rows)
                callback(null, ph)
            }
        })
    }

    static create(body, callback) {
        const query = {
            text: `INSERT INTO "Movies" ("name", "released_year", "genre", "ProductionHouseId") VALUES ($1, $2, $3, $4)`,
            values: [body.name, body.released_year, body.genre, body.ph],
        }

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                callback(null, data)
            }
        })
    }

    static updateForm(id, callback) {
        const query = `SELECT m."id", m."name", m."released_year", m."genre", m."ProductionHouseId", p."name_prodHouse" AS "ProductionName"  FROM "Movies" m
        INNER JOIN "ProductionHouses" p ON m."ProductionHouseId" = p."id"
        WHERE m."id" = ${id}`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                const update = Factory.oneMovies(data.rows[0])
                callback(null, update)
            }
        })
    }

    static update(data, callback) {
        const { id, name, released_year, genre, ph } = data
        const query = `UPDATE "Movies" SET "name" = '${name}', "released_year" = ${released_year}, "genre" = '${genre}', "ProductionHouseId" = ${ph} WHERE "id" = ${id}`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                callback(null, data)
            }
        })
    }

    static destroy(id, callback) {
        const query = `DELETE FROM "Movies" WHERE "id" = ${id}`

        pool.query(query, (err, data) => {
            if (err) callback(err)
            else {
                callback(null, data)
            }
        })
    }
}

module.exports = Model
