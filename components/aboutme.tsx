export default function AboutMe() {
    return (
        <div className="flex md:flex-row flex-col justify-between gap-8 h-full">
            <div className="flex-1">
                <span className="text-[2rem] uppercase tracking-widest text-[#222222]">
                    About Me
                </span>
                <p className="mt-4 text-[#7B7B7B] font-neo text-[0.87rem] ">
                    I'm a software engineer who enjoys building things and solving problems. I've worked extensively on DSA and shipped projects across different domains — which has given me a solid grip on both fundamentals and practical development.
                    I work across multiple languages and frameworks, and I'm always picking up new tools when the project calls for it.
                </p>
            </div>

            <div className="md:max-w-[20vw] w-full flex flex-col gap-4">

                <span className="text-[#222222] font-neo text-[2rem] leading-none">3112</span>

                <p className="text-[#7B7B7B] font-neo text-[0.87rem] text-justify">
                    The best way to learn something is to build it and break it first.
                </p>

                {/* <img className="rounded-lg w-full bg-[#A2A2A2]" src="" alt="" /> */}
                <div className="rounded-xl overflow-hidden w-full aspect-square bg-[#A2A2A2]/50">
                <img src="images/imm.jpg" alt="" />
                </div>
            </div>

            <div className="flex-1 text-[#7B7B7B] font-neo text-[0.87rem] ">
                <div className="rounded-lg w-40 overflow-hidden aspect-square ml-auto mr-auto bg-[#F1E8DB]/20 backdrop-blur-xl border border-[#F1E8DB]/30 shadow-[0_8px_40px_rgba(241,232,219,0.25),0_2px_8px_rgba(241,232,219,0.15)]">
                    <img src="images/imm2.jpg" className=" rounded-xl bg-cover" alt="" />
                </div>
                <p className="max-w-[20rem] ml-auto mr-auto mt-4">Third year B.Tech, building things across systems, AI, and the web.</p>
                <p className="max-w-[20rem] ml-auto mr-auto mt-4">I build things to understand them. Most of what I know came from projects that didn't work the first time.</p>
            </div>
        </div>
    );
}