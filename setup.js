const pool = require('./config/connection')

const tablePh = `CREATE TABLE IF NOT EXISTS "ProductionHouses" (
    "id" SERIAL PRIMARY KEY,
    "name_prodHouse" VARCHAR(255) NOT NULL,
    "headquarters" VARCHAR(255) NOT NULL
);`
const tableMovies = `CREATE TABLE IF NOT EXISTS "Movies" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "released_year" INTEGER NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "ProductionHouseId" INTEGER NOT NULL,
    FOREIGN KEY ("ProductionHouseId") REFERENCES "ProductionHouses" ("id")
    );`

const drop = `DROP TABLE IF EXISTS "Movies", "ProductionHouseId";`

pool.query(drop, (err) => {
    if (err) console.log(err)
    else {
        pool.query(tablePh, (err) => {
            if (err) console.log(err)
            else {
                pool.query(tableMovies, (err) => {
                    if (err) console.log(err)
                    else {
                        console.log('Setup sucessfull')
                    }
                })
            }
        })
    }
})
