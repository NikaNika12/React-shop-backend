import React from 'react';
import {useNavigate} from "react-router-dom"
import MyButton from './UI/button/MyButton';


const PostItem = ({art}) => {
    const history = useNavigate()
    return (
        
        <div className="post">
            <div className="post__content">
                <div className="post__image" >
                    <img style={{maxWidth: '500px'}} src={art.image} />
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
                <MyButton onClick={() => history("/artpage"+ '/' + art.id)}>
                    Open
                </MyButton>
                <MyButton onClick={() => art.remove(art)}>
                    Delete
                </MyButton>
                <MyButton>
                    Edit
                </MyButton>
            </div>
        </div>
       
    );
};

export default PostItem;


