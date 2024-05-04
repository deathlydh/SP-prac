import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

/*const TypeBar = observer(() => {
    const { route: transportationStore } = useContext(Context);
    
   /* return (
        <ListGroup>
            {transportationStore.routes.map(routeItem => // Исправлено на routeItem
                <ListGroup.Item
                 style={{cursor: 'pointer'}}
                 active={routeItem.id === transportationStore.selectedRoute?.id} // Исправлено на selectedRoute
                 onClick={() => transportationStore.setSelectedRoute(routeItem)} // Исправлено на setSelectedRoute и передан текущий маршрут
                 key={routeItem.id}
                 >
                    {routeItem.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar; */