"use client";

import { TabSwitcherProps } from "@/types/componentsTypes/tabSwitcher";
import { useState } from "react";

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative flex bg-gray-200 rounded-full p-1 mt-2 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative select-none flex-1 text-center px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out
              ${
                activeTab === tab.id
                  ? "text-white bg-primary rounded-full"
                  : "text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}

        <div
          className="absolute top-0 bottom-0 w-1/2 bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${
              tabs.findIndex((tab) => tab.id === activeTab) * 100
            }%)`,
          }}
        />
      </div>

      {/* Tab Content with Fade Animation */}
      <div className="w-full mt-3 bg-white rounded-lg shadow relative overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-0 ease-in-out ${
              activeTab === tab.id
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 absolute"
            }`}
          >
            {children[tab.id]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
