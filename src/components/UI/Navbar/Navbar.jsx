import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import MyButton from '../button/MyButton';
import { Context } from '../../..'; 
import {observer} from "mobx-react-lite";



const Navbar = observer(() => {
  const {user} = useContext(Context)
  const history = useNavigate()
    return (
        <div className='navbar'>
              <div className='navbar__links'>
                <div>Elena Canbulut Arts</div>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
              {user.isAuth ?
              <div className='login__links'>
              <MyButton onClick={() => history.push('/admin')}>Admin</MyButton>
              <MyButton onClick={() => history.push('/login')}>Log in</MyButton>
              <Link to="/users">Users</Link>
              </div>
              :
              <MyButton onClick={() => user.setIsAuth(true)}>Sign in</MyButton>
              }
          </div>
    );
});

export default Navbar;