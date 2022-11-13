type LineTypes = "horizontal" | "vertical";
type Variants = "solid" | "dashed" | "dotted";

export interface SLineSeparatorProps {
  type: LineTypes;
  width: string;
  radius: number;
  $color: Color;
  variant: Variants;
}
