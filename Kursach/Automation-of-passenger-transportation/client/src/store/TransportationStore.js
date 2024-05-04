import { makeAutoObservable } from "mobx";

export default class TransportationStore {
    constructor() {
        this._trips = []
        this._stations = []
        this._busstations = []
        this._selectedTrips = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 10 // Изменено на 10, чтобы соответствовать вашим маршрутам
        makeAutoObservable(this)
    }

    setTrips(trips) {
        this._trips = trips
    }

    setSelectedTrips(trips) {
        this._selectedTrips = trips
    }
    setStations(stations) {
        this._stations = stations
    }

    setBusstations(busstations) {
        this._busstations = busstations
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }
   

    get trips() {
        return this._trips
    }
    get stations() {
        return this._stations
    }
    get busstations() {
        return this._busstations
    }

    get selectedRoute() {
        return this._selectedRoute
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}