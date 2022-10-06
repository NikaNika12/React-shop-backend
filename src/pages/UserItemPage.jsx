import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';


const UserItemPage  = () => {

    const [user, setUser] = useState(null)
    const params = useParams()
    const history = useNavigate()

    useEffect(() =>{
        async function fetchUser(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
                const apiResponseJson = await response.json()
                const user = apiResponseJson.user
                setUser(user)
            } catch (e) {
                alert(e)
            }
        }
        fetchUser();
    }, [])
    
    

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;