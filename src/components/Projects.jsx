import { FiGithub, FiExternalLink } from "react-icons/fi";
const projects = [
  {
    title: "Restaurant POS Management System",
    desc: "Streamlines restaurant operations with order, inventory, and sales modules. Digital order-taking, invoicing, and staff management.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
    icon: "🍽️",
    github: "https://github.com/Arijeet-Kumar-Das/Restaurant-Point-of-Sale-Management-System",
    demo: "#",
  },
  {
    title: "Insight Brandcom Website",
    desc: "Developed the official site for Insight Brandcom Pvt. Ltd., focusing on responsive layout and smooth UI components.",
    stack: ["React.js", "Material UI", "Responsive Design"],
    icon: "🌐",
    github: "https://github.com/Arijeet-Kumar-Das/Insight-BrandCom",
    demo: "https://insightbrandcom.com/",
  },
  {
  title: "Food Delivery Website",
  desc: "Built a full-stack food delivery platform with separate interfaces for customers, delivery partners, and admin. Integrated Razorpay for secure payments, added customizable food options, and implemented full CRUD operations for menu and order management. Designed for real-time interaction and smooth user experience.",
  stack: ["React.js", "Node.js", "Express.js", "MySQL", "Razorpay API"],
  icon: "🍔",
  github: "https://github.com/Arijeet-Kumar-Das/Food_Delivery_FreshSalads",
  demo: "#",
},

];
const Projects = () => (
  <section id="projects" className="py-20 bg-gray-950">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
        Featured <span className="text-blue-400">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4 items-start"
          >
            <div className="text-5xl">{p.icon}</div>
            <h3 className="text-xl font-bold text-blue-300">{p.title}</h3>
            <p className="text-gray-200">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="bg-gray-800 rounded px-2 py-1 text-xs text-blue-200"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={p.github}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href={p.demo}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;
