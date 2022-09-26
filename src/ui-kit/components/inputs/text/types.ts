type IconPosition = "start" | "end";

export interface TextInputWrapperProps {
  disabled?: boolean;
}

export interface WithIconWrapperProps {
  iconPosition?: IconPosition;
  isHovered: boolean;
  hasError: boolean;
}

export interface LabelProps {
  withLabel: boolean;
}
