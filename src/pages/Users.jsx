import React, {useEffect, useState} from 'react';
import UserItem from '../components/UserItem';
import UsersList from '../components/UsersList';
import {useNavigate} from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    const history = useNavigate();

    useEffect(() =>{
        async function fetchData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
                    const apiResponseJson = await response.json()
                    const users = apiResponseJson.users
                    console.log(users)
                    setUsers([...users])
        }
        fetchData();
    }, [])

    return (
        <UsersList
            items={users}
            renderItem={(user) =>
                <UserItem
                    onClick={(user) => history.push('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}

        />
    );
};

export default Users;