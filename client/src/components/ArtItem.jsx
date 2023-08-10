import React from 'react';
import {useNavigate} from "react-router-dom"
import Image from "react-bootstrap/Image";


const ArtItem = ({art, number}) => {
    const navigate = useNavigate()
    return (
        
        <div className="post">
            <div className="post__content">
                <div className="post__image" >
                    <Image width={200} height={150} src={process.env.REACT_APP_API_URL + art.img} />
                </div>
            </div>
            <div className="post__btns"> 
                <strong style={{fontSize: '20px'}}>{number}. {art.name}</strong>
                <div style={{margin: '5px'}}>
                    Price: {art.price} €
                </div>
                <div>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => navigate("/artpage"+ '/' + art.id)}
                    >
                        Open
                    </button>
                </div>
            </div>
        </div>
       
    );
};

export default ArtItem;


