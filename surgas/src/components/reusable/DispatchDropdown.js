import React from "react";
import { Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';

import store from '../../redux/store';

const renderDropdownElements = (elements) => {
    return elements?.map(element => {
        return (
            <Dropdown.Item id={"element-" + element[0]} key={"element-" + element[0]} eventKey={element[1]} value={element[0]}>{element[1]}</Dropdown.Item>
        );
    });
}

const DispatchDropdown = ({ actualValue, action, values }) => {

    const handleChange = (key) => {
        store.dispatch({
            type: action,
            payload: key,
        });
    };

    return (
        <DropdownButton
            as={ButtonGroup}
            align={{ lg: 'end' }}
            title={actualValue}
            id="dropdown"
            onSelect={handleChange}
        >
            {renderDropdownElements(values)}
        </DropdownButton>
    );
}

export default DispatchDropdown;