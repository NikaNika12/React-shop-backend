import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../..'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

const NaviBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    navigate("/login");
    user.setUser({})
    user.setIsAuth(false);
  }

  return (
      <Navbar bg="dark" variant="dark">
      <Container>
          <NavLink className="navlink" to="/gallery">Art Store</NavLink>
          <NavLink className="navlink" to="/about">About</NavLink>
          {user.isAuth ? (
            <Nav className="nav" style={{color: 'white'}}>
            <Button
                variant={"outline-light"}
                onClick={() => navigate('/admin')}
            >
                Admin Panel
            </Button>
            <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="button"
            >
                Log out
            </Button>
            </Nav>
          )   
          : (
            <Nav className="nav" style={{color: 'white'}}>
              <Button 
                variant={"outline-light"} 
                onClick={() => navigate('/login')}
              >
                Sign in
              </Button>
            </Nav>
          )
        }
    </Container>
    </Navbar>
  );
});

export default NaviBar;
