import { experience } from "../assets/assets";

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="card p-6 sm:p-8">
        {/* Header */}
        <div className="section-heading mb-1">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          Experience
        </div>
        <p className="text-sm text-slate-400 mb-6">My professional journey and career milestones.</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[4px] top-2 bottom-2 w-px bg-slate-200" />

          <div className="flex flex-col gap-0">
            {experience.map((job, i) => (
              <ExperienceItem key={job.id} job={job} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ job, isLast }) {
  return (
    <div className="relative pl-7 pb-7 group">
      {/* Dot */}
      <div className="timeline-dot absolute left-0 top-1" />

      {/* Content */}
      <div className="rounded-xl border border-slate-100 p-4 bg-slate-50/50 hover:bg-red-50/40 hover:border-blue-100 transition-all duration-200">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-bold text-sm text-slate-900">{job.role}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 flex-shrink-0"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m2 17 10-7 10 7"/></svg>
              {job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-red-600 font-medium transition-colors">
                  {job.company} ↗
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-medium">{job.company}</span>
              )}
            </div>
          </div>
          <span className="text-xs text-slate-400 font-josefin bg-white border border-slate-200 px-2 py-0.5 rounded-md flex-shrink-0">
            {job.period}
          </span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-3">{job.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
