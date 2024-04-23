import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import map from "../assets/svgs/map.svg"

export const Footer = () => {
  return (
    <motion.footer>
      <div className="footer-div1">
        <div>
          <Link to="/">
            <div className="logo-wrap">LOGO</div>
            <p>
              When you’re moving from your old house to a new location, there
              are thousands of things to betaken care of. We’ll be your
              assistants, helping you move all your belongings fast wherever you
              wish.
            </p>
          </Link>
        </div>
      </div>
      <div className="footer-div">
        <p className="footer-head">
        Quick Links
        </p>
        <ul>
          <li className="c-link">
            <Link to="/">Home</Link>
          </li>
          <li className="c-link">
            <Link to="/about">About</Link>
          </li>
          <li className="c-link">
            <Link to="/service">Services</Link>
          </li>
          <li className="c-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="foooter-div">
      <p className="footer-head">
        Services
        </p>
        <ul>
          <li className="c-link">
          Courier services
          </li>
          <li className="c-link">
          Trucking & Haulage
          </li>
        </ul>
      </div>
      <div className="foooter-div">
      <p className="footer-head">
        Contact
        </p>
        <ul>
          <li className="c-link">
            <span className="contact-text"><i className="fa-solid fa-location-dot"></i> No 3, Nairobi, Kenya</span>
          </li>
          <li className="c-link">
            <span className="contact-text"><i className="fa-solid fa-phone"></i>+254748684421</span>
          </li>
          <li className="c-link">
            <span className="contact-text"><i className="fa-regular fa-envelope"></i>lilly@gmail.com</span>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};
