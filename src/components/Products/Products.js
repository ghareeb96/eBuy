import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./Products.scss";

const Products = ({products})=> {
    return (
        <div className="products-container">
            {
                products.map(product=>(
                    <ProductCard item={product} key = {product.id}/>
                ))
            }
        </div>
    )
}

export default Products ;