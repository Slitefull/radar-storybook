import { BaseSyntheticEvent, cloneElement, FC, memo } from "react";

import { TabHeaderContainer, TabsHolder } from "./styled";


interface TabsProps {
  selectedTab: number;
  onChange: (event: BaseSyntheticEvent, value: number) => void;
  children: JSX.Element[];
}

const Tabs: FC<TabsProps> = memo((
  {
    selectedTab,
    onChange,
    children
  }
): JSX.Element => {
  const tabs = children.map((child) => {
    const handleClick = (e: BaseSyntheticEvent) => {
      onChange(e, child.props.value);
    };

    return cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick
    });
  });

  return (
    <TabHeaderContainer>
      <TabsHolder>
        {tabs}
      </TabsHolder>
    </TabHeaderContainer>
  );
});

export default Tabs;
