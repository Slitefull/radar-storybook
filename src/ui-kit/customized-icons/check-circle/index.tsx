import { FC, memo } from 'react';
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


interface CheckCircleIconProps {
  color?: string;
  size?: number;
}

const CheckCircle: FC<CheckCircleIconProps> = memo(({ color = PRIMARY_60, size = 20 }): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        <path
          d="M121 60.9402V66.0002C120.993 77.8606 117.153 89.4009 110.051 98.9003C102.95 108.4 92.9681 115.349 81.5945
          118.712C70.2209 122.075 58.0649 121.671 46.9396 117.56C35.8142 113.45 26.3156 105.854 19.8603 95.9041C13.405
          85.9544 10.3389 74.1846 11.1192 62.35C11.8996 50.5153 16.4846 39.25 24.1905 30.2341C31.8964 21.2182 42.3103
          14.9348 53.879 12.321C65.4478 9.70723 77.5515 10.9031 88.385 15.7302"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M121 22L66 77.055L49.5 60.555"
          stroke={PRIMARY_60}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
});

export default CheckCircle;
