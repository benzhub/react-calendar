import styles from "./DateButton.module.css";
import PropTypes from "prop-types";

const DateButton = ({ value = "" }) => {
  return <button className={styles.datebtn}>{value}日</button>;
};

export default DateButton;

DateButton.propTypes = {
  value: PropTypes.string.isRequired,
};
