import { FC, memo } from 'react';
import useHover from "@/ui-kit/hooks/useHover";
import { BLACK } from "@/ui-kit/constants/colors";


interface CloseIconProps {
  color?: Color;
  size?: number;
  onClick?: VoidFunction;
}

const CloseIcon: FC<CloseIconProps> = memo((
  {
    color = BLACK,
    size = 20,
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
    <div
      ref={hoverRef}
      onClick={onClick}
      style={{ display: "flex" }}
    >
      <svg
        style={isHovered ? { ...style, opacity: '.7' } : style}
        width={size} height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
});

export default CloseIcon;
