import { FC, memo, useCallback, } from "react";
import Arrow from "@/ui-kit/customized-icons/arrow";
import { NEUTRAL_100 } from "@/ui-kit/constants/colors";

import { TagElement } from "@/entity/types/monitoring";
import { Circle, SecondCircle, STag, TTitle } from "./styled";


export interface TagProps {
  name: string;
  title: string;
  checked: boolean;
  withArrow?: boolean;
  onClick: (tag: TagElement) => void;
}

const Tag: FC<TagProps> = memo((
  {
    name,
    title,
    checked,
    withArrow,
    onClick,
  }
): JSX.Element => {
  const onClickHandler = useCallback(
    () => onClick({ name, title, checked }),
    [name]
  );

  return (
    <STag
      checked={checked}
      onClick={onClickHandler}
    >
      <Circle>
        <SecondCircle/>
      </Circle>
      <TTitle checked={checked}>
        {title}
      </TTitle>
      {withArrow && (
        <Arrow
          size={5}
          color={NEUTRAL_100}
          rotation={"bottom"}
        />
      )}
    </STag>
  )
});

export default Tag;
