import React from "react";
import './HomeButton.scss';
import {LinkContainer} from "react-router-bootstrap";

export default function HomeButton(props) {
    const {fontSize, link, text} = props;
    return (
        <div className='homeButton'>
            <LinkContainer
                className='homeLink'
                style={{fontSize: fontSize}}
                to={link}
            >
                <p>{text}</p>
            </LinkContainer>
        </div>
    )
}
