import { IMainHeaderProps } from "./MainHeader.types";
import "./MainHeader.css";

export const MainHeader: React.FC<IMainHeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <p className="header__title">{title}</p>
      <a href="##" className="header__name">
        {/* // TODO: change to real name */}
        administrator
      </a>
    </div>
  );
};
