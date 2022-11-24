import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { SFreshRating } from "./styled";


const FreshRating: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SFreshRating>
      {t("new")}
    </SFreshRating>
  );
});

export default FreshRating;
