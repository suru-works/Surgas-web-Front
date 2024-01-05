import React from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import '../../styles/reusable/FloatingButton.css';

const FloatingButton = ({ children, tooltip, onClick}) => {
    return (
        <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={(
                <Tooltip id="button-tooltip">
                    {tooltip}
                </Tooltip>
            )}
        >
            <Button id="floating-button" tooltip={tooltip} onClick={onClick}>
                {children}
            </Button>
        </OverlayTrigger>
    );
};

export default FloatingButton;