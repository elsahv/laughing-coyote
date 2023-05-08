"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative top-0 w-full flex justify-center border border-black bg-white">
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
          <Link href="/templates" className="mx-2">
            Templates
          </Link>
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
