export type DropdownColors = "primary" | "secondary" | "ghost";
export type DropdownSizes = "default" | "small";

export interface DropdownHeaderProps {
  color?: DropdownColors;
  size?: DropdownSizes;
  rounded?: boolean;
  isOpen: boolean;
}

export interface DropdownHeaderTextProps {
  size?: DropdownSizes;
  color?: DropdownColors;
}

export interface DropdownBodyProps {
  isOpen: boolean;
  color?: DropdownColors;
}

export interface DropdownItemDotProps {
  isSelected: boolean;
  color?: DropdownColors;
}

export interface IconWrapperProps {
  size?: DropdownSizes;
}

export interface DropdownItemLabelProps {
  color?: DropdownColors;
  isSelected: boolean;
}
