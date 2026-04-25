import SectionHeader from "./ui/SectionHeader";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Confidential / Current Internship",
    period: "Present",
    desc: "Building real-world ML workflows around stylometry, OCR, and handwriting detection to improve document intelligence and decision support. The focus is production-ready pipelines that can scale from research prototypes to usable internal tools.",
    stack: ["React", "FastAPI", "Python", "Machine Learning"],
    colorFrom: "from-sky-400",
    colorTo: "to-indigo-400"
  },
  {
    role: "Software Development Intern",
    company: "BYTEDOCKER",
    period: "Jun 2025 – Sep 2025",
    desc: "Built a multi-organization tournament platform that handled registrations, fixtures, and team operations in one place. Improved the system with a scalable MERN architecture so event workflows stayed smooth as usage grew.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    colorFrom: "from-cyan-400",
    colorTo: "to-blue-400"
  },
  {
    role: "Software Development Intern",
    company: "Geekworkx Technologies",
    period: "Jan 2023 – Jun 2023",
    desc: "Built a full-stack Restaurant POS system handling orders, inventory, and real-time sales tracking. It gave staff a faster day-to-day workflow and improved operational visibility for the business team.",
    stack: ["React", "Node.js", "Express", "MySQL", "Material UI"],
    colorFrom: "from-blue-400",
    colorTo: "to-indigo-400"
  },
  {
    role: "Frontend Web Intern",
    company: "Magitech Innovision LLP",
    period: "Feb 2023 – Jun 2023",
    desc: "Created production-ready interfaces for event booking, hotel, and tender-tracking products with a strong focus on responsive behavior and clarity. This helped ship consistent experiences across devices and user roles.",
    stack: ["React", "Material UI"],
    colorFrom: "from-purple-400",
    colorTo: "to-pink-400"
  },
  {
    role: "Frontend Web Intern",
    company: "Insight Brandcom Pvt. Ltd.",
    period: "May 2023 – Jul 2023",
    desc: "Built and maintained the company’s official website with reusable UI components and cleaner content flow. The result was a more polished digital presence that was easier for the team to update.",
    stack: ["React", "Material UI"],
    colorFrom: "from-green-400",
    colorTo: "to-teal-400"
  },
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-slate-900 py-24">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[8%] top-0 h-80 w-80 rounded-full bg-sky-500/8 blur-3xl" />
      <div className="absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
      <SectionHeader
        label="Experience"
        title="My experience building real-world applications"
        className="mb-14"
      />

      <div className="relative ml-3 border-l border-slate-700/80 pl-8 sm:ml-6 sm:pl-10">
        {experiences.map((xp, idx) => (
          <article
            key={xp.company}
            className="group relative mb-8 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 opacity-0 shadow-[0_18px_50px_-38px_rgba(14,165,233,0.5)] transition duration-500 will-change-transform animate-[fadeInUp_0.7s_ease_forwards]"
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <span className={`absolute -left-[2.15rem] top-8 h-5 w-5 rounded-full border-4 border-slate-900 bg-gradient-to-r ${xp.colorFrom} ${xp.colorTo} transition group-hover:scale-110`} />
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-slate-800/35 to-slate-900/10 [transform:translateZ(-16px)]" />

            <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
              <div>
                <h3 className={`text-lg font-semibold bg-gradient-to-r ${xp.colorFrom} ${xp.colorTo} bg-clip-text text-transparent`}>
                  {xp.role}
                </h3>
                <p className="text-sm text-slate-300">{xp.company}</p>
                <p className="mt-1 text-xs text-slate-400">{xp.period}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-slate-200">{xp.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {xp.stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-600/70 bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </section>
);

export default Experience;
