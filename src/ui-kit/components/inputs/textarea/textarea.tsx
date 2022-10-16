import { ChangeEvent, FC, memo, ReactNode, TextareaHTMLAttributes, } from "react";
import useHover from "@/ui-kit/hooks/useHover";
import Label from "@/ui-kit/components/label/label";
import Tooltip from "@/ui-kit/components/tooltips/tooltip/tooltip";

import { Row } from "@/global.css";
import { HelperText, STextarea, TextareaWrapper } from "./styled";


type LabelColors = "primary" | "ghost";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelColor?: LabelColors;
  tooltip?: ReactNode;
}

const Textarea: FC<TextareaProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    disabled,
    label,
    labelColor,
    tooltip,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLTextAreaElement>();

  return (
    <TextareaWrapper disabled={disabled}>
      <Row align={"center"} gap={10}>
        {label && (<Label color={labelColor}>{label}</Label>)}
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
