import { FiAward, FiCode, FiUsers } from "react-icons/fi";
import { lazy, Suspense, useEffect, useRef } from "react";
import SectionHeader from "./ui/SectionHeader";

const AboutScene = lazy(() => import("./three/AboutScene"));

const stats = [
  { icon: FiCode, value: "4+", label: "Internships" },
  { icon: FiAward, value: "5+", label: "Projects" },
  { icon: FiUsers, value: "1", label: "Hackathon" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const offset = Math.max(
        -20,
        Math.min(20, (window.innerHeight - rect.top) * 0.02 - 8)
      );
      node.style.setProperty("--about-parallax", `${offset}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-24"
      style={{
        transform: "translate3d(0, var(--about-parallax, 0px), 0)",
      }}
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.1),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(99,102,241,0.08),transparent_38%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center lg:px-16">
        {/* LEFT: 3D Scene */}
        <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/55 p-4 shadow-[0_18px_70px_-40px_rgba(56,189,248,0.5)] transition duration-500 hover:border-slate-700">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-transparent to-indigo-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          <Suspense
            fallback={
              <div className="h-72 w-full rounded-2xl bg-slate-900/80" />
            }
          >
            <AboutScene />
          </Suspense>
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <SectionHeader
            label="About"
            title="I build full-stack applications that actually scale"
            align="left"
          />

          {/* intro */}
          <p className="mt-5 max-w-2xl text-slate-300 leading-relaxed">
            I'm an MCA student at{" "}
            <span className="font-semibold text-sky-300">
              B.M.S. College of Engineering
            </span>{" "}
            who enjoys turning ideas into real, usable products — not just demos.
          </p>

          {/* tech */}
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            I work mainly with{" "}
            <span className="text-sky-300 font-medium">
              React, Node.js, and MySQL
            </span>{" "}
            to build full-stack systems with clean architecture and smooth user
            experience.
          </p>

          {/* proof */}
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            Recently, I’ve built projects like a finance tracker, a food delivery
            platform, and an AI-based HA-RAG system — focusing on performance,
            scalability, and real-world usability.
          </p>

          {/* divider */}
          <div className="mt-6 h-px w-32 bg-gradient-to-r from-sky-400/70 via-indigo-400/40 to-transparent" />

          {/* stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:shadow-[0_18px_40px_-30px_rgba(56,189,248,0.85)]"
              >
                <stat.icon className="mx-auto mb-2 text-2xl text-sky-300 transition duration-300 group-hover:scale-110" />
                <div className="text-xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;