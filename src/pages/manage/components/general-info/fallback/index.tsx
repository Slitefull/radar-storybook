import { FC, memo } from 'react';
import ColoredTextFallback from "@/ui-kit/components/text/colored/fallback";

import { Column, Row } from "@/global.css";


const GeneralInfoFallback: FC = memo((): JSX.Element => {
  return (
    <Column margin={"0 0 40px"}>
      <Row gap={5} align={"center"}>
        <ColoredTextFallback
          animate
          speed={1}
          width={300}
        />
      </Row>

      <Row gap={5}>
        <ColoredTextFallback
          animate
          speed={1}
          width={200}
        />
      </Row>

      <Row gap={5}>
        <ColoredTextFallback
          animate
          speed={1}
          width={250}
        />
      </Row>
    </Column>
  );
});

export default GeneralInfoFallback;
