export type LinkColor = "default" | "text" | "gray";
export type LinkSize = "default" | "small";

export interface SLinkProps {
  color?: LinkColor;
  size?: LinkSize;
}

export interface WithIconWrapperProps {
  color?: LinkColor;
}
