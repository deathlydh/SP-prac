import React, { useState, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBusStation from '../components/modals/CreateBusStation'
import CreateDirection from '../components/modals/CreateDirection';
import CreateRoutes from '../components/modals/CreateRoutes';
import { Context } from '../index';
import UserList from '../components/UserList';
import { REGISTRATION_ROUTE, REGISTRATIONWORKER_ROUTE } from '../utils/consts';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'


const Admin = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const [showBusstation, setShowBusstation] = useState(false)
  const [showDirection, setShowDirection] = useState(false)
  const [showRoutes, setShowRoutes] = useState(false)
  
    return (
        <Container className='d-flex flex-column'>
          <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setShowBusstation(true)}>Добавить автовокзал</Button>
          <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setShowDirection(true)}>Добавить направление</Button>
          <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setShowRoutes(true)}>Добавить маршрут</Button>
          {user.user.role === 'ADMIN' && <Button
            variant={"outline-dark"}
            className='mt-4 p-2'
            onClick={() => navigate(REGISTRATIONWORKER_ROUTE)}
          >
            Зарегистрировать сотрудника
          </Button>}
          {
            user.user.role === 'ADMIN' && <UserList/>
          }
          
          <CreateBusStation show={showBusstation} onHide={() => setShowBusstation(false)}/>
          <CreateDirection show={showDirection} onHide={() => setShowDirection(false)}/>
          <CreateRoutes show={showRoutes} onHide={() => setShowRoutes(false)}/>
        </Container>
    );
};

export default observer(Admin);