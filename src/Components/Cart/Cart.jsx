import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    clearCart
  } = useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  const placeOrder = () => {
    setShowPopup(true);
    clearCart();
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-28 md:pt-40 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center md:text-left">
        Shopping Cart
      </h1>
      {
        cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-zinc-600">
              Your Cart is Empty 🛒
            </h2>
            <button onClick={() => navigate("/products")} className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg">
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {
              cartItems.map(item => (
                <div key={item.id} className="bg-zinc-100 p-4 md:p-5 rounded-xl mb-5 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                  {/* Product Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                    <img src={item.image} loading="lazy" alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain"/>
                    <div className="text-center sm:text-left">
                      <h2 className="font-bold text-lg">
                        {item.title}
                      </h2>

                      <p className="text-zinc-600">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  {/* Quantity Controls */}
                  <div className="flex justify-center items-center gap-4">
                    <button onClick={() => decreaseQty(item.id)} className="bg-red-500 text-white w-9 h-9 rounded-lg">
                      -
                    </button>
                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button onClick={() => increaseQty(item.id)} className="bg-green-500 text-white w-9 h-9 rounded-lg">
                      +
                    </button>
                  </div>
                </div>
              ))
            }
            {/* Total Section */}
            <div className="mt-10 flex flex-col items-center md:items-end gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Total: ${total.toFixed(2)}
              </h2>
              <button onClick={placeOrder} className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-lg">
                Confirm Order
              </button>
            </div>
          </>
        )
      }
      {/* Order Popup */}
      {
        showPopup &&
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              Order Placed Successfully 🎉
            </h2>
            <p className="mt-4 text-zinc-600">
              Thank you for shopping with Grociva
            </p>
            <button onClick={() => {setShowPopup(false); navigate("/");}} className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg w-full">
              Continue Shopping
            </button>
          </div>
        </div>
      }
    </section>
  );
};
export default Cart;