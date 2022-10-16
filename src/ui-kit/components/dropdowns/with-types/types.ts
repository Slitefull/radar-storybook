type LabelPositions = "top" | "right" | "bottom" | "left";

export interface WithLabelWrapperProps {
  labelPosition: LabelPositions;
  withLabel?: boolean;
  width?: string;
}
