import { useState } from "react";
import moment from "moment";
import Header from "./header";
import Selector from "./selector";
import styles from "./Calendar.module.css";
import CalendarProvider from "../../store/calendar/CalendarProvider";

const Calendar = () => {
  const [date, setDate] = useState(moment());

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setDate(date.clone().add(1, 'month'));
  };

  return (
    <CalendarProvider>
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

export default Calendar;
