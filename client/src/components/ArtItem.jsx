import React from 'react';
import {useNavigate} from "react-router-dom"
import Image from "react-bootstrap/Image";


const ArtItem = ({art}) => {
    const navigate = useNavigate()
    return (
        
        <div className="post">
            <div className="post__content">
                <div className="post__image" >
                    <Image width={200} height={150} src={process.env.REACT_APP_API_URL + art.image} />
                </div>
            </div>
            <div className="post__btns"> 
                <strong style={{fontSize: '20px'}}>{art.id}. {art.name}</strong>
                <div style={{margin: '5px'}}>
                    Price: {art.price}{art.currency}
                </div>
                <div style={{margin: '5px'}}>
                    Size: {art.size}
                </div>
                <div style={{display: 'flex', gap: "5px", justifyContent: "center", alignItems: "center", marginTop: "15px"}}>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => navigate("/artpage"+ '/' + art.id)}
                    >
                        Open
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-success btn-sm"
                    >
                        Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => art.remove(art)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
       
    );
};

export default ArtItem;


