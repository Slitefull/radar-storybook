import { FC, ReactNode } from "react";
import Header from "@/ui-kit/components/header/header";

import { SPContainer } from "./styled";


interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }): JSX.Element => {
  return (
    <SPContainer>
      <Header/>
      {children}
    </SPContainer>
  );
};

export default PageContainer;
