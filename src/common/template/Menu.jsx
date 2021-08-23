import React from 'react';
import { Row } from 'react-bootstrap';
import {  ButtonGroup } from "react-bootstrap";

const Menu = props => (
    <Row>
        <ButtonGroup aria-label="Cases">
            {props.children}
        </ButtonGroup>
    </Row>
)

export default Menu;