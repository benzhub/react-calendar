import { useState } from "react";
import Calendar from "../../components/calendar";
import styles from "./Home.module.css";

const Home = () => {
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null
  });

  return (
    <div className={styles.home}>
      {/* go to Home.module.css to show the date display */}
      <div className={styles.display}>
        <div className={styles.dateRange}>
          <span>{selectedRange.startDate?.format("YYYY-MM-DD") ?? ""}</span>
          <span>{selectedRange.endDate?.format("YYYY-MM-DD") ?? ""}</span>
        </div>
      </div>
      <Calendar onDateRangeChange={setSelectedRange} />
    </div>
  );
};

export default Home;
