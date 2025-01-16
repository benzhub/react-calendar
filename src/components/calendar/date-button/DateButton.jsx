import classNames from "classnames";
import PropTypes from "prop-types";
import useCalendar from "../../../hooks/useCalendar";
import styles from "./DateButton.module.css";

const DateButton = ({ dateData, isCurrentMonth, isToday=false }) => {
  const { startDate, endDate, handleDateSelect } = useCalendar();

  const isSelected = dateData && (
    (startDate && dateData.isSame(startDate, 'day')) ||
    (endDate && dateData.isSame(endDate, 'day')) ||
    (startDate && endDate && dateData.isBetween(startDate, endDate))
  );

  return (
    <button
      className={classNames(styles.dateButton, {
        [styles.otherMonth]: !isCurrentMonth,
        [styles.today]: isToday,
        [styles.selected]: isSelected,
      })}
      onClick={() => handleDateSelect(dateData)}
    >
      {dateData.format("D")}日
    </button>
  );
};

DateButton.propTypes = {
  dateData: PropTypes.object.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  isToday: PropTypes.bool,
};

export default DateButton;
