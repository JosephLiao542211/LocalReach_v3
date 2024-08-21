import React from "react";

const Pricing = () => {
  return (
    <div className="relative z-50 mx-[10%] flex flex-col justify-between px-4 py-12 sm:px-6 md:flex-row lg:px-8">
      <div className="flex-2  align-middle md:w-1/4">
        <h2 className="sectiontitle font-boldc mb-8 mr-10 text-3xl md:text-left">
          Our Pricing
        </h2>
        <p className="subheading font-boldc mb-8 mr-10 text-3xl md:text-left">
          We are also open to custom pricing, if your interested please contact
          us below!
        </p>
      </div>

      <div className=" grid h-1/2 flex-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="rounded-lg border bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-center text-xl font-semibold">Basic</h3>
          <p className="mb-4 text-center text-4xl font-bold">
            $10<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="mb-2 text-gray-700">1 Project</li>
            <li className="mb-2 text-gray-700">5 GB Storage</li>
            <li className="mb-2 text-gray-700">Basic Support</li>
          </ul>
          <div className="text-center">
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="rounded-lg border bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-center text-xl font-semibold">Standard</h3>
          <p className="mb-4 text-center text-4xl font-bold">
            $20<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="mb-2 text-gray-700">5 Projects</li>
            <li className="mb-2 text-gray-700">15 GB Storage</li>
            <li className="mb-2 text-gray-700">Priority Support</li>
          </ul>
          <div className="text-center">
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="rounded-lg border bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-center text-xl font-semibold">Premium</h3>
          <p className="mb-4 text-center text-4xl font-bold">
            $30<span className="text-lg">/mo</span>
          </p>
          <ul className="mb-6">
            <li className="mb-2 text-gray-700">Unlimited Projects</li>
            <li className="mb-2 text-gray-700">50 GB Storage</li>
            <li className="mb-2 text-gray-700">24/7 Support</li>
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
