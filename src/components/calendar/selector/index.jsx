import moment from "moment";
import styles from "./Selector.module.css";
import DateButton from "../date-button/DateButton";
import PropTypes from "prop-types";

const Selector = ({ currentDate }) => {
  const firstDay = moment(currentDate).startOf("month");
  const startDay = firstDay.clone().startOf("week");
  const daysInMonth = [];

  for (let i = 0; i < 35; i++) {
    const day = startDay.clone().add(i, "days");
    daysInMonth.push({
      date: day,
      isCurrentMonth: day.month() === currentDate.month(),
    });
  }

  return (
    <div className={styles.selector}>
      {daysInMonth.map(({ date, isCurrentMonth }) => {
        const isToday = date.isSame(moment(), "day");
        return (
          <DateButton
            key={date.format("YYYY-MM-DD")}
            date={date.format("D")}
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
          />
        );
      })}
    </div>
  );
};

Selector.propTypes = {
  currentDate: PropTypes.object.isRequired, // Moment object
};

export default Selector;
