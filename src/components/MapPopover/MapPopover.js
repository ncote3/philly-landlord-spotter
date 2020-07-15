import React from "react";
import Popover from "react-bootstrap/Popover";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

export default function MapPopover(props) {
    const info = props.props.props;
    return (
        <Popover id={`marker-popover-${info.streetAddress}`} style={{width: '50vw'}}>
            <Popover.Title as="h3">{info.streetAddress}</Popover.Title>
            <Popover.Content>
                <Row>
                    <Col>
                        <p>Street Address: {info.streetAddress}</p>
                        <p>Category: {info.category}</p>
                        <p>Owner Two: {info.owner2}</p>
                        <p>Recording Date: {info.recordingDate}</p>
                    </Col>
                    <Col>
                        <p>Sale Date: {info.streetAddress}</p>
                        <p>Sale Price: {info.salePrice}</p>
                        <p>Year Built: {info.yearBuilt}</p>
                        <p>Year Built Estimate: {info.yearBuiltEstimate ? info.yearBuiltEstimate : 'N'}</p>
                    </Col>
                </Row>
            </Popover.Content>
        </Popover>
    )
}
