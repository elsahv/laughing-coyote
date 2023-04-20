import content from "./data";

const Gallery = () => {
  return (
    <section id="gallery" className="">
      <h2 className="bg-orange">Selected Designs</h2>
      <span className="text-lg pl-1">
        Various web designs offered.... here's just a few possibilities!
      </span>
      <div className="py-5">
        <div className="grid 2xl:grid-cols-2 gap-12 sm:grid-cols-1">
          {content.map((item, index) => (
            <div key={index}>
              {/* <h3>{item.title}</h3> */}

              <div id="border">
                <img src={item.image} alt="" />
              </div>
              {/* <p>{item.paragraph1}</p> */}
              {/* <button>view project</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
