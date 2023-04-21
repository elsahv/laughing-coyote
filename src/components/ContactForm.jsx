import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className=" flex flex-col">
        {/* NAME */}
        <label id="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="enter name"
        />
        {/* EMAIL */}
        <label id="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          email="email"
          placeholder="enter email"
        />
        {/* MESSAGE */}
        <label id="form-label" htmlFor="name">
          Message
        </label>
        <textarea
          className="form-input"
          id="message"
          name="message"
          placeholder="enter message"
        />
        {/* BUTTON */}
        <input
          className="form-input bg-orange"
          id="btn"
          type="submit"
          value="send message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
