import React, {useState} from 'react';
import Like from "../pictures/Like.jpg";
import Dislike from "../pictures/Dislike.jpg";

const Counter = function () {
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    const [likeactive, setlikeactive] = useState(false)
    const [dislikeactive, setdislikeactive] = useState(false)

    function likef() {
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
        } else {
            setlikeactive(true)
            setlike(like+1)
            if(dislikeactive){
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
            }
        }
    }

    function dislikef() {
        if(dislikeactive){
            setdislikeactive(false)
            setdislike(dislike-1)
        } else {
            setdislikeactive(true)
            setdislike(dislike+1)
            if(likeactive){
                setlikeactive(false)
                setdislike(dislike+1)
                setlike(like-1)
            }
        }
    }

    return (
        <div className='like_buttons m-2'>
            <button 
            onClick={likef} 
            className={[likeactive ? "active-like": null, "button"].join("")}
            style={{margin: "0"}}
            >
                <img style={{height: "20px"}} src={Like}/>
                <span>Like {like}</span>
            </button>
            <button 
            onClick={dislikef} 
            className={[dislikeactive ? "active-dislike": null, "button"].join("")}
            style={{margin: "0"}}
            >
                <img style={{height: "20px"}} src={Dislike}/>
                <span>Dislike {dislike}</span>
            </button> 
        </div>
    )
}

export default Counter;