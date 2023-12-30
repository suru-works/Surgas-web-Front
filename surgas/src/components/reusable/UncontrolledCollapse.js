import { React, useState, useRef, useEffect } from "react";
import { Collapse } from "react-bootstrap";

const UncontrolledCollapse = ({ toggler, children }) => {
    const [open, setOpen] = useState(false);
    const togglerRef = useRef();

    useEffect(() => {
        const handleToggle = () => {
            setOpen(!open);
        };
        if (togglerRef.current == null) {
            togglerRef.current = document.getElementById(toggler);
        }
        togglerRef.current.addEventListener("click", handleToggle);
        return () => {
            if (togglerRef.current) {
                togglerRef.current.removeEventListener("click", handleToggle);
            }
        };
    }, [toggler, open]);

    return (
        <Collapse in={open}>
            {children}
        </Collapse>
    );
}

export default UncontrolledCollapse;