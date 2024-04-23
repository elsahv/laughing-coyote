import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion } from "framer-motion";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <App />
    </motion.div>
  </React.StrictMode>
);
