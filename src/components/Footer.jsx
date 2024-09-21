import '../styles/footer.css'; // Ensure you create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-box">
          <span className="logo">OT Shop</span>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} OT Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
