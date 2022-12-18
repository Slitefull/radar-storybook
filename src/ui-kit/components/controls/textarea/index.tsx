import { ChangeEvent, FC, memo, ReactNode, TextareaHTMLAttributes, } from "react";
import { NEUTRAL_60 } from "@/ui-kit/constants/colors";
import useHover from "@/ui-kit/hooks/useHover";
import Label from "@/ui-kit/components/typography/label";
import Tooltip from "@/ui-kit/components/generals/tooltip";
import Text from "@/ui-kit/components/typography/text";

import { LabelPositions, LabelSizes, LabelWeights } from "../../typography/label/types";
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
        <Text color={NEUTRAL_60}>
          {bottomText}
        </Text>
      )}
    </Column>
  );
});

export default Textarea;
