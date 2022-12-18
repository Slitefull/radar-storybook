import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, ReactNode } from "react";
import useHover from "@/ui-kit/hooks/useHover";
import Tooltip from "@/ui-kit/components/generals/tooltip";
import Label from "@/ui-kit/components/typography/label";

import { LabelPositions, LabelSizes, LabelWeights } from "../../typography/label/types";
import { Row } from "@/global.css";
import { HelperText, SFormInput, TextInputWrapper, WithIconWrapper } from "./styled";


type IconPosition = "left" | "right";
type Size = "default" | "small";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: VoidFunction;
  onBlur?: VoidFunction;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  value?: string;
  label?: string;
  labelColor?: Color;
  labelPosition?: LabelPositions;
  labelSize?: LabelSizes;
  labelWrap?: boolean;
  labelWeight?: LabelWeights;
  subText?: ReactNode;
  tooltip?: ReactNode;
  inputSize?: Size;
  width?: string;
  full?: boolean;
  withErrors?: boolean;
}

const Input: FC<TextInputProps> = memo((
  {
    onChange,
    onFocus,
    onBlur,
    helperText,
    placeholder,
    disabled,
    icon,
    iconPosition = "left",
    value,
    label,
    labelColor,
    labelPosition = "top",
    labelSize,
    labelWrap = false,
    labelWeight,
    subText,
    tooltip,
    inputSize = "default",
    width = "100%",
    full = false,
    withErrors = true,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLInputElement>();

  return (
    <TextInputWrapper
      disabled={disabled}
      width={width}
      withLabel={!!label}
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
            $wrap={labelWrap}
            weight={labelWeight}
          >
            {label}
          </Label>
        )}
        {tooltip && <Tooltip>{tooltip}</Tooltip>}
      </Row>
      <WithIconWrapper
        isHovered={isHovered}
        hasError={!!helperText}
        iconPosition={iconPosition}
      >
        {icon}
        <SFormInput
          ref={hoverRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          iconPosition={iconPosition}
          withIcon={!!icon}
          inputSize={inputSize}
          {...props}
        />
      </WithIconWrapper>
      {withErrors && <HelperText>{helperText}</HelperText>}
      {subText}
    </TextInputWrapper>
  );
});

export default Input;
