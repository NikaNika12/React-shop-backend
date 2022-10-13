import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';


const UserItemPage  = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const history = useNavigate()
    
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data))
        }, [id]);
    
        return (
            <div>
                <MyButton onClick={() => history('/users')}>Back</MyButton>
                {user && (
                    <>
                        <h1>Page of the user: {user.name}</h1>
                        <p>{user.email}</p>
                        <div>{user.address.city} {user.address.street} {user.address.zipcode}</div>
                    </>
                )}
            </div>
        )
};

export default UserItemPage;