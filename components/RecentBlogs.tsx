/* eslint-disable @next/next/no-img-element */
"use client";
import { blogs, projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import bg from "@/public/bg.png";
import { FaLocationArrow } from "react-icons/fa6";

const RecentBlogs = () => {
  return (
    <div className="py-36" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-10">
        {blogs.map(({ id, title, iconLists, img, link, des }) => (
          <div
            className="sm:h-[28rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title="visit" href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] mb-10 sm:h-[30vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute top-0 rounded-2xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
