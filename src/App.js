import React from 'react';
import './App.scss';
import OwnerPicker from "./components/OwnerPicker/OwnerPicker";
import DataPage from "./components/DataPage/DataPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/noun_Rose.svg";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
import ZipCodePage from "./components/ZipCodePage/ZipCodePage";
import Home from "./components/Home/Home";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import SearchPage from "./components/SearchPage/SearchPage";
import citySVG from "./assets/381804685-vector.svg";

function App() {
    return (
        <div
            className="App"
             style={{backgroundImage: `url(${citySVG})`, height: "auto"}}
        >
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand className='navText'>
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
                    <NavbarCollapse>
                        <Nav className="mr-auto">
                            <LinkContainer to={'/'} className='navText'>
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/ownerPicker'} className='navText'>
                                <Nav.Link>Property Map</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/zipCodeAnalysis'} className='navText'>
                                <Nav.Link>Zip Code Analysis</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/ownerSearch'} className='navText'>
                                <Nav.Link>Owner Search</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/data'} className='navText'>
                                <Nav.Link>Data</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ownerPicker">
                        <OwnerPicker />
                    </Route>
                    <Route path="/data">
                        <DataPage />
                    </Route>
                    <Route path="/zipCodeAnalysis">
                        <ZipCodePage />
                    </Route>
                    <Route path="/ownerSearch">
                        <SearchPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
