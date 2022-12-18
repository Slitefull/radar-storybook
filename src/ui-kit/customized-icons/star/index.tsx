import { FC, memo } from 'react';
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


interface StarIconProps {
  color?: string;
  size?: number;
}

const StarIcon: FC<StarIconProps> = memo(({ color = PRIMARY_60, size = 20 }): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox={`0 0 ${size - 1} ${size - 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 3L8.236 5.30389L11 5.6756L9 7.46793L9.472 10L7 8.80389L4.528 10L5 7.46793L3 5.6756L5.764 5.30389L7 3Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

export default StarIcon;
