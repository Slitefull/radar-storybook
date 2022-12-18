import { FC, memo } from 'react';
import { NEUTRAL_00 } from "@/ui-kit/constants/colors";


interface ListIconProps {
  color?: string;
  size?: number;
}

const ListIcon: FC<ListIconProps> = memo(({ color = NEUTRAL_00, size = 20 }): JSX.Element => {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16016 6H21.334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16016 12H21.334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16016 18H21.334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.09277 6H3.10253"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.09277 12H3.10253"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.09277 18H3.10253"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ListIcon;
