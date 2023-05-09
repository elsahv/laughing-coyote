import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq pt-[150px]">
        <div className="bg-parchment border border-cerulean p-5">
          <h2 className="text-2xl py-1">Contact</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            distinctio aspernatur laborum, nisi nulla amet voluptatum id ipsa
            incidunt temporibus facilis magni consectetur praesentium fugit
            aperiam repellendus magnam recusandae voluptate?
          </p>
        </div>
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq flex justify-center items-center flex-col">
        <h2 className="font-bold text-lg">Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
