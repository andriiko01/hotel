import { useState } from "react";

import { Card, CardType, MainHeader, PageView, TabBar } from "../../components";
import { IHomeScreenProps } from "./Home.types";
import "./Home.css";

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <div>
      <MainHeader title="Dashboard" />
      <PageView>
        <TabBar setActive={setActiveTab} />
        <div className="home__container">
          <div className="card__container">
            <Card preset={CardType.Room} count={0} />
            <Card preset={CardType.Bookings} count={0} />
          </div>
        </div>
      </PageView>
    </div>
  );
};
