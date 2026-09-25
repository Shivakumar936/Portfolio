import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2 sm:p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative flex flex-col h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 p-4 sm:p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3 sm:pb-4">
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-zinc-800 p-2 text-white border border-zinc-700">
                  <FiFileText size={18} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Shivakumar C — Resume</h3>
                  <p className="text-xs font-mono text-zinc-400">AI Full-Stack Developer • CS Engineer</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Shivakumar_C_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition hover:bg-zinc-200"
                >
                  <FiDownload size={14} /> Download
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  <FiExternalLink size={14} /> New Tab
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close resume modal"
                  className="rounded-full border border-zinc-800 bg-zinc-900 p-1.5 text-zinc-400 transition hover:border-zinc-500 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="relative mt-3 sm:mt-4 flex-1 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <iframe
                src="/resume.pdf#view=FitH"
                title="Shivakumar C Resume PDF"
                className="h-full w-full border-0 bg-white"
              />
            </div>

            {/* Fallback & Helper footer */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-zinc-400 px-1">
              <span>Looking to hire? Contact via sshiva48688@gmail.com</span>
              <a
                href="/resume.pdf"
                download="Shivakumar_C_Resume.pdf"
                className="text-zinc-300 underline hover:text-white"
              >
                Direct Download Link (.pdf)
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
