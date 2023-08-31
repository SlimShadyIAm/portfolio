import Intro from '@/components/Intro';
import styles from './styles.module.css';
import Overview from '@/components/Overview';

const Home = () => {
  return (
    <div
      className={`mx-auto flex min-h-full w-full flex-col gap-24 bg-slate-950 py-24 ${styles.grid}`}
    >
      <div className="container flex flex-col items-start gap-24">
        <Intro />
        <Overview />
      </div>
    </div>
  );
};

export default Home;
