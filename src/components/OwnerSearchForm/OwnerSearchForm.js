import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './OwnerSearchForm.scss';
import {makeUseAxios} from "axios-hooks";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import fuzzyMatchLandlords from "../../utils/fuzzyMatching/fuzzyMatching";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MapModal from "../MapModal/MapModal";

const useAxios = makeUseAxios({
    axios: axios.create({baseURL: 'https://www.landlord-spotter-backend.xyz/'})
});

export default function OwnerSearchForm() {
    // eslint-disable-next-line no-unused-vars
    const [dataRes, refetch] = useAxios('/api/landlords');
    const [inputValue, setInputValue] = useState('');
    const [stringMatches, setStringMatches] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [ownerToDisplay, setOwnerToDisplay] = useState('');
    const [displayWarning, setDisplayWarning] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data_keys = Object.keys(dataRes.data);
        const matches = fuzzyMatchLandlords(inputValue, data_keys, 10);
        setStringMatches(matches);
        setShowResults(true);

    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleMapButton = (e) => {
        e.preventDefault();
        setShowModal(true);
        setOwnerToDisplay(e.target.value);
        setDisplayWarning(true);
    };

    const handleZipButton = (e) => {
        e.preventDefault();
    };


    if (dataRes.loading) {
        return (
            <div style={{marginTop: '10vh'}}>
                <Container className='SearchFormContainer' style={{padding: '2vw', textAlign: 'center'}}>
                    <Spinner animation="border" variant="light" size={'lg'}>
                        <span className="sr-only">Getting Search Data...</span>
                    </Spinner>
                    <p>Getting Search Data...</p>
                </Container>
            </div>
        )
    } else if (dataRes.error) {
        return (
            <Container className='SearchFormContainer' style={{padding: '2vw'}}>
                <Alert variant='danger'>Error getting search data!</Alert>
            </Container>
        )
    } else {
        if (!showResults) {
            return (
                <div className='SearchFormContainer'>
                    <Container>
                        <h1>Owner Search Form</h1>
                        <Form inline onSubmit={handleSubmit}>
                            <Row className='SearchFormFormRow'>
                                <Col lg={10} noGutters={true}>
                                    <Form.Control
                                        id='OwnerSearchForm'
                                        placeholder="Owner"
                                        onChange={handleInputChange}
                                        className='SearchFormForm'
                                    />
                                </Col>
                                <Col lg={2}>
                                    <Button type="submit" variant='dark' className='SearchFormButton'>Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            )
        } else {
            return (
                <div className='SearchFormContainer'>
                    <Container>
                        <h1>Owner Search Form</h1>
                        <Form inline onSubmit={handleSubmit}>
                            <Row className='SearchFormFormRow'>
                                <Col lg={10} noGutters={true}>
                                    <Form.Control
                                        id='OwnerSearchForm'
                                        placeholder="Owner"
                                        onChange={handleInputChange}
                                        className='SearchFormForm'
                                        text={inputValue}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <Button type="submit" className='SearchFormButton'>Search</Button>
                                </Col>
                            </Row>
                        </Form>
                        <div className='resultsSection'>
                            {
                                displayWarning
                                ? <Alert variant='warning'>
                                    There is a known bug where you cannot view the same map twice. To remedy this, try
                                    refreshing the page.
                                </Alert>
                                : <div/>
                            }
                            <h3>Results</h3>
                            {
                                (stringMatches.length > 0)
                                    ? <div>
                                        <ListGroup>
                                            {
                                                stringMatches.map(owner => {
                                                    return (
                                                        <ListGroup.Item className='OwnerSearchFormListGroup'>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col lg={4} md={4} xs={12}>
                                                                        <p>{owner.item}</p>
                                                                    </Col>
                                                                    <Col lg={2} md={2} xs={12}>
                                                                        <Badge variant="secondary">
                                                                            Score: {(100 - (owner.score * 100)).toFixed(2)}
                                                                        </Badge>
                                                                    </Col>
                                                                    <Col lg={2} md={2} xs={12}>
                                                                        <Button
                                                                            onClick={handleMapButton}
                                                                            value={owner.item}
                                                                            variant='secondary'
                                                                        >
                                                                            View Map
                                                                        </Button>
                                                                    </Col>
                                                                    <Col lg={2} md={2} xs={12}>
                                                                        <Button
                                                                            onClick={handleZipButton}
                                                                            value={owner.item}
                                                                            disabled
                                                                            variant='secondary'
                                                                        >
                                                                            Zip Analysis
                                                                        </Button>
                                                                    </Col>
                                                                    <Col lg={2} md={2} xs={12}>
                                                                        <CopyToClipboard text={owner.item}>
                                                                            <Button variant='secondary'>Copy Owner</Button>
                                                                        </CopyToClipboard>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </ListGroup.Item>
                                                    )
                                                })
                                            }
                                        </ListGroup>
                                        <MapModal show={showModal} onHide={() => setShowModal(false)} owner={ownerToDisplay}/>
                                    </div>
                                    : <h5>There were no results.</h5>
                            }
                        </div>
                    </Container>
                </div>
            )
        }

    }
}
