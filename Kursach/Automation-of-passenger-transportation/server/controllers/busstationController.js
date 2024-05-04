const { BusStation } = require('../models/models');
const ApiError = require('../error/ApiError');

class BusStationController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const busStation = await BusStation.create({ name });
            return res.json(busStation);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const busStations = await BusStation.findAll();
            return res.json(busStations);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    
}

module.exports = new BusStationController();