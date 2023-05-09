import Image from "next/image";
import Eh from "../../public/screenshots/eh.png";
import Roof from "../../public/screenshots/hoveyroofing.png";
import Jungle from "../../public/screenshots/jungle.png";
import Wtbh from "../../public/screenshots/wtbh.png";

const page = () => {
  return (
    <div className="bg-munsell pb-[100px]">
      <div className="mb-5 bg-parchment w-full border border-b-black drop-shadow-lg pl-[50px] pb-3">
        <h2 className="font-bold text-2xl pt-[20px] underline">Gallery</h2>
        <p className="my-3 text-lg">
          All small businesses should have a website. While social media is
          useful, it is important for small businesses to have its own home.
          Scroll down to see various designs for...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          numquam mollitia atque fugit voluptatem beatae, laborum sequi
          explicabo dolorum dicta autem, cum ex dignissimos ipsum saepe amet
          quae itaque expedita voluptatum et porro! Quod deleniti asperiores
          perferen eaque minima velit fugiat quas impedit tenetur sit optio
          debitis dolor labore, rerum perferendis? Cupiditate, dignissimos
          laudantium. Omnis, reprehenderit deserunt!
        </p>
      </div>
      <section className="grid grid-cols-2 grid-rows-2 gap-x-1 gap-y-10 px-[55px] pt-[50px]">
        {/* //*1 */}
        <div className="bg-cerulean mx-5 drop-shadow-lg border border-onyx rounded-sm">
          <h2 className="_textShadow py-3 text-xl text-parchment font-bold pl-1  ">
            ...Content Creators
          </h2>
          <Image src={Eh} alt="" className="border border-black" />
        </div>

        {/* //*2 */}
        <div className="mx-5 text-aquamarine drop-shadow-lg rounded-sm">
          <h2 className="_textShadow py-2 text-xl bg-onyx font-bold pl-1 border border-black  ">
            ...Small Businesses
          </h2>
          <Image src={Roof} alt="" className="b-5 border border-black " />
        </div>

        {/* //*3 */}
        <div className="mx-5 bg-aquamarine drop-shadow-lg border border-black rounded-sm">
          <h2 className="_textShadow py-3 text-xl text-onyx font-bold pl-1 pb-1">
            ...Artists
          </h2>
          <Image src={Wtbh} alt="" className="" />
        </div>

        {/* //*4 */}
        <div className="mx-5 drop-shadow-lg border border-black rounded-sm">
          <h2 className="_textShadow py-5 text-xl bg-parchment text-white font-bold pl-1 pb-1">
            ...and much more!
          </h2>
          <Image src={Jungle} alt="" className="border border-black" />
        </div>
      </section>
    </div>
  );
};

export default page;
