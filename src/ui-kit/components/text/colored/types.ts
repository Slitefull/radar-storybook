type Sizes = "default" | "small";
type Weight = "default" | "bold";

export interface SColoredTextProps {
  color?: Color;
  size?: Sizes;
  weight?: Weight;
}
