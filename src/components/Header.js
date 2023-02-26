import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";


function Header() {
    const {cartItems} = useContext(Context);

    function cartIcon() {
        if (cartItems.length > 0) {
            return "ri-shopping-cart-fill ri-fw ri-2x";
        } else {
            return "ri-shopping-cart-line ri-fw ri-2x";
        }
    }

    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart"><i className={cartIcon()}></i></Link>
        </header>
    )
};

export default Header;
