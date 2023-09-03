import Intro from '@/components/sections/Intro';
import styles from './styles.module.css';
import Overview from '@/components/sections/Overview';
import Projects from '@/components/sections/Projects';
import Divider from '@/components/Divider';

const Home = () => {
  return (
    <div
      className={`mx-auto flex min-h-full w-full flex-col gap-24 bg-slate-950 py-24 ${styles.grid}`}
    >
      <div className="container flex flex-col items-start">
        <Intro />
        <Overview />
        <Divider />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
