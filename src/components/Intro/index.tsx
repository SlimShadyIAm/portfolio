import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';

const Intro = () => {
  return (
    <div className="flex flex-col gap-6">
      {/*
      <div className="shadow-zinc-700/25 self-start rounded-full border-2 border-zinc-700/25 bg-zinc-800/50 p-2 shadow-sm">
      */}

      <div className="self-start rounded-full p-2 pretty-ring">
        <Image
          src="/images/pfp.jpg"
          className="rounded-full "
          width={160}
          height={160}
          alt="Profile picture"
        />
      </div>
      <div className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-4xl font-semibold text-zinc-400 ">
          Hi, I&apos;m <span className="text-zinc-200">Aamir Farooq</span>.
          Designer. Developer.
          {/*
        // <h1 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 blur-md z-negative-1">dreamer</h1>.
        */}
          <div className="relative">
            <h2 className="z-10 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text leading-tight text-transparent">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
            <h2 className="z-negative-1 absolute top-0 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text leading-tight text-transparent blur-md">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
          </div>
        </h1>
        <p className="text-zinc-400">
          Nice to meet you! I&apos;m an enthusiastic frontend developer and UX
          designer who is passionate about people and building products they
          want to use. Challenging design tasks are my bread and butter.
        </p>
      </div>
      <div className="flex gap-6">
        <SocialButton icon={<Github />} />
        <SocialButton icon={<Twitter />} />
        <SocialButton icon={<Linkedin />} />
        <SocialButton icon={<Mail />} />
      </div>
    </div>
  );
};

export default Intro;
