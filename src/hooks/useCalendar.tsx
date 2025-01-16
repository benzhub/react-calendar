import { useContext } from "react";
import CalendarContext from "../store/calendar/CalendarContext";

const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

export default useCalendar;
