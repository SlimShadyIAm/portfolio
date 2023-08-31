import Intro from '@/components/Intro';
import styles from './styles.module.css';
import Education from '@/components/Education';

const Home = () => {
  return (
    <div
      className={`mx-auto flex w-full min-h-full flex-col gap-24 bg-slate-950 py-24 ${styles.grid}`}
    >
      <div className="container flex flex-col items-start gap-24">
        <Intro />
        <Education />
      </div>
    </div>
  );
};

export default Home;
