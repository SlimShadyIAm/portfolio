import Intro from '@/components/Intro';
import styles from './styles.module.css';
import Education from '@/components/Education';

const Home = () => {
  return (
    <div className={`mx-auto h-full w-full bg-slate-950 ${styles.grid}`}>
      <div className="container flex flex-col gap-24 py-24">
        <Intro />
        <Education />
      </div>
    </div>
  );
};

export default Home;
