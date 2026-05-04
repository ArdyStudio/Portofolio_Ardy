import { motion } from 'motion/react';
import { GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { timeline } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-black flex items-center gap-4">
                <span className="text-neon-blue">01.</span> ABOUT ME
              </h2>
              <div className="h-1 w-20 bg-neon-blue rounded-full" />
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-bold">Ardy Andhika Haydar</span>, 
                an IT student at <span className="text-neon-blue font-medium">Universitas Esa Unggul</span> (2021–2026). 
                I am a specialist who bridges the gap between deep <span className="text-white font-semibold">Artificial Intelligence</span> and 
                highly interactive <span className="text-white font-semibold">Frontend Development</span>.
              </p>
              <p>
                My primary focus lies in <span className="text-white font-semibold">Artificial Intelligence</span>, specifically in Computer Vision and 
                Neural Networks. I develop intelligent systems that turn complex data into actionable patterns, 
                building models that are not just accurate, but optimized for real-world performance.
              </p>
              <p>
                I complement my technical core with high-end <span className="text-white font-semibold">Frontend Development</span> and 
                <span className="text-white font-semibold">Augmented Reality</span>. Using tools like React, TypeScript, and Unity, 
                I create immersive digital environments that blend the boundaries between physical reality and intelligent software.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-4 text-neon-blue">
                <GraduationCap size={24} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div>
                <p className="text-white font-bold tracking-tight">Universitas Esa Unggul</p>
                <p className="text-zinc-500">Teknik Informatika (2021–2026)</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-sm text-white/60 italic font-mono">"Start small, think big, build intelligent."</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline Side */}
          <div className="space-y-12">
            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
              <Calendar className="text-neon-purple" />
              MY JOURNEY
            </h3>

            <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-neon-purple before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group outline-none"
                >
                  {/* Bullet */}
                  <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-zinc-900 border-4 border-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.5)] z-20 group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className="glass p-6 rounded-2xl hover:border-neon-purple/50 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 bg-neon-purple/10 text-neon-purple font-mono text-xs font-bold rounded-lg mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-neon-purple/80 text-sm font-medium mb-3">{item.description}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
