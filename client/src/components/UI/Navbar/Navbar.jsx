import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import MyButton from '../button/MyButton';
import { Context } from '../../..'; 
import {observer} from "mobx-react-lite";



const Navbar = observer(() => { //rerender in real time
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

    return (
        <div className='navbar'>
              <div className='navbar__links'>
                <div>Art Store</div>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
              {user.isAuth ?
              <div className='login__links'>
              <MyButton onClick={() => navigate('/admin')}>Admin</MyButton>
              <MyButton onClick={() => logOut()}>Log out</MyButton>
              <Link to="/users">Users</Link>
              </div>
              :
              <MyButton onClick={() => navigate("/login")}>Sign in</MyButton>
              }
          </div>
    );
});

export default Navbar;