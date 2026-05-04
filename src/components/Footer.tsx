import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(188,19,254,0.5)]">
                <span className="text-white font-black">A</span>
              </div>
              <span className="text-white font-bold tracking-tight">ARDY ANDHIKA HAYDAR</span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs font-medium">Artificial Intelligence Engineer, Frontend Developer, and AR Enthusiast based in Indonesia.</p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="text-white font-black text-xs tracking-widest uppercase">ArdyStudio</h4>
              <ul className="text-zinc-500 text-sm space-y-2 font-medium">
                <li><a href="https://github.com/ArdyStudio" target="_blank" rel="noreferrer" className="hover:text-neon-purple transition-colors">GitHub</a></li>
                <li><a href="https://instagram.com/ardy__10" target="_blank" rel="noreferrer" className="hover:text-neon-purple transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-[0.2em]">&copy; {currentYear} ARDY ANDHIKA HAYDAR. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase underline-offset-4 decoration-neon-blue">
            <span className="w-1 h-1 rounded-full bg-neon-blue" />
            ArdyStudio
          </div>
        </div>
      </div>
    </footer>
  );
}
