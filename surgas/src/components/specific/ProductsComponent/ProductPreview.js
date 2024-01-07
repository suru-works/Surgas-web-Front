import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "react-bootstrap";

const ProductPreview = ({ product }) => {
  return (
    <Card>
      <CardImg
        src={product.image}
        alt={product.name}
        style={{ width: "100%" }}
      />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductPreview;