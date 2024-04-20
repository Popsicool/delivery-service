import React from 'react'
import { motion } from 'framer-motion'
import bell from "../assets/svgs/bell.svg"
import avatar  from "../assets/svgs/avatar.svg"
import "../styles/nav-top.css"
export const NavTop = () => {
  return (
    <motion.div className='nav-top'>
        <div className='top-left'>
            <p>Hello, Lilian</p>
        </div>
        <div className="top-right">
            <img src={bell} alt="bell" />
            <img src={avatar} alt="avatar"/>
            <p>Lilian Wanjiku</p>
        </div>
    </motion.div>
  )
}
