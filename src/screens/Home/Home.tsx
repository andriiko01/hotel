import { Card, CardType, MainHeader } from "../../components";
import { IHomeScreenProps } from "./Home.types";
import "./Home.css";
import { PageView } from "../../components/PageView/PageView";

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <div>
      <MainHeader title="Dashboard" />
      <PageView>
        <div className="card__container">
          <Card preset={CardType.Room} count={0} />
          <Card preset={CardType.Bookings} count={0} />
        </div>
      </PageView>
    </div>
  );
};
