import { FC, memo } from 'react';
import { CSSObject } from "styled-components";

import { SNOW } from "@/ui-kit/constants/colors";


type Rotations = "top" | "right" | "bottom" | "left";

interface ArrowIconProps {
  color?: string;
  size?: number;
  rotation?: Rotations;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const ArrowIcon: FC<ArrowIconProps> = memo((
  {
    color = SNOW,
    size = 20,
    rotation = "right",
    onClick,
    disabled,
  }
): JSX.Element => {
  const getRotation = (r: Rotations): CSSObject => {
    switch (r) {
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
  };

  const getWithClickStyles = (): CSSObject => {
    if (onClick) {
      return { cursor: "pointer" };
    }

    return { cursor: "auto" };
  };

  return (
    <svg
      className={"arrow"}
      onClick={onClick}
      style={{ ...getRotation(rotation), ...getWithClickStyles(), transition: '.2s ease-in' }}
      width={size}
      height={size}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowIcon;
