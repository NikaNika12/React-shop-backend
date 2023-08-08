import React, {useState} from 'react';
import { createSubject } from '../http/artAPI';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";



const CreateSubject = ({show, onHide}) => {
    const [value, setValue] = useState('')
    
    const addSubject = () => {
        createSubject({name: value}).then(data => {
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
                    Add Subject
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter name of subject"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addSubject}>Add</Button>
            </Modal.Footer>
        </Modal>
                
        /* <form>
            
            <div>Add subject</div>
            <MyInput
                value={value}
                onChange={event => setValue(event.target.value)}
                type="text"
                placeholder="Enter subject"
            />
            <MyButton onClick={addSubject}>Add</MyButton>
            </form> */
        
    );
};

export default CreateSubject;