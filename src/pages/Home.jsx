import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import vec1 from "../assets/svgs/vec.svg"
import "../styles/home.css"


export const Home = () => {
  return (
    <AnimatePresence >
      <motion.div className='home'>
        <motion.div className='home-left'>
          <div className="home-left-top">
            <div className="home-top-card">
              <div className='card-dtl'>
                <p className='t-balance'>Total Balance</p>
                <p>KSH 20000</p>
              </div>
              <div>
                <img src={vec1} alt="vec1" />
              </div>
            </div>
            <div className="home-top-card"></div>
            <div className="home-top-card"></div>
            
          </div>
          <div className="home-left-middle"></div>
          <div className="home-left-down"></div>
        </motion.div>
        <motion.div className='home-right'>
          h
        </motion.div>

      </motion.div>
    </AnimatePresence>
  )
}
