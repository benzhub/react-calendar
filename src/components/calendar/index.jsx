import moment from "moment";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import CalendarProvider from "../../store/calendar/CalendarProvider";
import styles from "./Calendar.module.css";
import Header from "./header";
import Selector from "./selector";

const Calendar = ({ onDateRangeChange }) => {
  const [date, setDate] = useState(moment());

  const handleDateRangeChange = useCallback(({ startDate, endDate }) => {
    onDateRangeChange?.({ startDate, endDate });
  }, [onDateRangeChange]);

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setDate(date.clone().add(1, 'month'));
  };

  return (
    <CalendarProvider onDateRangeChange={handleDateRangeChange}>
      <div className={styles.calendar}>
        <Header 
          year={date.format('YYYY')}
          month={date.format('M')}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        <Selector currentDate={date} />
      </div>
    </CalendarProvider>
  );
};

Calendar.propTypes = {
  onDateRangeChange: PropTypes.func,
};

export default Calendar;
