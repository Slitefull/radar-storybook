import { FC } from 'react';
import { Row } from "@/global.css";
import RadioGroup from "@/ui-kit/components/inputs/radio-group";
import RadioInputFallback from "@/ui-kit/components/inputs/radio/fallback";
import ButtonFallback from "@/ui-kit/components/buttons/button/fallback";
import TextInputFallback from "@/ui-kit/components/inputs/text/fallback";


const TableControlFallback: FC = (): JSX.Element => {
  return (
    <Row
      justify={"space-between"}
      align={"center"}
      width={"100%"}
    >
      <RadioGroup gap={40}>
        <RadioInputFallback animate speed={1}/>
        <RadioInputFallback animate speed={1}/>
        <RadioInputFallback animate speed={1}/>
      </RadioGroup>
      <Row align={"center"}>
        <ButtonFallback animate speed={1}/>
        <TextInputFallback animate speed={1}/>
      </Row>
    </Row>
  );
};

export default TableControlFallback;