import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Loading from "../../../reusable/animations/Loading";
import ProductDetail from "./ProductDetail";
import { toogleProductDetailModal } from "../../../../redux/ActionCreators/products/ProductDetailActions";

const ModalContent = () => {
    const productData = useSelector(state => state?.productDetail?.productData);
    const loading = useSelector(state => state?.productDetail?.loading);
    const error = useSelector(state => state?.productDetail?.error);

    if (loading) {
        return (<Loading />);
    }
    else if (error) {
        return (
            <label>Error cargando informacion del producto.</label>
        );
    }
    else if (productData) {
        return (<ProductDetail product={productData} />);
    }
    else {
        return (<></>);
    }

}

const ProductDetailModal = () => {

    const isOpen = useSelector(state => state?.productDetail?.isOpen);

    return (
        <Modal show={isOpen} onHide={toogleProductDetailModal} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            modal de detalle de producto
            <ModalContent />
        </Modal>
    );
}

export default ProductDetailModal;