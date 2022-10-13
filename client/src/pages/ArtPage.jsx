import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import Counter from '../components/Counter';
import { fetchOneArt } from '../http/deviceAPI';



const ArtPage = () => {
    const [art, setArt] = useState({});
    const {id} = useParams();
    const history = useNavigate();
    
    useEffect(() => {
        fetchOneArt(id).then(data => setArt(data))
    }, [])

       

    return (
        <div>
                <h1><strong>{art.id}. {art.name}</strong></h1>
                <img src={art.image} />
                <Counter/>
                <div style={{margin: '5px'}}>
                    Price: {art.price} {art.currency}
                </div>
                <div style={{margin: '5px'}}>
                    Medium: {art.Medium}
                </div>
                <div style={{margin: '5px'}}>
                    Material: {art.Material}
                </div>
                <div style={{margin: '5px'}}>
                    Year: {art.Year}
                </div>
            <MyButton onClick={() => history('/gallery')}>Back</MyButton>
            <MyButton onClick={() => history('/basket')}>Add to basket</MyButton>
        </div>
    );
};

export default ArtPage;
