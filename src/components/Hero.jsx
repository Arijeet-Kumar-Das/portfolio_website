import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, link: "https://github.com/Arijeet-Kumar-Das" },
  { icon: FiLinkedin, link: "https://linkedin.com/in/arijeet-kumar-das" },
  { icon: FiMail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=dasarijeetkumar@gmail.com" },
];

const Hero = () => (
  <section
    id="home"
    className="pt-28 pb-16 min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"
  >
    {/* Background animated shapes */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute bg-blue-500 opacity-10 w-72 h-72 rounded-full top-10 left-1/4 animate-blob mix-blend-multiply"></div>
      <div className="absolute bg-purple-500 opacity-10 w-72 h-72 rounded-full top-1/2 left-2/3 animate-blob animation-delay-4000 mix-blend-multiply"></div>
      <div className="absolute bg-pink-500 opacity-10 w-72 h-72 rounded-full bottom-0 left-1/3 animate-blob animation-delay-2000 mix-blend-multiply"></div>
    </div>

    <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center relative z-10">
      {/* Profile Circle */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-400 flex items-center justify-center text-5xl font-bold text-white shadow-2xl mb-6 border-4 border-blue-800 transform hover:scale-105 transition-transform animate-bounce-slow">
        AKD
      </div>

      {/* Name & Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white opacity-0 animate-fadeIn">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Arijeet Kumar Das
        </span>
      </h1>
      <p className="text-xl md:text-2xl font-medium text-blue-300 mb-2 opacity-0 animate-fadeIn delay-500">
        Software Developer
      </p>

      {/* Description */}
      <p className="text-gray-200 mb-8 text-center opacity-0 animate-fadeIn delay-1000">
        MCA Student at B.M.S. College of Engineering with expertise in scalable
        web apps.
        <br />
        Passionate about user experiences and solving complex code problems.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center opacity-0 animate-fadeIn delay-1500">
        <a
          href="#contact"
          className="px-6 py-3 rounded bg-blue-500 hover:bg-purple-500 text-white font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          Get In Touch
        </a>
        <a
          href="/resume_new.pdf"
          download="Arijeet_Kumar_Das_CV.pdf"
          className="px-6 py-3 rounded border border-blue-400 hover:bg-blue-400/20 text-blue-300 font-medium flex gap-2 items-center transition transform hover:-translate-y-1"
        >
          <FiDownload />
          Download CV
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 opacity-0 animate-fadeIn delay-2000">
        {socialLinks.map(({ icon: Icon, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white transition transform hover:scale-110 shadow-md"
          >
            <Icon size={22} />
          </a>
        ))}
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
      .delay-1500 { animation-delay: 1.5s; }
      .delay-2000 { animation-delay: 2s; }

      @keyframes bounceSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-slow { animation: bounceSlow 3s infinite; }
    `}</style>
  </section>
);

export default Hero;
