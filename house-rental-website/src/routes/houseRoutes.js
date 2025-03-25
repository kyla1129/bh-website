const express = require('express');
const HouseController = require('../controllers/houseController');

const router = express.Router();
const houseController = new HouseController();

function setRoutes(app) {
    router.get('/houses', houseController.getAllHouses.bind(houseController));
    router.get('/houses/:id', houseController.getHouseById.bind(houseController));

    app.use('/api', router);
}

module.exports = setRoutes;