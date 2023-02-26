import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const {cartItems, setCartItems, emptyCart} = useContext(Context);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));
    const orderPressed = "Ordering..."

    function calculateTotal() {
        const total = cartItems.length * 5.99;
        return total.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }
    
    function handleClick() {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order Placed!");
            emptyCart();
            setButtonText("Place Order");
        }, "3000");
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {calculateTotal()}</p>
            <div className="order-button">
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </main>
    )
};

export default Cart;