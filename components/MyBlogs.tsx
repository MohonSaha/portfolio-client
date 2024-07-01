/* eslint-disable @next/next/no-img-element */
"use client";
import { blogs } from "@/data";
import { Button } from "./ui/MovingBoders";
import { PinContainer } from "./ui/3d-pin";

const MyBlogs = () => {
  return (
    <div className="py-28" id="blogs">
      <h1 className="heading">
        Creative vision &{" "}
        <span className="text-purple">timeworthy articles</span>
      </h1>

      <div className="w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-10">
        {blogs.map(({ id, title, iconLists, img, link, des }) => (
          //   <Button
          //     duration={Math.floor(Math.random() * 10000 + 10000)}
          //     key={id}
          //     borderRadius="1.75rem"
          //     className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          //     style={{
          //       background: "rgb(4,7,29)",
          //       backgroundColor:
          //         "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          //       // add this border radius to make it more rounded so that the moving border is more realistic
          //       borderRadius: `calc(1.75rem* 0.96)`,
          //     }}
          //   >
          //     <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
          //       <img
          //         src={img}
          //         alt="thumbnail"
          //         className="lg:w-40 md:w- w-16 transform -skew-x-3 skew-y-2 rounded-sm"
          //       />
          //       <div className="lg:ms-5">
          //         <h1 className="text-start text-xl md:text-2xl font-bold">
          //           {title}
          //         </h1>
          //         <p className="text-start text-white-100 mt-3 font-semibold">
          //           {des}
          //         </p>
          //       </div>
          //     </div>
          //   </Button>

          <PinContainer key={id} title="visit" href={link} className="w-full">
            <Button
              duration={Math.floor(Math.random() * 10000 + 10000)}
              key={id}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={img}
                  alt="thumbnail"
                  className="lg:w-40 md:w- w-16 transform -skew-x-3 skew-y-2 rounded-sm"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {des}
                  </p>
                </div>
              </div>
            </Button>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
