import { data } from "@/data/skills";
import { GlobeDemo } from "./ui/GridGlobe";

const MySkills = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto4">
        <div
          className=" text-white p-4 rounded lg:col-span-3 md:col-span-3"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
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
          <div className="flex-grow">
            <h2 className="text-xl font-bold">The Power of Communication</h2>
            <p>
              Understand the impact of effective communication in our lives.
            </p>
          </div>
        </div>

        <div
          className=" text-white p-4 rounded flex flex-col lg:col-span-2 md:col-span-3 relative overflow-hidden h-48"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className=" h-32 mb-4 rounded">
            <GlobeDemo />
          </div>
          <div className="flex-grow z-20">
            <h2 className="text-xl font-bold">The Pursuit of Knowledge</h2>
            <p>Join the quest for understanding and enlightenment.</p>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded flex flex-col lg:col-span-2 md:col-span-3">
          <div className="bg-gray-700 h-32 mb-4 rounded"></div>
          <div className="flex-grow">
            <h2 className="text-xl font-bold">The Joy of Creation</h2>
            <p>Experience the thrill of bringing ideas to life.</p>
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
          <div className="flex-grow">
            <h2 className="text-xl font-bold">The Power of Communication</h2>
            <p>
              Understand the impact of effective communication in our lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
