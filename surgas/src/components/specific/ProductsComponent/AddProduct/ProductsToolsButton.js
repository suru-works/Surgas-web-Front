import React from 'react';
import Portal from '../../../reusable/Portal';
import FloatingButton from '../../../reusable/FloatingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { toggleAddProductModal } from '../../../../redux/ActionCreators/products/AddProductActions';

const ProductsToolsButton = () => {
    const location = useLocation();

    if (location.pathname === '/products') {
        return (
            <Portal container={document.body}>
                <FloatingButton tooltip={"Añadir un producto"} onClick={toggleAddProductModal}>
                    <FontAwesomeIcon icon={faPlus} styles={{ color: '#000000' }} />
                </FloatingButton>
            </Portal>
        );
    }
    return(<></>);
};

export default ProductsToolsButton;