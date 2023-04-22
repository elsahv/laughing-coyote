import ImageOne from "../images/jt-logo.png";

const Intro = () => {
  return (
    <section className="h-screen">
      <div className="my-5">
        <h1 className="text-4xl my-5">
          A web design service for small businesses owners and creatives.
        </h1>
        <p className="my-5 mx-1">
          Laughing Coyote Development brings small businesses online. orem ipsum
          dolor sit, amet consectetur adipisicing elit. Quaerat sequi atque
          fugit error illo deleniti nobis praesentium rerum veniam optio?
          Consequuntur vel tempora quo maiores fugiat ipsam dolores cupiditate
          maxime!
        </p>
        <div className="my-5 pl-2">
          <img src={ImageOne} alt="" id="border" />
        </div>
        <div className="2xl:my-0 xl:my-[125]">
          <button className="bg-munsell border border-onyx ml-2 py-1 px-3 hover:bg-coral transition delay-100 duration-300">
            <a href="/#services">Find out more</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
