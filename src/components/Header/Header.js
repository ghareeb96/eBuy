import React from 'react';
import "./Header.scss";
import { ReactComponent as Search } from "./Search.svg";
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Wishlist } from "./Wishlist.svg";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-left-side">
                    <h2 className="logo-typo">
                        <span>e</span>Buy
                    </h2>
                </div>

                <div className="header-middle">
                    <div className="search-bar">
                        <input type="text" name="search-input" id="search-input" className="search-input" />
                        <button className="search-btn">
                            <Search className='icon' id='search-icon' />
                        </button>
                    </div>
                </div>

                <div className="header-right-side">
                    <div className="shopping-info cart-info">
                        <Cart className='icon' id='cart-icon' />
                        <h5>My Cart</h5>
                    </div>
                    <div className="shopping-info wishlist-info">
                        <Wishlist className='icon' id='wishlist-icon' />
                        <h5>Wishlist</h5>
                    </div>
                    <div className="sign-in-btn">
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;