import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from '../../redux/store';
import { faHome, faList, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { baseFrontUrl } from '../../shared/baseUrl';
import { ENGLISH } from '../../languages/languages';
import { CHANGE_LANGUAJE } from '../../redux/ActionTypes';

import '../../styles/base/Header.css';

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
        <Navbar className='app-bg-primary' expand='md'>
            <Navbar.Toggle onClick={toggleNav} />
            <Navbar.Brand className='mr-auto' href='/'>
                <img src={baseFrontUrl + "public/logo/S-14-cropped.png"} height='31.5' alt='small-company-logo' />
            </Navbar.Brand>
            <Nav.Item className="d-flex align-items-center">
                <Link className='nav-link' to='/'>
                    <FontAwesomeIcon icon={faHome} /> {strings.formatMessage({ id: "home" })}
                </Link>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center">
                <Link className='nav-link' to='/products'>
                    <FontAwesomeIcon icon={faList} /> {strings.formatMessage({ id: "products" })}
                </Link>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center">
                <Link className='nav-link' to='/contactus'>
                    <FontAwesomeIcon icon={faAddressCard} /> {strings.formatMessage({ id: "contact" })}
                </Link>
            </Nav.Item>
            <Button className="button app-bg-complementary" onClick={handleChangeLanguage}>
                Cambiar a inglés
            </Button>
        </Navbar>
    );
};

export default Header;