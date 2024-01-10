import React from "react";
import { useIntl } from 'react-intl';
import SearchCriteria from "./SearchCriteria";
import SearchResult from "./SearchResult";
import AddProductModal from "./AddProduct/AddProductModal";

const Products = () => {
    const strings = useIntl();
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-3">
                    {strings.formatMessage({ id: "products" })}
                </div>
                <div className="col-sm-12 col-lg-9">
                    <SearchCriteria />
                </div>
            </div>
            <hr />
            <div className="row">
                <SearchResult />
            </div>
            <AddProductModal />
        </div>
    )
}

export default Products;