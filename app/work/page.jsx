import Image from "next/image";
import content from "./data";

const Work = () => {
  return (
    <div className="main_grid">
      <section className="left-sq">
        <h2 className="bg-coral">Work Process</h2>
        <p className="my-5">
          All small businesses should have a website. While social media is
          useful, it is important for small businesses to have its own
          home.luptates inventore maiores dolorum mollitia omnis aliquam dicta?
          I like to divide my work process into four phases...
        </p>
      </section>

      <section className="right-sq">
        <div className="grid gap-5">
          {content.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center">
                <h3 cl assName="underline mb-1 mt-2">
                  {item.title}---
                </h3>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
