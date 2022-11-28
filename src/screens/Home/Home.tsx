import { useMemo, useState } from "react";

import { MainHeader, PageView, TabBar, TabType } from "../../components";
import { IHomeScreenProps } from "./Home.types";
import "./Home.css";
import { Dashboard, Employees } from "./components";

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const [activeTab, setActiveTab] = useState(TabType.Dashboard);

  const content = useMemo(() => {
    switch (activeTab) {
      case TabType.Dashboard:
        return <Dashboard />;
      case TabType.Employees:
        return <Employees />;
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <div>
      <MainHeader title="Dashboard" />
      <PageView>
        <TabBar setActive={setActiveTab} />
        <div className="home__container">{content}</div>
      </PageView>
    </div>
  );
};
