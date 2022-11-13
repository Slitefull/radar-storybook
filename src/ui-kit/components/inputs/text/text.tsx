import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import useHover from "@/ui-kit/hooks/useHover";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";
import Label from "@/ui-kit/components/label/label";

import { LabelPositions, LabelSizes, LabelWeights } from "../../label/types";
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
  tooltip?: ReactNode;
  inputSize?: Size;
  width?: string;
  full?: boolean;
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
    tooltip,
    inputSize = "default",
    width = "100%",
    full = false,
    ...props
  }): JSX.Element => {
  const { t } = useTranslation();
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
            wrap={labelWrap}
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
          placeholder={placeholder || capitalizeFirstLetter(t("search"))}
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
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextInputWrapper>
  );
});

export default Input;
