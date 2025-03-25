class HouseController {
    constructor(houseModel) {
        this.houseModel = houseModel;
    }

    async getAllHouses(req, res) {
        try {
            const houses = await this.houseModel.getHouses();
            res.status(200).json(houses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving houses', error });
        }
    }

    async getHouseById(req, res) {
        const houseId = req.params.id;
        try {
            const house = await this.houseModel.findHouseById(houseId);
            if (house) {
                res.status(200).json(house);
            } else {
                res.status(404).json({ message: 'House not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving house', error });
        }
    }
}

module.exports = HouseController;