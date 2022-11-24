type Sizes = "default" | "big" | "small";
type Weight = "default" | "bold";
type Types = "primary" | "secondary";

export interface SColoredTextProps {
  type: Types;
  color: Color;
  size: Sizes;
  weight: Weight;
  cursor: "default" | "pointer" | "not-allowed";
  margin: string;
}
