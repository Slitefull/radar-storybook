import { FC, memo } from 'react';
import useHover from "@/ui-kit/hooks/useHover";


interface CloseIconProps {
  color?: Color;
  size?: number;
}

const CloseIcon: FC<CloseIconProps> = memo(({ color, size }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const style = {
    cursor: "pointer",
    opacity: 1,
    transition: ".2s opacity",
  }

  return (
    <div ref={hoverRef}>
      <svg
        style={isHovered ? { ...style, opacity: '.7' } : style}
        width={size || 20} height={size || 20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke={color || "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke={color || "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  );
});

export default CloseIcon;
