import React from "react";
import {makeUseAxios} from "axios-hooks";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import BarChart from "../BarChart/BarChart";
import Container from "react-bootstrap/Container";
import './CWZipCodeBarChart.scss';

const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://www.landlord-spotter-backend.xyz/' })
})

export default function CWZipCodeBarChart() {
    const zipCodeLink = '/api/cw_property_dist/';
    // eslint-disable-next-line no-unused-vars
    const [zipCodeRes, refetch] = useAxios(zipCodeLink);

    if (zipCodeRes.loading) {
        return (
            <div style={{ marginTop: '10vh' }}>
                <Container className='individualZipCodeAnalysis' style={{padding: '2vw'}}>
                    <Spinner animation="border" variant="dark" size={'lg'} >
                        <span className="sr-only">Getting Zip Code Data...</span>
                    </Spinner>
                    <p>Getting Zip Code Data..</p>
                </Container>
            </div>
        )
    } else if (zipCodeRes.error) {
        return (
            <Container className='individualZipCodeAnalysis' style={{padding: '2vw'}}>
                <Alert variant='danger'>Error getting zip code data!</Alert>
            </Container>
        )
    } else {
        return (
            <Container className='cwZipCodeAnalysis'>
                <h1 className='chartSectionHeader'>Citywide Zip Code Analysis</h1>
                <Container>
                    <BarChart
                        zipData={zipCodeRes.data}
                        height={525}
                        width={900}
                    />
                </Container>
            </Container>
        )
    }
}
