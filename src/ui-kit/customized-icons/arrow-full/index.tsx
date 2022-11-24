import { FC, memo } from 'react';
import { CSSObject } from "styled-components";

import { SNOW } from "@/ui-kit/constants/colors";


type Rotations = "top" | "right" | "bottom" | "left";

interface ArrowFullIconProps {
  color?: string;
  size?: number;
  rotation?: Rotations;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const ArrowFullIcon: FC<ArrowFullIconProps> = memo((
  {
    color = SNOW,
    size = 20,
    rotation = "right",
    onClick,
  }
): JSX.Element => {
  const getRotation = (r: Rotations): CSSObject => {
    switch (r) {
      case "top": {
        return { transform: "rotate(-180deg)" }
      }
      case "right": {
        return { transform: "rotate(90deg)" }
      }
      case "bottom": {
        return { transform: "rotate(0deg)" }
      }
      case "left": {
        return { transform: "rotate(-90deg)" }
      }
      default: {
        return { transform: "rotate(0deg)" }
      }
    }
  };

  return (
    <svg className={"arrow"}
         onClick={onClick}
         style={{ ...getRotation(rotation), cursor: "pointer", transition: '.2s ease-in' }}
         width={size}
         height={size}
         viewBox="0 0 16 16"
         fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33301V12.6663" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6663 8L7.99967 12.6667L3.33301 8" stroke={color} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  );
});

export default ArrowFullIcon;
