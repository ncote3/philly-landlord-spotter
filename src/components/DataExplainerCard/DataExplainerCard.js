import React from "react";
import Card from "react-bootstrap/Card";
import "./DataExplainerCard.scss";

export default function DataExplainerCard(props) {
  const { title, example, description, dataReference } = props;
  return (
    <Card border={"dark"}>
      <Card.Header className="dataDescCardBold dataDescCardHeader">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            <span className={"dataDescCardBold"}>Example: </span>
            <span className={"dataDescCardItalic"}>{example}</span>
          </p>
          <p>
            <span className={"dataDescCardBold"}>Description:</span>
            {description}
          </p>
          <p>
            <span className={"dataDescCardBold"}>Data Reference: </span>
            <span className={"dataDescCardItalic"}>{dataReference}</span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
