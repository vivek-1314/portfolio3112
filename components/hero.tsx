import { spawn } from "child_process";

export default function Hero() {
  return (
    <div className="flex-1 flex w-full gap-2">
        <div className="w-12 md:ml-2 ml-[0.09rem] flex flex-col items-center text-[#7B7B7B]">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ writingMode: "vertical-lr",
                  transform: "rotate(180deg)", 
                }}
              >
                Software Engineer
              </span>

              <div className="w-px flex-1 bg-[#7B7B7B] mt-4"></div>
        </div>
          
        <div className="flex h-full flex flex-col md:pl-15 pl-8 text-[#7B7B7B]">
            <div className="pt-12 flex gap-4">
              <div>
              <div className="flex items-start gap-1">
                <span className="text-lg font-bold leading-none">+</span>
                <span className="text-[3rem] font-bold leading-none font-slight">700</span>
              </div>
              <p className="mt-2 ml-5 text-[0.7rem]   tracking-widest">
                DSA Problems Solved
              </p>
              </div>

              <div>
                <div className="flex items-start gap-1">
                  <span className="text-lg font-bold leading-none">+</span>
                  <span className="text-[3rem] font-bold leading-none font-slight">15</span>
                </div>
                <p className="mt-2 ml-5 text-[0.7rem] tracking-widest">
                  Projects Completed
                </p>
              </div>
            </div>

            <span className="md:pt-20 pt-14 leading-none font-light text-[30vw] md:text-[9rem]">
              Hello
            </span>
            <span className="pl-3">— It's Vivek Gaindhar</span>

            <span className="mt-auto md:block hidden pl-3 leading-none font-light md:mb-0 mb-[6rem] text-[0.9rem]">
              scroll down
            </span>

            <div className="md:hidden block md:ml-auto md:h-80 w-[70vw] md:mt-2 mt-[3.2rem] m-2 rounded-xl overflow-hidden bg-[#7B7B7B]/20 ">
              <img src="/images/img.png" className="h-full ml-auto mr-auto " alt="" />
            </div>
        </div>

        <div className="md:block hidden md:ml-auto md:h-80 w-[96%] m-2  rounded-xl overflow-hidden mt-auto bg-[#7B7B7B]/20 ">
          <img src="/images/img.png" className="h-full ml-auto mr-auto " alt="" />
        </div>
    </div>
  );
}