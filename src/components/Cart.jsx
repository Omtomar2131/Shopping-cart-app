import PropTypes from 'prop-types';
import "../styles/cart.css";

function Cart({ cart, setCart }) {
    
  const handleIncrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handleDecrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: Math.max((cartItem.quantity || 1) - 1, 1) }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handleRemove = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="cart-details">
              <p>{item.name}</p>
              <p>Price: {item.price} Rs</p>
              <p>Quantity: {item.quantity || 1}</p>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <div className="total-price">
          <h3>Total Price: {totalPrice} Rs</h3>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
