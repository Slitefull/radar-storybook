import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Dropdown from "@/ui-kit/components/dropdowns/with-types/with-types";
import AddDomainSlider from "@/pages/add-domain/components/text-slider/text-slider";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import ScheduleBullets from "@/pages/add-domain/components/schedule-bullets/schedule-bullets";

import { Column } from '@/global.css';


const Schedule: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [selectedSchedule, setSelectedSchedule] = useState<string>();

  const scheduleCrawlsOptions = [
    { value: "my_domain", label: "12AM - 6AM | Mon - Fri" },
    { value: "my_domain_2", label: "12AM - 6AM | Mon, Wed, Fri" },
    { value: "my_domain_3", label: "12AM - 6AM | Thu" },
    { value: "custom", label: "Custom" },
  ];

  const onChangeScheduleCrawlsHandler = useCallback(
    (option: string) => setSelectedSchedule(option),
    []
  );

  return (
    <Column align={"center"}>
      <AddDomainSlider/>
      <Column
        gap={30}
        width={"350px"}
        margin={"20px auto 0"}
      >
        <Dropdown
          label={capitalizeFirstLetter(t("schedule_crawls"))}
          labelColor={"ghost"}
          labelPosition={"top"}
          options={scheduleCrawlsOptions}
          onChange={(option) => onChangeScheduleCrawlsHandler(option.value)}
        />

        {selectedSchedule === "custom" && <ScheduleBullets/>}
        <LineSeparator/>
      </Column>
    </Column>
  );
});

export default Schedule;
