import { FC, memo, ReactNode, useCallback, useState } from "react";
import { DateRange } from "react-day-picker";
import { isEqual } from "date-fns";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { NEUTRAL_70, PRIMARY_60 } from "@/ui-kit/constants/colors";
import { getFormatDate } from "@/ui-kit/helpers/getFormatDate";
import Text from "@/ui-kit/components/typography/text";
import Dropdown from "@/ui-kit/components/controls/dropdown";
import RedAlertsOnlySwitcher from "./red-alerts-only-switcher";
import CalendarIcon from "@/ui-kit/customized-icons/calendar";
import RangeDatepicker from "@/ui-kit/components/datepickers/range";

import { Row } from "@/global.css";


enum ChangesOptions {
  LAST_CRAWL = "last_crawl",
  LAST_VISIT = "last_visit",
  ALL_CHANGES = "all_changes",
  SELECT_DATES = "select_dates",
}

type Option = { value: ChangesOptions, label: ReactNode };

const ChangesSince: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<ChangesOptions>(ChangesOptions.LAST_CRAWL);
  const [dateForPreview, setDateForPreview] = useState<Option | null>(null);
  const [selectedDate, setSelectedDate] = useState<DateRange | null>(null);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const changesSinceElements = [
    {
      value: ChangesOptions.LAST_CRAWL,
      label: (
        <Row gap={6}>
          <Text
            type={"secondary"}
            color={PRIMARY_60}
            weight={"bold"}
            size={"small"}
          >
            {capitalizeFirstLetter(t("changes_since"))}
          </Text>
          <Text size={"small"} type={"secondary"} cursor={"pointer"}>{t("last_crawl")}</Text>
        </Row>
      )
    },
    {
      value: ChangesOptions.LAST_VISIT,
      label: (
        <Row gap={6}>
          <Text
            type={"secondary"}
            color={PRIMARY_60}
            weight={"bold"}
            cursor={"pointer"}
            size={"small"}
          >
            {capitalizeFirstLetter(t("changes_since"))}
          </Text>
          <Text size={"small"} type={"secondary"} cursor={"pointer"}>{t("last_visit")}</Text>
        </Row>
      )
    },
    {
      value: ChangesOptions.ALL_CHANGES,
      label: (
        <Row>
          <Text
            type={"secondary"}
            color={PRIMARY_60}
            weight={"bold"}
            cursor={"pointer"}
            size={"small"}
          >
            {capitalizeFirstLetter(t("all_changes"))}
          </Text>
        </Row>
      )
    },
    {
      value: ChangesOptions.SELECT_DATES,
      label: (
        <Row align={"center"} gap={10}>
          <CalendarIcon/>
          <Text
            type={"secondary"}
            cursor={"pointer"}
            size={"small"}
            color={NEUTRAL_70}
          >
            {capitalizeFirstLetter(t("select_dates"))}
          </Text>
        </Row>
      )
    }
  ];

  const inPreviewDatepicker = (selectedOption === ChangesOptions.SELECT_DATES) && isOpenDatePicker;

  const onChangeSelect = useCallback(
    (option: Option) => {
      setDateForPreview(null);
      setSelectedOption(option.value)

      if (option.value === ChangesOptions.SELECT_DATES) {
        setIsOpenDatePicker(true);
      }
    },
    []
  );

  const onCancelDatePickerHandler = useCallback(
    () => {
      setIsOpenDatePicker(false);
      setSelectedDate({ from: new Date(), to: new Date()});
      setDateForPreview({ value: ChangesOptions.SELECT_DATES, label: `${getFormatDate(new Date())}` });
    },
    []
  );

  const onSubmitPickerHandler = useCallback(
    (date: DateRange) => {
      if (date.from && date.to) {
        if (isEqual(date.from, date.to)) {
          setDateForPreview({ value: ChangesOptions.SELECT_DATES, label: `${getFormatDate(date.from)}` });
          setSelectedDate({ from: date.from, to: date.to });
          return;
        }

        setDateForPreview({
          value: ChangesOptions.SELECT_DATES,
          label: `${getFormatDate(date.from)} - ${getFormatDate(date.to)}`
        });

        setSelectedDate({ from: date.from, to: date.to });
        setIsOpenDatePicker(false);
      }
    },
    [getFormatDate]
  );

  return (
    <Row gap={20}>
      <Dropdown
        color={"ghost"}
        width={"240px"}
        options={changesSinceElements}
        onChange={onChangeSelect}
        defaultValue={changesSinceElements[0]}
        value={dateForPreview ? dateForPreview : undefined}
        subElement={inPreviewDatepicker && (
          <RangeDatepicker
            onSubmit={(date) => onSubmitPickerHandler(date)}
            onCancel={onCancelDatePickerHandler}
          />
        )}
      />
      <RedAlertsOnlySwitcher/>
    </Row>
  )
});

export default ChangesSince;