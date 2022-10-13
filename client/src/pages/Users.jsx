import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // useEffect(() =>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //                 const apiResponseJson = await response.json()
    //                 const users = apiResponseJson.users
    //                 console.log(users)
    //                 setUsers([...users])
    //     }
    //     fetchData();
    // }, [])

    return (
        <div>
            <h1>Our guests</h1>
            {
                users.map(user => (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <li>{user.id}. {user.name} lives in {user.address.city} in the {user.address.street} street</li>
                    </Link>
                ))
            }
        </div>
        // <UsersList
        //     items={users}
        //     renderItem={(user) =>
        //         <UserItem
        //             onClick={(user) => history('/users/' + user.id)}
        //             user={user}
        //             key={user.id}
        //         />}

        // />
    );
};

export default Users;