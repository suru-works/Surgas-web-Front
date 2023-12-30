import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faAnglesDown, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { baseFrontUrl } from "../../../shared/baseUrl";

const FullJumbotron = ({ toggle }) => {
    return (
        <div className="jumbotron pt-5 pb-1">
            <div className="row row-header">
                <div className="col-9" >
                    <div className="justify-content-center row m-3 " >
                        <img className="d-none d-md-block" height="150"
                            src={baseFrontUrl + "public/logo/S-14-cropped.png"} alt="company-logo"></img>
                    </div>
                    <h3>Calidad de servicios y productos garantizada</h3>
                    <h3>Nos enorgullecemos de tener el mejor servicio postventa</h3>
                    <div className="col-12" >
                        <Link to='/contactus'>
                            <Button style={{ margin: 20, backgroundColor: '#fdd835', color: '#000000' }} variant="contained">
                                Contáctanos
                            </Button>
                        </Link>
                        <Button style={{ margin: 20, backgroundColor: '#fdd835', color: '#000000' }} className="jumbo-button-1" onClick={toggle} >
                            <FontAwesomeIcon icon={faAnglesUp} flip className="fa-lg"/>
                        </Button>
                    </div>
                </div>
                <div className="mr-auto col-3">
                    <img className="d-none d-lg-block" height="300" src={baseFrontUrl + "public/home/DSC_0052BrowserPNG.png"} alt="pipetas_azules"></img>
                </div>
            </div>
        </div>
    );
}

const CollapsedJumbotron = ({ toggle }) => {
    return (
        <div className="minijumbotron " >
            <div className="row row-header">
                <div className="col-6 col-sm-9">
                    <h1>Surgas de Antioquia</h1>
                </div>
                <div className="col-6 col-sm-3 button-container">
                    <Button className="jumbo-button-2" onClick={toggle} style={{ margin: 20, backgroundColor: '#fdd835', color: '#000000' }}>
                        <FontAwesomeIcon icon={faAnglesDown} flip className="fa-lg"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const JumbotronComponent = () => {
    const [open, setOpen] = useState(true);

    if (open) {
        return (<FullJumbotron toggle={() => setOpen(!open)} />);
    }
    else {
        return (<CollapsedJumbotron toggle={() => setOpen(!open)} />);
    }
}

export default JumbotronComponent;