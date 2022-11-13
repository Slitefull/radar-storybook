import { ChangeEvent, FC, memo, ReactNode, TextareaHTMLAttributes, } from "react";
import useHover from "@/ui-kit/hooks/useHover";
import Label from "@/ui-kit/components/label/label";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";
import ColoredText from "@/ui-kit/components/text/colored/colored";
import { ROCKET_METALLIC } from "@/ui-kit/constants/colors";

import { LabelPositions, LabelSizes, LabelWeights } from "../../label/types";
import { Column, Row } from "@/global.css";
import { HelperText, STextarea, TextareaWrapper } from "./styled";


export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelColor?: Color;
  labelPosition?: LabelPositions;
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
  tooltip?: ReactNode;
  full?: boolean;
  bottomText?: string;
}

const Textarea: FC<TextareaProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    disabled,
    label,
    labelColor,
    labelPosition = "top",
    labelSize,
    labelWeight,
    tooltip,
    full = false,
    bottomText,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLTextAreaElement>();

  return (
    <Column width={"100%"} align={"end"} gap={10}>
      <TextareaWrapper
        disabled={disabled}
        labelPosition={labelPosition}
        full={full}
      >
        <Row
          margin={"0"}
          align={"center"}
          gap={10}
        >
          {label && (
            <Label
              color={labelColor}
              size={labelSize}
              weight={labelWeight}
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
      {bottomText && (
        <ColoredText color={ROCKET_METALLIC}>
          {bottomText}
        </ColoredText>
      )}
    </Column>
  );
});

export default Textarea;
