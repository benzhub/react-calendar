import styles from "./Header.module.css"
import PropTypes from 'prop-types'

const Header = ({year="", month=""}) => {
  return (
    <div className={styles.header}>
      <button className={styles.btn}>&#8249;</button>
      <div>{year}年{month}月</div>
      <button className={styles.btn}>&#8250;</button>
    </div>
  )
}

Header.propTypes = {
  year: PropTypes.string,
  month: PropTypes.string
}

export default Header