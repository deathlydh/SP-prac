import React, { useEffect, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Table, Container } from 'react-bootstrap';
import RouteItem from './RouteItem';
import { getAllTrips, getAllStations } from '../http/routesApi';


const RoutesList = observer(() => {
    const { trip } = useContext(Context)
    const [stationList, setStationList] = useState([]);

    const getAllStation = async () => {
        await getAllStations().then(res => setStationList(res));
    };

    useEffect(() => {
        getAllStation();
    }, []);

    return (
        <Container fluid> {/* Используйте fluid для растягивания на всю ширину */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ textAlign: 'center' }}>Пункт Отправления - Пункт назначения</th>
                    </tr>
                </thead>
                <tbody>
                    {stationList.length > 0 && stationList.map(trip => (
                        <RouteItem key={trip.id} trip={trip} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
});

export default RoutesList;