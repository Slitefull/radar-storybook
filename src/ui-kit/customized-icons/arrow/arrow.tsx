import { FC, memo } from 'react';
import { CSSObject } from "styled-components";

import { SNOW } from "@/ui-kit/constants/colors";


type Rotations = "top" | "right" | "bottom" | "left";

interface ArrowIconProps {
  color?: string;
  size?: number;
  rotation?: Rotations;
}

const ArrowIcon: FC<ArrowIconProps> = memo(({ color, size, rotation }): JSX.Element => {
  const getRotation = (): CSSObject => {
    switch (rotation) {
      case "top": {
        return { transform: "rotate(-90deg)" }
      }
      case "right": {
        return { transform: "rotate(0deg)" }
      }
      case "bottom": {
        return { transform: "rotate(90deg)" }
      }
      case "left": {
        return { transform: "rotate(180deg)" }
      }
      default: {
        return { transform: "rotate(270deg)" }
      }
    }
  }

  return (
    <svg
      style={{ ...getRotation(), transition: '.2s ease-in' }}
      width={size || 20}
      height={size || 20}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke={color || SNOW}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowIcon;
