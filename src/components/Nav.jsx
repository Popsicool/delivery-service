import React from "react";
import { motion } from "framer-motion";
import "../styles/nav.css";
import { useLocation, Link } from "react-router-dom";
import logout from "../assets/svgs/log-out.svg"
import dashboard from "../assets/svgs/pie-chart.svg"
import users from "../assets/svgs/users.svg"
import message from "../assets/svgs/message-square.svg"
import creditCard from "../assets/svgs/credit-card.svg"
import dollar from "../assets/svgs/dollar-sign.svg"
import settings from "../assets/svgs/settings.svg"

const links = [
  { name: "Dashboard", svg: dashboard, location: "/" },
  { name: "User Profile", svg: users, location: "/profile" },
  { name: "Messages", svg: message, location: "/messages" },
  { name: "History", svg: creditCard, location: "/history" },
  { name: "Payments", svg: dollar, location: "/dashboard" },
  { name: "Support", svg: settings, location: "/support" },
  // { name: "Dashboard", svg: logout, location: "/dashboard" },
];

export const Nav = () => {
  const location = useLocation();
  const path = location.pathname
  return (
    <motion.nav className="nav">
      <div>Logo</div>
      <hr />
      <ul className="nav-ul">
        {links.map((link, idx) => {
          return (
            <li key={idx}><Link to={link.location} className={path === link.location ? "nav-lnk active" : "nav-lnk"}   ><img src={link.svg} alt="log-out" className="nav-svg"/> {link.name}</Link></li>
          )
        })}
        <hr />
        <li className="nav-lnk"><img src={logout} alt="log-out" className="nav-svg"/>Logout</li>
      </ul>
    </motion.nav>
  );
};
