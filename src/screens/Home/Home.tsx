import { Outlet, Link } from "react-router-dom";

import { IHomeScreenProps } from "./Home.types";

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
