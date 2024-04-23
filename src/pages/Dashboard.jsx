import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import vec1 from "../assets/svgs/vec.svg";
import "../styles/home.css";

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Dashboard = () => {
  return (
    <AnimatePresence>
      <motion.div className="home">
        <motion.div className="home-left">
          <div className="home-left-top">
            <div className="home-top-card">
              <div className="card-dtl">
                <p className="t-balance">Total Balance</p>
                <p>KSH 20000</p>
              </div>
              <div className="card-chat">
                <ResponsiveContainer width="100%" aspect={1}>
                <ComposedChart width="100%" aspect={1} data={data}>
                  <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#7B4397"
                      fill="#7B4397"
                    >
                  </Area>
                    {/* <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      strokeWidth={2}
                    /> */}

                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="home-top-card">
              <div className="card-dtl">
                <p className="t-balance">Total Expenses</p>
                <p>KSH 20000</p>
              </div>
              <div className="card-chat">
                <ResponsiveContainer>
                  <ComposedChart width="100%" aspect={1} data={data}>
                  <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#DB2379"
                      fill="#DB2379"
                    >
                  </Area>
                    {/* <Line
                      type="monotone"
                      dataKey="amt"
                      stroke="#8884d8"
                      strokeWidth={2}
                    /> */}

                  </ComposedChart>   
                </ResponsiveContainer>
              </div>
            </div>
            <div className="home-top-card">
              <div className="card-dtl">
                <p className="t-balance">Total Savings</p>
                <p>KSH 20000</p>
              </div>
              <div className="card-chat">
                <ResponsiveContainer width="100%" aspect={1} className="relative">
                <ComposedChart width="100%" aspect={1} data={data}>
                  <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#DB2379"
                      fill="#DB2379"
                    >
                  </Area>
                    {/* <Line
                      type="monotone"
                      dataKey="amt"
                      stroke="#8884d8"
                      strokeWidth={2}
                    /> */}

                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="home-left-middle">
            <div className="home-left-middle-top">
              <p>Outlay</p>
              <div className="mid-rig">
                <span>Previous month</span>
                <span>Selected month</span>
              </div>
            </div>
          <ResponsiveContainer width="100%" >
          <ComposedChart width="100%" data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical=""/>
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip/>
          <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#DB2379"
                      fill="#DB2379"
                    >
                  </Area>
                  <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#aeaeae"
                      fill="#aeaeae"
                    >
                  </Area>

            </ComposedChart>

          </ResponsiveContainer>
          </div>
          {/* <div className="home-left-down">
            <div className="h-down-l">
              <ResponsiveContainer>

              </ResponsiveContainer>
            </div>
            <div className="h-down-">
              
            </div>

          </div> */}
        </motion.div>
        <motion.div className="home-right">h</motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
