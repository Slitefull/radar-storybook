import { FC, memo } from 'react';
import { NEUTRAL_90, NEUTRAL_70, PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import Text from "@/ui-kit/components/typography/text";
import CheckboxGroup from "@/ui-kit/components/controls/checkbox-group";
import Checkbox from "@/ui-kit/components/controls/checkbox";

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
        <Text color={NEUTRAL_60}>
          You can change all customization settings at any time.
        </Text>
        <Column align={"end"}>
          <Text
            color={PRIMARY_60}
            weight={"bold"}
          >
            Schedule Customization Session
          </Text>
          <Text color={NEUTRAL_60}>
            with our experts for super dialed-in settings.
          </Text>
        </Column>
      </Row>
      <CheckboxGroup
        direction={"column"}
        label={"Users that have access to this website :"}
        labelColor={NEUTRAL_70}
        labelMargin={"0 0 15px"}
        gap={15}
      >
        <Checkbox
          checked={true}
          label={"Konrad Studziński (you)"}
          labelColor={NEUTRAL_90}
          labelPosition={"right"}
        />
        <Checkbox
          checked={true}
          label={"Clay Kramer (admin)"}
          labelColor={NEUTRAL_90}
          labelPosition={"right"}
        />
        <Checkbox
          checked={false}
          label={"Bob Lopiccola"}
          labelColor={NEUTRAL_90}
          labelPosition={"right"}
        />
        <Checkbox
          checked={false}
          label={"Pat Simmons"}
          labelColor={NEUTRAL_90}
          labelPosition={"right"}
        />
      </CheckboxGroup>
    </Column>
  );
});

export default AccessLevels;
