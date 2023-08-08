import React, {useState} from 'react';
import { createMedium } from '../http/artAPI';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const CreateMedium = ({show, onHide}) => {
    const [value, setValue] = useState('')
    
    const addMedium = () => {
        createMedium({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Medium
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter name of medium"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addMedium}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMedium;