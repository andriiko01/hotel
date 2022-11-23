import { useCallback, useMemo } from "react";

import { ICardInfo, ICardProps } from "./Card.types";
import "./Card.css";
import { CardType } from "./Card.data";
import { IMAGES } from "../../assets";

export const Card: React.FC<ICardProps> = ({ preset, count }) => {
  const cardInfo = useMemo<ICardInfo>(() => {
    switch (preset) {
      case CardType.Bookings:
        return {
          imagePath: IMAGES.BOOKING,
          title: "Bookings",
          backgroundStyle: { background: "#5DB75D" },
          // TODO
          navigationPath: "",
        };
      case CardType.Room:
        return {
          imagePath: IMAGES.KEY,
          title: "Bookings",
          backgroundStyle: { background: "#D9EDF8" },
          // TODO
          navigationPath: "",
        };
    }
  }, [preset]);

  // TODO: change
  const onClick = useCallback(() => {}, []);

  return (
    <div className="card" style={cardInfo.backgroundStyle} onClick={onClick}>
      <img src={cardInfo.imagePath} alt="" className="card__img" />
      <div className="card__info">
        <span className="card__count">{count}</span>
        <p>{cardInfo.title}</p>
      </div>
    </div>
  );
};
