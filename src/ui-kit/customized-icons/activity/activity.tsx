import { FC, memo } from 'react';

import { ROCKET_METALLIC } from "../../constants/colors";


interface ActivityIconProps {
  color?: string;
  size?: number;
}

const ActivityIcon: FC<ActivityIconProps> = memo(({ color, size }): JSX.Element => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H17L14 19L8 1L5 10H1"
        stroke={color || ROCKET_METALLIC}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ActivityIcon;
