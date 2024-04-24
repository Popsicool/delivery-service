import React from 'react'
import { motion } from 'framer-motion'
import whatsapp from "../assets/svgs/whatsapp.svg";
import phone from "../assets/svgs/phone.svg";
export const ContactSection = () => {
  return (
    <motion.div className="customer-service">
        <p>Our Customer service is available 24/7</p>
        <p>
          <img src={whatsapp} alt="whatsapp" />
          <img src={phone} alt="phone" />
          +254748684421
        </p>
      </motion.div>
  )
}
