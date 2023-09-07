import { Metadata } from 'next';
import Intro from '@/components/sections/Intro';
import styles from './styles.module.css';
import Overview from '@/components/sections/Overview';
import Projects from '@/components/sections/Projects';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#020617' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

const Home = () => {
  return (
    <div
      className={`mx-auto flex min-h-full w-full flex-col gap-24 bg-slate-950 pb-12 pt-24 ${styles.grid}`}
    >
      <div className="container flex flex-col items-start">
        <Intro />
        <Overview />
        <Divider />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
