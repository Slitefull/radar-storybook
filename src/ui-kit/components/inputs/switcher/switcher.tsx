import { FC, Fragment, memo } from "react";

import { Label, Row, SwitchButton, SwitchInput, SwitchLabel } from "./styled";


interface SwitcherProps {
  isChecked: boolean;
  onChange: VoidFunction;
  borderColor?: Color;
  backgroundColor?: Color;
  pointColor?: Color;
  label?: string;
}

const Switcher: FC<SwitcherProps> = memo((
  {
    isChecked,
    onChange,
    borderColor,
    backgroundColor,
    pointColor,
    label,
  }
): JSX.Element => {
  return (
    <Row>
      {label && <Label>{label}</Label>}
      <Fragment>
        <SwitchInput
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          id={"switcher"}
        />
        <SwitchLabel
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          htmlFor={"switcher"}
        >
          <SwitchButton pointColor={pointColor}/>
        </SwitchLabel>
      </Fragment>
    </Row>
  );
});

export default Switcher;
