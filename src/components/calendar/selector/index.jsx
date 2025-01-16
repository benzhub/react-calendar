import styles from "./Selector.module.css";
import DateButton from "../date-button/DateButton";

const Selector = () => {
  return (
    <div className={styles.selector}>
      {Array.from({ length: 35 }, (_, index) => (
        <DateButton key={`date-${index + 1}`} value={index + 1} />
      ))}
    </div>
  );
};

export default Selector;
