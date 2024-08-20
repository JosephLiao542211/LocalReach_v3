import React from "react";
import Tabs from "./Tabs"; // Adjust the path as necessary

const A_RSection: React.FC = () => {
  const tabData = [
    {
      label: "Tab 1",
      content: <div>This is the content of Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is the content of Tab 2</div>,
    },
  ];

  return (
    <div className="p-6">
      <Tabs tabs={tabData} />
    </div>
  );
};

export default A_RSection;
