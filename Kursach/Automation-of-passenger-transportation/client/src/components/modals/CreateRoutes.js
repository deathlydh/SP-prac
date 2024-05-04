import React, { useContext } from 'react';
import { Dropdown, Form, FormControl } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';

//const [currentRoute, setCurrentRoute] = useState({})
const CreateRoutes = ({show, onHide}) => {
  const { trip: transportationStore } = useContext(Context)
    return (
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить маршрут
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
              <Dropdown.Toggle>Выберите направление</Dropdown.Toggle>
              <Dropdown.Menu>
              {transportationStore.trips && transportationStore.trips.map(routeItem => 
  <Dropdown.Item key={routeItem.id}>{routeItem.departurePoint}-{routeItem.arrivalPoint}</Dropdown.Item>
)}
              </Dropdown.Menu>
            </Dropdown>
            <FormControl
              className='mt-3' 
              placeholder='Введите количество свободных мест'
              type = 'number'
            />
            <FormControl
              className='mt-3' 
              placeholder='Введите стоимость билета'
              type = 'number'
            />
            <FormControl
              className='mt-3' 
              placeholder='Введите время отбытия'
              type = 'time'
            />
            <FormControl
              className='mt-3' 
              placeholder='Время прибытия'
              type = 'time'
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal> 
    );
};

export default observer(CreateRoutes);
