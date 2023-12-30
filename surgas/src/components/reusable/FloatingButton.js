import React from "react";
import { Button } from "react-bootstrap";

const FloatingButton = ({ children }) => {
    return (
        <Button
            style={{
                position: "fixed",
                bottom: 0,
                right: 0,
                zIndex: 10,
                margin: "10px 20px 10px 50px",
                border: "1px solid black",
                borderRadius: "5px",
            }}
            variant="fab"
        >
            {children}
        </Button>
    );
};

export default FloatingButton;