import {$authHost, $host} from "./index";

export const createTrip = async (availableSeats, price, departureTime, arrivalTime, hour) => {
    const {data} = await $authHost.post('/api/trip', {availableSeats, price, departureTime, arrivalTime, hour})
    return data
}

export const getAllTrips = async () => {
    const {data} = await $host.get('/api/trip')
    return data
}

export const getOneTrip = async (id) => {
    let {data} = await $host.get('/api/trip/' + id)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/trip')
    return data
}

export const updSeats = async (id, availableSeats) => {
    const {data} = await $authHost.put('api/trip/', {id, availableSeats})
    return data
}

export const createStation = async (departurePoint, arrivalPoint) => {
    const {data} = await $authHost.post('api/station', {departurePoint, arrivalPoint})
    return data
}

export const getAllStations = async () => {
    const {data} = await $host.get('/api/station')
    return data
}

export const getOneStations = async (id) => {
    const {data} = await $host.get('/api/station/' + id)
    return data
}

export const createBusstation = async (name) => {
    const {data} = await $authHost.post('api/busstation', name)
    return data
}

export const getAllBusstations = async () => {
    const {data} = await $host.get('/api/busstation')
    return data
}
