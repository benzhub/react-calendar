import Calendar from "../../components/calendar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <Calendar />
    </main>
  );
};

export default Home;
