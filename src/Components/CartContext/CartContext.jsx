import { createContext, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      item => item.id === product.id
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map(item =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity - 1
            }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;