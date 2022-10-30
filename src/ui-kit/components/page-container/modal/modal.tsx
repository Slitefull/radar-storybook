import { FC, memo, ReactNode } from "react";
import CloseIcon from "@/ui-kit/customized-icons/close/close";

import { CloseIconWrapper, SMPContainer } from "./styled";


interface ModalPageContainerProps {
  children: ReactNode;
  withClose?: boolean;
  onClose?: VoidFunction;
}

const ModalPageContainer: FC<ModalPageContainerProps> = memo((
  {
    children,
    withClose = true,
    onClose
  }
): JSX.Element => {
  return (
    <SMPContainer>
      {withClose && (
        <CloseIconWrapper>
          <CloseIcon onClick={onClose}/>
        </CloseIconWrapper>
      )}
      {children}
    </SMPContainer>
  );
});

export default ModalPageContainer;
