import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { toggleAddProductModal } from "../../../../redux/ActionCreators/products/AddProductActions";

const AddProductModal = () => {
    const isOpen = useSelector(state => state?.addProduct?.isOpen);

    return(
        <Modal show={isOpen} onHide={toggleAddProductModal} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            modal de dagregar producto
        </Modal>
    );
}

export default AddProductModal;