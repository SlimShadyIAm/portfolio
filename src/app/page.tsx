import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto pt-24">
      <div className="flex flex-col gap-6">
        <Image src='/pfp.jpg' className="rounded-full shadow-white/10" width={160} height={160} alt="Profile picture" />
        <div className="flex flex-col gap-4">
          <h1 className="text-zinc-200 font-semibold text-4xl">
            Aamir Farooq
          </h1>
          <p className="text-zinc-400">Nice to meet you! I&apos;m a frontend developer and UX designer who loves to build products that people want to use. Challenging design tasks are my bread and butter.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
