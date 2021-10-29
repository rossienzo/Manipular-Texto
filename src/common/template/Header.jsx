import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Header *
 * Tabs navigation
 */

// pega o pathname do URL, transforma em array e verifica se o path está dentro do array;
const isActive = (path) => window.location.pathname.split("/").join("/").includes(path);

const Header = props => (
    <header>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/case-manipulate">Manipular Texto</Navbar.Brand>
                <Nav className="navbar">
                    <Nav.Item>
                        <Nav.Link className={isActive("/case-manipulate") ? "item-selected" : ''} 
                                  href="/case-manipulate">Manipular Caixa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={isActive("/generate-text") ? "item-selected" : ''} 
                                  href="/generate-text">Gerar Texto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={isActive("/wide-text") ? "item-selected" : ''} 
                                  href="/wide-text">Espaçar Texto</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    </header>   
)

export default Header;