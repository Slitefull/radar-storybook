import { FC, memo } from 'react';
import TextInputFallback from "@/ui-kit/components/inputs/text/fallback";
import ButtonFallback from "@/ui-kit/components/buttons/button/fallback";

import { Column } from "@/global.css";


const SignInFallback: FC = memo((): JSX.Element => {
  return (
    <Column gap={40}>
      <TextInputFallback animate speed={1} width={325}/>
      <TextInputFallback animate speed={1} width={325}/>
      <ButtonFallback animate speed={1} width={325}/>
    </Column>
  );
});

export default SignInFallback;