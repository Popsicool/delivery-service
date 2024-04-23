import React from 'react'
import {motion} from "framer-motion"
import { PageHero } from '../components/PageHero'
import "../styles/about.css"
export const Service = () => {
  return (
    <motion.div className='about'>
        <PageHero title='Services'/>
    </motion.div>
  )
}