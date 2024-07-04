import { ContantMe } from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyBlogs from "@/components/MyBlogs";
import MySkills from "@/components/MySkills";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProject from "@/components/RecentProject";
import { Test } from "@/components/Test";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProject />
        <MySkills />
        <Testimonials />
        <MyBlogs />
        <ContantMe />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
