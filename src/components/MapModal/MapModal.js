import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './MapModal.scss';
import {makeUseAxios} from "axios-hooks";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import fuzzyMatchLandlords from "../../utils/fuzzyMatching/fuzzyMatching";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useAxios = makeUseAxios({
    axios: axios.create({baseURL: 'https://www.landlord-spotter-backend.xyz/'})
});

export default function MapModal(props) {
    return (
        <div>

        </div>
    )
}