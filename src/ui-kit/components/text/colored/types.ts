type Sizes = "default" | "small";
type Weight = "default" | "bold";

export interface StyledColoredTextProps {
  color?: Color;
  size?: Sizes;
  weight?: Weight;
}
