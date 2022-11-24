import { FC, memo, ReactNode } from "react";

import { STabPanel } from "./styled";


interface TabPanelProps {
  children: ReactNode;
  value: number;
  selectedIndex: number;
}

const TabPanel: FC<TabPanelProps> = memo((
  {
    children,
    value,
    selectedIndex
  }
): JSX.Element => {
  const hidden = value !== selectedIndex;

  return (
    <STabPanel
      hidden={hidden}
      active={!hidden}
    >
      {children}
    </STabPanel>
  );
});


export default TabPanel;
