import { FC, memo } from 'react';
import { NEUTRAL_100 } from "@/ui-kit/constants/colors";
import { CSSObject } from "styled-components";


type Rotations = "right" | "left";

interface SortIconProps {
  color?: string;
  size?: number;
  rotation?: Rotations;
}

const SortIcon: FC<SortIconProps> = memo((
  {
    color = NEUTRAL_100,
    size = 20,
    rotation = "right",
  }
): JSX.Element => {
  const getRotation = (r: Rotations): CSSObject => {
    switch (r) {
      case "left": {
        return { transform: "rotateY(180deg)" }
      }
      case "right": {
        return { transform: "rotateY(0deg)" }
      }
      default: {
        return { transform: "rotateY(0deg)" }
      }
    }
  };

  return (
    <svg
      style={{ ...getRotation(rotation), cursor: "pointer", transition: '.2s ease-in' }}
      width={size}
      height="100%" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99951 3.33301V12.6663"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6663 8L7.99967 12.6667L3.33301 8" stroke={color} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M23.9995 12.6663V3.33301" stroke={color} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M19.333 7.99967L23.9997 3.33301L28.6663 7.99967" stroke={color} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  );
});

export default SortIcon;
