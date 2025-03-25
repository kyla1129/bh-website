class HouseModel {
    constructor(id, title, description, location, price, imageUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static createHouse(houseData) {
        // Logic to create a new house entry in the database
    }

    static getHouses() {
        // Logic to retrieve all houses from the database
    }

    static findHouseById(id) {
        // Logic to find a house by its ID in the database
    }
}

export default HouseModel;