import { FC, memo } from 'react';
import TextInputFallback from "@/ui-kit/components/inputs/text/fallback";
import ButtonFallback from "@/ui-kit/components/buttons/button/fallback";

import { Column, Row } from "@/global.css";


const SignUpFormFallback: FC = memo((): JSX.Element => {
  return (
    <Column width={"100%"} align={"center"} gap={40}>
      <Row width={"100%"}>
        <Column width={"100%"} gap={40}>
          <TextInputFallback animate speed={1} width={360}/>
          <TextInputFallback animate speed={1} width={360}/>
        </Column>
        <Column width={"100%"} gap={40}>
          <TextInputFallback animate speed={1} width={360}/>
          <TextInputFallback animate speed={1} width={360}/>
        </Column>
      </Row>
      <ButtonFallback animate speed={1} width={325}/>
    </Column>
  );
});

export default SignUpFormFallback;