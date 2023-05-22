import React from "react";
import "../css/header.css";
import { Nav, Navbar } from 'react-bootstrap';


function Header() {

    return (
        <Navbar id="van" className=""  expand="lg" > <div className="col-1"></div>
            <img id="logo" className="img-fluid" src="logo.png"></img>
            <div className="col-2"></div> <div className="col-2"></div>  <div className="col-2"></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="col-10 mr-auto sm-my-3 md-my-3">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#about1">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#full">Project</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>
                    <br></br>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;