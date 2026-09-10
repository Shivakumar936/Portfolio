import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase, FiCpu } from "react-icons/fi";

const SKILL_CATEGORIES = [
  {
    category: "Languages & Core CS",
    icon: FiCode,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Python", level: 80 },
      { name: "OOP Principles", level: 92 },
      { name: "Problem Solving", level: 88 },
      { name: "Complexity Analysis", level: 85 },
    ],
  },
  {
    category: "Frontend Development",
    icon: FiLayout,
    skills: [
      { name: "React.js", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Component Architecture", level: 90 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: FiServer,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST API Design", level: 94 },
      { name: "JWT Auth & Middleware", level: 88 },
      { name: "CRUD Operations", level: 95 },
      { name: "Asynchronous JS", level: 90 },
    ],
  },
  {
    category: "Databases & DevTools",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB & Mongoose", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git & GitHub", level: 92 },
      { name: "Postman API Testing", level: 90 },
      { name: "Docker & npm", level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative z-10">
      <div className="flex flex-col items-start gap-2">
        <span className="font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          // 02. Technical Arsenal
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Skills & Expertise
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-6">
                <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-2.5 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
                      <span className="text-zinc-200">{skill.name}</span>
                      <span className="font-mono text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-800/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-white shadow-[0_0_10px_#fff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

