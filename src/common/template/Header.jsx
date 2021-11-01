import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Header *
 * Tabs navigation
 */

// salva no estado o pathname atual
function pageLoad(setPathname)
{
    window.addEventListener("load", e => {
        setPathname(window.location.pathname)
    });
}

const Header = props => 
{    
    const [pathname, setPathname] = useState(window.location.pathname);
    
    pageLoad(setPathname);
    
    // caso seja direcionado para / irá marcar o link
    const home = pathname === "/" ? true : false;

    // pega o pathname do URL, transforma em array e verifica se o path está dentro do array;
    const isActive = (path) => pathname.split("/").join("/").includes(path);

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/case-manipulate">Manipular Texto</Navbar.Brand>
                    <Nav className="navbar">
                        <Nav.Item>
                            <Nav.Link className={isActive("/case-manipulate") || home ? "item-selected" : ''} 
                                    href="/case-manipulate">Manipular Caixa</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={isActive("/to-binary-text") ? "item-selected" : ''} 
                                    href="/to-binary-text">Texto para Binário</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={isActive("/wide-text") ? "item-selected" : ''} 
                                    href="/wide-text">Espaçar Texto</Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Navbar>
        </header>  
    )
}

export default Header;