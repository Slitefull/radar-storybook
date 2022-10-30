import { ChangeEvent, FC, memo, ReactNode, TextareaHTMLAttributes, } from "react";
import useHover from "@/ui-kit/hooks/useHover";
import Label from "@/ui-kit/components/label/label";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";

import { LabelColors, LabelPositions, LabelSizes } from "../../label/types";
import { Row } from "@/global.css";
import { HelperText, STextarea, TextareaWrapper } from "./styled";


export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelColor?: LabelColors;
  labelPosition?: LabelPositions;
  labelSize?: LabelSizes;
  tooltip?: ReactNode;
  full?: boolean;
}

const Textarea: FC<TextareaProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    disabled,
    label,
    labelColor = "primary",
    labelPosition = "top",
    labelSize = "default",
    tooltip,
    full = false,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLTextAreaElement>();

  return (
    <TextareaWrapper
      disabled={disabled}
      labelPosition={labelPosition}
      full={full}
    >
      <Row margin={"0"} align={"center"} gap={10}>
        {label && (
          <Label
            color={labelColor}
            size={labelSize}
          >
            {label}
          </Label>
        )}
        {tooltip && <Tooltip>{tooltip}</Tooltip>}
      </Row>
      <STextarea
        ref={hoverRef}
        onChange={onChange}
        placeholder={placeholder}
        isHovered={isHovered}
        hasError={!!helperText}
        {...props}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextareaWrapper>
  );
});

export default Textarea;
