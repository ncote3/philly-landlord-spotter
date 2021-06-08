import React from "react";
import './OwnerSearchExplainer.scss';
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

export default function OwnerSearchExplainer() {
    return (
        <div className='explainerContainer'>
            <Container>
                <h1>Explainer</h1>
                <Tab.Container id="list-group-tabs" defaultActiveKey="#score">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item variant='secondary' action href="#score">
                                    Score
                                </ListGroup.Item>
                                <ListGroup.Item variant='secondary' action href="#viewMap">
                                    View Map
                                </ListGroup.Item>
                                <ListGroup.Item variant='secondary' action href="#zipAnalysis">
                                    Zip Analysis
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#score">
                                    <p>
                                        Score refers to the closeness of the term entered and the results. The score is
                                        generated by a fuzzy string matching library called
                                        <a href='https://fusejs.io/'> fuze.js</a>. If you are interested in how it is
                                        calculated it can be found in their
                                        <a href='https://fusejs.io/concepts/scoring-theory.html'> documentation</a>.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#viewMap">
                                    <p>
                                        This button will display a modal of a <i>Property Map</i> that is
                                        respective to the owner selected.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#zipAnalysis">
                                    <p>
                                        The <i>View Map</i> button is currently disabled for users. This button is intended
                                        to redirect the user to a <i>Zip Code Analysis</i> that is respective to the owner
                                        selected.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}