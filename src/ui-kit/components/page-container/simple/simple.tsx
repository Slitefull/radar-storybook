import { FC, ReactNode } from 'react';

import { Container } from "./styled";
import Header from "@/ui-kit/components/header/header";


interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      <Header/>
      {children}
    </Container>
  );
};

export default PageContainer;
