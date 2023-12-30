import React from "react";
import { useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Card } from "react-bootstrap";
import MapComponent from './Map';
import UncontrolledCollapse from "../../reusable/UncontrolledCollapse";
import CommentForm from "./CommentForm";

const ContactUs = () => {
    const strings = useIntl();
    return (
        <div className="container">
            <div className="col-12">
                <br />
                {strings.formatMessage({ id: "contact" })}
                <hr />
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>{strings.formatMessage({ id: "locationInfo" })}</h3>
                </div>
                <div className="col-12 col-sm-6">
                    <h5>{strings.formatMessage({ id: "ourAddress" })}</h5>
                    <address>
                        {strings.formatMessage({ id: "address" })}<br />
                        {strings.formatMessage({ id: "city" })}, {strings.formatMessage({ id: "state" })}<br />
                        <FontAwesomeIcon icon={faPhone} className="fa-lg" />: ({strings.formatMessage({ id: "colombianTelephoneCode" })})({strings.formatMessage({ id: "medellinTelephoneCode" })}){strings.formatMessage({ id: "phone" })}<br />
                        <FontAwesomeIcon icon={faMobile} className="fa-lg" />: ({strings.formatMessage({ id: "colombianTelephoneCode" })}){strings.formatMessage({ id: "mobile" })}<br />
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />: {strings.formatMessage({ id: "mail" })}<br />
                    </address>
                    <div className="col-12 col-sm-11 offset-sm-1 mt-5 mb-4">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="tel:+576043223947"><FontAwesomeIcon icon={faPhone} className="fa-lg" /> {strings.formatMessage({ id: "call" })}</a>
                            <a role="button" className="btn btn-success" target="_blank" rel="noopener noreferrer" href="https://wa.me/573122994442"><FontAwesomeIcon icon={faWhatsapp} className="fa-lg" /> {strings.formatMessage({ id: "whatsapp" })}</a>
                            <a role="button" className="btn btn-info" target="_blank" rel="noopener noreferrer" href="mailto:surgasdeantioquia@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /> {strings.formatMessage({ id: "email" })}</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <h5>{strings.formatMessage({ id: "map" })}</h5>
                    <MapComponent className="col-12 col-sm-6" />
                </div>
                <div className="row row-contect mb-4">
                    <div className="col 12 col-md-6">
                        <h3>{strings.formatMessage({ id: "caq" })}</h3>
                        <Card className="caq-card" id="caq-1">
                            <Card.Header id="caq-question-1"><h4>¿Cuales son los métodos de pago?</h4></Card.Header>
                            <UncontrolledCollapse toggler="caq-question-1">
                                <Card.Body id="caq-answer-1">
                                    <Card.Text>El metodo de pago sera pactado directamente con el asesor.</Card.Text>
                                </Card.Body>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="caq-card" id="caq-2">
                            <Card.Header id="caq-question-2"><h4>¿Cómo es el envío?</h4></Card.Header>
                            <UncontrolledCollapse toggler="caq-question-2">
                                <Card.Body id="caq-answer-2">
                                    <Card.Text>Tenemos mensajeros disponibles para actuar en nuesta area de cobertura, pero por lo general el mismo instalador se encargara de llevar el producto.</Card.Text>
                                </Card.Body>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="caq-card" id="caq-3">
                            <Card.Header id="caq-question-3"><h4>¿Como son las instalaciones?</h4></Card.Header>
                            <UncontrolledCollapse toggler="caq-question-3">
                                <Card.Body id="caq-answer-3">
                                    <Card.Text>Enviaremos a un instalador experto cuando compres nuestro producto.</Card.Text>
                                </Card.Body>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="caq-card" id="caq-4">
                            <Card.Header id="caq-question-4"><h4>Vivo fuera de la ciudad de Medellín, ¿cuales son las areas de cobertura del servicio?</h4></Card.Header>
                            <UncontrolledCollapse toggler="caq-question-4">
                                <Card.Body id="caq-answer-4">
                                    <Card.Text>Por lo general prestamos nuestro servicio en el departamento de Antioquia, pero se puede pactar para prestar el servicio en lugares mas alejados.</Card.Text>
                                </Card.Body>
                            </UncontrolledCollapse>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6">
                        <CommentForm/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;