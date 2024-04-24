import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import "../styles/about.css";
import truck from "../assets/images/truck.png";
import chutter from "../assets/images/chutter.png";
import bolt from "../assets/svgs/bolt.svg";
import domain from "../assets/svgs/domain.svg";
import door from "../assets/svgs/door.svg";
import mood from "../assets/svgs/mood.svg";
import arrow from "../assets/svgs/arrow.svg";
import book from "../assets/svgs/book.svg";
import car from "../assets/svgs/car.svg";
import mot from "../assets/svgs/mot.svg";
import box from "../assets/svgs/box.svg";
import box2 from "../assets/svgs/box2.svg";
import payment from "../assets/svgs/payments.svg";
import arming from "../assets/svgs/arming.svg";
import { Testimonies } from "../components/Testimonies";
import { ContactSection } from "../components/ContactSection";
export const About = () => {
  return (
    <motion.div className="about">
      <PageHero title="About us" />
      <div className="left-right abt">
        <div className="tadem">
          <h3>Welcome to Tadem</h3>
          <p>
            Ridiculus mus mauris vitae ultricies leo. Sed elementum tempus
            egestas sed sed risus pretium quam. Dignissim cras tincidunt
            lobortis feugiat. Eget gravida cum sociis natoque penatibus . Felis
            donec et odio pellentesque diam volutpat commodo sed egestas. Mattis
            pellentesque id nibh tortor. Sociis natoque penatibus et magnis dis
            parturient montes nascetur ridiculus. Pharetra pharetra massa massa
            ultricies mi quis hendrerit dolor magna. Amet cursus sit amet dictum
            sit amet justo donec enim. Rutrum quisque non tellus orci. Nisl
            tincidunt eget nullam non nisi est. Ultricies mi eget mauris
            pharetra et ultrices neque ornare. Mollis nunc sed id semper risus
            in hendrerit.
          </p>
        </div>
        <div className="tardem-right">
          <img src={truck} alt="truck" />
        </div>
      </div>
      <div className="reason-row">
        <div>
          <div className="svg-wrap">
            <img src={domain} alt="card" />
          </div>
          <p className="num">143+</p>
          <p>House Moved</p>
        </div>
        <div>
          <div className="svg-wrap">
            <img src={door} alt="card" />
          </div>
          <p className="num">543+</p>
          <p>Offices moved</p>
        </div>
        <div>
          <div className="svg-wrap">
            <img src={mood} alt="card" />
          </div>
          <p className="num">143+</p>
          <p>House Moved</p>
        </div>
        <div>
          <div className="svg-wrap">
            <img src={mot} alt="card" />
          </div>

          <p className="num">50,670+</p>
          <p>Kilometers covered</p>
        </div>
      </div>
      <motion.div className="choose-us">
        <div className="left-right">
          <div className="left-img-wrap">
            <img src={chutter} alt="delivery" />
          </div>
          <div className="why-right">
            <div className="why-points">
              <img src={payment} alt="svg" />
              <div className="point-right">
                <p className="point-bld">Our Vision</p>
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
                <p className="point-bld">Our Mission</p>
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
                <p className="point-bld">Our Goals</p>
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
      <div className="moving">
        <p className="mme">Moving made easy</p>
        <p className="mv-row">
          <span>
            <img src={book} alt="book" />
          </span>
          <span>Book our service</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
          <span>
            <img src={box} alt="arrow" />
          </span>
          <span>We pack your goods</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
          <span>
            <img src={car} alt="arrow" />
          </span>
          <span>We move your goods</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
          <span>
            <img src={box2} alt="arrow" />
          </span>
            <span>We deliver yoour goods</span>
        </p>
      </div>
      <Testimonies />
      <ContactSection />
    </motion.div>
  );
};
