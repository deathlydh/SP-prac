import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Form, FormControl } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import { createStation, createTrip, getAllBusstations, getAllStations, getAllTrips } from '../../http/routesApi';

const CreateRoutes = observer(({ show, onHide }) => {
  const { trip } = useContext(Context);
    const[availableSeats, setavaibleSeats] = useState('')
    const[price, setPrice] = useState('')
    const[departureTime, setDepartureTime] = useState('')
    const[arrivalTime, setArrivalTime] = useState('')
    const[hour, setHour] = useState('')
    const[busstation, setBusstation] = useState('')
    const[departurePoint, setDeparturePoint] = useState('')
    const[arrivalPoint, setArrivalPoint] = useState('')

    const getAll = async () => {
        await getAllBusstations().then(data => trip.setBusstations(data))
        await getAllStations().then(data => trip.setStations(data))
       // await getAllTrips().then(res => trip.setTrips(res))
    }

    useEffect(() => {
       getAll()
    }, []);

    const addTrip = async () => {
      const formData = new FormData()
      formData.append('avaibleSeats', `${availableSeats}`) //Хз какой ключ бля у него name
      formData.append('price', `${price}`)
      formData.append('departureTime', departureTime)
      formData.append('arrivalTime', arrivalTime)
      formData.append('hour', `${hour}`)
      formData.append('stationId', trip.selectedStation.id)
      formData.append('busstationId', trip.selectedBusstation.id)
      await createTrip(availableSeats, price, departureTime, arrivalTime, hour).then(data => onHide())
      // await createStation(departurePoint, arrivalPoint)
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить маршрут
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Select aria-label="Default select example"  className='mb-3' onChange={(e) => setBusstation(e.target.value)}>
                  <option>Выберите автовокзал</option>
                  {trip.busstations.map(route => 
                    <option key={route.id} value={route.name}>{route.name}</option>
                  )}
              </Form.Select>
              {/* <Form.Select aria-label="Default select example" className='mb-3' onChange={(e) => setDeparturePoint(e.target.value)}>
                  <option>Выберите автовокзал отбытия</option>
                  {trip.stations.map(station => 
                    <option key={station.id} value={station.departurePoint}>{station.departurePoint}</option>
                  )}
              </Form.Select>
              <Form.Select aria-label="Default select example"  onChange={(e) => setArrivalPoint(e.target.value)}>
                  <option>Выберите автовокзал прибытия</option>
                  {trip.stations.map(station => 
                    <option key={station.id} value={station.arrivalPoint}>{station.arrivalPoint}</option>
                  )}
              </Form.Select> */}
                    <FormControl
                        value={availableSeats}
                        onChange={e => setavaibleSeats(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите количество свободных мест'
                        type='number'
                    />
                    <FormControl
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость билета'
                        type='number'
                    />
                    <FormControl
                        value={departureTime}
                        onChange={e => setDepartureTime(e.target.value)}
                        className='mt-3'
                        placeholder='Введите время отбытия'
                        type='time'
                    />
                    <FormControl
                        value={arrivalTime}
                        onChange={e => setArrivalTime(e.target.value)}
                        className='mt-3'
                        placeholder='Время прибытия'
                        type='time'
                    />
                    <FormControl
                        value={hour}
                        onChange={e => setHour(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Количество часов'
                        type='number'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTrip}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateRoutes;
