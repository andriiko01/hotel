import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ICardInfo, ICardProps } from "./Card.types";
import "./Card.css";
import { CardType } from "./Card.data";
import { IMAGES } from "../../assets";

export const Card: React.FC<ICardProps> = ({ preset, count }) => {
  const navigate = useNavigate();

  const cardInfo = useMemo<ICardInfo>(() => {
    switch (preset) {
      case CardType.Bookings:
        return {
          imagePath: IMAGES.BOOKING,
          title: "Bookings",
          backgroundStyle: { background: "#5DB75D" },
          navigationPath: "bookings",
        };
      case CardType.Room:
        return {
          imagePath: IMAGES.KEY,
          title: "Room types",
          backgroundStyle: { background: "#D9EDF8" },
          navigationPath: "room-types",
        };
    }
  }, [preset]);

  const onClick = useCallback(() => {
    navigate(cardInfo.navigationPath);
  }, [navigate, cardInfo.navigationPath]);

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
