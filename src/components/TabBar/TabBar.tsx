import _ from "lodash";
import { useEffect, useState } from "react";

import { TABS } from "./TabBar.data";
import { ITabBarProps, ITabItem } from "./TabBar.types";
import "./TabBar.css";

export const TabBar: React.FC<ITabBarProps> = ({ setActive }) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);

  useEffect(() => {
    setActive(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <div className="tab-bar">
      {_.map(TABS, (item: ITabItem) => {
        const onTabClick = () => {
          setActiveTab(item.id);
        };

        const isActive = item.id === activeTab;

        return (
          <div
            className={`tab-bar__item ${isActive && "tab-bar__item--active"}`}
            onClick={onTabClick}
            key={item.id}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
