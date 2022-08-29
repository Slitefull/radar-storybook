export type ButtonColors = "primary" | "secondary" | "ghost";

export type ButtonSizes = "default" | "small";

export interface SButtonProps {
  size?: ButtonSizes;
  color?: ButtonColors;
}
