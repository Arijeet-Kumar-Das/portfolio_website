import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiPython,
  SiGithub,
  SiPostman,
  SiJira,
  SiConfluence,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { lazy, Suspense } from "react";
import SectionHeader from "./ui/SectionHeader";

const SkillsScene = lazy(() => import("./three/SkillsScene"));

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "text-sky-300", core: true },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-300" },
      { name: "HTML5", Icon: SiHtml5, color: "text-orange-400" },
      { name: "CSS3", Icon: SiCss3, color: "text-blue-300" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-300" },
      { name: "Material UI", Icon: SiMui, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400", core: true },
      { name: "Express.js", Icon: SiExpress, color: "text-slate-300" },
      { name: "REST APIs", Icon: SiExpress, color: "text-slate-300" },
    ],
  },
  {
    title: "Database & Other",
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "text-blue-300", core: true },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-400" },
      { name: "Python", Icon: SiPython, color: "text-yellow-400" },
      { name: "Java", Icon: FaJava, color: "text-orange-400" },
      { name: "SQL", Icon: SiMysql, color: "text-blue-300" },
    ],
  },
];

const foundations = ["Data Structures & Algorithms", "OOPS", "DBMS", "Software Testing"];

const tools = [
  { name: "Git/GitHub", Icon: SiGithub },
  { name: "Postman", Icon: SiPostman },
  { name: "JIRA", Icon: SiJira },
  { name: "Confluence", Icon: SiConfluence },
  { name: "Vercel", Icon: SiVercel },
];

const SkillCard = ({ skill }) => (
  <div
    className={`group relative rounded-lg border p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-24px_rgba(56,189,248,0.85)] ${
      skill.core
        ? "border-sky-300/50 bg-slate-900/85 shadow-[0_8px_24px_-18px_rgba(56,189,248,0.75)]"
        : "border-slate-800/80 bg-slate-900/60 hover:border-sky-300/50"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-sky-400/0 to-cyan-300/0 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:from-sky-400/10 group-hover:to-cyan-300/10" />
    <skill.Icon className={`${skill.color} relative z-10 mb-2 text-2xl`} />
    <span className="relative z-10 text-sm font-medium text-slate-100">{skill.name}</span>
    {skill.core ? <span className="ml-2 rounded-full bg-sky-400/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200">Core</span> : null}
  </div>
);

const Skills = () => (
  <section id="skills" className="relative overflow-hidden bg-slate-950 py-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(125,211,252,0.08),transparent_40%)]" />
    <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
      <div className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeader
            label="Skills"
            title="Technologies I use to build real-world applications"
            description="I focus on a practical stack for shipping reliable products, maintaining clean architecture, and collaborating smoothly in teams."
            align="left"
          />
        </div>
        <div className="rounded-2xl border border-slate-800/75 bg-slate-900/50 p-3">
          <Suspense fallback={<div className="h-56 w-full rounded-2xl bg-slate-900/80" />}>
            <SkillsScene />
          </Suspense>
        </div>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {group.skills.map((skill) => (
                <SkillCard key={`${group.title}-${skill.name}`} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-800/80 bg-slate-900/55 p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
          Core Concepts & Tools
        </h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {foundations.map((item) => (
            <span key={item} className="rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool.name} className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-200">
              <tool.Icon className="text-sm text-sky-300" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
