import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import RoutesList from '../components/RoutesList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { getAllBusstations, getAllStations, getAllTrips } from '../http/routesApi';

const Shop = observer(() => {
    const {trip} = useContext(Context)

    useEffect(() => {
        getAllBusstations()
            .then(data => trip.setBusstations(data))
            .catch(error => console.error('Ошибка при получении автовокзалов:', error));
    
        //getAllStations()
          //  .then(data => trip.setStations(data))
           //s .catch(error => console.error('Ошибка при получении станций:', error));
    
        getAllTrips()
            .then(data => trip.setTrips(data))
            .catch(error => console.error('Ошибка при получении маршрутов:', error));
    }, []);

    return (
        <Container>
        <Row className="mt-2">
            <Col md={3}>
                <TypeBar />
            </Col>
            <Col md={9}>
            <RoutesList />
            </Col>
        </Row>
    </Container>
    );
});

export default Shop;