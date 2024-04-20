import React, {useState} from 'react'
import { Account } from '../components/Account'
import security from "../assets/svgs/security.svg"
import account from "../assets/svgs/account.svg"
import { motion } from 'framer-motion'
import "../styles/profile.css"
import { Settings } from '../components/Security'

export const Profile = () => {
    const [showProfile, setSShowProfile] = useState(true)
  return (
    <motion.div className='profile'>
    <div className='prof-headers'>
        <p className= {showProfile ? "p-header p-header-active" : "p-header"} onClick={() => setSShowProfile(true)}> <img src={account} alt="acc" /> Account</p>
        <p className= {!showProfile ? "p-header p-header-active" : "p-header"} onClick={() => setSShowProfile(false)}> <img src={security} alt="sec" />  Security</p>
    </div>
        {showProfile ? <Account/> : <Settings/>}
    </motion.div>
  )
}
