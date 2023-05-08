import Logo from './components/Logo';
import styles from './styles/home-page/homePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Logo styles={styles} />
      </header>
    </main>
  );
};

export default HomePage;
