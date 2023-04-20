import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="p-5 2xl:w-[1500px] absolute right-0 overflow-scroll h-full bg-parchment lg:w-[100%]">
      <App />
    </div>
  </React.StrictMode>
);
