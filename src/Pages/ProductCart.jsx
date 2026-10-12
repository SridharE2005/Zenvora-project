
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../Redux/cartSlice";
import "../Styles/ProductCart.css";
import { useNavigate } from "react-router-dom";

export default function ProductCart() {
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const { items } = useSelector((state) => state.cart);
    items.forEach((item)=>{
         console.log(item)
    })
   

    // Remove product from cart
    const handleRemove = (id) => {
        dispatch(deleteCart(id));
    };

    // Calculate total price
    const totalPrice = items.reduce(
        (total, item) => total + Number(item.price || 0),
        0
    );

    return (
        <div className="product-cart-main-container">

            <h2 className="cart-title">My Shopping Cart</h2>

            {items.length === 0 ? (
                <div className="empty-cart">
                    <h3>Your cart is empty!</h3>
                    <p>Add some products to get started.</p>
                </div>
            ) : (
                <>
                    <div className="cart-products-container">

                        {items.map((item) => (
                            <div className="cart-container" key={item.id} >

                                <img
                                    src={item.image}
                                    alt={item.title || item.name || "Product"}
                                />

                                <div className="shopping-cart-details" onClick={()=>navigate(`/product-details/${item.id}/${item.category}`)}>
                                    <h3>
                                        {item.title || item.name}
                                    </h3>

                                    <p>
                                        Price: ₹{Number(item.price).toLocaleString("en-IN")}
                                    </p>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>

                            </div>
                        ))}

                    </div>

                    <div className="cart-summary">
                        <h3>
                            Total Products: {items.length}
                        </h3>

                        <h2>
                            Total Price: ₹{totalPrice.toLocaleString("en-IN")}
                        </h2>
                    </div>
                </>
            )}

        </div>
    );
}

