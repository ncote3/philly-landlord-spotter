import React from "react";
import './HomeButton.scss';
import {LinkContainer} from "react-router-bootstrap";

export default function HomeButton(props) {
    return (
        <div className='homeButton'>
            <LinkContainer
                className='homeLink'
                style={{fontSize: props.fontSize}}
                to={props.link}
            >
                <p>{props.text}</p>
            </LinkContainer>
        </div>
    )
}
