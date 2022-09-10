import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


type LabelPositions = "left" | "right";

interface DropdownFallbackProps {
  animate?: boolean;
  speed?: number;
  withLabel?: boolean;
  labelPosition?: LabelPositions;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const LabelXRecord: Record<LabelPositions, number> = {
  "left": 0,
  "right": 120,
};

const DropdownXRecord: Record<LabelPositions, number> = {
  "left": 100,
  "right": 0,
};

const DEFAULT_LABEL_POSITION = "left";

const DropdownFallback: FC<DropdownFallbackProps> = memo((
  {
    animate = true,
    speed = 0,
    withLabel,
    labelPosition,
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      width={withLabel ? 220 : 115}
      viewBox={withLabel ? "0 0 220 35" : "0 0 115 35"}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#c6c3c3") : undefined}
    >
      <rect
        x={withLabel ? DropdownXRecord[labelPosition || DEFAULT_LABEL_POSITION] : 0}
        y="0"
        rx="4"
        ry="4"
        width="115"
        height="35"
      />
      {withLabel && (
        <rect
          x={LabelXRecord[labelPosition || DEFAULT_LABEL_POSITION]}
          y="7"
          rx="4"
          ry="4"
          width="90"
          height="20"
        />
      )}
    </ContentLoader>
  )
})

export default DropdownFallback;
