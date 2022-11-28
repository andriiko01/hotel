import { TabType } from "./TabBar.data";

export interface ITabBarProps {
  setActive: (type: TabType) => void;
}

export interface ITabItem {
  id: TabType;
  title: string;
}
