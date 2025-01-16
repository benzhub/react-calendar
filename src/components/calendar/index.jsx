import Header from "./header";
import Selector from "./selector";
import styles from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <Header />
      <Selector />
    </div>
  );
};

export default Calendar;
