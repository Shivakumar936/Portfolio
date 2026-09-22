import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/85 backdrop-blur-md border-b border-zinc-800/80 py-3"
        : "bg-transparent py-4 sm:py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white"
        >
          <span className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Portfolio
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-zinc-400 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Shivakumar936"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/shivakumar-c-40026a337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
          >
            <FiLinkedin size={16} />
          </a>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-300 md:hidden hover:text-white"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 border-b border-zinc-800 bg-black/95 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
            <div className="flex gap-3">
              <a
                href="https://github.com/Shivakumar936"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/shivakumar-c-40026a337"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white hover:text-black transition-all"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
