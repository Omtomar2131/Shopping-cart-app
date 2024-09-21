import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';

const Navbar = ({ size, setShow }) => {
  return (
    <div>
      <nav>
        <div className="navbox">
          <span className="shop-name" onClick={()=>setShow(true)}>OT Shop</span>
          <div className="cart" onClick={() => setShow(false)} role="button" aria-label="Open cart">
            <span>
              <i className="fa-solid fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
