import '../../styles/styles.css';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import store from '../../redux/store';

import { baseFrontUrl } from '../../shared/baseUrl';
import { ENGLISH } from '../../languages/languages';
import { CHANGE_LANGUAJE } from '../../redux/ActionTypes';

const Header = () => {
    const strings = useIntl();

    const [navIsOpen, setNavIsOpen] = useState(true);

    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    }

    const handleChangeLanguage = () => {
        // Cambia el idioma a inglés
        store.dispatch({
            type: CHANGE_LANGUAJE,
            payload: ENGLISH,
        });
    };

    return (
        <Navbar class="navbar navbar-expand-md" dark expand='md'>
            <div className='container'>

                <div>
                    <Button onClick={handleChangeLanguage}>
                        Cambiar a inglés
                    </Button>
                </div>

                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className='mr-auto' href='/'>
                    <img src={baseFrontUrl + "public/logo/S-14-cropped.png"} height='31.5' alt='small-company-logo' />
                </NavbarBrand>
                <Collapse isOpen={navIsOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/'>
                                <span className='fa fa-home fa-lg'>{strings.formatMessage({ id: "home" })}</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/products'>
                                <span className='fa fa-list fa-lg'>Productos</span>
                            </Link>
                        </NavItem>
                        <NavItem className="d-flex align-items-center">
                            <Link className='nav-link' to='/contact'>
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