import { PropsWithChildren } from "react";

import "./PageView.css";

export const PageView: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="page-view">{children}</div>;
};
