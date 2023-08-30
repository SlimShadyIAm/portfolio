import Intro from '@/components/Intro';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div
      className={`container mx-auto h-full bg-zinc-900 pt-24 ${styles.grid}`}
    >
      <Intro />
    </div>
  );
};

export default Home;
