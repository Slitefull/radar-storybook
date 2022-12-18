import { FC, memo } from 'react';
import TextFallback from "@/ui-kit/components/typography/text/fallback";

import { Column, Row } from "@/global.css";


const GeneralInfoFallback: FC = memo((): JSX.Element => {
  return (
    <Column margin={"0 0 40px"}>
      <Row gap={5} align={"center"}>
        <TextFallback
          animate
          speed={1}
          width={300}
        />
      </Row>

      <Row gap={5}>
        <TextFallback
          animate
          speed={1}
          width={200}
        />
      </Row>

      <Row gap={5}>
        <TextFallback
          animate
          speed={1}
          width={250}
        />
      </Row>
    </Column>
  );
});

export default GeneralInfoFallback;
