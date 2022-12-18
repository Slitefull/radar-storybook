import { FC, memo } from "react"
import ContentLoader from "react-content-loader";

import { LabelPositions } from "@/ui-kit/components/typography/label/types";


interface DropdownFallbackProps {
  animate?: boolean;
  speed?: number;
  withLabel?: boolean;
  labelPosition?: LabelPositions;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const LabelXRecord: Record<LabelPositions, number> = {
  "left": 25,
  "right": 0,
  "top": 25,
  "bottom": 25,
};

const CheckboxXRecord: Record<LabelPositions, number> = {
  "left": 0,
  "right": 65,
  "top": 0,
  "bottom": 0,
};

const CheckboxFallback: FC<DropdownFallbackProps> = memo((
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
      width={withLabel ? 90 : 20}
      viewBox={withLabel ? "0 0 90 20" : "0 0 20 20"}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#ecebeb") : undefined}
    >
      <rect
        x={withLabel ? CheckboxXRecord[labelPosition] : 0}
        y="0"
        rx="4"
        ry="4"
        width="20"
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
});

export default CheckboxFallback;
