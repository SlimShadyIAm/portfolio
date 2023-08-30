import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import SocialButton from "./SocialButton";

const Intro = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-full p-2 bg-zinc-800/50 self-start border border-zinc-700/25 border-2 shadow-zinc--700/25 shadow-sm">
        <Image
          src="/pfp.jpg"
          className="rounded-full "
          width={160}
          height={160}
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-zinc-400 font-semibold text-4xl ">
          Hi, I&apos;m <span className="text-zinc-200">Aamir Farooq</span>.
          Designer. Developer.
          {/*
        // <h1 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 blur-md z-negative-1">dreamer</h1>.
        */}
          <div className="relative">
            <h2 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 z-10">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
            <h2 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 absolute top-0 blur-md z-negative-1">
              <span className="font-extrabold">Dreamer.</span>
            </h2>
          </div>
        </h1>
        <p className="text-zinc-400">
          Nice to meet you! I&apos;m an enthusiastic frontend developer and UX
          designer who is passionate about building products that people want to
          use. Challenging design tasks are my bread and butter.
        </p>
      </div>
      <div className="flex gap-8">
        <SocialButton>
          <Github />
        </SocialButton>
        <SocialButton>
          <Twitter />
        </SocialButton>
        <SocialButton>
          <Linkedin />
        </SocialButton>
        <SocialButton>
          <Mail />
        </SocialButton>
      </div>
    </div>
  );
};

export default Intro;
