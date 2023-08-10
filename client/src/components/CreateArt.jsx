import React, {useContext, useEffect, useState} from 'react';
import { Context } from '..';
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import { createArt, fetchMediums, fetchSubjects} from '../http/artAPI';

const CreateArt = observer(({show, onHide}) => {
    const {art} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    

    useEffect(() => {
        fetchSubjects().then(data => art.setSubjects(data))
        fetchMediums().then(data => art.setMediums(data))
    }, []) //подгружаются в модальном окне

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addArt = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('subjectId', art.selectedSubject.id)
        formData.append('mediumId', art.selectedMedium.id)
        formData.append('info', JSON.stringify(info))
        createArt(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Artwork
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{art.selectedSubject.name || "Choose subject"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {art.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => art.setSelectedSubject(subject)}
                                    key={subject.id}
                                >
                                    {subject.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{art.selectedMedium.name || "Choose medium"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {art.mediums.map(medium =>
                                <Dropdown.Item
                                    onClick={() => art.setSelectedMedium(medium)}
                                    key={medium.id}
                                >
                                    {medium.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter art title"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Enter art price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new characteristic
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Title"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addArt}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});
    
export default CreateArt;
