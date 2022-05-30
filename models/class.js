class ProductionHouses {
    constructor(id, name_prodHouse, headquarters) {
        this.id = id
        this.name_prodHouse = name_prodHouse
        this.headquarters = headquarters
    }
}

class Movie {
    constructor(
        id,
        name,
        released_year,
        genre,
        ProductionHouseId,
        ProductionName
    ) {
        this.id = id
        this.name = name
        this.released_year = released_year
        this.genre = genre
        this.ProductionHouseId = ProductionHouseId
        this.ProductionName = ProductionName
    }
}

module.exports = { ProductionHouses, Movie }
