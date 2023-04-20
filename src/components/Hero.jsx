import ImageOne from "../images/jt-logo.png";

const Intro = () => {
  return (
    <section className="h-screen">
      <div className="my-5">
        <h1 className="text-4xl my-5">
          A web design service for small businesses and creative artists
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
        <a href="/#services">Find out more</a>
      </div>
    </section>
  );
};

export default Intro;
