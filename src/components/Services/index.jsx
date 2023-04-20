import content from "./data";

const Services = () => {
  return (
    <section id="services" className="">
      <div>
        <h2 className="bg-coral">Services</h2>
        <p>
          All small businesses should have a website. While social media is
          useful, it is important for small businesses to have its own
          home.luptates inventore maiores dolorum mollitia omnis aliquam dicta?
          I like to divide my work process into four phases...
        </p>
      </div>
      <div className="grid gap-5">
        {content.map((item, index) => (
          <div key={index} className="">
            <div className="flex items-center">
              <h3 className="underline mb-1 mt-2">{item.title}---</h3>
              <img
                src={item.icon}
                alt=""
                width="50px"
                height="50px"
                className="m-2"
              />
            </div>
            <div className="pl-1">
              <span>{item.paragraph1}</span>
              <span>{item.paragraph2}</span>
              <span>{item.paragraph3}</span>
              <span>{item.paragraph4}</span>
            </div>
            <ul className="p-1">
              <h4>{item.listItemTitle}</h4>
              <li>{item.listItem1}</li>
              <li>{item.listItem2}</li>
              <li>{item.listItem3}</li>
            </ul>
            {/* //todo */}
            {/* <>
              <img
                src={item.skillIcon1}
                alt=""
                width="50px"
                height="50px"
                className="m-2"
              />
            </> */}
            {/* //todo end */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
