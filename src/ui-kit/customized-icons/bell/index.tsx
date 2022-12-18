import { FC, memo } from 'react';
import { PRIMARY_60 } from "../../constants/colors";
import useHover from "../../hooks/useHover";

import { BellIconWrapper, Count } from './styled';


interface BellIconProps {
  color?: string;
  size?: number;
  itemsCount?: number;
  onClick?: () => void;
}

const BellIcon: FC<BellIconProps> = memo((
  {
    color = PRIMARY_60,
    size = 20,
    itemsCount,
    onClick
  }
): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const style = {
    cursor: "pointer",
    opacity: 1,
    transition: ".2s opacity",
  }

  return (
    <BellIconWrapper
      ref={hoverRef}
      onClick={onClick}
    >
      <Count>
        {itemsCount}
      </Count>
      <svg
        width={size}
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={isHovered ? { ...style, opacity: '.7' } : style}
      >
        <path
          d="M16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8C6 6.4087 6.63214 4.88258
          7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496
          21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BellIconWrapper>
  );
});

export default BellIcon;
