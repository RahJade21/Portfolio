import { education } from "../assets/assets";

export default function Education() {
  return (
    <section id="education" className="reveal">
      <div className="card p-6 sm:p-8">
        <div className="section-heading mb-6">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
            </svg>
          </div>
          Education
        </div>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-red-50/30 transition-all duration-200 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb4625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{edu.degree}</h3>
                    {edu.major && (
                      <p className="text-xs text-slate-500 mt-0.5">{edu.major}</p>
                    )}
                    <p className="text-xs font-semibold text-red-600 mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-josefin bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md block">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs flex w-full h-full xs:justify-start sm:justify-end text-green-600 font-semibold mt-1">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
