import '../../styles/styles.css';
import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { baseFrontUrl } from '../../shared/baseUrl';

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState(true);

    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <Navbar class="navbar navbar-expand-md" dark expand='md'>
            <div className='container'>

                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className='mr-auto' href='/'>
                    <img src={baseFrontUrl + "public/logo/S-14-cropped.png"} height='31.5' alt='small-company-logo' />
                </NavbarBrand>
                <Collapse isOpen={navIsOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/inicio'>
                                <span className='fa fa-home fa-lg'>Inicio</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/productos'>
                                <span className='fa fa-list fa-lg'>Productos</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/contacto'>
                                <span className='fa fa-address-card fa-lg'>Contáctanos</span>
                            </Link>
                        </NavItem>

                        <NavItem className="d-flex align-items-center">
                            <p>Hola</p>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <p>Mundo</p>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar >
                        <Collapse isOpen={navIsOpen} navbar>
                            <NavItem className="d-flex align-items-center">
                                <p>Autentificacion</p>
                            </NavItem>
                        </Collapse>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

Header.propTypes = {};

export default Header;