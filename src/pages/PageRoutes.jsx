import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { History } from "./History";
import { Nav } from "../components/Nav";
import { NavTop } from "../components/NavTop";
import { Profile } from "./Profile";
import { Charts } from "./Charts";

export const PageRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <motion.div className="admin">
      <motion.div className="admin-left">
        <Nav />
      </motion.div>
      <motion.div className="admin-right">
        <NavTop/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/messages" element={<Charts/>} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
