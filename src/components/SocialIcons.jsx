import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function SocialIcons({ icon, size = 20, className = "" }) {
  const s = size;
  const icons = {
    github: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <Github />
      </svg>
    ),
    linkedin: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <Linkedin />
      </svg>
    ),
    instagram: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <Instagram />
      </svg>
    ),
    mail: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <Mail />
      </svg>
    )
  };
  return icons[icon] ?? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}
