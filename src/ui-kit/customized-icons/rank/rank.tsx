import { FC, memo, useCallback } from 'react';
import { CSSObject } from "styled-components";

import { LIME_GREEN, TART_ORANGE } from "@/ui-kit/constants/colors";


interface RankIconProps {
  size?: number;
  isPositive?: boolean;
}

const RankIcon: FC<RankIconProps> = memo((
  {
    size = 20,
    isPositive = true,
  }
): JSX.Element => {
  const getRotation = useCallback((): CSSObject => {
    if (isPositive) {
      return { transform: "rotate(0deg)" }
    } else {
      return { transform: "rotate(180deg)" }
    }
  }, [isPositive]);

  const getColor = useCallback(() => {
    if (isPositive) {
      return LIME_GREEN;
    } else {
      return TART_ORANGE;
    }
  }, [isPositive])

  return (
    <svg
      style={{ ...getRotation(), cursor: "pointer", transition: '.2s ease-in' }}
      width={size}
      height={size}
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2L3 3H5L4 2Z"
        fill="#C1F2C7"
        stroke={getColor()}
        stroke-width="2"
      />
    </svg>
  );
});

export default RankIcon;
