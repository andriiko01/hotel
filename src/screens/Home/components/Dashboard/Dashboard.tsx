import { Card, CardType } from "../../../../components";

export const Dashboard: React.FC = () => {
  return (
    <div className="card__container">
      <Card preset={CardType.Room} count={0} />
      <Card preset={CardType.Bookings} count={0} />
    </div>
  );
};
