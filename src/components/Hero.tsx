import { motion } from 'motion/react';
import profileImg from "../assets/MyFoto.jpeg";
import { 
  ArrowRight, 
  Github, 
  Instagram, 
  ExternalLink, 
  Terminal, 
  Code2, 
  Palette, 
  Coffee, 
  Atom, 
  Box 
} from 'lucide-react';

export default function Hero() {
  const floatingSkills = [
    { icon: Terminal, color: 'text-yellow-400', label: 'Python', delay: 0, pos: 'top-[10%] -right-4' },
    { icon: Code2, color: 'text-orange-500', label: 'HTML', delay: 0.5, pos: 'top-[25%] -left-4' },
    { icon: Atom, color: 'text-cyan-400', label: 'React', delay: 1, pos: 'top-1/2 -right-6' },
    { icon: Palette, color: 'text-blue-500', label: 'CSS', delay: 1.5, pos: 'bottom-1/2 -left-6' },
    { icon: Box, color: 'text-white', label: 'Unity', delay: 2, pos: 'bottom-[25%] -right-4' },
    { icon: Coffee, color: 'text-red-400', label: 'Java', delay: 2.5, pos: 'bottom-[10%] -left-4' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,transparent_70%)] opacity-50" />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            <span className="text-neon-blue font-mono text-[10px] font-bold tracking-widest uppercase">AVAILABLE FOR PROJECTS</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              ARDY ANDHIKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple glow-text-blue">HAYDAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">
              AI Engineer <span className="text-zinc-600">|</span> Frontend Developer <span className="text-zinc-600">|</span> AR Enthusiast
            </p>
          </div>

          <p className="max-w-lg text-zinc-500 leading-relaxed text-sm md:text-base">
            Building intelligent systems, interactive interfaces, and immersive AR experiences. 
            Designing the future where data meets design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-neon-blue text-black font-black text-sm rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center gap-2 group"
            >
              VIEW PROJECTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              CONTACT ME <ExternalLink size={16} className="opacity-50" />
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <a href="https://github.com/ArdyStudio" target="_blank" rel="noreferrer" className="hover:text-neon-blue"><Github size={20} /></a>
            <a href="https://instagram.com/ardy__10" target="_blank" rel="noreferrer" className="hover:text-neon-purple"><Instagram size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group hidden lg:block"
        >
          <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-full group-hover:bg-neon-purple/20 transition-colors duration-700" />
          <div className="relative z-10 w-[450px] aspect-[4/5] mx-auto rounded-[40px] overflow-hidden border-2 border-white/20 p-2 glass group-hover:border-neon-blue/50 transition-colors duration-500">
            <div className="w-full h-full rounded-[32px] overflow-hidden bg-zinc-900 border border-white/5 relative">
                <img src={profileImg} 
                alt="profile" 
                className="w-full h-full object-cover object-top"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end pl-5 pb-8 pr-8 pt-8">
                <p className="text-neon-blue font-mono text-[10px] tracking-widest uppercase mb-2">Specializing In</p>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold tracking-tight text-white/90">Artificial Intelligence</h3>
                  <h3 className="text-sm font-bold tracking-tight text-white/90">Frontend Development</h3>
                  <h3 className="text-sm font-bold tracking-tight text-white/90">Augmented Reality</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Skill Icons */}
          {floatingSkills.map((skill, index) => (
            <motion.div 
              key={index}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3 + index, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: skill.delay 
              }}
              className={`absolute ${skill.pos} bg-zinc-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl z-20 flex flex-col items-center gap-1 group/skill hover:border-neon-blue/50 transition-colors`}
            >
              <skill.icon size={20} className={`${skill.color} group-hover/skill:scale-110 transition-transform`} />
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-tighter">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
