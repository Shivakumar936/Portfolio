import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiGithub, FiLinkedin, FiFolder, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl"
      />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>Open for Full-Stack & Software Engineering Roles</span>
      </motion.div>

      {/* Profile Image with subtle ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mt-4 sm:mt-8"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-700 via-white to-zinc-700 opacity-30 blur-md transition group-hover:opacity-100" />
        <img
          src="/images/profile.jpg"
          alt="Shivakumar C"
          loading="eager"
          onError={(e) => {
            e.target.src = "/public/images/profile.png";
          }}
          className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full border-2 border-zinc-700 bg-zinc-900 object-cover p-1 shadow-2xl transition-transform hover:scale-105"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        SHIVAKUMAR C
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 font-mono text-lg font-medium text-zinc-400 sm:text-xl"
      >
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "React.js & Node.js Engineer",
            2000,
            "RESTful API & Database Specialist",
            2000,
            "B.E. Computer Science Graduate",
            2000,
          ]}
          repeat={Infinity}
        />
      </motion.div>

      {/* Brief bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg"
      >
        Computer Science Engineer with expertise in building robust web applications,
        scalable REST APIs, and database architectures using <span className="text-white font-medium">JavaScript, React.js, Node.js, Express, MongoDB,</span> and <span className="text-white font-medium">MySQL</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="btn-primary flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
        >
          <FiFolder size={17} /> View Projects & Links
        </a>
        <a
          href="#contact"
          className="btn-secondary flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
        >
          <FiMail size={17} /> Get In Touch
        </a>
      </motion.div>

      {/* Social Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-8 flex items-center gap-4 text-xs font-medium text-zinc-400"
      >
        <a
          href="https://github.com/Shivakumar936"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <FiGithub size={15} /> github.com/Shivakumar936
        </a>
        <span className="text-zinc-700">•</span>
        <a
          href="https://linkedin.com/in/shivakumar-c-40026a337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <FiLinkedin size={15} /> Shivakumar C
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        href="#about"
        aria-label="Scroll to about section"
        className="mt-16 flex flex-col items-center gap-2 text-xs font-mono text-zinc-500 transition-colors hover:text-white"
      >
        <span>SCROLL DOWN</span>
        <FiArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

