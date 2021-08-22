import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

/**
 * Header *
 * Tabs navigation
 */
export default props => (
    <header>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Manipular Texto</Navbar.Brand>
                <Nav className="navbar">
                    <Nav.Item>
                        <Nav.Link href="#home">Manipular Caixa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#home">Gerar Texto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#home">Espaçar Texto</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    </header>   
)