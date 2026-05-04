import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 p-6">
        <h2 className="text-4xl font-black">Project Not Found</h2>
        <Link to="/" className="px-6 py-3 bg-neon-blue text-black font-bold rounded-xl">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-mono text-xs tracking-widest">BACK TO OVERVIEW</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="px-4 py-1.5 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-xs font-black tracking-widest text-neon-blue uppercase">
                {project.category} PROJECT
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{project.title}</h1>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">{project.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
                  <Github size={20} /> GITHUB REPO
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-xl hover:scale-105 transition-transform">
                  <ExternalLink size={20} /> LIVE DEMO
                </a>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black text-zinc-500 tracking-widest uppercase">TECH STACK</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_5px_rgba(0,242,255,1)]" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-white/5">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">The Challenge</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{project.problem}</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">The Solution</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{project.solution}</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img src={project.thumbnail} alt={project.title} className="w-full object-cover" />
            </div>

            <div className="glass p-8 rounded-[32px] border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-neon-blue" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-1 h-1 rounded-full bg-neon-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-[32px] border border-dashed border-white/20">
               <h4 className="text-sm font-black text-zinc-500 tracking-widest uppercase mb-4">WANT TO DISCUSS THIS?</h4>
               <p className="text-zinc-400 mb-6 text-sm">Send me an email if you're interested in the technical architecture or want more details about the implementation.</p>
               <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl font-bold">SEND AN EMAIL</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
