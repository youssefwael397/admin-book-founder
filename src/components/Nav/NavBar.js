import React, { useEffect } from "react";
import "./NavBar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import jwt from "jsonwebtoken";
import Admin from "./../Admin/Admin";
import Login from "./../Login/Login";
import { useState } from "react";

function NavBar() {
  const [valid, setValid] = useState(null);
  const haram_encrypt = "jlasdfkljkljfpi23*##(I)IRPOJjphsldhlcohasdihflwhlvn";
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    handleTokenValidate(token);
  }, [token]);

  const handleTokenValidate = (token) => {
    try {
      jwt.verify(token, haram_encrypt);
      const token_decoded = jwt.decode(token);
      if (token_decoded.exp <= Date.now()) {
        setValid(true);
      } else {
        window.localStorage.clear();
      }
    } catch (error) {
      setValid(false);
    }
  };

  return (
    <Router>
      <Navbar className="bgColor" variant="dark" expand="lg">
        <Container>
          <NavLink className="navbar-brand" exact to="/">
            Book <span>Founder</span>
          </NavLink>
          <div className="mx-auto fs-4 text-white">Admin Panel</div>
        </Container>
      </Navbar>
      <div>{valid ? <Admin /> : <Login />}</div>
    </Router>
  );
}

export default NavBar;
