import { FC, memo, useCallback } from 'react';
import Input from "@/ui-kit/components/inputs/text/text";
import Label from "@/ui-kit/components/label/label";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";
import RadioGroup from "@/ui-kit/components/inputs/radio-group/radio-group";
import Radio from "@/ui-kit/components/inputs/radio/radio";

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
            color={"ghost"}
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
              labelColor={"ghost"}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Count of links on a page threshold (%)"}
              labelColor={"ghost"}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Word count threshold (%)"}
              labelColor={"ghost"}
              onChange={onInputChangeHandler}
              full
            />
          </Row>
          <Row align={"end"} width={"100%"}>
            <Input
              label={"Branded CTR threshold (%)"}
              labelColor={"ghost"}
              onChange={onInputChangeHandler}
              full
            />
            <Input
              label={"Sitemap URLs submitted /\n" +
                "indexed threshold (%)"}
              labelColor={"ghost"}
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
            labelColor={"ghost"}
            labelPosition={"right"}
            onChange={onChangeRadioHandler}
          />
          <Radio
            name={"sitemap_alerts"}
            label={"Allow Branded Keywords CTR Alerts"}
            labelColor={"ghost"}
            labelPosition={"right"}
            onChange={onChangeRadioHandler}
          />
        </RadioGroup>
      </Column>
    </Column>
  );
});

export default ThresholdSettings;