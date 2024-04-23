import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/svgs/avatar.svg";
export const Testimonies = () => {
  return (
    <motion.div className="choose-us">
      <p className="service-header">Testimonies</p>
      <motion.div className="testimonies">
        <div className="testimony-card">
          <p className="testimony-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quod ex rerum magni rem, officiis molestiae laborum explicabo nemo
            doloribus molestias debitis! Quisquam veritatis soluta,
            exercitationem magnam corporis dolores fugiat a sit expedita quo
            rerum eveniet
          </p>
          <div className="svg-wrap">
            <img src={avatar} alt="card" />
          </div>
          <p className="testifier">Lilian Wajiku</p>
          <p className="testifier-work">CEO - Join her glow</p>
        </div>
        <div className="testimony-card">
          <p className="testimony-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quod ex rerum magni rem, officiis molestiae laborum explicabo nemo
            doloribus molestias debitis! Quisquam veritatis soluta,
            exercitationem magnam corporis dolores fugiat a sit expedita quo
            rerum eveniet
          </p>
          <div className="svg-wrap">
            <img src={avatar} alt="card" />
          </div>
          <p className="testifier">Helen Helen</p>
          <p className="testifier-work">MD - Helen electronics</p>
        </div>
        <div className="testimony-card">
          <p className="testimony-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quod ex rerum magni rem, officiis molestiae laborum explicabo nemo
            doloribus molestias debitis! Quisquam veritatis soluta,
            exercitationem magnam corporis dolores fugiat a sit expedita quo
            rerum eveniet
          </p>
          <div className="svg-wrap">
            <img src={avatar} alt="card" />
          </div>
          <p className="testifier">Samson Akinola</p>
          <p className="testifier-work">Junior Developer at FOG</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
