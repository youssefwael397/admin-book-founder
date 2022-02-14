import React, { useEffect } from 'react'
import './NavBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import jwt from 'jsonwebtoken'
import { FaHome } from 'react-icons/fa';
import { FaHeadphones } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import AudioBooks from './../AudioBooks/AudioBooks';
import AboutReading from './../AboutReading/AboutReading';
import Help from './../Help/Help';
import Home from './../Home/Home';
import Admin from './../Admin/Admin'
import Login from './../Login/Login';
import { useState } from 'react';

function NavBar() {

    const [valid, setValid] = useState(null)
    const haram_encrypt = 'jlasdfkljkljfpi23*##(I)IRPOJjphsldhlcohasdihflwhlvn'
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        handleTokenValidate(token)
    }, [token])

    const handleTokenValidate = (token) => {
        try {
            jwt.verify(token, haram_encrypt)
            const token_decoded = jwt.decode(token);
            if (token_decoded.exp <= Date.now()) {
                setValid(true);
            } else {
                window.localStorage.clear()
            }
        } catch (error) {
            setValid(false)
        }
    }

    return (
        <Router>
            <Navbar className="bgColor" variant="dark" expand="lg">
                <Container>
                    <NavLink className="navbar-brand" exact to="/">Book <span>Founder</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <NavLink className="nav-link" exact to="/"><FaHome />  Home</NavLink>
                            <NavLink className="nav-link" exact to="/audiobooks"> <FaHeadphones /> Audio Books</NavLink>
                            <NavLink className="nav-link" exact to="/aboutreading"> <FaBook /> About Reading</NavLink>
                            <NavLink className="nav-link" exact to="/help"> <FaInfoCircle />  Help</NavLink>
                            <a className="nav-link" href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=youssefwael397gmail.com&tf=1" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i> Contact us</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/audiobooks">
                        <AudioBooks />
                    </Route>

                    <Route exact path="/aboutreading">
                        <AboutReading />
                    </Route>

                    <Route exact path="/help">
                        <Help />
                    </Route>

                    {
                        valid ?
                            (
                                <Route exact path="/admin">
                                    <Admin />
                                </Route>
                            ) :
                            (
                                <Route exact path="/admin">
                                    <Login />
                                </Route>
                            )
                    }

                </Switch>
            </div>
        </Router>
    )
}

export default NavBar;
