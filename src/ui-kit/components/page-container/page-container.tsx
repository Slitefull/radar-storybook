import { FC, ReactNode } from 'react';

import { Container } from "./styled";


interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default PageContainer;
