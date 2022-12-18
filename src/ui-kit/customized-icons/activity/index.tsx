import { FC, memo } from 'react';

import { NEUTRAL_60 } from "../../constants/colors";


interface ActivityIconProps {
  color?: string;
  size?: number;
}

const ActivityIcon: FC<ActivityIconProps> = memo((
  {
    color = NEUTRAL_60,
    size = 20
  }
): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H17L14 19L8 1L5 10H1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ActivityIcon;
