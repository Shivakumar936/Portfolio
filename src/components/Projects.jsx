import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEdit3, FiCheck, FiInfo, FiLayers, FiCode } from "react-icons/fi";
import ProjectModal from "./ProjectModal";

const INITIAL_PROJECTS = [
  {
    id: "airbnb-app",
    title: "Airbnb-Style Full-Stack Web Application",
    category: "Full-Stack Web App",
    badge: "MERN Stack",
    image: "/images/airbnb.jpg",
    desc: "A full-stack accommodation listing platform with end-to-end frontend, backend, and database functionality. Features property CRUD operations, user authentication, authorization, and Cloudinary media upload.",
    highlights: [
      "Property listing management with full CRUD operations",
      "JWT user authentication and authorization for protected routes",
      "Cloudinary integration for property image upload & management",
      "Express middleware validation and global error handling"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Cloudinary"],
    live: "https://github.com/Shivakumar936",
    repo: "https://github.com/Shivakumar936/airbnb-clone",
    type: "airbnb"
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment Engine",
    category: "Enterprise Security Platform",
    badge: "Team Lead Project",
    image: "/images/risk.jpg",
    desc: "A full-stack risk assessment application coordinating AI, frontend, backend, and security workstreams. Implemented pagination, sorting, form validation, loading states, and structured risk-data workflows.",
    highlights: [
      "Led full-stack engineering across frontend, backend, AI & security",
      "Integrated JWT authentication and service layers for secure APIs",
      "Structured risk-data workflows with sorting, pagination & form validation",
      "Reusable React components with empty states & async loaders"
    ],
    tags: ["React.js", "JavaScript", "Node.js", "REST APIs", "JWT", "CSS3"],
    live: "https://github.com/Shivakumar936",
    repo: "https://github.com/Shivakumar936/risk-assessment-engine",
    type: "risk"
  },
  {
    id: "weather-app",
    title: "Weather Application",
    category: "Frontend Web Application",
    badge: "REST API App",
    image: "/images/weather.jpg",
    desc: "A responsive weather application built with React.js featuring real-time city-based search, external weather REST API integration, loading indicators, and graceful error handling.",
    highlights: [
      "External weather REST API integration with real-time updates",
      "Dynamic city search with instant temperature & climate stats",
      "React state management with modular reusable UI components",
      "Comprehensive async error handling and empty search states"
    ],
    tags: ["React.js", "JavaScript", "REST API", "State Management", "CSS3"],
    live: "https://github.com/Shivakumar936",
    repo: "https://github.com/Shivakumar936/weather-app",
    type: "weather"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("shivakumar_project_links");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return INITIAL_PROJECTS.map(p => ({
          ...p,
          live: parsed[p.id]?.live || p.live,
          repo: parsed[p.id]?.repo || p.repo
        }));
      } catch (e) {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  const [active, setActive] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [tempLive, setTempLive] = useState("");
  const [tempRepo, setTempRepo] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEditLink = (project, e) => {
    e.stopPropagation();
    setEditingProject(project);
    setTempLive(project.live);
    setTempRepo(project.repo);
  };

  const handleSaveLinks = (e) => {
    e.preventDefault();
    if (!editingProject) return;

    const updated = projects.map((p) =>
      p.id === editingProject.id ? { ...p, live: tempLive, repo: tempRepo } : p
    );
    setProjects(updated);

    // Save to local storage
    const linkMap = {};
    updated.forEach(p => {
      linkMap[p.id] = { live: p.live, repo: p.repo };
    });
    localStorage.setItem("shivakumar_project_links", JSON.stringify(linkMap));

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setEditingProject(null);
    }, 1200);
  };

  const renderProjectVisual = (project) => {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>
    );
  };

  return (
    <section id="projects" className="section relative z-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            // 03. Selected Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects & Links
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Key software engineering projects built with javascript, React.js, REST API, Node.js, Express, MongoDB, and MySQL.
            Click any project for deep-dive specifications.
          </p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`glass-card group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 hover:border-zinc-500 transition-all duration-300 ${projects.length === 3 && i === 2
              ? "sm:col-span-2 sm:w-[48%] sm:justify-self-center"
              : ""
              }`}
          >
            {/* Visual Thumbnail */}
            <div className="relative">
              {renderProjectVisual(project)}
              <span className="absolute top-3 right-3 rounded-full border border-zinc-700 bg-black/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold text-white">
                {project.badge}
              </span>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                  <button
                    onClick={(e) => handleEditLink(project, e)}
                    title="Add / Edit Project Link"
                    className="flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-300 transition-colors hover:border-white hover:text-white"
                  >
                    <FiEdit3 size={12} /> Edit Link
                  </button>
                </div>

                <h3
                  onClick={() => setActive(project)}
                  className="mt-2 text-xl font-bold text-white hover:text-zinc-300 cursor-pointer transition-colors"
                >
                  {project.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-zinc-300 hover:underline"
                  >
                    <FiExternalLink size={15} /> Live Project
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
                  >
                    <FiGithub size={15} /> Source
                  </a>
                </div>

                <button
                  onClick={() => setActive(project)}
                  className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
        onEditLink={(p) => {
          setActive(null);
          setEditingProject(p);
          setTempLive(p.live);
          setTempRepo(p.repo);
        }}
      />

      {/* Edit Link Modal Popup */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FiEdit3 /> Set Links for Project
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="text-zinc-400 hover:text-white text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-xs text-zinc-400">
              Update links for <strong className="text-white">{editingProject.title}</strong>. Changes save instantly in your session.
            </p>

            <form onSubmit={handleSaveLinks} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Live Demo / Website URL
                </label>
                <input
                  type="url"
                  required
                  value={tempLive}
                  onChange={(e) => setTempLive(e.target.value)}
                  placeholder="https://your-project-demo.vercel.app"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs text-white outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  GitHub Repository URL
                </label>
                <input
                  type="url"
                  required
                  value={tempRepo}
                  onChange={(e) => setTempRepo(e.target.value)}
                  placeholder="https://github.com/Shivakumar936/your-repo"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs text-white outline-none focus:border-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="rounded-lg border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-1.5 rounded-lg px-5 py-2 text-xs font-semibold"
                >
                  {savedSuccess ? <><FiCheck /> Saved!</> : "Save Project Links"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}

