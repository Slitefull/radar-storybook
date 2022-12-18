import { FC, memo } from 'react';
import { NEUTRAL_60 } from "@/ui-kit/constants/colors";


interface GridIconProps {
  color?: string;
  size?: number;
}

const GridIcon: FC<GridIconProps> = memo(({ color = NEUTRAL_60, size = 20 }): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6151 3H3.52148V10H10.6151V3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7626 3H14.6689V10H21.7626V3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7626 14H14.6689V21H21.7626V14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6151 14H3.52148V21H10.6151V14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default GridIcon;
