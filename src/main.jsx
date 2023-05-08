import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import { motion } from "framer-motion";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Header />
      <div className="p-5 2xl:w-[1500px] absolute right-0 overflow-scroll h-full bg-parchment lg:w-[100%]">
        <App />
      </div>
    </motion.div>
  </React.StrictMode>
);
