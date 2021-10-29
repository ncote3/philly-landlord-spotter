import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Overlay from "react-bootstrap/OverlayTrigger";
import MapPopover from "../MapPopover/MapPopover";
import "./MapPin.scss";

export default function MapPin(props) {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
  const [target, setTarget] = useState(null);

  const { yearBuilt } = props.props;
  const parsedYear = parseInt(yearBuilt, 10);
  let pinColor;

  if (yearBuilt === "0000") {
    pinColor = "white";
  } else if (parsedYear <= 1950) {
    pinColor = "green";
  } else if (parsedYear <= 2000) {
    pinColor = "magenta";
  } else if (parsedYear <= 2010) {
    pinColor = "orange";
  } else if (parsedYear <= 2015) {
    pinColor = "yellow";
  } else if (parsedYear <= 2020) {
    pinColor = "cyan";
  } else {
    pinColor = "white";
  }

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={containerRef}>
      <Overlay
        trigger="click"
        key={"overlayTrigger " + props.streetAddress}
        show={show}
        target={target}
        placement="bottom"
        overlay={<MapPopover props={props} />}
        container={containerRef.current}
        containerPadding={20}
      >
        <FontAwesomeIcon
          icon={faBuilding}
          style={{ color: pinColor }}
          onClick={handleClick}
        />
      </Overlay>
    </div>
  );
}
