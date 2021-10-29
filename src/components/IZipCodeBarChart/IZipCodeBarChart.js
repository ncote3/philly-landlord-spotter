import React, { useState } from "react";
import { makeUseAxios } from "axios-hooks";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import BarChart from "../BarChart/BarChart";
import Container from "react-bootstrap/Container";
import "./IZipCodeBarChart.scss";

const useAxios = makeUseAxios({
  axios: axios.create({ baseURL: "" }),
});

export default function IZipCodeBarChart() {
  const [selectedZipCode, selectZipCode] = useState("19104");
  const zipCodeLink = "/api/zip-code-bar-data/" + selectedZipCode;
  const zipsLink = "/api/zip-codes/";
  // eslint-disable-next-line no-unused-vars
  const [zipCodeRes, refetch] = useAxios(zipCodeLink);
  // eslint-disable-next-line no-unused-vars
  const [zipsRes, zipsRefetch] = useAxios(zipsLink);

  if (zipCodeRes.loading || zipsRes.loading) {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Container
          className="individualZipCodeAnalysis"
          style={{ padding: "2vw", textAlign: "center" }}
        >
          <Spinner animation="border" variant="light" size={"lg"} />
          <p>Getting Zip Code Data..</p>
        </Container>
      </div>
    );
  } else if (zipCodeRes.error) {
    return (
      <Container
        className="individualZipCodeAnalysis"
        style={{ padding: "2vw" }}
      >
        <Alert variant="danger">Error getting zip code data!</Alert>
      </Container>
    );
  } else if (zipsRes.error) {
    return (
      <Container
        className="individualZipCodeAnalysis"
        style={{ padding: "2vw" }}
      >
        <Alert variant="danger">Error getting zips data!</Alert>
      </Container>
    );
  } else {
    return (
      <Container className="individualZipCodeAnalysis">
        <h1 className="chartSectionHeader">Individual Zip Code Analysis</h1>
        <Row lg={2} sm={1} xs={1} md={1}>
          <Col lg={9}>
            <Container>
              <BarChart
                zipData={zipCodeRes.data}
                height={525}
                width={700}
                selectedZip={selectedZipCode}
              />
            </Container>
          </Col>
          <Col lg={1}>
            <DropdownButton
              id="dropdown-item-button"
              className="zipCodeBarChartDropdown"
              title="Select Zip Code"
              variant={"light"}
            >
              {zipsRes.data.map((zipCode) => {
                return (
                  <Dropdown.Item
                    onSelect={() => selectZipCode(zipCode)}
                    eventKey={zipCode}
                  >
                    {zipCode}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
  }
}
