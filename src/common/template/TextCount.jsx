import React from 'react';

import { ListGroup } from 'react-bootstrap';

const TextCount = props => (
    <ListGroup horizontal>
        <ListGroup.Item>Nº de Linhas: {props.lineCount}</ListGroup.Item>
        <ListGroup.Item>Nº de palavras: {props.wordCount}</ListGroup.Item>
        <ListGroup.Item>Nº de Caracteres: {props.charCount}</ListGroup.Item>
    </ListGroup>
)

export default TextCount;