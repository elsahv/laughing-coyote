import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq pt-[150px]">
        <h2 className="text-2xl">Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          distinctio aspernatur laborum, nisi nulla amet voluptatum id ipsa
          incidunt temporibus facilis magni consectetur praesentium fugit
          aperiam repellendus magnam recusandae voluptate?
        </p>
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
