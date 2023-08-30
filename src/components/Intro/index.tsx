import { CakeSlice, Github, Linkedin, Mail, Map, Twitter } from 'lucide-react';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';
import IntroBadge from '../IntroBadge';

const Intro = () => {
  return (
    <div className="flex flex-col gap-6">
      {/*
      <div className="shadow-slate-700/25 self-start rounded-full border-2 border-slate-700/25 bg-slate-800/50 p-2 shadow-sm">
      */}

      <div className="pretty-ring self-start rounded-full p-2">
        <Image
          src="/images/pfp.jpg"
          className="rounded-full "
          width={160}
          height={160}
          alt="Profile picture"
        />
      </div>
      <div className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-4xl font-semibold text-slate-400 ">
          Hi, I&apos;m <span className="text-slate-200">Aamir Farooq</span>.
          Designer. Developer.
          {/*
        // <h1 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 blur-md z-negative-1">dreamer</h1>.
        */}
          <div className="relative">
            <h2 className="z-10 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text leading-tight text-transparent">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
            <h2 className="z-negative-1 absolute top-0 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text leading-tight text-transparent blur-lg">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
          </div>
        </h1>
        <p className="text-slate-400">
          Nice to meet you! I&apos;m an enthusiastic frontend developer and UX
          designer who is passionate about people and building products they
          want to use. Challenging design tasks are my bread and butter.
        </p>
      </div>
      <div className="mb-[-8px] flex gap-3">
        <IntroBadge icon={CakeSlice} text="23" />
        <IntroBadge icon={Map} text="Copenhagen, Denmark" />
      </div>
      <div className="flex gap-6">
        <SocialButton icon={Github} />
        <SocialButton icon={Twitter} />
        <SocialButton icon={Linkedin} />
        <SocialButton icon={Mail} />
      </div>
    </div>
  );
};

export default Intro;
