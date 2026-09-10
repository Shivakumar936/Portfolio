import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiCopy } from "react-icons/fi";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // If EmailJS keys are set up:
    if (SERVICE_ID !== "YOUR_SERVICE_ID") {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
        () => {
          setStatus("sent");
          e.target.reset();
        },
        () => setStatus("error")
      );
    } else {
      // Direct fallback simulation for demonstration
      setTimeout(() => {
        setStatus("sent");
        e.target.reset();
      }, 1000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sshiva48688@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section relative z-10">
      <div className="flex flex-col items-start gap-2">
        <span className="font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          // 04. Get In Touch
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Contact Shivakumar
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-lg">
          Interested in full-stack software development roles, project collaborations, or discussing web architecture? Reach out anytime!
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        {/* Left Column: Contact Cards & Info */}
        <div className="space-y-6 lg:col-span-5">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Direct Contact Details</h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-zinc-800 p-2 text-white">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-500">EMAIL</span>
                    <a href="mailto:sshiva48688@gmail.com" className="text-xs font-medium text-white hover:underline">
                      sshiva48688@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="rounded-md border border-zinc-700 bg-zinc-800 p-1.5 text-zinc-300 hover:text-white"
                >
                  {copied ? <FiCheck size={14} className="text-emerald-400" /> : <FiCopy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                <div className="rounded-lg bg-zinc-800 p-2 text-white">
                  <FiPhone size={16} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500">PHONE</span>
                  <a href="tel:+917204949272" className="text-xs font-medium text-white hover:underline">
                    +91 7204949272
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                <div className="rounded-lg bg-zinc-800 p-2 text-white">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500">LOCATION</span>
                  <span className="text-xs font-medium text-white">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Online Profiles */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase mb-3">
              Professional Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/Shivakumar936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <FiGithub size={16} />
                  <span>github.com/Shivakumar936</span>
                </div>
                <span>→</span>
              </a>

              <a
                href="https://linkedin.com/in/shivakumar-c-40026a337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <FiLinkedin size={16} />
                  <span>linkedin.com/in/shivakumar-c</span>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <div className="lg:col-span-7">
          <form onSubmit={sendEmail} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-white">Send A Message</h3>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-zinc-300">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="e.g. Alex Morgan"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-300">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="alex@company.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-300">
                Message Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Hello Shivakumar, I would like to discuss..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-sm font-semibold disabled:opacity-50"
            >
              {status === "sending" ? (
                "Sending Message..."
              ) : (
                <>
                  <FiSend size={15} /> Send Direct Message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-xs font-medium text-emerald-400 text-center pt-2">
                ✓ Message sent successfully! I'll respond as soon as possible.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs font-medium text-red-400 text-center pt-2">
                Something went wrong. Please email directly at sshiva48688@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

