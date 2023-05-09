"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full flex justify-center border-b-2 border-onyx bg-white">
      <div className="flex p-5">
        <ul className="flex justify-between">
          <Link href="/" className="mx-2">
            <h1 className="font-bold">Laughing Coyote</h1>
          </Link>
          <Link href="/services" className="mx-2">
            Services
          </Link>
          <Link href="/work" className="mx-2">
            Work Process
          </Link>
          <Link href="/gallery" className="mx-2">
            Gallery
          </Link>

          {/* //todo MAKE VISIBLE WHEN READY... */}
          {/* <Link href="/creative-projects" className="mx-2">
            Creative Projects
          </Link> */}
          <Link
            href="/contact"
            className="mx-2 px-4 drop-shadow-lg border border-black bg-munsell"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
