import React from 'react'
import {motion} from "framer-motion"
import { MainNav } from '../components/MainNav'
import { Footer } from './Footer'

export const MainLayout = ({ children }) => {
  return (
    <motion.div className='main'>
        <MainNav/>
        {children}
        <Footer/>
    </motion.div>
  )
}
