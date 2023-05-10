import Hero from "./components/Sections/Hero";
import Services from "./components/Sections/ServicesInfo";
import Gallery from "./components/Sections";
import Contact from "./components/Sections/ContactInfo";

export default function Home() {
  return (
    <div className="bg-munsell">
      <Hero />
      <div className="2xl:hidden lg:relative">
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
