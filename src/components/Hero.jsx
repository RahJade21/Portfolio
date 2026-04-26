import { profile, socials } from "../assets/assets";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section id="profile" className="reveal">
      {/* Main hero card */}
      <div className="card p-6 sm:p-8 mb-4 relative overflow-hidden">
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Text */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to Opportunities
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
              {profile.name}
            </h1>
            <p className="text-red-600 font-semibold text-base mb-3">
              {profile.title}
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              {profile.bio}
            </p>

            {/* Location */}
            <p className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-6">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {profile.location}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={profile.resumeUrl} className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                Let's Talk →
              </a>
            </div>
          </div>

          {/* Avatar (desktop) */}
          <div className="hidden sm:block flex-shrink-0">
            {profile.avatarUrl ? (
              <div className="relative">
                <img
                  src={profile.cardProfileUrl}
                  alt={profile.name}
                  className="w-36 h-40 object-cover rounded-2xl shadow-lg"
                />
                {/* <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm rounded-xl p-2 text-white">
                  <p className="text-xs font-bold leading-tight">{profile.name}</p>
                  <p className="text-xs text-white/70">{profile.location}</p>
                </div> */}
              </div>
            ) : (
              <div className="w-36 h-40 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-extrabold">{profile.avatarInitials}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom row: socials + education quick view */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Socials card */}
        <div className="card p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Connect</p>
          <div className="flex gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                {/* Icon box with soft bg */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-red-50 group-hover:border-blue-200 group-hover:text-red-600 transition-all duration-200 group-hover:scale-110 group-hover:shadow-sm">
                  <SocialIcons icon={s.icon} size={20} />
                </div>
                {/* Label below */}
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide group-hover:text-red-500 transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Education quick card */}
        <div className="card p-5 flex items-center gap-4">
          <div className="section-icon w-10 h-10 rounded-xl flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-0.5">Education</p>
            <p className="font-bold text-sm text-slate-900">President University</p>
            <p className="text-xs text-slate-500">Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}
