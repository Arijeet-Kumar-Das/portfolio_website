import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";

const projects = [
  {
    title: "Hybrid RAG-based Document QA System",
    desc: "Built a full-stack AI system for querying PDFs using hybrid retrieval (semantic + keyword), Pinecone embeddings, and OpenAI generation. Designed real-time streaming responses with dual modes (fast vs verified) to balance latency and answer accuracy.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Pinecone", "OpenAI"],
    icon: "🧠",
    github: "https://github.com/Arijeet-Kumar-Das/ha-rag-system",
    demo: "https://ha-rag-system.vercel.app/",
  },
  {
    title: "AI-Powered College Assistant",
    desc: "Built a role-based academic assistant with JWT authentication and NLP-based query classification. Integrated LLM responses with optimized backend APIs to handle structured and conversational queries efficiently.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "NLP"],
    icon: "🎓",
    github:
      "https://github.com/Arijeet-Kumar-Das/AI-Powered-College-assistant-",
    demo: "https://ai-powered-college-assistant-b3w1-n0tzxu8er.vercel.app/",
  },
  {
    title: "Food Delivery Website",
    desc: "Designed a full-stack food delivery platform with real-time order tracking and Razorpay payments. Built separate flows for customers, admins, and delivery partners with robust CRUD operations.",
    stack: ["React", "Node.js", "Express", "MySQL", "Razorpay"],
    icon: "🍔",
    github: "https://github.com/Arijeet-Kumar-Das/Food_Delivery_FreshSalads",
    demo: "#",
  },
  {
    title: "Restaurant POS Management System",
    desc: "Built a POS system handling order lifecycle, inventory, and billing with real-time sales tracking. Optimized for fast counter operations and efficient restaurant workflows.",
    stack: ["React", "Node.js", "Express", "MySQL", "Material UI"],
    icon: "🍽️",
    github:
      "https://github.com/Arijeet-Kumar-Das/Restaurant-Point-of-Sale-Management-System",
    demo: "#",
  },
  {
    title: "Insight Brandcom Website",
    desc: "Built and deployed a responsive corporate website with reusable UI components. Improved performance and content structure for a production-ready brand experience.",
    stack: ["React", "Material UI", "Responsive Design"],
    icon: "🌐",
    github: "https://github.com/Arijeet-Kumar-Das/Insight-BrandCom",
    demo: "https://insightbrandcom.com/",
  },
];

const ProjectCard = ({ project, index, featured }) => {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  );

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 8;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    );
  };

  const reset = () =>
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  return (
    <article
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`group relative rounded-2xl border transition duration-300 ${
        featured
          ? "md:col-span-2 p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-sky-500/40 shadow-[0_30px_100px_-40px_rgba(56,189,248,0.5)]"
          : "p-6 bg-slate-900/70 border-slate-800/80"
      }`}
      style={{ transform }}
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-sky-400/10 to-cyan-300/10" />

      {/* badge */}
      {featured && (
        <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
          Featured
        </span>
      )}

      <div className="relative z-10">
        {/* icon */}
        <div className="mb-3 text-4xl">{project.icon}</div>

        {/* title */}
        <h3
          className={`font-semibold text-slate-100 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        {/* desc */}
        <p
          className={`mt-3 text-slate-300 leading-relaxed ${
            featured ? "text-base max-w-3xl" : "text-sm"
          }`}
        >
          {project.desc}
        </p>

        {/* stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className={`rounded-md border px-2 py-1 text-xs ${
                featured
                  ? "border-sky-500/40 bg-sky-500/10 text-sky-300"
                  : "border-slate-700 bg-slate-800/70 text-slate-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 bg-slate-800 p-2 text-slate-200 transition hover:border-sky-300 hover:text-sky-300"
          >
            <FiGithub />
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 bg-slate-800 p-2 text-slate-200 transition hover:border-sky-300 hover:text-sky-300"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      {/* number */}
      <span className="absolute right-4 top-4 text-xs text-slate-500">
        0{index + 1}
      </span>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <SectionHeader
          label="Projects"
          title="Projects I've built and shipped"
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
