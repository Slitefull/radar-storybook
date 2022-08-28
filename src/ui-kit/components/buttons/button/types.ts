export type ButtonColors = "primary" | "secondary" | "ghost";

export type ButtonSizes = "default" | "small";

export interface StyledButtonProps {
  size?: ButtonSizes;
  color?: ButtonColors;
}
