import { LabelPositions } from "@/ui-kit/components/label/types";


export interface TextareaWrapperProps {
  disabled?: boolean;
  labelPosition: LabelPositions;
  full: boolean;
}

export interface STextareaProps {
  isHovered: boolean;
  hasError: boolean;
}
