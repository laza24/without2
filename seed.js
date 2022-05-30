const pool = require('./config/connection')
const dataPh = require('./productionHouses.json')

let query = `INSERT INTO "ProductionHouses" ("name_prodHouse", "headquarters") VALUES `

query +=
    dataPh
        .map((ph) => `('${ph.name_prodHouse}', '${ph.headquarters}')`)
        .join(',\n') + ';'

pool.query(query, (err) => {
    if (err) console.log(err)
    else {
        console.log('Table Seeded')
    }
})
