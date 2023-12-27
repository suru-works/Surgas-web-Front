import React from "react";
import { useIntl } from 'react-intl';

const ContactUs = () => {
    const strings = useIntl();
    return (
        <div className="container">
            <div className="col-12">
                <br/>
                {strings.formatMessage({ id: "contact" })}
                <hr />        
            </div>
        </div>
    )
}

export default ContactUs;