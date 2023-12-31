import React from "react";
import { Button } from "react-bootstrap";

import '../../styles/reusable/FloatingButton.css';

const FloatingButton = ({ children }) => {
    return (
        <Button id="floating-button">
            {children}
        </Button>
    );
};

export default FloatingButton;