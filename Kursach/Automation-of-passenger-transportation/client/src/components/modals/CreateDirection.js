import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { createStation } from '../../http/routesApi';

const CreateDirection = ({show, onHide}) => {
  const [departurePoint, setDeparturePoint] = useState('');
  const [arrivalPoint, setArrivalPoint] = useState('');
  const addStation = () => {
    console.log('Добавление направления...');
    console.log('Точка отправления:', departurePoint);
    console.log('Точка прибытия:', arrivalPoint);

    createStation(departurePoint, arrivalPoint)
      .then(data => {
        console.log('Направление успешно добавлено:', data);
        setDeparturePoint('');
        setArrivalPoint('');
        onHide();
      })
      .catch(error => {
        console.error('Ошибка при добавлении направления:', error);
      });
  };
    return (
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить направление
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                value={departurePoint}
                onChange={e => setDeparturePoint(e.target.value)}
                placeholder="Введите точку отправления"
            />
            <Form.Control className='mt-3'
               value={arrivalPoint}
               onChange={e => setArrivalPoint(e.target.value)}
               placeholder="Введите точку прибытия"
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addStation}>Добавить</Button>
      </Modal.Footer>
    </Modal> 
    );
};

export default CreateDirection;