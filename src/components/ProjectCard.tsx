import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-neon-blue/30 transition-all duration-500"
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase text-neon-blue">
          {project.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{tech}</span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
        <p className="text-zinc-500 text-sm mb-6 line-clamp-2">{project.tagline}</p>
        
        <Link 
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
        >
          VIEW DETAIL 
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-neon-blue group-hover/btn:text-black transition-all">
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
