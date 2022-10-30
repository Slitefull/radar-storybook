import { FC, Fragment, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSObject } from "styled-components";
import { format, isAfter, isBefore, isValid } from "date-fns";
import { DateFormatter, DateRange, DayPicker, InternalModifier, SelectRangeEventHandler } from "react-day-picker";
import { getLastDaysDate } from "@/ui-kit/helpers/getLastDaysDate";
import { LAVENDER_WEB, PLUMP_PURPLE, RAISIN_BLACK, WHITE } from "@/ui-kit/constants/colors";
import { getDaysCount } from "@/ui-kit/helpers/getDaysCount";
import { getDaysCountFromDates } from "@/ui-kit/helpers/getDaysCountFromDates";
import { getFormatDate } from "@/ui-kit/helpers/getFormatDate";
import Day from "./components/day/day";
import Input from "@/ui-kit/components/inputs/text/text";
import Button from "@/ui-kit/components/buttons/button/button";
import ButtonLink from "@/ui-kit/components/buttons/link/link";
import CalendarIcon from "@/ui-kit/customized-icons/calendar/calendar";
import IconLeft from "./components/icon-left/icon-left";
import IconRight from "./components/icon-right/icon-right";
import CaptionLabel from "./components/caption-label/caption-label";

import "react-day-picker/dist/style.css";
import { Column, Row } from "@/global.css";
import { CalendarBullet, DatepickerWrapper, SelectedDaysCount, SelectedDaysText, Separator, Weekday } from "./styled";


interface RangeDatepickerProps {
  numberOfMonths?: number;
  showOutsideDays?: boolean;
  onSubmit: (date: DateRange) => void;
}

enum Bullets {
  LAST_WEEK = "Last week",
  LAST_MONTH = "Last month",
  LAST_60_DAYS = "Last 60 days",
  LAST_90_DAYS = "Last 90 days",
  CUSTOM_RANGE = "Custom range",
}

const selectedDayStyle: CSSObject = {
  background: PLUMP_PURPLE,
  color: WHITE,
  outline: "none",
};

const outsideDayStyle: CSSObject = {
  opacity: .3,
};

const rangeStartStyle: CSSObject = {
  background: PLUMP_PURPLE,
  color: WHITE,
  borderRadius: "50% 0 0 50%",
};

const rangeEndStyle: CSSObject = {
  background: PLUMP_PURPLE,
  color: WHITE,
  borderRadius: "0 50% 50% 0",
};

const rangeMiddleStyle: CSSObject = {
  background: LAVENDER_WEB,
  color: RAISIN_BLACK,
};

const tableStyles: CSSObject = {
  borderCollapse: "inherit",
  borderSpacing: "0 5px",
};

const headCellStyles: CSSObject = {
  fontFamily: "Menlo",
  fontSize: 10,
};

const cellStyles: CSSObject = {
  width: "auto",
  height: "auto",
};

const global = `
  .rdp {
    margin: 0;
  }
  
  .rdp-cell:first-child:hover > button {
    border-radius: 50%;
  }

  .rdp-cell:last-child:hover > button {
    border-radius: 50%;
  }
`;

const RangeDatepicker: FC<RangeDatepickerProps> = memo((
  {
    numberOfMonths = 3,
    showOutsideDays,
    onSubmit,
  }
): JSX.Element => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<DateRange>();
  const [selectedBullet, setSelectedBullet] = useState<Bullets | null>(null);
  const [daysCount, setDaysCount] = useState<number>();

  const formatWeekdayName: DateFormatter = (date, options) => {
    return (
      <Weekday>
        {format(date, "iii", { locale: options?.locale })}
      </Weekday>
    );
  };

  const onBulletClickHandler = useCallback(
    (bullet: Bullets) => {
      setSelectedBullet(bullet);
      setSelected(getLastDaysDate(getDaysCount(bullet)));
    },
    [selected, daysCount]
  );

  const bullets = useMemo(
    () => [
      {
        label: t("last_week"),
        isSelected: selectedBullet === Bullets.LAST_WEEK,
        callback: () => onBulletClickHandler(Bullets.LAST_WEEK),
      },
      {
        label: t("last_month"),
        isSelected: selectedBullet === Bullets.LAST_MONTH,
        callback: () => onBulletClickHandler(Bullets.LAST_MONTH),
      },
      {
        label: t("last_days_count", { count: 60 }),
        isSelected: selectedBullet === Bullets.LAST_60_DAYS,
        callback: () => onBulletClickHandler(Bullets.LAST_60_DAYS),
      },
      {
        label: t("last_days_count", { count: 90 }),
        isSelected: selectedBullet === Bullets.LAST_90_DAYS,
        callback: () => onBulletClickHandler(Bullets.LAST_90_DAYS),
      },
      {
        label: t("custom_range"),
        isSelected: selectedBullet === Bullets.CUSTOM_RANGE,
        callback: () => onBulletClickHandler(Bullets.CUSTOM_RANGE),
      },
    ],
    [selectedBullet]
  );

  const onSetSelectedRangeHandler: SelectRangeEventHandler = useCallback(
    (selected: DateRange | undefined) => {
      setSelectedBullet(Bullets.CUSTOM_RANGE);
      setSelected(selected);
    },
    [setSelectedBullet, setSelected]
  );

  const onChangeFromDateHandler = useCallback(
    (date: Date) => {
      if (isValid(date)) {
        if (selected?.to && isAfter(date, selected.to)) {
          setSelected({ from: selected.to, to: date });
        } else {
          setSelected({ from: date, to: selected?.to });
        }

        setSelectedBullet(Bullets.CUSTOM_RANGE);
      }
    },
    [selected]
  );

  const onChangeToDateHandler = useCallback(
    (date: Date) => {
      if (isValid(date)) {
        if (selected?.from && isBefore(date, selected.from)) {
          setSelected({ from: date, to: selected.from });
        } else {
          setSelected({ from: selected?.from, to: date });
        }

        setSelectedBullet(Bullets.CUSTOM_RANGE);
      }
    },
    [selected]
  );

  const onCancelHandler = useCallback(
    () => {
      setSelected(undefined);
      setSelectedBullet(null);
      setDaysCount(undefined);
    },
    []
  );

  const onSubmitHandler = useCallback(
    (dateRange: DateRange | undefined) => {
      if (!dateRange) return;
      onSubmit(dateRange);
    },
    []
  );

  useEffect(() => {
    if (selected?.from && selected?.to) {
      setDaysCount(getDaysCountFromDates(selected.from, selected.to));
      return;
    }
    setDaysCount(0);
  }, [selected]);

  return (
    <Fragment>
      <style>{global}</style>
      <DatepickerWrapper>
        <Column gap={25}>
          <Row gap={50}>
            <Input
              type={"date"}
              onChange={(event) => onChangeFromDateHandler(new Date(event.target.value))}
              icon={<CalendarIcon/>}
              value={selected?.from ? getFormatDate(selected?.from) : ""}
              placeholder={t("choose_the_date")}
            />
            <Input
              type={"date"}
              onChange={(event) => onChangeToDateHandler(new Date(event.target.value))}
              icon={<CalendarIcon/>}
              value={selected?.to ? getFormatDate(selected?.to) : ""}
              placeholder={t("choose_the_date")}
            />
          </Row>
          <DayPicker
            mode="range"
            numberOfMonths={numberOfMonths}
            selected={selected}
            showOutsideDays={showOutsideDays}
            onSelect={onSetSelectedRangeHandler}
            modifiersStyles={{
              [InternalModifier.Selected]: selectedDayStyle,
              [InternalModifier.Outside]: outsideDayStyle,
              [InternalModifier.RangeStart]: rangeStartStyle,
              [InternalModifier.RangeMiddle]: rangeMiddleStyle,
              [InternalModifier.RangeEnd]: rangeEndStyle,
            }}
            components={{
              CaptionLabel: CaptionLabel,
              Day: Day,
              IconLeft: IconLeft,
              IconRight: IconRight,
            }}
            formatters={{
              formatWeekdayName
            }}
            styles={{
              head_cell: headCellStyles,
              cell: cellStyles,
              table: tableStyles,
            }}
          />
        </Column>
        <Separator/>
        <Column
          align={"center"}
          justify={"space-between"}
        >
          <Column align={"center"}>
            {bullets.map((bullet, index) => (
              <CalendarBullet
                key={index}
                isSelected={bullet.isSelected}
                onClick={bullet.callback}
              >
                {bullet.label}
              </CalendarBullet>
            ))}
            <SelectedDaysText>
              {t("selected_days")}: <SelectedDaysCount>{daysCount || 0}</SelectedDaysCount>
            </SelectedDaysText>
          </Column>

          <Row gap={15}>
            <ButtonLink
              onClick={onCancelHandler}
              disabled={!selected}
            >
              {t("cancel")}
            </ButtonLink>
            <Button
              color={"secondary"}
              disabled={!selected}
              onClick={() => onSubmitHandler(selected)}
            >
              {t("apply")}
            </Button>
          </Row>
        </Column>
      </DatepickerWrapper>
    </Fragment>
  )
});

export default RangeDatepicker;
