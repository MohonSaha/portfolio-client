// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TypewriterEffect } from "./TypewriterEffect";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GlobeDemo } from "./ui/GridGlobe";
import { RiFolderDownloadFill } from "react-icons/ri";

const Hero = () => {
  const words = [
    {
      text: "Hi!",
    },
    {
      text: "I'm",
    },
    {
      text: "Mohon,",
    },
    {
      text: "a",
    },
    {
      text: "Full-Stack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
    },
    {
      text: "based",
    },
    {
      text: "in ",
    },
    {
      text: "Bangladesh.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* <div className="relative top-0 -bottom-16">
        <GlobeDemo />
      </div> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[20px] md:text-4xl lg:text-5xl"
          />

          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p> */}

          <TypewriterEffect
            words={words}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          />

          <div className="flex gap-5 jus">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border dark:border-white/[0.1] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium dark:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-5 text-sm relative bg-black-100">
              <span>My Resume</span>
              <span className="ml-3">
                <RiFolderDownloadFill />
              </span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>

            {/* <button className="inline-flex animate-shimmer items-center justify-center rounded-lg border dark:border-white/[0.1] bg-[linear-gradient(110deg,#020617,45%,#2B3749,55%,#020617)]  px-6 font-medium dark:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-5 text-sm relative bg-slate-950 h-12"></button> */}

            <a href="#about">
              <MagicButton
                title="Show My Works"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
