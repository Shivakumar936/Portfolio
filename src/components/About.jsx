import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiAward, FiCheckCircle } from "react-icons/fi";
import profileImg from "./profile.png";

const EXPERIENCES = [
  {
    period: "Feb 2026 – May 2026",
    role: "Full Stack Java Developer Intern",
    company: "CampusPe",
    location: "India",
    bullets: [
      "Developed and tested full-stack web application functionality across frontend, backend, and database layers.",
      "Built responsive application interfaces and implemented backend functionality using JavaScript, Node.js, Express.js, and REST APIs.",
      "Developed and tested CRUD APIs and worked with MySQL for structured data storage, retrieval, and application workflows.",
      "Implemented authentication functionality using JWT, middleware, and environment-based configuration.",
      "Tested REST endpoints using Postman and used Git/GitHub for version control, debugging, and collaborative development."
    ],
  },
  {
    period: "2026",
    role: "Team Lead / Software Developer",
    company: "Risk Assessment Engine",
    location: "Team Project",
    bullets: [
      "Led development activities for a full-stack risk assessment application, coordinating frontend, backend, AI, and security workstreams.",
      "Developed application functionality using React.js, JavaScript, REST APIs, reusable components, and service integrations.",
      "Implemented pagination, sorting, form validation, loading states, empty states, and structured risk-data workflows.",
      "Integrated JWT-based authentication and API service layers for secure application workflows.",
      "Collaborated through Git/GitHub branching, pull requests, debugging, code integration, and issue resolution."
    ],
  },
];

const COMPETENCIES = [
  "Object-Oriented Design",
  "Problem Solving",
  "Software Development",
  "REST API Development",
  "Database Management",
  "Debugging & Profiling",
  "Team Collaboration",
  "Agile Development"
];

export default function About() {
  return (
    <section id="about" className="section relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2">
        <span className="font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          // 01. Background & Profile
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          About & Experience
        </h2>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* Left Column: Summary & Education */}
        <div className="space-y-8 lg:col-span-5">
          <div className="glass-card overflow-hidden rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={profileImg}
                alt="Shivakumar C Profile"
                loading="lazy"
                className="h-14 w-14 rounded-full border border-zinc-700 object-cover shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold text-white">Shivakumar C</h3>
                <span className="text-xs font-mono text-zinc-400">Full-Stack Engineer • VTU</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
              Computer Science Engineering graduate with hands-on experience in
              <strong className="text-white"> HTML5,CSS3,JavaScript, React.js, Node.js, Express.js, REST APIs, MongoDB, MySQL, and PostgreSQL</strong>.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
              Strong foundation in Object-Oriented Programming, problem solving, DBMS, and complexity analysis. Experienced with debugging, Git/GitHub workflows, and collaborative software development.
            </p>
          </div>

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 text-white">
              <div className="rounded-lg bg-zinc-800 p-2 text-white border border-zinc-700">
                <FiBookOpen size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Education</h4>
                <p className="text-xs text-zinc-400">2022 – 2026</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4">
              <h5 className="font-medium text-white text-base">Bachelor of Engineering (B.E.)</h5>
              <p className="text-xs font-medium text-zinc-400">Computer Science and Engineering</p>
              <p className="text-xs text-zinc-500">M.S. Engineering College • VTU</p>

              <div className="mt-4 pt-2">
                <span className="text-xs font-semibold text-zinc-300 block mb-2">Relevant Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"].map((course) => (
                    <span key={course} className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 text-[11px] text-zinc-400">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="font-semibold text-white text-base flex items-center gap-2 mb-4">
              <FiAward className="text-white" /> Core Competencies
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {COMPETENCIES.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                  <FiCheckCircle className="text-zinc-500 shrink-0" size={13} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div id="experience" className="space-y-6 lg:col-span-7">
          <div className="flex items-center gap-2 text-xl font-semibold text-white mb-2">
            <FiBriefcase className="text-zinc-400" /> Work & Project Experience
          </div>

          <div className="space-y-6 border-l border-zinc-800 pl-6 ml-2">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.role + i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card relative rounded-2xl p-6"
              >
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-black bg-white ring-4 ring-zinc-900" />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-sm font-medium text-zinc-300">{exp.company} • <span className="text-zinc-500">{exp.location}</span></p>
                  </div>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs font-medium text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-zinc-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

