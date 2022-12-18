import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import loadable from "@loadable/component";
import ChangePasswordFallback from "./form/fallback";

import { Column } from "@/global.css";
import { ColoredTitle, Title, } from "./styled";


const ChangePasswordForm = loadable(() => import("./form"), { fallback: <ChangePasswordFallback/> });

const ChangePasswordPage: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Column
      width={"100%"}
      align={"center"}
      margin={"0"}
      gap={60}
    >
      <Title>
        {capitalizeFirstLetter(t("create_new"))} <ColoredTitle>{t("password")}</ColoredTitle>
      </Title>
      <ChangePasswordForm/>
    </Column>
  )
});

export default ChangePasswordPage;
