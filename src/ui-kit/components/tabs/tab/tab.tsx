import { FC, memo } from "react";

import { inactiveTab, STab } from "./styled";


interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  value?: number;
}

const Tab: FC<TabProps> = memo((
  {
    label,
    active,
    onClick,
    disabled,
    value,
  }
): JSX.Element => {
  return (
    <STab
      role="tab"
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
      disabled={disabled}
      value={value}
    >
      {label}
    </STab>
  )
});

export default Tab;
