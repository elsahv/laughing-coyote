import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <>
      <div className="2xl:hidden lg:block">
        <Hamburger />
      </div>
      <header className="pt-5 pl-2 bg-munsell w-[420px] fixed left-0 h-full border-r-2 ">
        <div className="py-2 px-5 text-3xl">
          <a href="/">
            <b className="text-4xl">Laughing Coyote-</b>
            <br /> Web Development/ Design
          </a>
        </div>
        <ul className="text-2xl pl-5 ml-1">
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#gallery">Gallery</a>
          </li>

          <li className="">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
