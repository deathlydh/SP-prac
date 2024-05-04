const { Station } = require('../models/models');
const ApiError = require('../error/ApiError');

class StationController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const station = await Station.create({ name });
            return res.json(station);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const station = await Station.findAll();
            return res.json(stations);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    
}

module.exports = new StationController();