import content from "./data";

const Services = () => {
  return (
    <section id="work" className="pt-1">
      <div id="grid" className="flex flex-col ml-5">
        {content.map((item, index) => (
          <div key={index} className="">
            <div id="grid-content" className="py-5">
              <h3 className="text-4xl mb-1 mt-2">{item.title}</h3>
              <span className="pl-2 text-2xl text-onyx">date</span>
            </div>
            <img
              src={item.icon}
              alt=""
              className="pl-5 m-2 w-[1200px] h-[750px]"
            />
            <div id="grid-content" className="pl-1">
              <p className="">{item.paragraph1}</p>
              <button className="rounded-sm bg-teal py-1 px-2 mt-2 mb-[100px] border border-onyx">
                read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
