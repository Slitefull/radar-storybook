type Sizes = "small" | "default" | "big" | "xl";
type Weight = "default" | "bold";
type Types = "primary" | "secondary";
type TextAlign = "left" | "center" | "right";

export interface STextProps {
  type: Types;
  color: Color;
  hoverColor?: Color;
  rounded: boolean;
  background?: Color;
  size: Sizes;
  weight: Weight;
  textAlign: TextAlign;
  cursor: "default" | "pointer" | "not-allowed";
  margin: string;
}
