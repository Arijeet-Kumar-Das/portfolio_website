const experiences = [
  {
    role: "Software Development Intern",
    company: "BYTEDOCKER",
    period: "Jun 2025 – Sep 2025",
    desc: "Built and improved a full-stack tournament management platform with MERN stack and Tailwind CSS for multi-organization events.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    colorFrom: "from-cyan-400",
    colorTo: "to-blue-400"
  },
  {
    role: "Software Development Intern",
    company: "Geekworkx Technologies",
    period: "Jan 2023 – Jun 2023",
    desc: "Developed a Restaurant POS System for order management, inventory, notifications, and sales tracking.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
    colorFrom: "from-blue-400",
    colorTo: "to-indigo-400"
  },
  {
    role: "Frontend Web Intern",
    company: "Magitech Innovision LLP",
    period: "Feb 2023 – Jun 2023",
    desc: "Built modern, responsive UIs for event booking, hotels, and tender-tracking sites.",
    stack: ["React.js", "Material UI"],
    colorFrom: "from-purple-400",
    colorTo: "to-pink-400"
  },
  {
    role: "Frontend Web Intern",
    company: "Insight Brandcom Pvt. Ltd.",
    period: "May 2023 – Jul 2023",
    desc: "Developed and maintained an official corporate website with a modern look and feel.",
    stack: ["React.js", "Material UI"],
    colorFrom: "from-green-400",
    colorTo: "to-teal-400"
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold mb-12 text-white text-center">
        Work <span className="text-blue-400">Experience</span>
      </h2>
      {/* Timeline Container */}
      <div className="relative flex flex-col items-start border-l-4 border-blue-900/40 ml-6">
        {experiences.map((xp, idx) => (
          <div
            key={idx}
            className="relative mb-10 pl-12 w-full group"
            style={{ animation: `fadeInUp .6s both`, animationDelay: `${idx * 0.12}s` }}
          >
            {/* Timeline Dot with Gradient */}
            <span className={`absolute -left-7 top-4 w-8 h-8 rounded-full bg-gradient-to-br ${xp.colorFrom} ${xp.colorTo} shadow-lg border-4 border-gray-900 group-hover:scale-110 transition-transform`}></span>
            <div className="bg-gray-800/80 backdrop-blur rounded-xl shadow-xl hover:shadow-2xl border border-gray-700 group-hover:border-2 group-hover:border-blue-400 transition p-6">
              <div className="flex flex-col md:flex-row md:items-start md:gap-10">
                {/* Role & Company */}
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${xp.colorFrom} ${xp.colorTo} bg-clip-text text-transparent`}>
                    {xp.role}
                  </h3>
                  <div className="text-gray-300 text-sm font-medium">{xp.company}</div>
                  <div className="text-gray-400 text-xs">{xp.period}</div>
                </div>
                {/* Desc & Stack */}
                <div className="flex-1 text-gray-200 text-sm">
                  {xp.desc}
                  {xp.stack && (
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {xp.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Animations */}
    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px);}
        to { opacity: 1; transform: translateY(0);}
      }
    `}</style>
  </section>
);

export default Experience;
