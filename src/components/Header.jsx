import { motion } from "framer-motion";
import Hamburger from "./Hamburger";
import background from "../assets/venus.jpg";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="2xl:hidden lg:block">
        <Hamburger />
      </div>
      <header
        style={{ backgroundImage: `url(${background})` }}
        className="text-shadow text-white drop-shadow-md pt-5 pl-2 w-1/3 fixed left-0 b h-full border border-black "
      >
        <div className="py-2 px-5 text-3xl ">
          <a href="/">
            <b className="text-4xl">Photography Demo</b>
          </a>
        </div>
        <ul className="text-2xl pl-5 ml-1">
          <li>
            <a href="/#about">About</a>
          </li>
          {/* <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#work">Work Process</a>
          </li> */}

          <li className="">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </header>
    </motion.div>
  );
};

export default Header;
