import { CardType } from "./Card.data";

export interface ICardProps {
  preset: CardType;
  count: number;
}

export interface ICardInfo {
  imagePath: string;
  title: string;
  backgroundStyle: { background: string };
  navigationPath: string;
}
