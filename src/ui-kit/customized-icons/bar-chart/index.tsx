import { FC, memo } from 'react';

import { NEUTRAL_60 } from "../../constants/colors";


interface BarChartIconProps {
  color?: string;
  size?: number;
}

const BarChartIcon: FC<BarChartIconProps> = memo((
  {
    color = NEUTRAL_60,
    size = 20
  }
): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default BarChartIcon;
