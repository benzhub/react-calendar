import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CalendarContext from "./CalendarContext";

const CalendarProvider = ({ children, onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    onDateRangeChange?.({ startDate, endDate });
  }, [startDate, endDate, onDateRangeChange]);

  const handleDateSelect = (dateData) => {
    if (!startDate && !endDate) {
      return setStartDate(dateData);
    }

    if (startDate && !endDate) {
      return dateData < startDate
        ? setStartDate(dateData) || setEndDate(startDate)
        : setEndDate(dateData);
    }

    if (startDate && endDate) {
      setEndDate(null);
      return setStartDate(dateData);
    }
  };

  return (
    <CalendarContext.Provider value={{ startDate, endDate, handleDateSelect }}>
      {children}
    </CalendarContext.Provider>
  );
};

CalendarProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onDateRangeChange: PropTypes.func,
};

export default CalendarProvider;
