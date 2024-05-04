import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import RoutesList from '../components/RoutesList';

const Shop = () => {
    return (
        <Container>
        <Row className="mt-2">
            <Col md={20}>
               <RoutesList />
            </Col>
        </Row>
    </Container>
    );
};

export default Shop;