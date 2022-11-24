import { FC, memo } from 'react';
import { DARK_LAVA, EBONY, PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import ColoredText from "@/ui-kit/components/text/colored";
import CheckboxGroup from "@/ui-kit/components/inputs/checkbox-group";
import Checkbox from "@/ui-kit/components/inputs/checkbox";

import { Column, Row } from "@/global.css";


const AccessLevels: FC = memo((): JSX.Element => {
  return (
    <Column
      gap={40}
      width={"100%"}
      justify={"space-between"}
      padding={"0 0 0 35px"}
    >
      <Row justify={"space-between"} width={"100%"}>
        <ColoredText color={ROCKET_METALLIC}>
          You can change all customization settings at any time.
        </ColoredText>
        <Column align={"end"}>
          <ColoredText
            color={PLUMP_PURPLE}
            weight={"bold"}
          >
            Schedule Customization Session
          </ColoredText>
          <ColoredText color={ROCKET_METALLIC}>
            with our experts for super dialed-in settings.
          </ColoredText>
        </Column>
      </Row>
      <CheckboxGroup
        direction={"column"}
        label={"Users that have access to this website :"}
        labelColor={EBONY}
        labelMargin={"0 0 15px"}
        gap={15}
      >
        <Checkbox
          checked={true}
          label={"Konrad Studziński (you)"}
          labelColor={DARK_LAVA}
          labelPosition={"right"}
        />
        <Checkbox
          checked={true}
          label={"Clay Kramer (admin)"}
          labelColor={DARK_LAVA}
          labelPosition={"right"}
        />
        <Checkbox
          checked={false}
          label={"Bob Lopiccola"}
          labelColor={DARK_LAVA}
          labelPosition={"right"}
        />
        <Checkbox
          checked={false}
          label={"Pat Simmons"}
          labelColor={DARK_LAVA}
          labelPosition={"right"}
        />
      </CheckboxGroup>
    </Column>
  );
});

export default AccessLevels;
