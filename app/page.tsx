import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme";
import Swipe from "@/components/swipe";
import Experience from "@/components/experience";
import CtaBanner from "@/components/ctabanner";
import LatestWork from "@/components/latestwork";
import DSAwork from "@/components/dsawork";
import BlogsWork from "@/components/blogswork";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <main className=" w-full bg-[#f8f8f8]">
      <div className="md:h-screen flex flex-col gap-6 w-full md:py-[0.5rem] md:px-[3rem] p-[0.12rem]">
        <Header />
        <Hero />
      </div>

      {/* about me */}
      <section className="md:px-[3.8rem] md:pb-10 md:pt-24 pt-12 px-[0.8rem] bg-[#f8f8f8] ">
        <AboutMe />
      </section>

      {/* swipe */}
      <section className="w-full  md:px-[3.8rem] p-[0.12rem] pb-22 bg-[#f8f8f8] ">
        <Swipe />
      </section>

      {/* experience */}
      <section className="w-full md:px-[3.8rem] p-[0.12rem] md:h-[90vh] h-screen bg-[#f8f8f8] ">
        <Experience />
      </section>

      {/* cta banner */}
      <section className="w-full  md:px-[3.8rem] p-[0.12rem] py-10 bg-[#f8f8f8] ">
        <CtaBanner />
      </section>

      <div className="w-full md:px-[10vw] p-[0.12rem] md:pt-[8rem] pt-12">
        <LatestWork />
      </div>

      <div className="w-full md:px-[3.8rem] p-[0.12rem] md:pt-[8rem] pt-12">
        <DSAwork />
      </div>

      <div className="w-full md:px-[3.8rem] p-[0.12rem] md:pt-[8rem] pt-12 pb-10">
        <BlogsWork /> 
      </div>

      <div className="w-full h-full md:mt-24">
        <Footer />
      </div>

   </main>
  );
}
