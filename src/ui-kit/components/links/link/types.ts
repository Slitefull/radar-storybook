export type LinkColor = "default" | "text" | "gray";
export type LinkSize = "default" | "small";

export interface StyledLinkProps {
  color?: LinkColor;
  size?: LinkSize;
}

export interface WithIconWrapperProps {
  color?: LinkColor;
}
