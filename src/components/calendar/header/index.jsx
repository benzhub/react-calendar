import PropTypes from 'prop-types'
import styles from "./Header.module.css"

const Header = ({year, month, onPrevMonth, onNextMonth}) => {
  return (
    <div className={styles.header}>
      <button className={styles.button} onClick={onPrevMonth}>&#8249;</button>
      <div>{year}年{month}月</div>
      <button className={styles.button} onClick={onNextMonth}>&#8250;</button>
    </div>
  )
}

Header.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired
}

export default Header