import React from "react";
import useAxios from "axios-hooks";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import BarChart from "../BarChart/BarChart";
import Container from "react-bootstrap/Container";
import './CWZipCodeBarChart.scss';

export default function CWZipCodeBarChart() {
    const [{ data, loading, error }] = useAxios(
        'https://www.landlord-spotter-backend.xyz/api/cw_property_dist/'
    );
    const zipCodeRes = {data, loading, error}

    if (zipCodeRes.loading) {
        return (
            <div data-testid='loading' style={{ marginTop: '10vh' }}>
                <Container className='individualZipCodeAnalysis' style={{padding: '2vw', textAlign: 'center'}}>
                    <Spinner animation="border" variant="light" size={'lg'} >
                        <span className="sr-only">Getting Zip Code Data...</span>
                    </Spinner>
                    <p>Getting Zip Code Data..</p>
                </Container>
            </div>
        )
    } else if (zipCodeRes.error) {
        return (
            <Container data-testid='error' className='individualZipCodeAnalysis' style={{padding: '2vw'}}>
                <Alert variant='danger'>Error getting zip code data!</Alert>
            </Container>
        )
    } else {
        return (
            <Container data-testid='data' className='cwZipCodeAnalysis'>
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
