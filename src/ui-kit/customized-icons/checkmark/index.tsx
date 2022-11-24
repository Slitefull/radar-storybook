import { FC, memo } from 'react';
import { BLACK } from "../../constants/colors";


interface CheckmarkIconProps {
  color?: string;
  size?: number;
}

const CheckmarkIcon: FC<CheckmarkIconProps> = memo(({ color, size }): JSX.Element => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.396138 5.43688L4.99966 11L10.6358 0.243947" stroke={color || BLACK}/>
    </svg>
  );
});

export default CheckmarkIcon;
