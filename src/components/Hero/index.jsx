import content from "./data";

const Intro = () => {
  return (
    <section id="about" className="pt-1">
      <div className="">
        <h1 className="text-4xl pt-5 ">
          A web design service for small businesses owners and creatives.
        </h1>
        <p className="mt-1 mb-5 mx-1">
          Welcome! Laughing Coyote Development is a digital studio which brings
          small businesses online. orem ipsum dolor sit, amet consectetur
          adipisicing elit. Quaerat sequi atque fugit error illo deleniti nobis
          praesentium rerum veniam optio? Consequuntur vel tempora quo maiores
          fugiat ipsam dolores cupiditate maxime! Various designs available
          for...
        </p>
        {/* //todo */}
        {/* <div className="pt-5"> */}
        <div className="pt-[125px] py-5 mt-5">
          <div className="grid 2xl:grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-1">
            {content.map((item, index) => (
              <div key={index}>
                <h3 className="pl-1 pb-1 text-2xl font-bold text-onyx">
                  {item.title}
                </h3>

                <div id="border" className="rounded-md">
                  <img src={item.image} alt="" />
                </div>

                {/* <p>{item.paragraph1}</p> */}
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* //todo end*/}
      </div>
    </section>
  );
};

export default Intro;
