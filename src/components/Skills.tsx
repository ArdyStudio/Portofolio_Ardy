import { motion } from 'motion/react';
import { Brain, Code, Box, Server, Database, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    color: 'text-neon-blue',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision'],
    bg: 'bg-neon-blue/5',
    border: 'border-neon-blue/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]'
  },
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-neon-purple',
    skills: ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'HTML', 'CSS'],
    bg: 'bg-neon-purple/5',
    border: 'border-neon-purple/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]'
  },
  {
    title: 'Augmented Reality',
    icon: Box,
    color: 'text-amber-400',
    skills: ['Unity', 'Vuforia SDK'],
    bg: 'bg-amber-400/5',
    border: 'border-amber-400/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]'
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-emerald-400',
    skills: ['Node.js', 'Laravel'],
    bg: 'bg-emerald-400/5',
    border: 'border-emerald-400/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]'
  },
  {
    title: 'Data',
    icon: Database,
    color: 'text-rose-400',
    skills: ['Pandas', 'NumPy', 'Matplotlib'],
    bg: 'bg-rose-400/5',
    border: 'border-rose-400/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,113,133,0.2)]'
  },
  {
    title: 'Tools',
    icon: PenTool,
    color: 'text-sky-400',
    skills: ['Figma', 'Blender'],
    bg: 'bg-sky-400/5',
    border: 'border-sky-400/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black flex items-center gap-4">
              <span className="text-neon-purple">02.</span> CORE SKILLS
            </h2>
            <div className="h-1 w-20 bg-neon-purple rounded-full" />
            <p className="text-zinc-500 max-w-lg">My specialized toolkit for building the next generation of intelligent and immersive digital products.</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
            Specialized in AI & AR
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group ${cat.bg} border ${cat.border} p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 ${cat.glow}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.bg} border ${cat.border} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12`}>
                <cat.icon className={`w-8 h-8 ${cat.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-zinc-400 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
