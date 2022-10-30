import styled from "styled-components";


export const LeftSide = styled.div`
  ${({ theme }) => theme.components.generals.header.LeftSide}
`;

export const RightSide = styled.div`
  ${({ theme }) => theme.components.generals.header.RightSide}
`;

export const HeaderWrapper = styled.header`
  ${({ theme }) => theme.components.generals.header.HeaderWrapper}
`;

export const HeaderTitle = styled.span`
  ${({ theme }) => theme.components.generals.header.HeaderTitle}
`;

export const Username = styled.span`
  ${({ theme }) => theme.components.generals.header.Username}
`;
