import { certifications } from "../assets/assets";

export default function Certifications({ sidebar = false }) {
  return (
    <section id={sidebar ? undefined : "certifications"} className={sidebar ? undefined : "reveal"}>
      <div className="card p-5">
        <div className="section-heading mb-4">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
          </div>
          Certifications
        </div>

        {/* Always single column — works in sidebar and main */}
        <div className="flex flex-col gap-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-red-50/30 transition-all duration-200 group"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 rounded-xl bg-red-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#eb4625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs text-slate-900 leading-snug truncate">{cert.name}</p>
                  <p className="text-xs text-slate-400 truncate">{cert.issuer}</p>
                </div>
                <span className="text-[10px] font-josefin font-bold text-red-500 bg-red-50 border border-blue-100 px-1.5 py-0.5 rounded-md flex-shrink-0">
                  {cert.year}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
