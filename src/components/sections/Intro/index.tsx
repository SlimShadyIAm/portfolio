import { CakeSlice, Github, Linkedin, Mail, Map, Twitter } from 'lucide-react';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';
import IntroBadge from '@/components/IntroBadge';

const Intro = () => {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-24">
      <div className="relative -ml-4 self-start md:ml-0">
        <div className="flex items-center justify-center rounded-full p-2">
          <div className="absolute top-0 z-0 mt-[16px] h-[120px] w-[120px] bg-indigo-500 blur-[100px]" />
          <Image
            src="/images/pfp-blur.png"
            className="z-10 rounded-full"
            width={160}
            height={160}
            alt="Profile picture"
          />
        </div>
      </div>
      <div className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-3xl font-semibold text-slate-400 md:text-4xl ">
          Hi, I&apos;m <span className="text-slate-200">Aamir Farooq</span>.
          Designer. Developer.
          <div className="relative">
            <h2 className="z-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-tight text-transparent">
              <span className="font-extrabold">Achiever.</span>
            </h2>
            <h2 className="z-negative-1 absolute top-0 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text leading-tight text-transparent blur-md">
              <span className="font-extrabold">Achiever.</span>
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
        <IntroBadge icon={CakeSlice} text="23 years old" />
        <IntroBadge icon={Map} text="Copenhagen, Denmark" />
      </div>
      <div className="flex w-full justify-center gap-6 md:justify-start">
        <SocialButton icon={Github} url="https://github.com/SlimShadyIAm" />
        <SocialButton icon={Twitter} url="https://twitter.com/slimshadydev" />
        <SocialButton
          icon={Linkedin}
          url="https://www.linkedin.com/in/farooqaamir/"
        />
        <SocialButton icon={Mail} url="mailto:me@aamirfarooq.dev" />
      </div>
    </div>
  );
};

export default Intro;
