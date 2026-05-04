import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Instagram, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ardiandhika9938@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/2">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black flex items-center gap-4">
                <span className="text-neon-purple">04.</span> CONTACT ME
              </h2>
              <div className="h-1 w-20 bg-neon-purple rounded-full" />
            </div>
            
            <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-md">
              Let's build something intelligent together. I'm open to collaborations and opportunities.
            </p>

            <div className="space-y-4">
              <p className="text-xs font-black text-zinc-500 tracking-widest uppercase">DIRECT EMAIL</p>
              <div className="flex items-center gap-4 p-4 glass rounded-2xl w-fit group border-neon-blue/20">
                <Mail className="text-neon-blue" size={20} />
                <span className="font-mono text-sm md:text-base font-bold">{email}</span>
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-zinc-500" />}
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <p className="text-xs font-black text-zinc-500 tracking-widest uppercase">SOCIALS</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/ArdyStudio", label: "GitHub", color: "hover:bg-zinc-800" },
                  { icon: Instagram, href: "https://instagram.com/ardy__10", label: "Instagram", color: "hover:bg-gradient-to-tr from-yellow-400 to-purple-600" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border-white/5 space-y-6 shadow-2xl relative group"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors" />
              </div>
            </div>
            <div className="space-y-2 relative z-10">
              <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Message</label>
              <textarea placeholder="Hi Ardy, I'm interested in..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors resize-none" />
            </div>
            <button className="w-full py-4 bg-neon-purple text-white font-black rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(188,19,254,0.3)] relative z-10 group/send">
              SEND MESSAGE <Send size={18} className="group-hover/send:translate-x-1 group-hover/send:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
