import { FC, memo } from 'react';
import useHover from "@/ui-kit/hooks/useHover";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


interface ExternalLinkIconProps {
  color?: Color;
  size?: number;
  onClick?: VoidFunction;
}

const ExternalLinkIcon: FC<ExternalLinkIconProps> = memo((
  {
    color = "black",
    size = 20,
    onClick
  }
): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <div
      ref={hoverRef}
      onClick={onClick}
      style={{ display: "flex" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          cursor: "pointer",
          transition: ".2s stroke",
        }}
      >
        <g opacity="0.6">
          <path
            d="M10.6316 8.08333V11.5833C10.6316 11.8928 10.5072 12.1895 10.2856 12.4083C10.0641 12.6271 9.76359 12.75
          9.45028 12.75H2.95284C2.63952 12.75 2.33904 12.6271 2.11749 12.4083C1.89595 12.1895 1.77148 11.8928 1.77148
          11.5833V5.16667C1.77148 4.85725 1.89595 4.5605 2.11749 4.34171C2.33904 4.12292 2.63952 4 2.95284 4H6.4969"
            stroke={isHovered ? PLUMP_PURPLE : color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8.85938 2.25H12.4034V5.75" stroke={isHovered ? PLUMP_PURPLE : color} strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M5.90625 8.66667L12.4037 2.25" stroke={isHovered ? PLUMP_PURPLE : color} strokeLinecap="round"
                strokeLinejoin="round"/>
        </g>
      </svg>
    </div>
  );
});

export default ExternalLinkIcon;