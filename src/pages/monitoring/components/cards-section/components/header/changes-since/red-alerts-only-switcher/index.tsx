import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { NEUTRAL_90, SUPPORT_2_10 } from "@/ui-kit/constants/colors";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Switcher from "@/ui-kit/components/controls/switcher";


const RedAlertsOnlySwitcher: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [isCheckedRedAlertsOnly, setIsCheckedRedAlertsOnly] = useState(false);

  const toggleRedAlertsOnly = useCallback(
    () => setIsCheckedRedAlertsOnly(!isCheckedRedAlertsOnly),
    [isCheckedRedAlertsOnly]
  );

  return (
    <Switcher
      isChecked={isCheckedRedAlertsOnly}
      onChange={toggleRedAlertsOnly}
      backgroundColor={SUPPORT_2_10}
      label={capitalizeFirstLetter(t("red_alerts_only"))}
      labelColor={NEUTRAL_90}
      tooltip={<>Tooltip text</>}
    />
  )
});

export default RedAlertsOnlySwitcher;