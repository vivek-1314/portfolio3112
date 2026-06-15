"use client";

const experiences = [
  {
    company: "SyncAndExplore (Startup)",
    role: "Full-Stack Developer Intern",
    period: "Oct 13, 2025 – Nov 15, 2025",
    description:
      "",
    tags: ["Node.js", "Express", "MongoDB"],
    images: [
      "images/dimg1.jpg",
      "images/dimg2.jpg",
      "images/dimg3.jpg",
    ],
    detail:
      "Worked on a Delhi-based, DPIIT-verified Startup India company. Built backend APIs, handled API integrations, and integrated payment gateways for secure transactions.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 font-neo">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 ">
          <div>
            <div className="mb-4 flex items-center gap-2 ">
              <span className="h-2 w-2 rounded-full bg-[#222222]" />
              <span className="text-sm font-medium text-[#222222]">
                Experience
              </span>
            </div>
            <h2 className="text-4xl font-medium leading-tight text-[#222222] md:text-5xl">
              Explore My Dev
              <br />
              Journey
            </h2>
          </div>

          <div className="flex flex-col justify-center md:ml-10">
            <p className="text-base leading-relaxed text-[#7b7b7b]">
              I&apos;m a full-stack developer focused on building reliable
              backend systems and APIs with agentic workflows. 
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#222222] underline underline-offset-4"
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Experience list */}
        <div className="mt-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group border-t border-[#e2e2e2]">
              {/* Main row */}
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-8">
                <div>
                  <h3 className="text-xl font-medium text-[#222222] md:text-xl">
                    {exp.company}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-[0.9rem] text-[#7b7b7b]">
                    <span className="text-[#7b7b7b]">•</span>
                    {exp.period}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[#7b7b7b] md:text-[0.95rem]">
                  {exp.role}
                </p>

                <div className="flex flex-wrap items-start gap-2 md:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full group-hover:bg-[#222222] group-hover:text-[#f8f8f8] transition-colors duration-300 border border-[#e2e2e2] px-4 py-1.5 text-sm text-[#222222]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable panel */}
              <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-1200 ease-in-out group-hover:grid-rows-[1fr]">
                <div className="min-h-0 overflow-hidden">
                  <div className="flex flex-col gap-6 pb-8 sm:flex-row sm:items-center">
                    {/* Images */}
                    <div className="flex shrink-0 gap-3">
                      {exp.images.map((src, i) => (
                        <div
                          key={i}
                          className="h-20 w-20 overflow-hidden rounded-2xl bg-[#eeeeee] sm:h-24 sm:w-24 md:h-28 md:w-30"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt={`${exp.company} project ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Text + circle */}
                    <div className="flex flex-1 items-center justify-between gap-4 sm:gap-6">
                      <p className="text-sm leading-relaxed text-[#7b7b7b] md:text-[0.9rem] max-w-[20rem]">
                        {exp.detail}
                      </p>
                      <a
                        href="#"
                        aria-label={`View ${exp.company} details`}
                        className="flex h-12 w-12 group-hover:bg-[#222222] group-hover:text-[#f8f8f8] group-hover:rotate-45 transition-transform duration-600 shrink-0 items-center justify-center rounded-full border border-[#cccccc] text-[#222222] transition-colors hover:border-[#222222] sm:h-14 sm:w-14"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e2e2e2]" />
        </div>
      </div>
    </section>
  );
}