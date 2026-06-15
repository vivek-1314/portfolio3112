'use client';

function GridCell({
  children,
  className,
  style,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}) {
  return (
    <div
      className={`relative font-neo group cursor-pointer ${className ?? ""}`}
      style={style}
      onClick={() => href && window.open(href, "_blank")}
    >
      {children}

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">

        {/* Dark tint */}
        <div className="absolute inset-0 rounded-2xl bg-black/20" />

        {/* Center circle with arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center
            scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
        </div>

        {/* Bottom spans */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <span className="text-white text-[0.9rem] font-medium  px-2 py-0.5 rounded-full">
            view
          </span>
          <span className="text-white text-[0.9rem] px-2 py-0.5 rounded-full">
            Project ↗
          </span>
        </div>

      </div>
    </div>
  );
}

export default function LatestWork() {
  return (
    <div className="latest-work text-[#222222] flex flex-col justify-center items-center h-full">

      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#222222]" />
        <span className="text-sm font-medium text-[#222222]">Portfolio</span>
      </div>

      <h2 className="text-3xl font-medium leading-tight text-[#222222] md:text-5xl">
        Explore My Dev Portfolio
      </h2>
      <h2 className="text-3xl mb-[5rem] font-medium leading-tight text-[#7b7b7b] md:text-5xl">
        Creative Solutions
      </h2>

      {/* ── MOBILE LAYOUT (below md) ── */}
      <div className="grid md:hidden w-full gap-4 grid-cols-2">

        {/* Row 1: Cell 1 | Cell 2 */}
        <GridCell className="overflow-hidden border border-[#222222] p-1 rounded-2xl flex items-center justify-center h-[10rem]">
          <img src="images/latest_work2.png" className="w-full h-full object-cover scale-110" alt="" />
        </GridCell>

        <GridCell className="overflow-hidden border border-[#222222] rounded-2xl flex items-center justify-center h-[10rem]">
          <img src="images/latest_work4.png" className="w-full h-full object-cover" alt="" />
        </GridCell>

        {/* Row 2: Video full width */}
        <GridCell className="col-span-2 bg-[#222222] rounded-[12px] overflow-hidden h-[16rem]">
          <video src="/videos/ss.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </GridCell>

        {/* Row 3: repo cards — NO GridCell wrapper (they have their own hover) */}
        <div
          className="relative bg-[#1a1a2e] overflow-hidden rounded-2xl flex flex-col justify-between h-[10rem] p-4 cursor-pointer group"
          onClick={() => window.open("https://github.com/yourusername/orion-py", "_blank")}
        >
          <img src="images/repo_bkg1.png" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out" alt="" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/60 to-transparent" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-white font-semibold text-xs leading-tight mb-1">orion-py</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3572A5] inline-block" />
              <span className="text-white/40 text-xs">Python</span>
            </div>
          </div>
        </div>

        <div
          className="relative bg-[#0f2027] overflow-hidden rounded-2xl flex flex-col justify-between h-[10rem] p-4 cursor-pointer group"
          onClick={() => window.open("https://github.com/yourusername/canvas-app", "_blank")}
        >
          <img src="images/repo_bkg2.png" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 ease-out" alt="" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2027] via-[#0f2027]/60 to-transparent" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-white font-semibold text-xs leading-tight mb-1">canvas-app</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f1e05a] inline-block" />
              <span className="text-white/40 text-xs">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Row 4: Cell 6 | Cell 7 */}
        <GridCell className="overflow-hidden rounded-2xl flex items-center justify-center h-[10rem]">
          <img src="images/latest_work3.png" className="w-full h-full object-cover" alt="" />
        </GridCell>

        <GridCell className="border border-[#222222] p-1 overflow-hidden rounded-2xl flex items-center justify-center h-[10rem]">
          <img src="images/latest_work5.png" className="w-full h-full object-cover" alt="" />
        </GridCell>

      </div>

      {/* ── DESKTOP LAYOUT (md and above) ── */}
      <div className="hidden md:grid w-full gap-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>

        {/* Cell 1 */}
        <GridCell
          className="bg-[#e2e2e2] overflow-hidden border border-[#222222] p-1 rounded-2xl flex items-center justify-center md:h-[18rem]"
          style={{ gridColumn: "1 / 3", gridRow: "1" }}
        >
          <img src="images/latest_work2.png" className="w-full h-full object-cover scale-110" alt="" />
        </GridCell>

        {/* Cell 2 */}
        <GridCell
          className="overflow-hidden border border-[#222222] rounded-2xl flex items-center justify-center md:h-[18rem]"
          style={{ gridColumn: "3 / 5", gridRow: "1" }}
        >
          <img src="images/latest_work4.png" className="w-full h-full object-cover rounded-2xl" alt="" />
        </GridCell>

        {/* Cell 3 — video */}
        <GridCell
          className="bg-[#222222] rounded-[12px] overflow-hidden md:h-full"
          style={{ gridColumn: "1 / 4", gridRow: "2 / 4" }}
        >
          <video src="/videos/ss.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </GridCell>

        {/* Cell 4 — orion-py (no GridCell) */}
        <div
          className="relative bg-[#1a1a2e] overflow-hidden rounded-2xl flex flex-col justify-between md:h-[16rem] p-4 md:p-5 cursor-pointer group"
          style={{ gridColumn: "4", gridRow: "2" }}
          onClick={() => window.open("https://github.com/yourusername/orion-py", "_blank")}
        >
          <img src="images/repo_bkg1.png" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out" alt="" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/60 to-transparent" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <svg className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-white font-semibold text-base leading-tight mb-1">orion-py</p>
            <p className="text-white/50 text-xs leading-snug">A well-documented Python server built for scale.</p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#3572A5] inline-block" />
              <span className="text-white/40 text-xs">Python</span>
            </div>
          </div>
        </div>

        {/* Cell 5 — canvas-app (no GridCell) */}
        <div
          className="relative bg-[#0f2027] overflow-hidden rounded-2xl flex flex-col justify-between md:h-[16rem] p-4 md:p-5 cursor-pointer group"
          style={{ gridColumn: "4", gridRow: "3" }}
          onClick={() => window.open("https://github.com/yourusername/canvas-app", "_blank")}
        >
          <img src="images/repo_bkg2.png" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 ease-out" alt="" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2027] via-[#0f2027]/60 to-transparent" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <svg className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-white font-semibold text-base leading-tight mb-1">canvas-app</p>
            <p className="text-white/50 text-xs leading-snug">A collaborative canvas app with real-time drawing tools.</p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#f1e05a] inline-block" />
              <span className="text-white/40 text-xs">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Cell 6 */}
        <GridCell
          className="bg-[#e2e2e2] overflow-hidden rounded-2xl flex items-center justify-center md:h-[16rem]"
          style={{ gridColumn: "1 / 3", gridRow: "4" }}
        >
          <img src="images/latest_work3.png" className="w-full h-full object-cover" alt="" />
        </GridCell>

        {/* Cell 7 */}
        <GridCell
          className="border border-[#222222] p-1 overflow-hidden rounded-2xl flex items-center justify-center md:h-[16rem]"
          style={{ gridColumn: "3 / 5", gridRow: "4" }}
        >
          <img src="images/latest_work5.png" className="w-full h-full object-cover" alt="" />
        </GridCell>

      </div>
    </div>
  );
}