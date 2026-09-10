import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub, FiCheckCircle, FiEdit3 } from "react-icons/fi";

export default function ProjectModal({ project, onClose, onEditLink }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Responsive Image Banner */}
            {project.image && (
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            )}

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {project.desc}
            </p>

            {/* Highlights List */}
            {project.highlights && (
              <div className="mt-6 space-y-2 border-y border-zinc-800/80 py-4">
                <h4 className="font-mono text-xs font-semibold uppercase text-zinc-400">
                  Key Technical Highlights
                </h4>
                <div className="grid gap-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <FiCheckCircle className="mt-0.5 text-white shrink-0" size={14} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-4">
              <h4 className="font-mono text-xs font-semibold uppercase text-zinc-400 mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
              <div className="flex items-center gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold"
                >
                  <FiExternalLink size={15} /> Visit Project
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium"
                >
                  <FiGithub size={15} /> Source Code
                </a>
              </div>

              {onEditLink && (
                <button
                  onClick={() => onEditLink(project)}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white underline transition-colors"
                >
                  <FiEdit3 size={13} /> Edit Project Links
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

