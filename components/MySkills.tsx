"use client";

import { data } from "@/data/skills";
import { GlobeDemo } from "./ui/GridGlobe";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { BackgroundGradientAnimation } from "./ui/GradiantBg";

const MySkills = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("spdmohonsaha@gmail.com");
    setCopied(true);
  };

  return (
    <div className="container mx-auto p-4 py-28" id="skills">
      <h1 className="heading">
        Technical and soft skills{" "}
        <span className="text-purple">excellence</span>
      </h1>

      <div className="grid mt-12 grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto">
        <div
          className=" text-white p-4 rounded lg:col-span-3 md:col-span-3"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="flex-grow">
            <h2 className="md:text-2xl text-xl font-bold">Front-End Skills</h2>
            <p className="mt-1">Technologies for front-end development</p>
          </div>
          <div className="p-4 mb-4 rounded grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.frontend.map((skill: any, index: any) => {
                // const IconComponent = iconMap[skill.icon];
                return (
                  <div key={index + skill.name} className="overflow-hidden">
                    <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border py-2 px-10 transition duration-300 ease-in-out hover:border-alt hover:bg-alt dark:border-white/[0.1]">
                      <span className="text-white">
                        <skill.icon size={32} />
                      </span>
                      <p className="whitespace-nowrap">{skill.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className=" text-white p-4 flex flex-col lg:col-span-2 md:col-span-3 relative overflow-hidden rounded-2xl"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <GlobeDemo />
          <div className="flex-grow z-20 ">
            <h2 className="md:text-2xl text-xl font-bold">
              Mastering Essential Soft Skills
            </h2>
            <p className="mt-1">
              Develop communication, time management, teamwork, problem-solving,
              and adaptability skills. These essential soft skills are crucial
              for excelling in personal and professional environments, ensuring
              effective collaboration and productivity.
            </p>
          </div>
        </div>

        <div
          className="text-white p-4 rounded-2xl lg:col-span-2 md:col-span-3 overflow-hidden  relative"
          style={{
            background: "none",
          }}
        >
          <BackgroundGradientAnimation className="absolute top-0 left-0 w-full h-full -z-40" />
          <div className="rounded w-[80%] h-full">
            <div className="relative flex flex-col items-center">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={200}
                  width={400}
                />
              </div>

              <div className="">
                <h2 className="md:text-2xl text-xl font-bold text-center">
                  Do you want to start a project together?
                </h2>
                <p className="mt-1 text-center">
                  Reach out for inquiries, collaborations, or to discuss
                  potential projects.
                </p>
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          </div>
        </div>

        <div
          className=" text-white p-4 rounded lg:col-span-3 md:col-span-3 "
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="flex-grow">
            <h2 className="md:text-2xl text-xl font-bold">Back-End Skills</h2>
            <p className="mt-1">Technologies for back-end engineering</p>
          </div>

          <div className=" p-4 mb-4 rounded grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.backend.map((skill: any, index: any) => {
                // const IconComponent = iconMap[skill.icon];
                return (
                  <div key={index + skill.name} className="overflow-hidden">
                    <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border py-2 px-10 transition duration-300 ease-in-out hover:border-alt hover:bg-alt dark:border-white/[0.1]">
                      <span className="text-white">
                        <skill.icon size={32} />
                      </span>
                      <p className="whitespace-nowrap">{skill.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
