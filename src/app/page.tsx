import Intro from '@/components/Intro';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={`mx-auto h-full w-full bg-slate-900 pt-24 ${styles.grid}`}>
      <div className="container">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
