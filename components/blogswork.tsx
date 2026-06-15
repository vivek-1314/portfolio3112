export default function BlogsWork() {
    const blogs = [
        {
            title: "Engineering a LangGraph UI Pipeline",
            excerpt: "Building a production-grade agentic pipeline for frontend code generation — taking a design brief to structured React/Next.js components.",
            tag: "LangGraph · AI",
            date: "Mar 17, 2026",
            claps: 5,
            link: "https://medium.com/@vivek1314gurjar/engineering-a-langgraph-ui-pipeline-705709f771f5",
            thumb: "bg-[#EEEDFE]",
            tagStyle: "bg-[#CECBF6] text-[#3C3489]",
            deco1: "bg-[#AFA9EC]",
            deco2: "bg-[#7F77DD]",
        },
        {
            title: "How I Built a Real-Time Collaborative Canvas Architecture From Scratch",
            excerpt: "Skipping third-party providers to build a clean pipeline with WebSockets, Redis, and Edge routing for a seamless multi-user canvas.",
            tag: "WebSockets · Redis",
            date: "Jun 8, 2026",
            claps: 31,
            link: "https://medium.com/@vivek1314gurjar/how-i-built-a-real-time-collaborative-canvas-architecture-from-scratch-d12decb26f40",
            thumb: "bg-[#E1F5EE]",
            tagStyle: "bg-[#9FE1CB] text-[#085041]",
            deco1: "bg-[#5DCAA5]",
            deco2: "bg-[#1D9E75]",
        },
        {
            title: `Why Your "AI Assistant" is a V8 Engine Strapped to a Skateboard`,
            excerpt: "We've been sold the dream of a digital assistant that truly knows you — your work, your obsessions, your meetings. The reality is a different story.",
            tag: "AI · Opinion",
            date: "Dec 20, 2025",
            claps: 2,
            link: "https://medium.com/@vivek1314gurjar/why-your-ai-assistant-is-a-v8-engine-strapped-to-a-skateboard-e2aed60eed5f",
            thumb: "bg-[#FAEEDA]",
            tagStyle: "bg-[#FAC775] text-[#633806]",
            deco1: "bg-[#EF9F27]",
            deco2: "bg-[#FAC775]",
        },
    ];

    return (
        <div className="w-full md:min-h-screen h-full flex flex-col items-center justify-center px-4 py-16">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#222222]" />
                <span className="text-sm font-medium text-[#222222] font-neo">Blogs</span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-[#222222] md:text-5xl font-neo">
                Explore Blogs
            </h2>
            <h2 className="text-3xl mb-[5rem] font-light leading-tight text-[#888780] md:text-5xl font-neo">
                Creative writings
            </h2>

            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-15 gap-4 w-full">
                {blogs.map((blog, i) => (
                    <a  
                        key={i}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-[#e5e5e5] rounded-2xl overflow-hidden flex flex-col hover:border-[#aaa] transition-colors duration-200 bg-white no-underline"
                    >
                        {/* Thumbnail */}
                        <div className={`relative w-full h-40 ${blog.thumb} flex items-end p-4 overflow-hidden rounded-b-xl`}>
                            <div className={`absolute top-[-3rem] right-[-2rem] w-44 h-44 rounded-full opacity-25 ${blog.deco1}`} />
                            <div className={`absolute bottom-[-1rem] left-6 w-20 h-20 rounded-full opacity-25 ${blog.deco2}`} />
                            <span className={`relative z-10 text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full font-neo-bold ${blog.tagStyle}`}>
                                {blog.tag}
                            </span>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 gap-2 p-5">
                            <p className="text-[15px] font-medium leading-snug text-[#1a1a1a] font-neo m-0">
                                {blog.title}
                            </p>
                            <p className="text-[13px] text-[#666] leading-relaxed font-neo flex-1 m-0">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-[12px] text-[#999] mt-1 font-neo">
                                <span>{blog.date}</span>
                                <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                                <span>3 min read</span>
                                <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                                <span className="bg-[#f5f5f5] px-2 py-0.5 rounded text-[11px]">{blog.claps} claps</span>
                                <span className="ml-auto opacity-40">↗</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}