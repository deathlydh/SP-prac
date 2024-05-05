const { Station } = require('../models/models');
const ApiError = require('../error/ApiError');

class StationController {
    async create(req, res, next) {
        try {
            const { departurePoint, arrivalPoint } = req.body;
            const station = await Station.create({ departurePoint, arrivalPoint });
            return res.json(station);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const stations = await Station.findAll();
            return res.json(stations);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const station = await Station.findOne({where: {id: id}});
            return res.json(station);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    
}

module.exports = new StationController();