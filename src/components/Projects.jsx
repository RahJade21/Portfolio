import { useState } from "react";
import { projects } from "../assets/assets";

const ALL_TAGS = ["All", "Security", "Python", "React", "Node.js", "AI"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === filter.toLowerCase())
        );

  // Double for infinite scroll
  const carousel = [...projects, ...projects];

  return (
    <section id="projects" className="reveal">
      <div className="card p-6 sm:p-8">
        {/* Header */}
        <div className="section-heading mb-1">
          <div className="section-icon">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          Projects
        </div>
        <p className="text-sm text-slate-400 mb-5">Things I've built and shipped.</p>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                filter === tag
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:border-red-200 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Infinite carousel — always shows all projects */}
        <div className="carousel-wrapper mb-6">
          <div className="carousel-track gap-4 pb-1">
            {carousel.map((project, i) => (
              <ProjectCard key={`${project.id}-${i}`} project={project} />
            ))}
          </div>
        </div>

        {/* Filtered grid */}
        {filter !== "All" && (
          <div>
            <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">
              Filtered: {filter} ({filtered.length} projects)
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {filtered.map((p) => (
                <ProjectListItem key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {filter === "All" && (
          <div className="grid sm:grid-cols-2 gap-3">
            {projects.map((p) => (
              <ProjectListItem key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    // overflow-visible is important so the popup isn't clipped by the card
    <div className="relative w-64 flex-shrink-0 rounded-xl border border-slate-200 overflow-visible hover:border-blue-200 hover:shadow-md transition-all duration-200 group bg-white">

      {/* ── Hover popup ── */}
      <div
        className="
          absolute bottom-full left-0 mb-3 w-64 z-50
          bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl
          opacity-0 group-hover:opacity-100 pointer-events-none
          translate-y-2 group-hover:translate-y-0
          transition-all duration-200 ease-out
        "
      >
        <p className="font-semibold text-slate-100 mb-1">{project.title}</p>
        <p className="text-slate-300 leading-relaxed">{project.description}</p>
        {/* Arrow pointing down */}
        <div className="absolute top-full left-5 border-4 border-transparent border-t-slate-900" />
      </div>

      {/* ── Card image ── */}
      {project.image ? (
        <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="project-img group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
          />
        </a>
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center rounded-t-xl">
          <span className="text-3xl font-extrabold text-blue-200">
            {project.title.slice(0, 2)}
          </span>
        </div>
      )}

      {/* ── Card body ── */}
      <div className="p-4">
        <p className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
          {project.title}
        </p>
        <p className="text-xs text-slate-400 mt-0.5 mb-2">{project.subtitle}</p>
        <div className="flex gap-1.5 flex-wrap">
          {project.tags.slice(0, 6).map((tag) => (
            <span key={tag} className="tag text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectListItem({ project }) {
  return (
    <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-red-50/30 transition-all duration-200 group">

      {/* ── Hover popup ── */}
      <div
        className="
          absolute bottom-full left-0 mb-3 w-72 z-50
          bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl
          opacity-0 group-hover:opacity-100 pointer-events-none
          translate-y-2 group-hover:translate-y-0
          transition-all duration-200 ease-out
        "
      >
        <p className="font-semibold text-slate-100 mb-1">{project.title}</p>
        <p className="text-slate-300 leading-relaxed">{project.description}</p>
        {/* Arrow pointing down */}
        <div className="absolute top-full left-5 border-4 border-transparent border-t-slate-900" />
      </div>

      {/* ── Icon ── */}
      <div className="w-9 h-9 rounded-lg bg-red-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-600">
        {project.title.slice(0, 2).toUpperCase()}
      </div>

      {/* ── Text ── */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-slate-900 group-hover:text-red-600 transition-colors truncate">
          {project.title}
        </p>
        <p className="text-xs text-slate-400 truncate">{project.subtitle}</p>
      </div>

      {/* ── Links ── */}
      <div className="flex gap-2 flex-shrink-0">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-red-500 hover:text-blue-700 font-medium"
          >
            Live ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-slate-700 font-medium"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}