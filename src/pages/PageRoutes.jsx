import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { DashboardLayout } from "./DashboardLayout"
import { History } from "./History";
import { Profile } from "./Profile";
import { Home } from "./Home";
import { MainLayout } from "./MainLayout";
import { About } from "./About";
import { Service } from "./Service";
import { Contact } from "./Contact";
// import { Charts } from "./Charts";

export const PageRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <motion.div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainLayout><Home/></MainLayout>} />
            <Route path="/about" element={<MainLayout><About/></MainLayout>} />
            <Route path="/service" element={<MainLayout><Service/></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact/></MainLayout>} />
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/profile" element={<DashboardLayout><Profile/></DashboardLayout>} />
            <Route path="/history" element={<DashboardLayout><History/></DashboardLayout>} />
            {/* <Route path="/messages" element={<DashboardLayout><History/></DashboardLayout>} /> */}
            {/* <Route path="/messages" element={<Charts/>} /> */}
          </Routes>
        </AnimatePresence>
    </motion.div>
  );
};
