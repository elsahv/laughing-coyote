import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
// import { motion } from "framer-motion";

function App() {
  return (
    <div className="px-5">
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
