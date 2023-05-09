import Image from "next/image";
import Eh from "../../public/screenshots/eh.png";
import Roof from "../../public/screenshots/hoveyroofing.png";
import Jungle from "../../public/screenshots/jungle.png";
import Wtbh from "../../public/screenshots/wtbh.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="main_grid bg-munsell pb-[100px]">
      {/* //todo LEFT SIDE */}

      <section className="p-0 bg-munsell left-sq 2xl:w-1/2 lg:w-full 2xl:fixed 2xl:left-0 lg:relative">
        <div className="text-parchment mb-5 bg-onyx w-full border border-b-black drop-shadow-lg pl-[50px] pb-3">
          <h2 className="font-bold text-2xl pt-[20px] underline">Gallery</h2>
          <p className="my-3 text-lg">
            All small businesses should have a website. While social media is
            useful, it is important for small businesses to have its own home.
            Scroll down to see various designs for...
          </p>
        </div>
        <div className="w-full mt-5 ml-5 px-5 pb-3 text-aquamarine">
          <h2 className="font-bold text-2xl pt-[20px] underline">
            Made it this far?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            rerum deleniti. Dolore sequi numquam distinctio est perferendis
            quasi sunt minima, illum quis suscipit eum nam excepturi ducimus
            culpa sit.
          </p>
          <Link href="/contact">Contact Cta</Link>
        </div>
      </section>

      {/* //todo RIGHT SIDE */}
      <section className="right-sq bg-parchment 2xl:w-1/2 lg:w-full 2xl:absolute right-0 lg:relative overflow-scroll flex flex-col px-2 pt-[50px] pb-[150px]">
        {/* //*1 */}
        <div className=" mb-5 mx-5 drop-shadow-lg rounded-sm">
          <h2 className="py-3 text-xl text-onyx font-bold pl-1  ">
            ...Content Creators
          </h2>
          <Image src={Eh} alt="" className="border border-black" />
        </div>

        {/* //*2 */}
        <div className="mx-5 my-5 text-onyx drop-shadow-lg rounded-sm">
          <h2 className="py-2 text-xl font-bold pl-1">...Small Businesses</h2>
          <Image src={Roof} alt="" className="b-5 border border-black" />
        </div>

        {/* //*3 */}
        <div className="mx-5 my-5 drop-shadow-lg rounded-sm">
          <h2 className="py-3 text-xl text-onyx font-bold pl-1 pb-1">
            ...Artists
          </h2>
          <Image src={Wtbh} alt="" className="border border-black" />
        </div>

        {/* //*4 */}
        <div className="mx-5 my-5 drop-shadow-lg rounded-sm">
          <h2 className="py-5 text-xl text-onyx font-bold pl-1 pb-1">
            ...and much more!
          </h2>
          <Image src={Jungle} alt="" className="border border-black" />
        </div>
      </section>
    </div>
  );
};

export default page;
