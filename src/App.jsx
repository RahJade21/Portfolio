import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Organizations from "./components/Organizations";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile } from "./assets/assets";

export default function App() {
  const [activeSection, setActiveSection] = useState("profile");

  /* ── Scroll reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Active section tracking ── */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* ── Two-column layout ── */}
        <div className="flex gap-6 xl:gap-8 items-start">

          {/* ── Main content (left / center) ── */}
          <main className="flex-1 min-w-0 flex flex-col gap-5">
            <section id="profile"><Hero /></section>
            <section id="experience"><Experience /></section>
            <section id="education"><Education /></section>
            <section id="skills" className="block lg:hidden"><TechStack /></section>
            <section id="organizations"><Organizations /></section>
            <section id="projects"><Projects /></section>
            <section id="certifications"><Certifications /></section>
            <section id="contact"><Contact /></section>
          </main>

          {/* ── Right sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-4 w-80 xl:w-96 flex-shrink-0 sticky top-20 self-start">

            {/* Profile photo card */}
            <div className="card overflow-hidden">
              {profile.avatarUrl ? (
                <div className="relative">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-72 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-bold text-white text-base">{profile.name}</p>
                    <p className="text-xs text-white/70">{profile.location}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-56 bg-gradient-to-br from-red-400 via-red-600 to-orange-800 flex items-center justify-center">
                  <span className="text-white text-7xl font-extrabold opacity-90">
                    {profile.avatarInitials}
                  </span>
                </div>
              )}
              <div className="p-5">
                {!profile.avatarUrl && (
                  <>
                    <p className="font-bold text-base text-slate-900">{profile.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5 mb-3">{profile.location}</p>
                  </>
                )}
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{profile.title}</p>
                <div className="flex gap-2">
                  <a href={profile.resumeUrl} className="btn-primary text-sm py-2.5 flex-1 justify-center">
                    Resume ↓
                  </a>
                  <a href={`mailto:${profile.email}`} className="btn-ghost text-sm py-2.5 flex-1 justify-center">
                    Let's Talk →
                  </a>
                </div>
              </div>
            </div>

            {/* Nav tabs card */}
            <div className="card p-2">
              {[
                { id: "profile",        label: "Profile",        icon: "👤" },
                { id: "experience",     label: "Experience",     icon: "💼" },
                { id: "education",      label: "Education",      icon: "🎓" },
                { id: "organizations",  label: "Organizations",  icon: "🏛️" },
                { id: "projects",       label: "Projects",       icon: "🚀" },
                { id: "certifications", label: "Certifications", icon: "🏅" },
                { id: "contact",        label: "Contact",        icon: "✉️" },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`nav-tab w-full text-left text-sm py-2.5 ${activeSection === id ? "active" : ""}`}
                >
                  <span className="text-base">{icon}</span>
                  {label}
                </button>
              ))}
            </div>

            {/* Tech stack */}
            <TechStack sidebar />

            {/* Organizations */}
            <Organizations sidebar />

            {/* Certifications */}
            {/* <Certifications sidebar /> */}

            {/* Availability */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-slate-700">Available for work</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Open to full-time roles and freelance projects.
              </p>
            </div>
          </aside>
        </div>

        <Footer />
      </div>
    </div>
  );
}