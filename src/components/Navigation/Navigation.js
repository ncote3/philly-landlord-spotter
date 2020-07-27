import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import logo from './../../assets/noun_Rose.svg'
import {Link}  from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
                    <Navbar.Brand>
                        <Link to={'/'}>
                            <img src={logo}
                                 width="30"
                                 height="30"
                                 alt="philly-landlord-spotter logo"
                                 style={{marginRight: '.5vw'}}
                             />
                            philly-landlord-spotter
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto">

                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/data'}>Data</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
