import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
                    <Navbar.Brand>philly-landlord-spotter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        )
    }
}
