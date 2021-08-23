import React from 'react';
import { Container } from 'react-bootstrap';

/**
 * Content *
 * title and textarea
 */

 const Content = props => (
    <section className="content">
        <Container fluid>
            <h1>{props.title}</h1>
            {props.children}
        </Container>
    </section>
)

export default Content;