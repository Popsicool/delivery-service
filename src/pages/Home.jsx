import React, { useState } from "react";
import { motion } from "framer-motion";
import truck from "../assets/images/d.png";
import "../styles/main.css";
import bike from "../assets/svgs/bike.svg";
import shipping from "../assets/svgs/shipping.svg";
import bolt from "../assets/svgs/bolt.svg";
import payment from "../assets/svgs/payments.svg";
import arming from "../assets/svgs/arming.svg";
import dwoman from "../assets/images/dwoman.png";
import { Testimonies } from "../components/Testimonies";
import { ContactSection } from "../components/ContactSection";
const faqs = [
  {
    question: "Where are you located?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "How late in the day can I call for a same day delivery?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "exercitation ullamco laboris nisi ut aliquip ex ea",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "velit esse cillum dolore eu fugiat nulla pariatur.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "Where are you located?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "How late in the day can I call for a same day delivery?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "exercitation ullamco laboris nisi ut aliquip ex ea",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "velit esse cillum dolore eu fugiat nulla pariatur.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
];
export const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      // If the clicked item is already expanded, collapse it
      setExpandedIndex(null);
    } else {
      // Otherwise, expand the clicked item
      setExpandedIndex(index);
    }
  };
  return (
    <motion.div className="main">
      <motion.div className="hero-section">
        <div className="hero-left">
          <p className="move">
            We can move you everywhere. <span>Fast and Easily</span>
          </p>
          <p className="hero-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem sequi iure maxime aliquam vero labore voluptatem
            deserunt saepe laborum velit, voluptate impedit quo enim accusamus
            natus? Quibusdam exercitationem qui aut tenetur alias minima impedit
            ab nesciunt consequuntur voluptatibus sed quaerat ipsam dolorem quod
            et, ratione incidunt ut eaque aliquid deleniti.
          </p>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="hero-right">
          <img src={truck} alt="truck" />
        </div>
      </motion.div>
      <motion.div className="our-services">
        <p className="service-header">Our Services</p>
        <div className="services-cards">
          <div className="service-card">
            <div className="svg-wrap">
              <img src={bike} alt="card" />
            </div>
            <p className="relo">Relocation and Logistics</p>
            <p className="service-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              totam reprehenderit libero ea corrupti quibusdam veniam nostrum
              officia odio voluptatibus eius, nam odit dolor quo facere? Commodi
              perspiciatis saepe asperiores possimus nemo. Expedita molestias
              repudiandae dolorem et eligendi unde praesentium, architecto magni
              facere illum rem similique cum veritatis modi sint.
            </p>
          </div>
          <div className="service-card">
            <div className="svg-wrap">
              <img src={bike} alt="card" />
            </div>
            <p className="relo">Relocation and Logistics</p>
            <p className="service-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              totam reprehenderit libero ea corrupti quibusdam veniam nostrum
              officia odio voluptatibus eius, nam odit dolor quo facere? Commodi
              perspiciatis saepe asperiores possimus nemo. Expedita molestias
              repudiandae dolorem et eligendi unde praesentium, architecto magni
              facere illum rem similique cum veritatis modi sint.
            </p>
          </div>
          <div className="service-card">
            <div className="svg-wrap">
              <img src={bike} alt="card" />
            </div>
            <p className="relo">Relocation and Logistics</p>
            <p className="service-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              totam reprehenderit libero ea corrupti quibusdam veniam nostrum
              officia odio voluptatibus eius, nam odit dolor quo facere? Commodi
              perspiciatis saepe asperiores possimus nemo. Expedita molestias
              repudiandae dolorem et eligendi unde praesentium, architecto magni
              facere illum rem similique cum veritatis modi sint.
            </p>
          </div>
          <div className="service-card">
            <div className="svg-wrap">
              <img src={bike} alt="card" />
            </div>
            <p className="relo">Relocation and Logistics</p>
            <p className="service-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              totam reprehenderit libero ea corrupti quibusdam veniam nostrum
              officia odio voluptatibus eius, nam odit dolor quo facere? Commodi
              perspiciatis saepe asperiores possimus nemo. Expedita molestias
              repudiandae dolorem et eligendi unde praesentium, architecto magni
              facere illum rem similique cum veritatis modi sint.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="choose-us">
        <p className="service-header">Why Choose us</p>
        <div className="left-right">
          <div className="left-img-wrap">
            <img src={dwoman} alt="delivery" />
          </div>
          <div className="why-right">
            <div className="why-points">
              <img src={payment} alt="svg" />
              <div className="point-right">
                <p className="point-bld">Cost saving</p>
                <p className="why-txt">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus, provident. Asperiores veritatis vitae facere dolorem
                  necessitatibus hic autem velit voluptatibus quam praesentium
                  tempora corporis, cupiditate quo distinctio inventore, modi
                  ad!
                </p>
              </div>
            </div>
            <div className="why-points">
              <img src={arming} alt="svg" />
              <div className="point-right">
                <p className="point-bld">Safe and Fast</p>
                <p className="why-txt">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus, provident. Asperiores veritatis vitae facere dolorem
                  necessitatibus hic autem velit voluptatibus quam praesentium
                  tempora corporis, cupiditate quo distinctio inventore, modi
                  ad!
                </p>
              </div>
            </div>
            <div className="why-points">
              <img src={bolt} alt="svg" />
              <div className="point-right">
                <p className="point-bld">Right on time</p>
                <p className="why-txt">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus, provident. Asperiores veritatis vitae facere dolorem
                  necessitatibus hic autem velit voluptatibus quam praesentium
                  tempora corporis, cupiditate quo distinctio inventore, modi
                  ad!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ContactSection/>
      <Testimonies />
      <motion.div className="faqs">
      <p className="service-header">FAQs</p>
        <div className="accordion">
          {faqs.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                key={index}
                aria-expanded={expandedIndex === index ? "true" : "false"}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
