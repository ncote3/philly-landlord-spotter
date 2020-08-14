import React from "react";
import './MapModal.scss';
import {makeUseAxios} from "axios-hooks";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import MapboxPropertyMap from "../MapboxPropertyMap/MapboxPropertyMap";
import Modal from 'react-bootstrap/Modal'

const useAxios = makeUseAxios({
    axios: axios.create({baseURL: 'https://www.landlord-spotter-backend.xyz/'})
});

export default function MapModal(props) {
    const landlordLink = '/api/landlords-and-properties/' + props.owner;
    // eslint-disable-next-line no-unused-vars
    const [landlordRes, landlordRefetch] = useAxios(landlordLink);

    if (landlordRes.loading) {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="MapModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Property Map
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='MapModalLoading'>
                        <Spinner animation="border" variant="light" size={'lg'} >
                            <span className="sr-only">Getting Owner Data...</span>
                        </Spinner>
                        <p>Getting Owner Data..</p>
                    </div>`
                </Modal.Body>
            </Modal>
        )
    } else if (landlordRes.error) {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="MapModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Property Map
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant='danger'>Error getting owner data!</Alert>
                </Modal.Body>
            </Modal>
        )
    } else {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="MapModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Property Map
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <MapboxPropertyMap
                            landlord={props.owner}
                            data={landlordRes.data}
                            loading={landlordRes.loading}
                            error={landlordRes.error}
                        />
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}