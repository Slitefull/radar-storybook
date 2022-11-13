import { FC, memo, ReactNode } from "react";

import { SRoundedBanner } from "./styled";


interface RoundedBannerProps {
  children: ReactNode;
  maxWidth?: string;
}

const RoundedBanner: FC<RoundedBannerProps> = memo(({ children, maxWidth = "100%" }): JSX.Element => {
  return (
    <SRoundedBanner maxWidth={maxWidth}>
      {children}
    </SRoundedBanner>
  );
});

export default RoundedBanner;
