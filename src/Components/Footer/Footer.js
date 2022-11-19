import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer text-center">

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} CodeReviewShop</p>
      </div>

      <div className="footer__info">
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <i class="bi bi-whatsapp" style={{ color: "green" }}></i> +233 50 4429 219 <br/>
          <a href="mailto:codereviewshop@gmail.com" rel="noreferrer" target='_blank'>
            <i className="bi bi-envelope-fill" style={{ color: "red" }}></i> codereviewshop@gmail.com
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/davesaah/" rel="noreferrer" target='_blank'>
            <i className="bi bi-linkedin" style={{ color: "blue" }}></i>
          </a>
          <a href="https://github.com/DaveSaah" rel="noreferrer" target='_blank'>
            <i className="bi bi-github" style={{ color: "black" }}></i>
          </a>
          <a href="https://twitter.com/dave_saah" rel="noreferrer" target='_blank'>
            <i className="bi bi-twitter" style={{ color: "DeepSkyBlue" }}></i>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
