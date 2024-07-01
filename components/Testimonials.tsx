import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div className="py-28" id="projects">
      <h1 className="heading">
        Notable awards and <span className="text-purple">certificates</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-12 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
