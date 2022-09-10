import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow/arrow";

import { SRoundedArrowButton } from "./styled";


type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ArrowRotation = "top" | "right" | "bottom" | "left";

interface RoundedArrowButtonProps extends DefaultButtonProps {
  background?: Color;
  arrowColor?: Color;
  rotation?: ArrowRotation;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const RoundedArrowButton: FC<RoundedArrowButtonProps> = memo((
  {
    background,
    arrowColor,
    rotation,
    onClick,
    disabled,
  }
): JSX.Element => {
  return (
    <SRoundedArrowButton
      background={background}
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowIcon
        color={arrowColor}
        rotation={rotation}
        size={14}
      />
    </SRoundedArrowButton>
  );
});

export default RoundedArrowButton;
