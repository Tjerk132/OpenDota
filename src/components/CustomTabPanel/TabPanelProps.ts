import { ReactNode } from "react";

export interface TabPanelProps {
  selectedTab: number;
  setTab: (index: number) => void;
  tabLabels: string[];
  children: ReactNode[];
}