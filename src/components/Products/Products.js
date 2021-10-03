import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./Products.scss";

const Products = ({ products }) => {
    return (
        
            products.length !== 0 ?
                <div className="products-container">
                    {
                        products.map(product => (
                            <ProductCard item={product} key={product.id} />
                        ))
                    }
                </div>
                :
                <div className="empty-products">
                    <h2>
                        No Products to show
                    </h2>
                </div>
        
    )
}

export default Products;