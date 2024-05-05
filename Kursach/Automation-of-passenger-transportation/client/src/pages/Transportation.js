import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row, Modal} from "react-bootstrap";
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getOneStations, getOneTrip, updSeats } from '../http/routesApi';




const Transportation = () => {
  const {id} = useParams()
  const [dictionary, setDictionary] = useState({
    id: 'ID',
    //departurePoint: "Точка отбытия",
    //arrivalPoint: "Точка прибытия",
    availableSeats: "Свободные места",
    price: "Цена",
    departureTime: "Время отбытия",
    arrivalTime: "Время прибытия",
    hour: "Время в пути (часов)"
  })

  
  const [currentStation, setCurrentStation] = useState({})
  const [seatCount, setSeatCount] = useState(0)
  const [show, setShow] = useState(false)
  
  const formatTimeFromDB = (dbTime) => {
    const date = new Date(dbTime); 
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('en-US', options); 
  };


  useEffect(() => {  
    getOneTrip(id).then(res => setCurrentStation(res))
    setSeatCount(currentStation.availableSeats)
  }, [seatCount])

  useEffect(() => {
    currentStation.id && getOneStations(id).then(res => setCurrentStation({...currentStation, ...res}))
  }, [currentStation.id])

console.log(currentStation)
  const buySeat = async () => {
    await updSeats(currentStation.id, currentStation.availableSeats - 1).then(res => setSeatCount(seatCount-1))
    setShow(true)
  }

    return (
      <div style={{height: '40vw'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        {currentStation && <h1>Маршрут {currentStation.departurePoint}-{currentStation.arrivalPoint}</h1>}
        <Table striped bordered hover className='w-50 me-auto ms-auto mt-5'>
          <thead>
              <tr>
                {
                  currentStation && Object.keys(currentStation).slice(0, 6).map((title, i) => 
                  <th>{dictionary[title]}</th>)
                }
                <th></th>
              </tr>
          </thead>
          <tbody>
          <tr >
                {
                  currentStation && Object.values(currentStation).slice(0, 6).map(title => 
                  <td>{title}</td>)
                }
                <td><Button onClick={buySeat}>Купить</Button></td>
          </tr>

          </tbody>
        </Table>
        <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Успех</Modal.Title>
    </Modal.Header>
    <Modal.Body>Билет приобретен успешно!!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShow(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
      </div>

    );
};

export default Transportation;