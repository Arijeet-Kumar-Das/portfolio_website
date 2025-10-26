import { FiAward, FiCode, FiUsers } from "react-icons/fi";

const stats = [
  { icon: FiCode, value: "4", label: "Internships" },
  { icon: FiAward, value: "3+", label: "Projects" },
  { icon: FiUsers, value: "1", label: "Hackathon" },
];

const About = () => (
  <section id="about" className="py-24 bg-gray-950/90 relative overflow-hidden">
    {/* Optional animated background blobs */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute bg-blue-500 opacity-5 w-72 h-72 rounded-full top-10 left-1/4 animate-blob mix-blend-multiply"></div>
      <div className="absolute bg-purple-500 opacity-5 w-72 h-72 rounded-full top-1/2 left-2/3 animate-blob animation-delay-4000 mix-blend-multiply"></div>
    </div>

    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center relative z-10">
      {/* Avatar */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 h-60 w-60 flex items-center justify-center text-8xl shadow-2xl animate-bounce-slow">
          👨‍💻
        </div>
      </div>

      {/* About Text */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-extrabold mb-4 text-white opacity-0 animate-fadeIn">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <h3 className="text-2xl font-bold mb-2 text-white opacity-0 animate-fadeIn delay-500">
          Full-Stack Developer & Problem Solver
        </h3>
        <p className="text-gray-300 mb-2 opacity-0 animate-fadeIn delay-1000">
          Currently pursuing MCA at{" "}
          <span className="font-semibold text-blue-300">
            B.M.S. College of Engineering
          </span>
          , I bring a strong foundation in full-stack development with several internships.
        </p>
        <p className="text-gray-300 mb-2 opacity-0 animate-fadeIn delay-1200">
          Skilled in the{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MERN stack
          </span>
          , I've built POS systems and corporate sites. I love creating seamless user experiences and solving problems with code.
        </p>
        <p className="text-gray-300 mb-6 opacity-0 animate-fadeIn delay-1400">
          Recently secured{" "}
          <span className="font-semibold text-blue-400">2nd prize</span> in
          Hack-The-Work 2025 hackathon for creative engineering!
        </p>

        {/* Stats */}
        <div className="flex gap-4 flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-900 rounded-xl px-5 py-4 shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-500"
            >
              <stat.icon className="text-blue-400 text-3xl mb-1" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Tailwind Animations */}
    <style jsx>{`
      @keyframes blob {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      .animate-blob { animation: blob 8s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }

      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn { animation: fadeIn 1s forwards; }
      .delay-500 { animation-delay: 0.5s; }
      .delay-1000 { animation-delay: 1s; }
      .delay-1200 { animation-delay: 1.2s; }
      .delay-1400 { animation-delay: 1.4s; }

      @keyframes bounceSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-slow { animation: bounceSlow 3s infinite; }
    `}</style>
  </section>
);

export default About;
