import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";
import { profile, socials } from "../assets/assets";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [showTurnstile, setShowTurnstile] = useState(false);
  const turnstileRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Basic HTML5 validation check before showing Turnstile
    const formEl = e.currentTarget.closest("form");
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    if (!showTurnstile) {
      setShowTurnstile(true); // render Turnstile widget
      return;
    }

    if (!turnstileToken) {
      alert("Please wait for the security check to complete.");
      return;
    }

    handleSubmit();
  };

  const handleSubmit = async () => {
    setStatus("loading");

    try {
      const timestamp = new Date().toLocaleString();

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          timestamp,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTurnstileToken(null);
      setShowTurnstile(false);
      turnstileRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setShowTurnstile(false);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // Auto-submit once Turnstile resolves (seamless UX)
  const handleTurnstileSuccess = (token) => {
    setTurnstileToken(token);
    handleSubmit();
  };

  const inputClass = (name) =>
    `w-full text-sm px-4 py-2.5 rounded-xl border outline-none transition-all duration-200 bg-slate-50 text-slate-900 placeholder-slate-400 ${
      focused === name
        ? "border-blue-400 ring-3 ring-blue-100 bg-white"
        : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <section id="contact" className="reveal">
      <div className="card p-6 sm:p-8">
        <div className="section-heading mb-1">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
            </svg>
          </div>
          Contact
        </div>
        <p className="text-sm text-slate-400 mb-6">Have a project in mind? Let's build something great.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Form */}
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={inputClass("name")}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={inputClass("email")}
            />
            <textarea
              placeholder="Your message..."
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`${inputClass("message")} resize-none`}
            />

            {/* Turnstile — only mounts after button click */}
            {showTurnstile && (
              <Turnstile
                ref={turnstileRef}
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={handleTurnstileSuccess}
                onExpire={() => { setTurnstileToken(null); setShowTurnstile(false); }}
                onError={() => { setTurnstileToken(null); setShowTurnstile(false); }}
                options={{ theme: "light" }}
              />
            )}

            <button
              onClick={handleButtonClick}
              disabled={status === "loading"}
              className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" && (
                <>
                  <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                  Sending...
                </>
              )}
              {status === "sent" && (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Failed. Try again.
                </>
              )}
              {status === "idle" && (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
              <ContactRow
                icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>}
                label="Email" value={profile.email} href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                label="Phone" value={profile.phone} href={`tel:${profile.phone}`}
              />
              <ContactRow
                icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                label="Location" value={profile.location}
              />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Find me on</p>
              <div className="flex gap-2 flex-wrap">
                {socials.map((s) => (
                  <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-blue-200 transition-all duration-200"
                    title={s.label}>
                    <SocialIcons icon={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-lg bg-red-50 border border-blue-100 flex items-center justify-center text-red-500 flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        {href ? (
          <a href={href} className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors truncate block">{value}</a>
        ) : (
          <p className="text-sm font-medium text-slate-700 truncate">{value}</p>
        )}
      </div>
    </div>
  );
}