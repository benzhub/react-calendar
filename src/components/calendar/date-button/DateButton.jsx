import styles from "./DateButton.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const DateButton = ({ date, isCurrentMonth, isToday=false }) => {
  return (
    <button
      className={classNames(styles.dateButton, {
        [styles.otherMonth]: !isCurrentMonth,
        [styles.today]: isToday,
      })}
    >
      {date}日
    </button>
  );
};

DateButton.propTypes = {
  date: PropTypes.string.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  isToday: PropTypes.bool,
};

export default DateButton;
