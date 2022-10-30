export type LabelColors = "primary" | "secondary" | "ghost" | "subtly";
export type LabelPositions = "top" | "right" | "bottom" | "left";
export type LabelSizes = "default" | "small" | "big";

export interface SLabelProps {
  color: LabelColors;
  size: LabelSizes;
  disabled: boolean;
  margin: string;
  cursor?: "default" | "pointer" | "not-allowed";
  wrap: boolean;
}
