import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Table, Container } from 'react-bootstrap';
import RouteItem from './RouteItem';
import { getAllTrips } from '../http/routesApi';

const RoutesList = () => {
    const { trip } = React.useContext(Context);
    const [routeList, setRouteList] = useState([]);

    const getTrips = async () => {
        await getAllTrips().then(res => setRouteList(res));
    };

    useEffect(() => {
        getTrips();
    }, []);

    return (
        <Container fluid> {/* Используйте fluid для растягивания на всю ширину */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ textAlign: 'center' }}>Отправление - Пункт назначения</th>
                    </tr>
                </thead>
                <tbody>
                    {routeList.length > 0 && routeList.map(trip => (
                        <RouteItem key={trip.id} route={trip} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default observer(RoutesList);