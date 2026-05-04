import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, User, Cpu, Briefcase, Mail, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', icon: Rocket },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Skills', href: '/#skills', icon: Cpu },
  { name: 'Projects', href: '/#projects', icon: Briefcase },
  { name: 'Contact', href: '/#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-neon-blue/50 group-hover:border-neon-blue transition-colors duration-300 shadow-[0_0_15px_rgba(0,242,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] overflow-hidden">
              <Code2 className="text-neon-blue group-hover:scale-110 transition-transform duration-500" size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-neon-green rounded-full border-2 border-zinc-950 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-white font-black tracking-tight text-xl group-hover:text-neon-blue transition-colors">Ardy</span>
              <span className="text-neon-blue font-mono font-bold text-xl scale-x-110 ml-0.5 animate-pulse">_</span>
            </div>
            <span className="text-zinc-500 font-mono text-[9px] tracking-[0.3em] uppercase group-hover:translate-x-1 transition-transform">./studio_v1.0</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavLinkClick(link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-neon-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button 
            onClick={() => handleNavLinkClick('/#contact')}
            className="px-5 py-2 bg-white/10 hover:bg-neon-blue hover:text-black border border-white/10 rounded-full text-xs font-bold transition-all duration-300 glow-border-blue"
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="flex items-center gap-3 text-lg font-medium text-zinc-300 hover:text-neon-blue py-2 border-b border-white/5"
              >
                <link.icon size={20} className="text-neon-blue" />
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
