import { FC, Fragment, memo, useState } from "react";
import { CSSObject } from "styled-components";
import { DateFormatter, DayPicker, InternalModifier } from 'react-day-picker';
import Caption from "./components/caption/caption";
import Day from "./components/day/day";
import { format } from "date-fns";
import { LAVENDER_WEB, PLUMP_PURPLE, RAISIN_BLACK, WHITE } from "@/ui-kit/constants/colors";

import 'react-day-picker/dist/style.css';


const selectedDayStyle: CSSObject = {
  background: PLUMP_PURPLE,
  color: WHITE,
  outline: "none",
};

const outsideDayStyle: CSSObject = {
  opacity: .3,
};

const rangeStartEndStyle: CSSObject = {
  background: PLUMP_PURPLE,
  color: WHITE,
};

const rangeMiddleStyle: CSSObject = {
  background: LAVENDER_WEB,
  color: RAISIN_BLACK,
};

const tableStyles: CSSObject = {
  borderCollapse: 'inherit',
  borderSpacing: '0 15px',
};

const headCellStyles: CSSObject = {
  fontFamily: "Menlo",
  fontSize: 10,
};

const cellStyles: CSSObject = {
  width: "auto",
  height: "auto",
};

const SingleDatepicker: FC = memo((): JSX.Element => {
  const [selected, setSelected] = useState<Date>();

  const formatWeekdayName: DateFormatter = (date, options) => {
    return (
      <Fragment>
        {format(date, 'iii', { locale: options?.locale })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <DayPicker
        mode="single"
        selected={selected}
        showOutsideDays
        onSelect={setSelected}
        modifiersStyles={{
          [InternalModifier.Selected]: selectedDayStyle,
          [InternalModifier.Outside]: outsideDayStyle,
          [InternalModifier.RangeStart]: rangeStartEndStyle,
          [InternalModifier.RangeMiddle]: rangeMiddleStyle,
          [InternalModifier.RangeEnd]: rangeStartEndStyle,
        }}
        components={{
          Caption: Caption,
          Day: Day,
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
    </Fragment>
  )
});

export default SingleDatepicker;
