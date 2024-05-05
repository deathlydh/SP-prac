import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TRANSPORTATION_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const RouteItem = ({ trip }) => {
    const navigate = useNavigate();

    const handleRouteClick = () => {
        navigate(`${TRANSPORTATION_ROUTE}/${trip.id}`);
    };

    return (
        <tr onClick={handleRouteClick} style={{cursor: 'pointer'}}>
            <td colSpan={2}>{trip.departurePoint} - {trip.arrivalPoint}</td> 
        </tr>
    );
};

export default observer(RouteItem);
