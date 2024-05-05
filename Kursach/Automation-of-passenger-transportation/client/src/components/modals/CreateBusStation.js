import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { createBusstation } from '../../http/routesApi';

const CreateBusStation = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addBusstation = () => {
    createBusstation({name: value}).then(data => {
        setValue('')
        onHide()
    })
  }
    return (
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить автовокзал
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={"Введите название автовокзала"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addBusstation}>Добавить</Button>
      </Modal.Footer>
    </Modal> 
    );
};

export default CreateBusStation;