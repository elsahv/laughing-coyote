import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="flex 2xl:flex-row lg:flex-col md:flex-col sm:flex-col h-[780px]">
      {/* //*LEFT SIDE */}
      <section className="2xl:w-1/2 lg:w-full pt-[50px] text-aquamarine border-r-2 border-black">
        <div className="2xl:p-5 lg:p-1 ml-5">
          <h2 className="text-2xl py-1 underline">Info</h2>
          <p className="text-lg">
            Has my portfolio piqued your interest....? If so, you can contact me
            at
            <a
              className="underline pl-2"
              href="mailto:devdesignsbyelsa@gmail.com"
            >
              devdesignsbyelsa@gmail.com
            </a>
            , or simply fill out the form on the right
            <br />
            Looking forward to hearing from you!
          </p>
        </div>
      </section>

      {/* //*RIGHT SIDE */}
      <section className="p-5 2xl:w-1/2 lg:w-1/2 md:w-1/2  flex flex-col mt-[50px] 2xl:mx-5 lg:mx-1">
        <h2 className="font-bold text-3xl">Contact Form</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
