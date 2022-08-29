import { ButtonHTMLAttributes, DetailedHTMLProps, FC, lazy, memo } from "react";

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

const ArrowIcon = lazy(() => import("@/ui-kit/customized-icons/arrow/arrow"));

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
