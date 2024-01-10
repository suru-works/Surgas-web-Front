import React, { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { faHome, faList, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";

import { baseFrontUrl } from '../../shared/baseUrl';
import languajes from '../../languages/languages.json';
import { CHANGE_LANGUAJE } from '../../redux/ActionTypes';
import LanguageDropdown from '../reusable/DispatchDropdown';

import '../../styles/base/Header.css';

const Header = () => {
    const strings = useIntl();
    const locale = useSelector((state) => state.language.languaje);
    const navbarRef = useRef();

    useEffect(() => {
        const threshold = 100;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            if (scrollY > lastScrollY) {
                navbarRef.current?.classList.add('d-none');
            }
            else if (scrollY < lastScrollY) {
                navbarRef.current?.classList.remove('d-none');
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        if (navbarRef.current == null) {
            navbarRef.current = document.getElementById('app-navbar');
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinkClassNames = ({ isActive, isPending, isTransitioning }) => {
        return ([
            isPending ? "d-flex pending" : "d-flex nav-link",
            isActive ? "d-flex active" : "d-flex nav-link",
            isTransitioning ? "d-flex transitioning" : "d-flex nav-link",
        ].join(" ")
        );
    }

    return (
        <Navbar className='app-bg-primary row expand-lg fixed-top sticky-top' id='app-navbar'>
            <div className='col-3'>
                <Navbar.Brand className='d-flex mr-auto' href='/'>
                    <img src={baseFrontUrl + "public/logo/S-14-cropped.png"} height='31.5' alt='small-company-logo' />
                    <span className='d-none d-sm-none d-md-block'>{strings.formatMessage({ id: "companyBrand" })}</span>
                </Navbar.Brand>
            </div>
            <div className='col-6'>
                <div className='d-flex align-items-center flex-grow-1 justify-content-end' id='navigationControlsContainer'>
                    <Nav.Item className="align-items-center flex-grow-1 Nav-Item">
                        <NavLink className={navLinkClassNames} to='/'>
                            <FontAwesomeIcon icon={faHome} /><span className='d-none d-md-block ml-4'>{strings.formatMessage({ id: "home" })}</span>
                        </NavLink >
                    </Nav.Item>
                    <Nav.Item className="align-items-center flex-grow-1 Nav-Item">
                        <NavLink className={navLinkClassNames} to='/products'>
                            <FontAwesomeIcon icon={faList} /><span className='d-none d-md-block ml-4'>{strings.formatMessage({ id: "products" })}</span>
                        </NavLink >
                    </Nav.Item>
                    <Nav.Item className="align-items-center flex-grow-1 Nav-Item">
                        <NavLink className={navLinkClassNames} to='/contactus'>
                            <FontAwesomeIcon icon={faAddressCard} /><span className='d-none d-md-block ml-4'>{strings.formatMessage({ id: "contact" })}</span>
                        </NavLink >
                    </Nav.Item>
                </div>
            </div>
            <div className='col-3 expand-lg'>
                <LanguageDropdown actualValue={locale} action={CHANGE_LANGUAJE} values={Object.entries(languajes)} id='global-languaje-selection' />
            </div>
        </Navbar>
    );
};

export default Header;
