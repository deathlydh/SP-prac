const { Trip } = require('../models/models');
const ApiError = require('../error/ApiError');

class TripController {
    async create(req, res, next) {
        try {
            let { availableSeats, price, departureTime, arrivalTime, hour } = req.body;
            const trip = await Trip.create({ availableSeats, price, departureTime, arrivalTime, hour });
            return res.json(trip);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const trips = await Trip.findAll();
            page = page || 1
        limit = limit || 9
            return res.json(trips);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const trip = await Trip.findByPk(id);
            if (!trip) {
                return next(ApiError.notFound('Поездка не найден'));
            }
            return res.json(trip);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async updatecountSeats(req, res, next) {
        try {
            const { id, availableSeats } = req.body;
            const updated = await Trip.update({availableSeats: availableSeats},{where: {id: id}});
            
            return res.json(updated);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
}

module.exports = new TripController();