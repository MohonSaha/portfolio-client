/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import MagicButton from "../MagicButton";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiGreensock, SiFramer } from "react-icons/si";

const iconMap = {
  AiFillHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  TbBrandNextjs,
  SiGreensock,
  SiFramer,
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  frontend,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  frontend?: any | undefined;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("spdmohonsaha@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(
              imgClassName,
              "object-cover object-center w-full h-full"
            )}
          />
        )}

        {id === 1 && (
          <div className="flex gap-1 lg:gap-5 flex-wrap">
            {frontend &&
              frontend.map((skill: any, index: any) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <div key={index + skill.name} className="overflow-hidden">
                    <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border py-2 px-10 transition duration-300 ease-in-out hover:border-alt hover:bg-alt dark:border-white/[0.1]">
                      <span className="text-white">
                        <IconComponent size={32} />
                      </span>
                      <p className="whitespace-nowrap">{skill.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {id === 6 && <BackgroundGradientAnimation />}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {/* {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full opacity-80"
          />
        )} */}

          {/* <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-50">
            <p>For</p>
          </div> */}

          {/* {frontend &&
            frontend.map((skill: any, index: any) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div key={index + skill.name} className="overflow-hidden">
                  <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border p-2 transition duration-300 ease-in-out hover:border-alt hover:bg-alt">
                    <span className="text-white">
                      <IconComponent size={32} />
                    </span>
                    <p className="whitespace-nowrap">{skill.name}</p>
                  </div>
                </div>
              );
            })} */}
        </div>
      </div>

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-32 flex flex-col px-5 p-5 lg:p-8 z-10"
        )}
      >
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3]">
          {description}
        </div>

        <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-50">
          {title}
        </div>

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-2 lg:gap-5">
              {["React", "Next", "Tailwind", "Next"].map((item, i) => (
                <span
                  key={i}
                  className="lg:py-3 lg:px-3 py-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-3 lg:px-3 py-2 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-2 lg:gap-5">
              {["React", "Next", "React", "Next"].map((item, i) => (
                <span
                  key={i}
                  className="lg:py-3 lg:px-3 py-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-3 lg:px-3 py-2 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
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

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
