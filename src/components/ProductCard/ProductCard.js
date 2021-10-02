import React, { useEffect,useRef } from 'react';
import "./ProductCard.scss"
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Wishlist } from "./Wishlist.svg";
import { ReactComponent as StarSolid } from "./StarSolid.svg";
import { ReactComponent as StarOutline } from "./StarOutline.svg";


const ProductCard = ({ item }) => {

    let stars = Array(5).fill(1);

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={item.image} alt="product" />
            </div>
            <div className="product-info">
                <div className="product-name">
                    <h4>{item.name}</h4>
                </div>
                <div className="product-rating" id={`${item.id}${item.color}`} >
                    {stars.map((star,index)=>(
                        <>
                            {index < item.rating ? <StarSolid className="icon stared" key={index}/>  : <StarOutline className="icon star-outline" key={index}/>}
                        </>
                    ))}
                </div>
                <div className="product-price">
                    <h3>{item.price} <span>{item.currency}</span></h3>
                </div>
            </div>
            <div className="action-btns">
                <div className="add-to-cart">
                    <button><Cart className="icon" id="add-to-cart"/> Add to Cart</button>
                </div>
                <div className="add-to-wishlist">
                    <button><Wishlist className="icon" id="add-to-wishlist"/></button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;