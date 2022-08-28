import { FC, memo } from 'react';
import useHover from "../../hooks/useHover";
import { PLUMP_PURPLE } from "../../constants/colors";


interface UserIconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

const UserIcon: FC<UserIconProps> = memo(({ color, size, onClick }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const style = {
    cursor: "pointer",
    opacity: 1,
    transition: ".2s opacity",
  }

  return (
    <div
      ref={hoverRef}
      onClick={onClick}
    >
      <svg
        width={size || 20}
        height={size || 20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={isHovered ? { ...style, opacity: '.7' } : style}
      >
        <path
          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172
        15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
          stroke={color || PLUMP_PURPLE}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914
        9.79086 11 12 11Z"
          stroke={color || PLUMP_PURPLE}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});

export default UserIcon;
