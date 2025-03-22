import { Tab } from "@/types/componentsTypes/tabSwitcher";
import { useState } from "react";

const useTabSwitcher = (tabs: Tab[]) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return { activeTab, handleTabClick };
}

export default useTabSwitcher;