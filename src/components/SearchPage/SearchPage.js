import React from "react";
import Container from "react-bootstrap/Container";
import "./SearchPage.scss";
import OwnerSearchForm from "../OwnerSearchForm/OwnerSearchForm";
import OwnerSearchExplainer from "../OwnerSearchExplainer/OwnerSearchExplainer";

export default function OwnerPage() {
  return (
    <div className="SearchPageContainer">
      <Container>
        <div className="SearchPageSection">
          <h1>Owner Search</h1>
          <p>
            Search the dataset for an owner. This algorithm is based off
            <a href="https://fusejs.io/"> fuze.js</a> for fuzzy string matching.
            This means results may not always be accurate or reliable, what you
            seek is chosen by you.
          </p>
        </div>
        <div className="SearchPageSection">
          <OwnerSearchForm />
        </div>
        <div className="ExplainerSection">
          <OwnerSearchExplainer />
        </div>
      </Container>
    </div>
  );
}
