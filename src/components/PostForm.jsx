import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    //const {device} = useContext(Context)
    const [post, setPost] = useState({title: '', material: '', price: '', size: '', year: ''})
    

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
        setPost({title: '', material: '', price: '', size: '', year: ''})
    }

    return (
        <form>
            <div>Create Artwork</div>
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
                placeholder="Material"
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
            <MyInput
                value={post.price}
                onChange={event => setPost({...post, price: event.target.value})}
                type="text"
                placeholder="Year"
            />
            <MyButton onClick={addNewPost}>Add artwork</MyButton>
//             <Dropdown className="mt-2 mb-2">
//                         <Dropdown.Toggle>{device.selectedSubject.name || "Choose subject"}</Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             {device.subject.map(type =>
//                                 <Dropdown.Item
//                                     onClick={() => device.selectedSubject(type)}
//                                     key={type.id}
//                                 >
//                                     {type.name}
//                                 </Dropdown.Item>
//                             )}
//                         </Dropdown.Menu>
//                     </Dropdown>
//             <Dropdown className="mt-2 mb-2">
//                         <Dropdown.Toggle>{device.selectedMedium.name || "Choose medium"}</Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             {device.medium.map(type =>
//                                 <Dropdown.Item
//                                     onClick={() => device.selectedMedium(type)}
//                                     key={type.id}
//                                 >
//                                     {type.name}
//                                 </Dropdown.Item>
//                             )}
//                         </Dropdown.Menu>
//                     </Dropdown>
               <MyInput

                type="file"
            />
        </form>
    );
};

export default PostForm;
