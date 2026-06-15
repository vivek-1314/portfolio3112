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
      className={`relative group font-neo cursor-pointer ${className ?? ""}`}
      style={style}
      onClick={() => href && window.open(href, "_blank")}
    >
      {children}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
            <svg className="w-5 h-5 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <span className="text-white text-[11px] font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">View</span>
          <span className="text-white text-[11px] font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">Open ↗</span>
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
        <span className="text-sm font-medium text-[#222222]">DSA</span>
      </div>
      <h2 className="text-3xl font-medium leading-tight text-[#222222] md:text-5xl">
        Explore My DSA Journey
      </h2>
      <h2 className="text-3xl mb-[5rem] font-medium leading-tight text-[#222222] md:text-5xl">
        Creative Algorithms
      </h2>

      <div className="grid w-full h-full gap-4 grid-cols-2 md:grid-cols-3 md:grid-rows-3">

        {/* Cell 1 — LeetCode Stats */}
        <GridCell
          href="https://leetcode.com/u/vivek_-vivek/"
          className="col-start-1 row-start-1 relative overflow-hidden rounded-2xl md:h-[16rem] h-[10rem] bg-[#1a1a1a]"
        >
          {/* Decorative circles — blog card style */}
          <div className="absolute top-[-3rem] right-[-2rem] w-48 h-48 rounded-full opacity-20 bg-[#FFA116]" />
          <div className="absolute bottom-[-1rem] left-4 w-24 h-24 rounded-full opacity-10 bg-[#FFA116]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFA116]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span className="text-[#FFA116] text-xs font-semibold">LeetCode</span>
              </div>
              {/* pill tag — blog card style */}
              <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFA116]/15 text-[#FFA116]">
                @vivek_-vivek
              </span>
            </div>

            <div>
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Problems Solved</p>
              <p className="text-white text-[1.3rem] md:text-4xl font-bold leading-none">536</p>
              <div className="flex gap-3 mt-2">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-400">Easy 159</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400">Med 319</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-400/10 text-red-400">Hard 58</span>
              </div>
            </div>
          </div>
        </GridCell>

        {/* Cell 2 — Codeforces Rating */}
        <GridCell
          href="https://codeforces.com/profile/vivek1314gurjar"
          className="col-start-2 row-start-1 relative overflow-hidden rounded-2xl md:h-[16rem] h-[10rem] bg-[#0a1628]"
        >
          <div className="absolute top-[-2rem] right-[-2rem] w-44 h-44 rounded-full opacity-20 bg-[#4f8ef7]" />
          <div className="absolute bottom-[-1rem] left-6 w-20 h-20 rounded-full opacity-15 bg-[#4f8ef7]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4f8ef7]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V15c0-.828.672-1.5 1.5-1.5h3z"/>
                </svg>
                <span className="text-[#4f8ef7] text-xs font-semibold">Codeforces</span>
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#4f8ef7]/15 text-[#4f8ef7]">
                @vivek1314gurjar
              </span>
            </div>

            <div>
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Rating</p>
              <p className="text-white text-3xl md:text-4xl font-bold leading-none">1009</p>
              <div className="flex gap-2 mt-2">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#4f8ef7]/10 text-[#4f8ef7]">10 contests</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-white/50">max 1024</span>
              </div>
            </div>
          </div>
        </GridCell>

        {/* Cell 3 — Activity (hidden on mobile) */}
        <GridCell
          href="https://codolio.com/profile/vivek_gurjar"
          className="hidden md:flex md:col-start-3 md:row-start-1 relative overflow-hidden rounded-2xl md:h-[16rem] h-[10rem] bg-[#0d2218]"
        >
          <div className="absolute top-[-2rem] right-[-2rem] w-44 h-44 rounded-full opacity-20 bg-[#34d399]" />
          <div className="absolute bottom-[-1rem] left-6 w-20 h-20 rounded-full opacity-10 bg-[#34d399]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2218] via-[#0d2218]/60 to-transparent" />

          <div className="relative z-10 h-full w-full flex flex-col justify-between p-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[#34d399] text-xs font-semibold">Activity</span>
              <span className="ml-auto text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#34d399]/15 text-[#34d399]">codolio</span>
            </div>

            <div>
              <div className="flex gap-6 mb-3">
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Active Days</p>
                  <p className="text-white text-2xl font-bold">466</p>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">Contests</p>
                  <p className="text-white text-2xl font-bold">41</p>
                </div>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">1236 total submissions</span>
            </div>
          </div>
        </GridCell>

        {/* Cell 4 — Big hero: DSA breakdown */}
        <div className="relative col-span-2 row-start-2 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2 overflow-hidden rounded-2xl bg-[#111111] md:h-full h-[16rem]">
          {/* Decorative circles */}
          <div className="absolute top-[-4rem] right-[-4rem] w-72 h-72 rounded-full opacity-10 bg-[#a78bfa]" />
          <div className="absolute bottom-[-2rem] left-[-2rem] w-48 h-48 rounded-full opacity-10 bg-[#4f8ef7]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-[#111111]/80 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-7">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#a78bfa]/15 text-[#a78bfa]">
                DSA · All Topics
              </span>
              <p className="text-white text-xl md:text-3xl font-bold leading-snug mt-3">
                737 problems solved<br className="hidden md:block" /> across all topics
              </p>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              {[
                { label: "Arrays", count: 329, max: 329, color: "#4f8ef7" },
                { label: "Strings", count: 116, max: 329, color: "#a78bfa" },
                { label: "DP", count: 78, max: 329, color: "#fbbf24" },
                { label: "Trees", count: 66, max: 329, color: "#34d399" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <span className="text-white/50 text-[11px] w-14 shrink-0">{t.label}</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(t.count / t.max) * 100}%`, background: t.color }}
                    />
                  </div>
                  <span className="text-white/60 text-[11px] w-8 text-right">{t.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cell 5 — Contest Rankings */}
        <GridCell
          href="https://codolio.com/profile/vivek_gurjar"
          className="col-start-1 row-start-3 md:col-start-3 md:row-start-2 relative overflow-hidden rounded-2xl md:h-[16rem] h-[10rem] bg-[#14082a]"
        >
          <div className="absolute top-[-2rem] right-[-2rem] w-44 h-44 rounded-full opacity-20 bg-[#a78bfa]" />
          <div className="absolute bottom-[-1rem] left-4 w-20 h-20 rounded-full opacity-10 bg-[#a78bfa]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14082a] via-[#14082a]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-[#a78bfa] text-xs font-semibold">Contest Rankings</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA116]" />
                  <span className="text-white/50 text-[13px]">LeetCode</span>
                </div>
                <span className="text-white font-bold text-sm px-2 py-0.5 rounded-full bg-[#FFA116]/10 text-[#FFA116]">1631</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7]" />
                  <span className="text-white/50 text-[13px]">Codeforces</span>
                </div>
                <span className="text-white font-bold text-sm px-2 py-0.5 rounded-full bg-[#4f8ef7]/10 text-[#4f8ef7]">1009</span>
              </div>
            </div>
          </div>
        </GridCell>

        {/* Cell 6 — Platforms */}
        <GridCell
          href="https://codolio.com/profile/vivek_gurjar"
          className="col-start-2 row-start-3 md:col-start-3 md:row-start-3 relative overflow-hidden rounded-2xl md:h-[16rem] h-[10rem] bg-[#1a1200]"
        >
          <div className="absolute top-[-2rem] right-[-2rem] w-44 h-44 rounded-full opacity-20 bg-[#fbbf24]" />
          <div className="absolute bottom-[-1rem] left-4 w-20 h-20 rounded-full opacity-10 bg-[#fbbf24]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1200] via-[#1a1200]/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-[#fbbf24] text-xs font-semibold">Platforms</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { name: "LeetCode", val: "737 solved", color: "#FFA116" },
                { name: "Codeforces", val: "41 contests", color: "#4f8ef7" },
                { name: "GFG", val: "1 solved", color: "#2f8d46" },
                { name: "CodeStudio", val: "active", color: "#f97316" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className="text-white/60 text-[11px]">{p.name}</span>
                  </div>
                  <span
                    className="text-[11px] px-2 py-0.5 rounded-full"
                    style={{ background: `${p.color}15`, color: p.color }}
                  >
                    {p.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GridCell>

      </div>
    </div>
  );
}