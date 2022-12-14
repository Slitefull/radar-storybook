import { FC, Fragment, memo, ReactNode } from "react";
import Label from "@/ui-kit/components/typography/label";
import Tooltip from "@/ui-kit/components/generals/tooltip";

import { LabelSizes } from "../../typography/label/types";
import { Row } from "@/global.css";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";


interface SwitcherProps {
  isChecked: boolean;
  onChange: VoidFunction;
  borderColor?: Color;
  backgroundColor?: Color;
  pointColor?: Color;
  label?: string;
  labelColor?: Color;
  labelSize?: LabelSizes;
  tooltip?: ReactNode;
}

const Switcher: FC<SwitcherProps> = memo((
  {
    isChecked,
    onChange,
    borderColor,
    backgroundColor,
    pointColor,
    tooltip,
    label,
    labelColor,
    labelSize,
  }
): JSX.Element => {
  return (
    <Row gap={5} align={"center"}>
      <Row align={"center"} gap={10}>
        {label && (
          <Label
            color={labelColor}
            size={labelSize}
          >
            {label}
          </Label>
        )}
      </Row>
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
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </Row>
  );
});

export default Switcher;
