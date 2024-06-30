import Hero from "@/components/Hero";
import MyBlogs from "@/components/MyBlogs";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProject from "@/components/RecentProject";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Testimonials />
        <MyBlogs />
      </div>
    </main>
  );
};

export default Home;
