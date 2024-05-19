import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const { trip } = useContext(Context); // Изменено на trip
    
    return (
        <div>
            <strong>Автовокзалы</strong>
            <ListGroup>
                {trip.busstations.map(busstation => // Изменено на trip
                    <ListGroup.Item
                     style={{cursor: 'pointer', border: busstation.id === trip.selectedBusstation.id ? '1px solid blue' : ''}}
                     active={busstation.id === trip.setSelectedBusstation.id} // Изменено на trip.setSelectedBusstation
                     onClick={() => trip.setSelectedBusstation(busstation)} // Изменено на trip.setSelectedBusstation
                     key={busstation.id}
                     >
                        {busstation.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default TypeBar;
