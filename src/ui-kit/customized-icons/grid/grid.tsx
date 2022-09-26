import { FC, memo } from 'react';
import { ROCKET_METALLIC } from "@/ui-kit/constants/colors";


interface GridIconProps {
  color?: string;
  size?: number;
}

const GridIcon: FC<GridIconProps> = memo(({ color = ROCKET_METALLIC, size = 20 }): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6151 3H3.52148V10H10.6151V3Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7626 3H14.6689V10H21.7626V3Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7626 14H14.6689V21H21.7626V14Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6151 14H3.52148V21H10.6151V14Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default GridIcon;
