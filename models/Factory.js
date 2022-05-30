const { ProductionHouses, Movie } = require('./class')

class Factory {
    static prodHouse(arr) {
        return arr.map(
            (ph) =>
                new ProductionHouses(ph.id, ph.name_prodHouse, ph.headquarters)
        )
    }

    static oneMovies(obj) {
        return new Movie(
            obj.id,
            obj.name,
            obj.released_year,
            obj.genre,
            obj.ProductionHouseId,
            obj.ProductionName
        )
    }

    static manyMovies(arr) {
        return arr.map(
            (movie) =>
                new Movie(
                    movie.id,
                    movie.name,
                    movie.released_year,
                    movie.genre,
                    movie.ProductionHouseId,
                    movie.ProductionName
                )
        )
    }
}

module.exports = Factory
