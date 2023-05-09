import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="main_grid ">
      {/* //*LEFT SIDE */}
      <section className="left-sq pt-[50px] text-aquamarine">
        <div className="2xl:p-5 lg:p-1">
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
      <section className="right-sq flex flex-col mt-[50px] 2xl:mx-5 lg:mx-1">
        <h2 className="font-bold text-3xl">Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
