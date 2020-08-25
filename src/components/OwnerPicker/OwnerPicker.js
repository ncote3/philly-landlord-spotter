import React, {useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from "react-bootstrap/ListGroup";
import './OwnerPicker.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import MapboxPropertyMap from "../MapboxPropertyMap/MapboxPropertyMap";
import Container from "react-bootstrap/Container";
import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'
import Badge from 'react-bootstrap/Badge';

const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://www.landlord-spotter-backend.xyz/' })
})

export default function OwnerPicker() {
    const [selectedOwner, setSelectedOwner] = useState('COMMONWEALTH OF PENNSYLVA')

    const significantLandlords = '/api/significant-sorted-landlords/';
    const landlordLink = '/api/landlords-and-properties/' + selectedOwner;
    // eslint-disable-next-line no-unused-vars
    const [significantLandlordsRes, refetch] = useAxios(significantLandlords);

    // eslint-disable-next-line no-unused-vars
    const [landlordRes, landlordRefetch] = useAxios(landlordLink);

    if (significantLandlordsRes.loading) {
        return (
            <div
                className='ownerPickerWrapper'
                style={{
                    paddingTop: '10vh',
                    textAlign: "center"
                }}
            >
                <Container>
                    <div className='ownerLoading'>
                        <Spinner animation="border" variant="light" size={'lg'} >
                            <span className="sr-only">Getting Owner Data...</span>
                        </Spinner>
                        <p>Getting Owner Data..</p>
                    </div>
                </Container>
            </div>
        )
    } else if (significantLandlordsRes.error) {
        return (
            <div className='ownerPickerWrapper'>
                <Container>
                    <Alert variant='danger'>Error getting owner data!</Alert>
                </Container>
            </div>
        )
    } else {
        if (landlordRes.loading) {
            return (
                <div className='ownerPickerWrapper'>
                    <Container
                        style={{
                            paddingBottom: '1vw'
                        }}
                        className='ownerPickerContainer'
                    >
                        <Row lg={2} sm={1} xs={1}>
                                <Col>
                                    <div style={{ marginTop: '10vh' }}>
                                        <Spinner animation="border" variant="light" size={'lg'} >
                                            <span className="sr-only">Loading Map and Points...</span>
                                        </Spinner>
                                        <p>Loading Map and Points...</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h3>Landlord Selector</h3>
                                        <br/>
                                        <ListGroup
                                            defaultActiveKey={'COMMONWEALTH OF PENNSYLVA'}
                                            className='scrollable OwnerPickerListGroup'
                                        >
                                            {
                                                significantLandlordsRes.data.info.map(owners => {
                                                    return (
                                                        <ListGroup.Item
                                                            action
                                                            value={owners[0]}
                                                            eventKey={owners[0]}
                                                            onClick={() => setSelectedOwner(owners[0])}
                                                            className='OwnerPickerListGroupItem'
                                                        >
                                                            <p style={{ margin: '0px' }}>{owners[0]}</p>
                                                            <p style={{ margin: '0px', fontSize: '10pt' }}>
                                                                Owns {owners[1]} properties
                                                            </p>
                                                        </ListGroup.Item>
                                                    )
                                                })
                                            }
                                        </ListGroup>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </div>

            )
        } else if (landlordRes.error) {
            return (
                <div className='ownerPickerWrapper'>
                    <h3>Error! Map!</h3>
                </div>
            )
        } else {
            return (
                <div className='ownerPickerWrapper'>
                    <Container className='ownerPickerContainer'>
                        <Row lg={2} sm={1} xs={1}>
                            <Col>
                                <MapboxPropertyMap
                                    landlord={selectedOwner}
                                    data={landlordRes.data}
                                    loading={landlordRes.loading}
                                    error={landlordRes.error}
                                />
                                <div className='badgeContainer'>
                                    <Badge className={'b1950'}>Before 1950</Badge>
                                    <Badge className={'b2000'}>Before 2000</Badge>
                                    <Badge className={'b2010'}>Before 2010</Badge>
                                    <Badge className={'b2015'}>Before 2015</Badge>
                                    <Badge className={'b2020'}>Before 2020</Badge>
                                    <Badge className={'bUnknown'}>Unknown</Badge>
                                </div>
                            </Col>
                            <Col className='noMapCol'>
                                {/*<div className='statsPanel'>*/}
                                {/*/!*  Need to expose stats data on the API first  *!/*/}
                                {/*</div>*/}
                                <div>
                                    <h3 className='landlordSelector'>Landlord Selector</h3>
                                    <br/>
                                    <ListGroup
                                        className='OwnerPickerListGroup'
                                        defaultActiveKey={'COMMONWEALTH OF PENNSYLVA'}
                                    >
                                        {
                                            significantLandlordsRes.data.info.map(owners => {
                                                return (
                                                    <ListGroup.Item
                                                        action
                                                        value={owners[0]}
                                                        eventKey={owners[0]}
                                                        onClick={() => setSelectedOwner(owners[0])}
                                                        className='OwnerPickerListGroupItem'
                                                    >
                                                        <p style={{ margin: '0px' }}>{owners[0]}</p>
                                                        <p style={{ margin: '0px', fontSize: '10pt' }}>
                                                            Owns {owners[1]} properties
                                                        </p>
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}
