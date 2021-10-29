import React from "react";
import Container from "react-bootstrap/Container";
import IZipCodeBarChart from "../IZipCodeBarChart/IZipCodeBarChart";
import './ZipCodePage.scss';
import CWZipCodeBarChart from "../CWZipCodeBarChart/CWZipCodeBarChart";

export default function ZipCodePage() {
    return (
        <div className='zipCodePageContainer'>
            <Container>
                <div className='zipCodePageJumbotron'>
                    <h1>Zip Code Analysis</h1>
                    <p>Breaking down Philadelphia's property owners by zip code.</p>
                </div>
                <IZipCodeBarChart/>
                <CWZipCodeBarChart />
            </Container>
        </div>
    )
}
