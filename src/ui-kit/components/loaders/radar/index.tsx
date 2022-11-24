import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import LogoPrimary from "@/ui-kit/customized-icons/logo-primary";

import { LoaderText, LogoWrapper, SRadarLoader } from "./styled";


const RadarLoader: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SRadarLoader>
      <LogoWrapper>
        <LogoPrimary size={45}/>
      </LogoWrapper>
      <LoaderText>
        {capitalizeFirstLetter(t("verifying_your_domain"))}...
      </LoaderText>
    </SRadarLoader>
  )
});

export default RadarLoader;
