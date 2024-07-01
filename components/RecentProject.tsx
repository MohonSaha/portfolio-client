/* eslint-disable @next/next/no-img-element */
"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import bg from "@/public/bg.png";
import { FaLocationArrow } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const RecentProject = () => {
  return (
    <div className="py-28" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-10">
        {projects.map(({ id, title, iconLists, img, link, des }) => (
          <div
            className="sm:h-[28rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] sm:w-[570px] w-[80vw] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover group-hover/card:shadow-xl z-10 object-top transform -skew-x-3 skew-y-2 rounded-lg"
                    alt="thumbnail"
                  />
                </CardItem>

                <CardItem
                  translateZ="50"
                  className=" mt-5 text-neutral-600 dark:text-white font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </CardItem>

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

                  <CardItem
                    className="flex justify-center items-center"
                    as={Link}
                    href={link}
                  >
                    <CardItem className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </CardItem>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
