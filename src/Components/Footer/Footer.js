import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer text-center">

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} CodeReviewShop</p>
      </div>

      <div className="footer__contact">
      <div>
        <h3>Contact Us</h3>
        <p><i className="bi bi-telephone-fill"></i> +233 50 4429 219</p>
        <p><i className="bi bi-envelope-fill"></i> codereviewshop@gmail.com</p>
      </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/davesaah/">
            <i className="bi bi-linkedin" style={{ color: "blue" }}></i>
          </a>
          <a href="mailto:saahdavid17@gmail.com">
            <i className="bi bi-envelope" style={{ color: "red" }}></i>
          </a>
          <a href="https://github.com/DaveSaah">
            <i className="bi bi-github" style={{ color: "black" }}></i>
          </a>
          <a href="https://twiiter.com/dave_saah">
            <i className="bi bi-twitter" style={{ color: "DeepSkyBlue" }}></i>
          </a>
      </div>
      </div>

    </div>
  );
}

export default Footer;
