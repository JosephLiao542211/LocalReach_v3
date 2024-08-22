import React from "react";

const Pricing = () => {
  return (
    <div className="relative z-50 mx-[10%] my-[5%] flex flex-col justify-between px-4 py-12 sm:px-6 md:flex-row lg:px-8">
      <div className="flex-2 pt-[3%] align-middle md:mr-[10] md:w-1/4">
        <h2 className="sectiontitle font-boldc mb-8 text-3xl md:text-left">
          Our Pricing
        </h2>
        <p className="subheading font-boldc mb-8 text-3xl md:text-left">
          We are also open to custom pricing, if your interested please contact
          us below!
        </p>
      </div>

      <div className=" grid h-1/2 flex-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="rounded-lg bg-white bg-opacity-15 p-6 shadow-lg transition-transform md:scale-90 md:hover:scale-95">
          <h3 className="sectiontitle-sm-nc mb-4 text-center text-gray-300">
            Basic
          </h3>
          <p className="sectiontitle-ns-nc mb-4 text-center text-[96px] font-bold text-white">
            $10<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="subheading mb-2 text-gray-700">1 Project</li>
            <li className="subheading mb-2 text-gray-700">5 GB Storage</li>
            <li className="subheading mb-2 text-gray-700">Basic Support</li>
          </ul>
          <div className="text-center">
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Choose Plan
            </button>
          </div>
          {/* Premium Plan */}
        </div>
        <div className="rounded-lg border-4 border-orange-400 bg-[#ffffff] bg-opacity-15 p-6 shadow-lg transition-transform hover:scale-125 md:scale-110 ">
          <h3 className="sectiontitle-sm-nc mb-4 text-center  text-[96px] font-semibold text-orange-400">
            Premium
          </h3>
          <p className="sectiontitle-ns-nc mb-4 text-center text-[96px] font-bold text-white">
            $30<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="subheading b-2 text-gray-700">Unlimited Projects</li>
            <li className="subheading mb-2 text-gray-700">50 GB Storage</li>
            <li className="subheading mb-2 text-gray-700">24/7 Support</li>
          </ul>
          <div className="text-center">
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="rounded-lg bg-white  bg-opacity-15 p-6 shadow-lg transition-transform md:scale-90 md:hover:scale-95">
          <h3 className="sectiontitle-sm-nc mb-4 text-center text-xl font-semibold text-orange-400">
            Standard
          </h3>
          <p className="sectiontitle-ns-nc mb-4 text-center text-[96px] font-bold text-white">
            $20<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="subheading mb-2 text-gray-700">5 Projects</li>
            <li className="subheading mb-2 text-gray-700">15 GB Storage</li>
            <li className="subheading mb-2 text-gray-700">Priority Support</li>
          </ul>
          <div className="text-center">
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
