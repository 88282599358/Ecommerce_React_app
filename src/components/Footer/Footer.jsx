import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../images/payments.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ex
            error esse reiciendis dolorem consequuntur nihil eum aliquam
            mollitia ut?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Dahisar (E), Mumbai 400068</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 98563 57412</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: varstore@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">Smart Watches</span>
          <span className="text">Headphones</span>
          <span className="text">Laptop</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">T & C</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            VARSTORE.com | Copyright | 2023 | Created by Evolve Groups | All
            Right Reversed
          </div>
        </div>
        <img src={Payment} className="imgs" alt="Payments Method" />
      </div>
    </footer>
  );
};

export default Footer;
