import React from 'react'
import { DashboardNav } from '../components/DashboardNav';
import {motion} from "framer-motion"
import { NavTop } from '../components/NavTop';
export const DashboardLayout = ({ children }) => {
    return (
        <motion.div className="admin">
            <motion.div className="admin-left">
            <DashboardNav />
        </motion.div>

        <motion.div className="admin-right">
            <NavTop/>
            {children}
        </motion.div>

        </motion.div>
    );
  };
