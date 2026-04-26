import { useState } from "react";
import { profile } from "../assets/assets";

const NAV_ITEMS = [
  { href: "#profile",    label: "Profile"    },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#profile")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold group-hover:bg-red-700 transition-colors">
            {profile.avatarInitials}
          </div>
          <span className="font-bold text-sm text-slate-900 hidden sm:block">
            {profile.name}
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            className="hidden sm:inline-flex btn-primary text-xs py-2 px-4"
          >
            Resume ↓
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left px-3 py-2 text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all"
            >
              {item.label}
            </button>
          ))}
          <a href={profile.resumeUrl} className="btn-primary mt-1 justify-center text-sm">
            Download Resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
