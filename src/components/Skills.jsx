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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", Icon: SiReact, color: "text-blue-400" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML5", Icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: SiCss3, color: "text-blue-300" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-400" },
  { name: "Material UI", Icon: SiMui, color: "text-blue-600" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-400" },
  { name: "Python", Icon: SiPython, color: "text-yellow-500" },
  { name: "Java", Icon: FaJava, color: "text-orange-600" },
];

const Skills = () => (
  <section id="skills" className="bg-gray-950 py-20">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
        Technical <span className="text-blue-400">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center rounded-xl shadow bg-gray-900 p-6 border border-gray-800 transform transition hover:-translate-y-2 hover:shadow-lg hover:border-blue-400 hover:border-2"
          >
            <skill.Icon
              className={`${skill.color} text-4xl mb-3 group-hover:scale-110 transition-transform`}
            />
            <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
