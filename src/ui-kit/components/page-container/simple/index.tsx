import { FC, memo, ReactNode } from "react";

import { SPContainer } from "./styled";


interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = memo(({ children }): JSX.Element => {
  return (
    <SPContainer>
      {children}
    </SPContainer>
  );
});

export default PageContainer;
