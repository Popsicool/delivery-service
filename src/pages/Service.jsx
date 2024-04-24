import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import manService from "../assets/images/man-service.png";
import "../styles/about.css";
export const Service = () => {
  return (
    <motion.div className="about">
      <PageHero title="Services" />
      <div className="left-right abt">
        <div className="tadem">
          <h3>Proud to deliver excellent services all the time</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea consequat.
          </p>
        </div>
        <div className="tardem-right">
          <img src={manService} alt="truck" />
        </div>
      </div>
    </motion.div>
  );
};
