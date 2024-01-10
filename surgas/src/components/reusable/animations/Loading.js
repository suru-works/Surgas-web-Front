import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className="row justify-content-center" >
            <Spinner animation="border" variant="warning" />
        </div>
    );
}

export default Loading;