import { ITabItem } from "./TabBar.types";

export enum TabType {
  Dashboard = "dashboard",
  Employees = "employees",
}

export const TABS: ReadonlyArray<ITabItem> = [
  {
    id: TabType.Dashboard,
    title: "Dashboard",
  },
  {
    id: TabType.Employees,
    title: "Employees",
  },
];
