import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDirection from '../components/modals/CreateDirection';
import CreateRoutes from '../components/modals/CreateRoutes';

const Admin = () => {
  const [showDirection, setShowDirection] = useState(false)
  const [showRoutes, setShowRoutes] = useState(false)
  
    return (
        <Container className='d-flex flex-column'>
          <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setShowDirection(true)}>Добавить направление</Button>
          <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setShowRoutes(true)}>Добавить маршрут</Button>
          <CreateDirection show={showDirection} onHide={() => setShowDirection(false)}/>
          <CreateRoutes show={showRoutes} onHide={() => setShowRoutes(false)}/>
        </Container>
    );
};

export default Admin;