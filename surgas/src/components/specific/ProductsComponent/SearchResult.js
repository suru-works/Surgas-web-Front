import React from 'react';
import { useIntl } from 'react-intl';
import ProductPreview from './ProductPreview';
import { useSelector } from 'react-redux';
import Loading from '../../reusable/animations/Loading';
import ProductDetailModal from "./ProductDetail/ProductDetailModal";

const RenderProducts = ({ products }) => {
    return (
        products?.map((product) => (
            <div key={product.id} className='mt-3 col-12 col-lg-3 col-md-4 col-sm-6'>
                <ProductPreview product={product} />
            </div>
        ))
    );

}

const SearchResult = () => {
    const strings = useIntl();
    //const products = require('../../../mocks/products.json');
    const products = useSelector(state => state?.productsSearch?.products);
    const loading = useSelector(state => state?.productsSearch?.loading);
    const error = useSelector(state => state?.productsSearch?.error);

    if (loading) {
        return (<Loading />);
    }
    else if (error) {
        return (
            <label>Error buscando productos.</label>
        );
    }
    else if (products) {
        return (
            <div className='row'>
                <RenderProducts products={products} />
                <ProductDetailModal/>
            </div>
        );
    }
    else {
        return(<label>No hay productos que mostrar.</label>);
    }
}

export default SearchResult;