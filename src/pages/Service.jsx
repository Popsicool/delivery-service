import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import manService from "../assets/images/man-service.png";
import "../styles/about.css";
import apartment from "../assets/svgs/apartment.svg";
import house from "../assets/svgs/house.svg";
import shipping from "../assets/svgs/shipping.svg";
const servs = [
  {
    svg: apartment,
    title: "Office Relocation",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
  {
    svg: house,
    title: "Office Relocation",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
  {
    svg: shipping,
    title: "House Moving",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
  {
    svg: apartment,
    title: "Transportation Service",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
  {
    svg: apartment,
    title: "Office Relocation",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
  {
    svg: apartment,
    title: "Office Relocation",
    text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
  },
];
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
      <p className="service-header">We offer diverse services</p>
      <div className="s-cards">
        {servs.map((item, index) => (
          <div key={index} className="service-card sc2">
            <div className="svg-wrap">
              <img src={item.svg} alt="card" />
            </div>
            <p className="relo">{item.title}</p>
            <p className="service-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="hiring">
        <p className="hiring-header">Moving & Hiring Services</p>
        <p className="hiring-text">
          Donec ac odio tempor orci dapibus ultrices in. Sit amet commodo nulla
          facilisi nullam vehicula. Tristique et egestas quis ipsum suspendisse
          ultrices gravida dictum.
        </p>
      </div>
      <div className="do-d-work">
        <p>Let us do all the work</p>
        <p>“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”</p>
        <p>Call us now +233-384-89489</p>

      </div>
    </motion.div>
  );
};
