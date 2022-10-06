import React from 'react';
import MyButton from "./UI/button/MyButton";
import '../styles/App.css';
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <div className="post__image" >
                    <img style={{maxWidth: '500px'}} src={props.post.image} />
                </div>
            </div>
            <div className="post__btns"> 
                <strong style={{fontSize: '20px'}}>{props.number}. {props.post.title}</strong>
                <div style={{margin: '5px'}}>
                    Price: {props.post.price}{props.post.currency}
                </div>
                <div style={{margin: '5px'}}>
                    Medium: {props.post.Medium}
                </div>
                <div style={{margin: '5px'}}>
                    Material: {props.post.Material}
                </div>
                <div style={{margin: '5px'}}>
                    Year: {props.post.Year}
                </div>
                <div style={{margin: '5px'}}>
                    Size: {props.post.size}
                </div>
                <MyButton onClick={() => router.push(`/artpage/${props.post.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
