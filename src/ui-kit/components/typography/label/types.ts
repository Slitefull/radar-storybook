export type LabelTypes = "primary" | "secondary";
export type LabelPositions = "top" | "right" | "bottom" | "left";
export type LabelSizes = "default" | "small" | "big";
export type LabelWeights = "default" | "bold";

export interface SLabelProps {
  type: LabelTypes;
  color: Color;
  size: LabelSizes;
  weight: LabelWeights;
  position: LabelPositions;
  disabled: boolean;
  margin: string;
  cursor?: "default" | "pointer" | "not-allowed";
  $wrap: boolean;
  withHover?: boolean;
}
