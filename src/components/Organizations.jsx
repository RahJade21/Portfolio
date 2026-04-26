import { organizations } from "../assets/assets";

export default function Organizations({ sidebar = false }) {
  return (
    <section id={sidebar ? undefined : "organizations"} className={sidebar ? undefined : "reveal"}>
      <div className="card p-5">
        <div className="section-heading mb-4">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          Organization
        </div>

        <div className="flex flex-col gap-3">
          {organizations.map((org, i) => (
            <div
              key={org.id}
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-red-50/30 transition-all duration-200 group"
            >
              {/* Number badge */}
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-red-700 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{org.name}</h3>
                    <p className="text-xs text-red-600 font-semibold mt-0.5">{org.role}</p>
                  </div>
                  <span className="text-xs text-slate-400 font-josefin bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md flex-shrink-0">
                    {org.period}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
