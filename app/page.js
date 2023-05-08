import Image from "next/image";
import JtLogo from "../public/jt-logo.png";

export default function Home() {
  return (
    <div>
      <div className="main_grid">
        {/* //*LEFT SIDE */}
        <section className="left-sq">
          <div>
            <Image src={JtLogo} alt="" className="" />
          </div>
        </section>

        {/* //*RIGHT SIDE */}
        <section className="right-sq">
          <div className=" m-5 p-5">
            <h1 className="text-cerulean font-bold text-4xl">
              A web design service for small businesses owners and creatives.
            </h1>
            <p className="text-aquamarine mt-1 mb-5 mx-1">
              Welcome! Laughing Coyote Development is a digital studio which
              brings small businesses online. orem ipsum dolor sit, amet
              consectetur adipisicing
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
