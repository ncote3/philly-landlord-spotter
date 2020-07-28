import React from 'react';
import './App.css';
import OwnerPicker from "./components/OwnerPicker/OwnerPicker";
import DataPage from "./components/DataPage/DataPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/noun_Rose.svg";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
import ZipCodePage from "./components/ZipCodePage/ZipCodePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>
                            <img src={logo}
                                 width="30"
                                 height="30"
                                 alt="philly-landlord-spotter logo"
                                 style={{marginRight: '.5vw'}}
                            />
                            philly-landlord-spotter
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Nav className="mr-auto">
                        <LinkContainer to={'/'}><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to={'/data'}><Nav.Link>Data</Nav.Link></LinkContainer>
                        <LinkContainer to={'/zipCodeAnalysis'}><Nav.Link>Zip Code Analysis</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <OwnerPicker />
                    </Route>
                    <Route path="/data">
                        <DataPage />
                    </Route>
                    <Route path="/zipCodeAnalysis">
                        <ZipCodePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
