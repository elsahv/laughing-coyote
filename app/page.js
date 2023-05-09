import Image from "next/image";
import Coyote from "../public/coyote.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="main_grid">
        {/* //*LEFT SIDE */}
        <section className="left-sq">
          <Image src={Coyote} alt="" className="w-full" />
        </section>

        {/* //*RIGHT SIDE */}
        <section className="right-sq">
          <div className=" m-5 p-5 mt-[150px]">
            <div className="_textShadow text-cerulean font-bold text-4xl">
              A{" "}
              <Link className="underline" href="/services">
                web design
              </Link>{" "}
              service for small businesses owners and creatives.
            </div>
            <p className="text-aquamarine mt-1 mb-5 mx-1 text-lg">
              Welcome! Laughing Coyote Development is a digital studio which
              brings small businesses online.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
