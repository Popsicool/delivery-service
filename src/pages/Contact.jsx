import React from 'react'
import {motion} from "framer-motion"
import { PageHero } from '../components/PageHero'
import "../styles/about.css"
export const Contact = () => {
  return (
    <motion.div className='about'>
        <PageHero title='Contact us'/>
    </motion.div>
  )
}