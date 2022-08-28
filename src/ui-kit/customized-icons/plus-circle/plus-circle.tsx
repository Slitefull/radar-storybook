import { FC, memo } from 'react';
import { PLUMP_PURPLE } from "../../constants/colors";


interface PlusCircleIconProps {
  color?: string;
  size?: number;
}

const PlusCircleIcon: FC<PlusCircleIconProps> = memo(({ color, size }): JSX.Element => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color || PLUMP_PURPLE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V16"
        stroke={color || PLUMP_PURPLE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke={color || PLUMP_PURPLE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default PlusCircleIcon;
