import { FC, memo, ReactNode } from "react";
import CloseIcon from "@/ui-kit/customized-icons/close";

import { CloseIconWrapper, SMPContainer } from "./styled";


interface ModalPageContainerProps {
  children: ReactNode;
  onClose?: VoidFunction;
}

const ModalPageContainer: FC<ModalPageContainerProps> = memo((
  {
    children,
    onClose
  }
): JSX.Element => {
  return (
    <SMPContainer>
      {onClose && (
        <CloseIconWrapper>
          <CloseIcon onClick={onClose}/>
        </CloseIconWrapper>
      )}
      {children}
    </SMPContainer>
  );
});

export default ModalPageContainer;
