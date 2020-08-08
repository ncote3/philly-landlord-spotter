import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import './SearchPage.scss';
import citySVG from './../../assets/381804685-vector.svg';
import OwnerSearchForm from "../OwnerSearchForm/OwnerSearchForm";
import OwnerSearchExplainer from "../OwnerSearchExplainer/OwnerSearchExplainer";

export default function OwnerPage() {
    return (
        <div
            className='SearchPageContainer'
            style={{
                backgroundImage: `url(${citySVG})`,
            }}
        >
            <Container>
                <Jumbotron className='SearchPageSection'>
                    <h1>Owner Search</h1>
                    <p>
                        Search the dataset for an owner. This algorithm is based off
                        <a href='https://fusejs.io/'> fuze.js</a> for fuzzy string matching. This means results may
                        not always be accurate or reliable, what you seek is chosen by you.
                    </p>
                </Jumbotron>
                <div className='SearchPageSection'>
                    <OwnerSearchForm />
                </div>
                <div className='ExplainerSection'>
                    <OwnerSearchExplainer />
                </div>
            </Container>
        </div>
    )
}
