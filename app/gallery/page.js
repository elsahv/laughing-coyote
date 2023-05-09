import Image from "next/image";
import Eh from "../../public/screenshots/eh.png";
import Roof from "../../public/screenshots/hoveyroofing.png";
import Jungle from "../../public/screenshots/jungle.png";
import Wtbh from "../../public/screenshots/wtbh.png";

const page = () => {
  return (
    <div className="bg-munsell pb-[100px] ">
      <div className="pl-5 ml-5 mb-5">
        <h2 className="bg-coral font-bold text-2xl pt-[50px] underline">
          Gallery
        </h2>
        <p className="my-3 text-lg">
          All small businesses should have a website. While social media is
          useful, it is important for small businesses to have its own home.
          Scroll down to see various designs for...
        </p>
      </div>
      <section className="grid grid-cols-2 grid-rows-2 gap-x-1 gap-y-5 px-5 pt-[50px]">
        <div className="mx-5">
          <h2 className="text-2xl text-onyx font-bold pl-1 pb-1">
            ...Portfolios
          </h2>
          <Image
            src={Eh}
            alt=""
            className="border border-black drop-shadow-lg"
          />
        </div>

        <div className="mx-5">
          <h2 className="text-2xl text-onyx font-bold pl-1 ">
            ...Small Businesses
          </h2>
          <Image
            src={Roof}
            alt=""
            className="border border-black drop-shadow-lg b-5"
          />
        </div>

        <div className="mx-5">
          <h2 className="text-2xl text-onyx font-bold pl-1 pb-1 mt-5">
            ...Content Creators
          </h2>
          <Image
            src={Jungle}
            alt=""
            className="border border-black drop-shadow-lg"
          />
        </div>

        <div className="mx-5">
          <h2 className="text-2xl text-onyx font-bold pl-1 pb-1 mt-5">
            ...and Artists!
          </h2>
          <Image
            src={Wtbh}
            alt=""
            className="border border-black drop-shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
