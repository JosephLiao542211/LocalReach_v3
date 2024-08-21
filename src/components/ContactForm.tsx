import React from "react";

const Contact_Form = () => {
  return (
    <div className="relative flex h-screen flex-1 flex-col items-center justify-center px-[10%] ">
      <h2 className="sectiontitle mb-6 pt-10 text-5xl font-bold tracking-widest">
        Contact Us
      </h2>
      <p className="subheading mb-6">Reach out for personalized solutions</p>
      <div className="flex w-full flex-col space-y-5">
        <input
          type="text"
          className="rounded-lg bg-white bg-opacity-15 p-[2%]"
          placeholder="Name:"
        />
        <input
          type="text"
          className="rounded-lg bg-white bg-opacity-15 p-[2%] "
          placeholder="Business Name:"
        />
        <input
          type="email"
          className="rounded-lg bg-white bg-opacity-15 p-[2%]"
          placeholder="Email:"
        />
        <input
          type="number"
          className="rounded-lg bg-white bg-opacity-15 p-[2%]"
          placeholder="Phone Number:"
        />

        <textarea
          rows={6} // Make sure this is a number, not a string
          className="w-full resize-none rounded-md bg-white bg-opacity-15 p-[2%] "
          placeholder="Additional Informaion"
        ></textarea>
      </div>

      <button className="mt-[30px] h-10 bg-orange-600 text-sm hover:bg-[#864646] md:h-14 md:px-16 md:text-base">
        <div className="subheading">Send Message</div>
      </button>
    </div>
  );
};

export default Contact_Form;
