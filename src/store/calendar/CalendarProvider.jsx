import { useState } from "react";
import PropTypes from "prop-types";
import CalendarContext from "./CalendarContext";

const CalendarProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateSelect = (dateData) => {
    if (!startDate && !endDate) {
      return setStartDate(dateData);
    }
  
    if (startDate && !endDate) {
      return dateData < startDate ? setStartDate(dateData) || setEndDate(startDate) : setEndDate(dateData);
    }
  
    if (startDate && endDate) {
      return dateData < endDate ? setStartDate(dateData) : setEndDate(dateData);
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
};

export default CalendarProvider;
