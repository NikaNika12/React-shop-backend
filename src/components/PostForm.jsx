import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', price: ''})
    

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
        setPost({title:'', price: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type="text"
                placeholder="Title"
            />
            <MyInput
                value={post.price}
                onChange={event => setPost({...post, price: event.target.value})}
                type="text"
                placeholder="Price"
            />
            <MyInput
                value={post.size}
                onChange={event => setPost({...post, size: event.target.value})}
                type="text"
                placeholder="Size (W x H x D)"
            />
            <MyButton onClick={addNewPost}>Add artwork</MyButton>
        </form>
    );
};

export default PostForm;
