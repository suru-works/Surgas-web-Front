import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "react-bootstrap";
import { setSelectedProduct, toogleProductDetailModal } from "../../../redux/ActionCreators/products/ProductDetailActions";


const ProductPreview = ({ product }) => {
  const setAndToogleProductDetail = (product) => {
    setSelectedProduct(product);
    toogleProductDetailModal();
  }
  return (
    <Card>
      <CardImg
        src={product.image}
        alt={product.name}
        style={{ width: "100%" }}
        onClick={() => setAndToogleProductDetail(product)}
      />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductPreview;