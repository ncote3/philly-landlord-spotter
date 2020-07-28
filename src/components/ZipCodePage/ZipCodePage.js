import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import IZipCodeBarChart from "../IZipCodeBarChart/IZipCodeBarChart";
import './ZipCodePage.css';
import CWZipCodeBarChart from "../CWZipCodeBarChart/CWZipCodeBarChart";

export default function ZipCodePage() {
    return (
        <div className='zipCodePageContainer'>
            <Container>
                <Jumbotron className='zipCodePageJumbotron'>
                    <h1>Zip Code Analysis</h1>
                    <p>Breaking down Philadelphia's property owners by zip code.</p>
                </Jumbotron>
                <IZipCodeBarChart/>
                <CWZipCodeBarChart />
            </Container>
        </div>
    )
}
