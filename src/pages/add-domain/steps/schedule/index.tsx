import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { scheduleBullets } from "@/entity/atoms/add-domain/schedule/schedule-bullets";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { EBONY } from "@/ui-kit/constants/colors";
import Dropdown from "@/ui-kit/components/dropdowns/with-types";
import AddDomainSlider from "@/pages/add-domain/components/text-slider";
import LineSeparator from "@/ui-kit/components/separators/line";
import ScheduleBullet from "@/pages/add-domain/components/schedule-bullet";

import { Column } from '@/global.css';


const Schedule: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [scheduleElements, setScheduleElements] = useRecoilState<number[]>(scheduleBullets);
  const [selectedSchedule, setSelectedSchedule] = useState<string>();

  const scheduleCrawlsOptions = [
    { value: "my_domain", label: "12AM - 6AM | Mon - Fri" },
    { value: "my_domain_2", label: "12AM - 6AM | Mon, Wed, Fri" },
    { value: "my_domain_3", label: "12AM - 6AM | Thu" },
    { value: "custom", label: "Custom" },
  ];

  const onAddScheduleElementHandler = useCallback(
    () => setScheduleElements([...scheduleElements, scheduleElements.length]),
    [scheduleElements]
  );

  const onDeleteScheduleElementHandler = useCallback(
    (id: number) => setScheduleElements(scheduleElements.filter((element) => element !== id)),
    [scheduleElements],
  );

  const onChangeScheduleCrawlsHandler = useCallback(
    (option: string) => setSelectedSchedule(option),
    []
  );

  const scheduleComponents = useMemo(
    () => scheduleElements.map((element) => (
      <ScheduleBullet
        key={element}
        index={element}
        onAdd={onAddScheduleElementHandler}
        onDelete={onDeleteScheduleElementHandler}
      />
    )), [scheduleElements]
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
          labelColor={EBONY}
          labelPosition={"top"}
          labelWeight={"bold"}
          options={scheduleCrawlsOptions}
          onChange={(option) => onChangeScheduleCrawlsHandler(option.value)}
        />

        {selectedSchedule === "custom" && (
          <Column>
            {scheduleComponents}
          </Column>
        )}
        <LineSeparator/>
      </Column>
    </Column>
  );
});

export default Schedule;
