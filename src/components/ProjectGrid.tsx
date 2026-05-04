import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const categories = ['All', 'Artificial Intelligence', 'Frontend Development', 'Augmented Reality'];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black flex items-center gap-4">
              <span className="text-neon-blue">03.</span> SELECTED PROJECTS
            </h2>
            <div className="h-1 w-20 bg-neon-blue rounded-full" />
          </div>

          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'text-zinc-500 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} layout>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.a 
          href="https://github.com/ArdyStudio" 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="mt-20 block glass p-12 rounded-[40px] text-center border-neon-purple/20 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="text-3xl font-black mb-4 relative z-10">Want to see more?</h3>
          <p className="text-zinc-500 mb-8 max-w-lg mx-auto relative z-10">I'm always working on new experiments in AI and AR. Check my GitHub for the latest source code and prototypes.</p>
          <div 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-2xl group-hover:bg-neon-blue transition-colors shadow-xl relative z-10"
          >
            EXPLORE GITHUB
          </div>
        </motion.a>
      </div>
    </section>
  );
}
