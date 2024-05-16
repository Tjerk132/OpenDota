export interface TabPanelProps {
  selectedTab: number;
  setTab: (index: number) => void;
  tabLabels: string[];
  children: React.ReactNode[];
}