import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { fetchOneArt } from '../http/artAPI';
import { Card, Container, Image, Row, Col } from "react-bootstrap";



const ArtPage = () => {
    const [art, setArt] = useState({info: []});
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchOneArt(id).then(data => setArt(data))
    }, [])

       

    return (
        <Container>
            <h2 className="m-2"><strong>{art.name}</strong></h2>
            <Row>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + art.img}/>
                <Card
                    className="d-flex flex-column align-items-center justify-content-between"
                    style={{width: 200, fontSize: 32, border: '2px solid lightgray', padding: 0, margin: "15px auto"}}
                >
                    <h3>
                        Price: {art.price} €
                    </h3>
                    {art.info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                )}
                </Card>
            </Row>
            <Col className="d-flex align-items-center justify-content-center m-3">
                <button 
                type="button" 
                class="btn btn-outline-secondary m-1"
                onClick={() => navigate('/gallery')}
                >
                    Back
                </button>
            </Col>
        </Container>
    );
};

export default ArtPage;
