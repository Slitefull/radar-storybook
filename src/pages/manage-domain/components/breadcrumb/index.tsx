import { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { PLUMP_PURPLE, RAISIN_BLACK } from "@/ui-kit/constants/colors";
import Arrow from "@/ui-kit/customized-icons/arrow/arrow";
import ColoredText from "@/ui-kit/components/text/colored/colored";

import { Row } from '@/global.css';


const Breadcrumb: FC = memo((): JSX.Element => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => navigate(-1), [navigate])

  return (
    <Row
      gap={15}
      align={"center"}
      onClick={onClickHandler}
      cursor={"pointer"}
    >
      <Arrow
        rotation={"left"}
        color={PLUMP_PURPLE}
        size={15}
      />
      <ColoredText
        type={"secondary"}
        color={RAISIN_BLACK}
        weight={"bold"}
        size={"big"}
      >
        https://www.yahoo.com
      </ColoredText>
    </Row>
  );
});

export default Breadcrumb;