import { FC, memo } from "react"
import ContentLoader from "react-content-loader";

import { LabelPositions } from "@/ui-kit/components/label/types";


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
  "right": 50,
  "top": 0,
  "bottom": 0,
};

const SwitcherXRecord: Record<LabelPositions, number> = {
  "left": 70,
  "right": 0,
  "top": 70,
  "bottom": 70,
};

const SwitcherFallback: FC<DropdownFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    withLabel,
    labelPosition = "left",
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      width={withLabel ? 110 : 40}
      viewBox={withLabel ? "0 0 110 20" : "0 0 40 20"}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#ecebeb") : undefined}
    >
      <rect
        x={withLabel ? SwitcherXRecord[labelPosition] : 0}
        y="0"
        rx="10"
        ry="10"
        width="40"
        height="20"
      />
      {withLabel && (
        <rect
          x={LabelXRecord[labelPosition]}
          y="0"
          rx="4"
          ry="4"
          width="60"
          height="20"
        />
      )}
    </ContentLoader>
  )
})

export default SwitcherFallback;
