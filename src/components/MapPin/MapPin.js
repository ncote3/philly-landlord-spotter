import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import Overlay from "react-bootstrap/OverlayTrigger";
import MapPopover from "../MapPopover/MapPopover";
import './MapPin.css';

export default function MapPin(props) {
    const [show, setShow] = useState(false);
    const containerRef = useRef(null);
    const [target, setTarget] = useState(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={containerRef}>
            <Overlay
                trigger="click"
                key={'overlayTrigger ' + props.streetAddress}
                show={show}
                target={target}
                placement="bottom"
                overlay={<MapPopover props={props} />}
                container={containerRef.current}
                containerPadding={20}
            >
                <FontAwesomeIcon
                    icon={faBuilding}
                    style={{color: 'white'}}
                    onClick={handleClick}
                />
            </Overlay>
        </div>
    )
}
