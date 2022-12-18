import { FC, memo, useCallback } from 'react';
import { NEUTRAL_90, NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/controls/text";
import Label from "@/ui-kit/components/typography/label";
import Tooltip from "@/ui-kit/components/generals/tooltip";
import RadioGroup from "@/ui-kit/components/controls/radio-group";
import Radio from "@/ui-kit/components/controls/radio";

import { Column, Row } from '@/global.css';


const ThresholdSettings: FC = memo((): JSX.Element => {
  const onInputChangeHandler = useCallback(
    () => console.log("onchange"),
    [],
  );

  const onChangeRadioHandler = useCallback(
    () => console.log("radio"),
    [],
  );

  return (
    <Column width={"100%"}>
      <Row
        align={"center"}
        justify={"space-between"}
        width={"100%"}
      >
        <Row align={"center"} gap={10}>
          <Label
            color={NEUTRAL_90}
            size={"big"}
          >
            Threshold Settings
          </Label>
          <Tooltip>Tooltip</Tooltip>
        </Row>
      </Row>

      <Column gap={40} width={"100%"}>
        <Column
          width={"100%"}
          justify={"space-between"}
        >
          <Row width={"100%"} justify={"space-between"}>
            <Input
              label={"Size of a page threshold (%)"}
              labelColor={NEUTRAL_70}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Count of links on a page threshold (%)"}
              labelColor={NEUTRAL_70}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Word count threshold (%)"}
              labelColor={NEUTRAL_70}
              onChange={onInputChangeHandler}
              full
            />
          </Row>
          <Row align={"end"} width={"100%"}>
            <Input
              label={"Branded CTR threshold (%)"}
              labelColor={NEUTRAL_70}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Sitemap URLs submitted /\n" +
                "indexed threshold (%)"}
              labelColor={NEUTRAL_70}
              labelWrap={true}
              onChange={onInputChangeHandler}
              full
            />
          </Row>
        </Column>

        <RadioGroup direction={"column"} gap={20}>
          <Radio
            name={"sitemap_alerts"}
            label={"Sitemap alerts on totals only"}
            labelColor={NEUTRAL_70}
            labelPosition={"right"}
            onChange={onChangeRadioHandler}
          />
          <Radio
            name={"sitemap_alerts"}
            label={"Allow Branded Keywords CTR Alerts"}
            labelColor={NEUTRAL_70}
            labelPosition={"right"}
            onChange={onChangeRadioHandler}
          />
        </RadioGroup>
      </Column>
    </Column>
  );
});

export default ThresholdSettings;