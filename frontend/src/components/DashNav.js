import React from 'react';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/nav-brand.svg';
import { Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

function DashNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        alt="logo"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Item className="brand-text">your name.</Nav.Item>
    </Nav>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
        <Link to="/" className="nav-text">
            <Nav.Item>
                logout
            </Nav.Item>
        </Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default DashNav;