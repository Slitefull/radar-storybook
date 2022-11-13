import { FC, memo, ReactNode } from "react";

import { SBorderedLayout } from "./styled";


interface BorderedLayoutProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}

const BorderedLayout: FC<BorderedLayoutProps> = memo((
  {
    children,
    margin = "auto",
    padding = "30px",
    width = "100%",
    height = "100%",
  }
): JSX.Element => {
  return (
    <SBorderedLayout
      margin={margin}
      padding={padding}
      width={width}
      height={height}
    >
      {children}
    </SBorderedLayout>
  )
});

export default BorderedLayout;
