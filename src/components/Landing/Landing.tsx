import * as React from "react";

export function Landing() {
  return (
    <div className="relative">
      <div className="absolute -top-[187px] z-0 h-[20em] w-[34em] bg-orange-400"></div>
      <div className="relative z-10 w-full">
        <div className="title-font text-left text-4xl font-bold">
          Unlock your <br />
          TV Advertising
        </div>
        <div className=" mt-4 flex w-1/2 align-middle">
          <div className="subheading-nocolor w-1/2 p-4 text-sm text-gray-400">
            <p>
              "70% of customers prefer brands that align with their personal
              values.
            </p>
          </div>
          <div className="subheading-nocolor w-1/2 p-4 text-sm text-gray-400">
            <p>
              "78% of people are more likely to buy from a brand that offers
              personalized experiences."
            </p>
          </div>
          <button className="m-[2%] h-14 flex-shrink-0 bg-orange-600  px-16 hover:bg-[#864646]">
            <div className="subheading"> Getting Started </div>
          </button>
        </div>
      </div>
    </div>
  );
}
