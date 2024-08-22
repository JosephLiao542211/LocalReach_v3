import React from "react";
import Contact_Form from "./ContactForm";

const Contact_Section = () => {
  return (
    <section className=" relative h-fit overflow-hidden">
      <div className=" relative z-50 mx-[3%] flex h-screen flex-col items-center justify-evenly md:flex-row">
        <img
          className=" relative h-4/6 flex-1 rounded-lg object-cover  transition-transform hover:scale-[1.12] md:ml-[10%] md:w-4/12"
          src="image.png"
          alt="...loading"
        />
        <Contact_Form />
      </div>
    </section>
  );
};

export default Contact_Section;
