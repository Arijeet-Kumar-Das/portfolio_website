import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
const links = [
  { icon: FiGithub, url: "https://github.com/Arijeet-Kumar-Das" },
  { icon: FiLinkedin, url: "https://linkedin.com/in/arijeet-kumar-das" },
  { icon: FiMail, url: "https://mail.google.com/mail/?view=cm&fs=1&to=dasarijeetkumar@gmail.com" },
];

const Footer = () => (
  <footer className="py-8 bg-gray-950 border-t border-gray-900">
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-3">
      <div className="flex gap-5 mb-1">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.url}
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <l.icon />
          </a>
        ))}
      </div>
      <div className="text-gray-400 flex items-center gap-1 text-sm">
        Made with <FiHeart className="text-red-500" /> by Arijeet Kumar Das ©{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);
export default Footer;
