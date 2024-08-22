const GetStartedSection = () => {
  return (
    <div className="relative z-10 flex w-4/6 flex-row items-center justify-start space-x-24 text-sm">
      <p className="w-3/12 text-center text-sm text-gray-400">
        "70% of customers prefer brands that align with their personal values."
      </p>
      <p className="w-3/12 text-center text-sm text-gray-400">
        "78% of people are more likely to buy from a brand that offers
        personalized experiences."
      </p>
      <button className="h-14 w-2/12 rounded-lg bg-orange-600 text-center text-gray-100 hover:bg-[#864646]">
        Getting Started
      </button>
    </div>
  );
};

export default GetStartedSection;
