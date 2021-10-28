import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Header *
 * Tabs navigation
 */

// Pega o pathname do link
const isActive = window.location.pathname;

const Header = props => (
    <header>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Manipular Texto</Navbar.Brand>
                <Nav className="navbar"  defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link className={isActive === "/" ? "item-selected" : ''} 
                                  href="/">Manipular Caixa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={isActive === "/generate-text" ? "item-selected" : ''} 
                                  href="/generate-text">Gerar Texto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={isActive === "/wide-text" ? "item-selected" : ''} 
                                  href="/wide-text">Espaçar Texto</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    </header>   
)

export default Header;