import { profile } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="mt-8 pb-8">
      <div className="card px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center w-full gap-2">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-600">{profile.name}</span>. All rights reserved.
          </p>
        </div>
        {/* <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Built with</span>
          <span className="font-semibold text-red-500">React</span>
          <span>·</span>
          <span className="font-semibold text-red-500">Vite</span>
          <span>·</span>
          <span className="font-semibold text-red-500">Tailwind v4</span>
        </div> */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-slate-400 hover:text-red-600 font-medium flex items-center gap-1 transition-colors flex-shrink-0 cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
