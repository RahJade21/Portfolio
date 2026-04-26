import { techStack } from "../assets/assets";

export default function TechStack({ sidebar = false }) {
  const doubled = [...techStack, ...techStack];

  return (
    <section id={sidebar ? undefined : "skills"} className={sidebar ? undefined : "reveal"}>
      <div className="card p-5">
        {/* Header */}
        <div className="section-heading mb-4">
          <div className="section-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          Tech Arsenal
        </div>

        {/* Logo grid — 4 cols always so icons have room */}
        <div className="grid grid-cols-4 gap-2.5">
          {techStack.map((tech) => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </div>

        {/* Infinite scroll strip */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="carousel-wrapper">
            <div className="carousel-track gap-2.5">
              {doubled.map((tech, i) => (
                <div
                  key={`${tech.id}-${i}`}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 flex-shrink-0 hover:border-blue-200 hover:bg-red-50 transition-colors group"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-4 h-4 object-contain flex-shrink-0"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <span className="text-xs font-medium text-slate-600 group-hover:text-blue-700 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechItem({ tech }) {
  return (
    <div
      title={tech.name}
      className="group flex flex-col items-center gap-1.5 p-2.5 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-red-50/50 hover:shadow-sm transition-all duration-200 cursor-default"
    >
      {/* Fixed-size container prevents parent from squishing the logo */}
      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
        <img
          src={tech.logo}
          alt={tech.name}
          width={36}
          height={36}
          className="object-contain group-hover:scale-110 transition-transform duration-200"
          style={{ width: 36, height: 36 }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback */}
        <div
          className="w-9 h-9 rounded-lg items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: tech.color, display: "none" }}
        >
          {tech.name.slice(0, 2).toUpperCase()}
        </div>
      </div>
      <span className="text-[10px] font-medium text-slate-500 group-hover:text-red-600 text-center leading-tight transition-colors w-full truncate">
        {tech.name}
      </span>
    </div>
  );
}
