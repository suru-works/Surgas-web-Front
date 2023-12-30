import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import '../../styles/base/Footer.css';

const Footer = () => {
    const strings = useIntl();
    return (
        <div className='app-bg-secondary pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2">
                        <h5>{strings.formatMessage({ id: "navigate" })}</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className='link'>{strings.formatMessage({ id: "home" })}</Link>
                            </li>
                            <li>
                                <Link to="/products" className='link'>{strings.formatMessage({ id: "products" })}</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className='link'>{strings.formatMessage({ id: "contact" })}</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                        <h5>{strings.formatMessage({ id: "ourAddress" })}</h5>
                        <address>
                            {strings.formatMessage({ id: "address" })}<br />
                            {strings.formatMessage({ id: "city" })}, {strings.formatMessage({ id: "state" })}<br />
                            <FontAwesomeIcon icon={faPhone} className="fa-lg" />: ({strings.formatMessage({ id: "colombianTelephoneCode" })})({strings.formatMessage({ id: "medellinTelephoneCode" })}){strings.formatMessage({ id: "phone" })}<br />
                            <FontAwesomeIcon icon={faMobile} className="fa-lg" />: ({strings.formatMessage({ id: "colombianTelephoneCode" })}){strings.formatMessage({ id: "mobile" })}<br />
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />: {strings.formatMessage({ id: "mail" })}<br />
                        </address>
                    </div>

                    <div className="col-12 col-sm-4">
                        <div className="text-center">
                            <h5>{strings.formatMessage({ id: "getInTouch" })}</h5>
                            <br />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Surgasdeantioquia"
                                style={{ margin: 5 }}
                            >
                                <FontAwesomeIcon icon={faFacebook} className="fa-2xl" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/surgasdeantioquia/"
                                style={{ margin: 5 }}
                            >
                                <FontAwesomeIcon icon={faInstagram} className="fa-2xl" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:surgasdeantioquia@gmail.com"
                                style={{ margin: 5 }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/573122994442"
                                style={{ margin: 5 }}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="fa-2xl" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p>{strings.formatMessage({ id: "copyright" })}</p>
                        <p>{strings.formatMessage({ id: "poweredBy" })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;