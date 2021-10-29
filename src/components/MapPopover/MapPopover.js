import React from "react";
import Popover from "react-bootstrap/Popover";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MapPopover.scss";

export default function MapPopover(props) {
  const info = props.props.props;
  return (
    <Popover
      id={`marker-popover-${info.streetAddress}`}
      className={"housePopover"}
      transition={true}
    >
      <Popover.Title as="h3">{info.streetAddress}</Popover.Title>
      <Popover.Content>
        <Row>
          <Col>
            <p>
              <b>Street Address:</b> {info.streetAddress}
            </p>
            <p>
              <b>Category:</b> {info.category}
            </p>
            <p>
              <b>Owner Two:</b>{" "}
              {info.owner2 === "" ? "No Owner 2" : info.owner2}
            </p>
            <p>
              <b>Recording Date:</b> {info.recordingDate}
            </p>
          </Col>
          <Col>
            <p>
              <b>Sale Date:</b> {info.saleDate}
            </p>
            <p>
              <b>Sale Price:</b> {info.salePrice}
            </p>
            <p>
              <b>Year Built:</b>{" "}
              {info.yearBuilt === "0000" ? "Unknown" : info.yearBuilt}
            </p>
            <p>
              <b>Year Built Estimate:</b>{" "}
              {info.yearBuiltEstimate ? info.yearBuiltEstimate : "N"}
            </p>
          </Col>
        </Row>
      </Popover.Content>
    </Popover>
  );
}
