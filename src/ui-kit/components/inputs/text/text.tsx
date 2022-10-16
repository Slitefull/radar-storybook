import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import useHover from "@/ui-kit/hooks/useHover";
import LabelText from "@/ui-kit/components/label/label";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";

import { HelperText, Label, SFormInput, TextInputWrapper, WithIconWrapper } from "./styled";
import { Row } from "@/global.css";


type IconPosition = "start" | "end";
type LabelColors = "primary" | "ghost";

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
  labelColor?: LabelColors;
  tooltip?: ReactNode;
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
    iconPosition = "start",
    value,
    label,
    labelColor,
    tooltip,
    ...props
  }): JSX.Element => {
  const { t } = useTranslation();
  const [hoverRef, isHovered] = useHover<HTMLInputElement>();

  return (
    <TextInputWrapper disabled={disabled}>
      <Label withLabel={!!label}>
        <Row align={"center"} gap={10}>
          {label && <LabelText color={labelColor}>{label}</LabelText>}
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
            {...props}
          />
        </WithIconWrapper>
      </Label>
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextInputWrapper>
  );
});

export default Input;
