import { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import "./styles/app.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        product.quantity += 1;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div id="root">
      <Navbar size={cart.length} setShow={setShow} />
      <div className="content">
        {show ? (
          <Shop handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}
        {warning && <div className="warning">Item already in cart</div>}
      </div>
      <Footer />
    </div>
  );
};

export default App;
