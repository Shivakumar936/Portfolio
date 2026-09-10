import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/80 bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
          <span className="text-sm font-semibold text-white">Shivakumar C</span>
          <span className="text-xs text-zinc-500">• Full-Stack Developer</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a
            href="https://github.com/Shivakumar936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/shivakumar-c-40026a337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
          <a
            href="mailto:sshiva48688@gmail.com"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <FiMail size={14} /> Email
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors"
          >
            <FiArrowUp size={12} /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}

