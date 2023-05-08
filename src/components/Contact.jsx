import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="h-screen pt-1">
      <h2 className="bg-teal">Contact</h2>
      <p>
        Has my portfolio piqued your interest....? If so, you can contact me at
        <em>devdesignsbyelsa@gmail.com</em>
      </p>
      <p>Looking forward to hearing from you!</p>
      <ContactForm />
    </section>
  );
};

export default Contact;
