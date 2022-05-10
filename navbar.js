import React, {Component, useContext } from "react";

import { Link, useHistory } from "react-router-dom";
import { NavBar, NavDropdown, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    const history = useHistory();
    const handleLogOut = () => {
        localStorage.clear();
        history.push("/");
        location.reload();
    };

    return (
        <NavBar className="navbar" bg="white" expand="lg">
            <Container>
                <NavBar.Brand>
                    <Link to="/">
                        <img
                            src="./images/Logo.jpg"
                            width="200"
                            height="120"
                            className="logo d-inline-block align-top"
                            alt="Ninetales"
                        />
                    </Link>
                </NavBar.Brand>
                <p className="description">
                    Read something, and if you like it, share it with a friend.
                    <br />
                    Please help me make the internet interesting!
                </p>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />

                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!login.isLogged() && <Nav.Link href="/login">Login</Nav.Link>}
                        {!login.isLogged() && <Nav.Link href="/register">Sign Up</Nav.Link>}
                        {login.isLogged() && <Nav.Link href="/userDashboard">My Liked Stuff</Nav.Link>}
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
};