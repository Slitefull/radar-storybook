import { FC, memo, ReactNode } from "react";
import Label from "@/ui-kit/components/label";
import PlusCircle from "@/ui-kit/customized-icons/plus-circle";
import Tooltip from "@/ui-kit/components/tooltips/tooltip";

import { LabelSizes, LabelWeights } from "@/ui-kit/components/label/types";
import { Column, Row } from "@/global.css";
import { SFormCreator } from "./styled";


type Directions = "row" | "column";

interface FormCreatorProps {
  label: string;
  labelColor?: Color;
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
  tooltip?: ReactNode;
  onAddComponentsHandler: VoidFunction;
  components: ReactNode[];
  direction?: Directions;
}

const FormCreator: FC<FormCreatorProps> = memo((
  {
    label,
    labelColor,
    labelSize,
    labelWeight,
    tooltip,
    onAddComponentsHandler,
    components = [],
    direction,
  }
): JSX.Element => {
  let Component = Row;

  if (direction === "column") {
    Component = Column;
  }

  return (
    <SFormCreator>
      <Row
        align={"center"}
        justify={"space-between"}
        width={"100%"}
        margin={components.length ? "0 0 20px" : "0"}
      >
        <Row align={"center"} gap={10}>
          <Label
            color={labelColor}
            size={labelSize}
            weight={labelWeight}
          >
            {label}
          </Label>
          {tooltip && <Tooltip>{tooltip}</Tooltip>}
        </Row>
        <PlusCircle onClick={onAddComponentsHandler}/>
      </Row>
      <Component
        width={"100%"}
        justify={"space-between"}
      >
        {components}
      </Component>
    </SFormCreator>
  );
});

export default FormCreator;
