import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import "../styles/main-nav.css"
const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/service"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Dashboard",
        path: "/dashboard"
    },
]
export const MainNav = () => {
  return (
    <motion.nav className='main-nav'>
        <p><Link to="/">Logo</Link></p>
        <motion.div className='main-nav-ul-wrap'>
            <motion.ul className="main-nav-ul">
                {links.map((each, idx) => (
                    <li key={idx}><Link className='nav-link' to={each.path}>{each.name}</Link></li>
                ))}

            </motion.ul>
            

        </motion.div>
    </motion.nav>
  )
}
