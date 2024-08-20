import React, { useState } from "react";

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="mx-auto w-full bg-[#090808] ">
      {/* Tab Headers */}
      <div className="flex  ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`subheading-nocolor flex-1 py-2 text-center text-sm font-medium ${
              index === activeTab
                ? "border-b-2 border-orange-400 text-orange-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
