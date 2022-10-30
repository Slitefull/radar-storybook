import { LabelPositions } from "@/ui-kit/components/label/types";


type IconPosition = "left" | "right";
type InputSize = "default" | "small";

export interface TextInputWrapperProps {
  disabled?: boolean;
  labelPosition: LabelPositions;
  withLabel: boolean;
  width: string;
  full: boolean;
}

export interface WithIconWrapperProps {
  iconPosition: IconPosition;
  isHovered: boolean;
  hasError: boolean;
}

export interface SFormInputProps {
  iconPosition: IconPosition;
  withIcon: boolean;
  inputSize: InputSize;
}
