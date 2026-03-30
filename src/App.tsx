import { motion } from "motion/react";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  CheckCircle2, 
  Menu, 
  X,
  Briefcase,
  GraduationCap,
  Sparkles,
  Target,
  BarChart3,
  Palette
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-black">
          MOHAMMED ASKAR<span className="text-orange-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-xl text-center font-medium" onClick={() => setIsMenuOpen(false)}>
            Contact Me
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Creative Strategist
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.9] mb-6">
            MOHAMMED <br /> ASKAR<span className="text-orange-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
            Digital Marketer & Creative Strategist bridging the gap between creative storytelling and data-driven strategy.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all group">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-square rounded-3xl bg-gray-200 overflow-hidden shadow-2xl relative">
            <img 
              src="https://picsum.photos/seed/marketing/800/800" 
              alt="Mohammed Askar" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-black">Impact Focused</p>
                  <p className="text-xs text-gray-500">Strategy that delivers results.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">About Me</h2>
            <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
              I don't just market brands. <br /> I build connections.
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                My approach to digital marketing is rooted in a simple philosophy: creativity without strategy is just art, and strategy without creativity is just data.
              </p>
              <p>
                As a Digital Marketer and Creative Strategist, I specialize in crafting narratives that resonate with audiences while leveraging performance metrics to ensure every campaign hits its mark.
              </p>
              <p>
                Whether it's scaling a brand's social presence or architecting a multi-channel digital campaign, I focus on the human element behind the screen.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-4xl font-black text-black mb-1">5+</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-black text-black mb-1">50+</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Brands Scaled</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative p-8">
              <div className="absolute inset-0 border-2 border-gray-100 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <div className="bg-gray-50 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Palette className="text-orange-200" size={120} />
                </div>
                <div className="relative z-10">
                  <blockquote className="text-2xl font-medium text-gray-800 italic mb-6">
                    "Mohammed has a unique ability to see the 'why' behind the 'what'. His strategies are not just effective; they are inspiring."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-bold text-black">Creative Director</p>
                      <p className="text-sm text-gray-500">HACA Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Social Media Marketing", level: 95, icon: <Instagram size={20} /> },
    { name: "Content Strategy", level: 90, icon: <Palette size={20} /> },
    { name: "Performance Marketing", level: 85, icon: <BarChart3 size={20} /> },
    { name: "Creative Direction", level: 88, icon: <Sparkles size={20} /> },
    { name: "Branding", level: 92, icon: <Target size={20} /> },
  ];

  const tools = ["Meta Ads", "Google Ads", "Canva", "Adobe Suite", "Google Analytics", "Mailchimp", "TikTok Ads", "Copywriting"];

  return (
    <section id="skills" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold text-black">My Toolkit for Growth</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-black mb-8 flex items-center gap-2">
              <Sparkles className="text-orange-600" size={24} />
              Core Competencies
            </h4>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800 flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-orange-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-black"
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xl font-bold text-black mb-8 flex items-center gap-2">
              <Briefcase className="text-orange-600" size={24} />
              Tools & Technologies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div key={tool} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-3 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-orange-600" size={18} />
                  <span className="font-medium text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-black rounded-3xl text-white">
              <h5 className="text-lg font-bold mb-2">Always Learning</h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                The digital landscape changes every day. I dedicate 5 hours a week to learning new algorithms, tools, and consumer psychology trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "HACA Project",
      description: "A comprehensive digital transformation and creative strategy for a leading creative collective.",
      role: "Lead Strategist",
      outcome: "300% increase in social engagement and 40% growth in brand awareness.",
      image: "https://picsum.photos/seed/haca/600/400",
      tags: ["Strategy", "Branding", "Social"]
    },
    {
      title: "MyG Collaboration",
      description: "Creative campaign direction for a major tech retailer focusing on Gen-Z audience acquisition.",
      role: "Creative Director",
      outcome: "Successful launch of 3 viral campaigns with over 1M total impressions.",
      image: "https://picsum.photos/seed/myg/600/400",
      tags: ["Campaign", "Creative", "Gen-Z"]
    },
    {
      title: "Eco-Brand Launch",
      description: "Performance marketing strategy for a sustainable lifestyle brand entering the competitive market.",
      role: "Performance Marketer",
      outcome: "Achieved a 4.5x ROAS within the first 3 months of launch.",
      image: "https://picsum.photos/seed/eco/600/400",
      tags: ["Performance", "Meta Ads", "ROI"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-black">Selected Works</h3>
          </div>
          <p className="text-gray-500 max-w-md">
            A glimpse into the campaigns and strategies that moved the needle for my clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <p className="text-sm"><span className="font-bold text-black">Role:</span> {project.role}</p>
                <p className="text-sm"><span className="font-bold text-black">Outcome:</span> {project.outcome}</p>
              </div>
              <button className="mt-6 text-sm font-bold flex items-center gap-2 text-orange-600 hover:text-black transition-colors">
                View Case Study <ExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "HACA Sessions",
      organization: "HACA Creative Collective",
      period: "2024 - Present",
      description: "Leading workshops on creative strategy and digital storytelling for aspiring marketers.",
      insight: "Learned that the best strategies are born from collaborative brainstorming and diverse perspectives."
    },
    {
      title: "Digital Marketing Internship",
      organization: "Creative Pulse Agency",
      period: "2023",
      description: "Assisted in managing social media accounts for 10+ clients across various industries.",
      insight: "Gained deep insights into platform algorithms and the importance of consistent brand voice."
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">Experience</h2>
            <h3 className="text-4xl font-bold text-black mb-8">My Journey of Learning & Growth</h3>
            <p className="text-lg text-gray-600 mb-8">
              I believe that experience isn't just about the time spent, but the insights gained. Every project and workshop has been a stepping stone.
            </p>
            <div className="p-8 bg-orange-600 rounded-3xl text-white">
              <GraduationCap size={40} className="mb-4" />
              <h4 className="text-xl font-bold mb-2">Continuous Education</h4>
              <p className="opacity-80 text-sm">
                Certified in Google Ads, Meta Blueprint, and Advanced Content Strategy. I attend at least 3 industry conferences annually.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-black">{exp.title}</h4>
                    <p className="text-orange-600 font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{exp.description}</p>
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-600">
                  <p className="text-sm italic text-gray-700">
                    <span className="font-bold not-italic text-black block mb-1">Key Insight:</span>
                    "{exp.insight}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Strategic management and growth of your social presence across all major platforms.",
      icon: <Instagram size={32} />,
      benefit: "Build a loyal community that converts."
    },
    {
      title: "Content Creation",
      description: "High-impact visual and written content tailored to your brand's unique voice.",
      icon: <Palette size={32} />,
      benefit: "Stop the scroll with thumb-stopping visuals."
    },
    {
      title: "Creative Strategy",
      description: "Comprehensive blueprints for your brand's narrative and visual identity.",
      icon: <Sparkles size={32} />,
      benefit: "Stand out in a crowded digital marketplace."
    },
    {
      title: "Digital Campaigns",
      description: "End-to-end management of paid and organic campaigns for maximum ROI.",
      icon: <Target size={32} />,
      benefit: "Scalable growth through data-driven tactics."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">Services</h2>
          <h3 className="text-4xl font-bold text-black">How I Can Help You Grow</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-3xl border border-gray-100 hover:border-orange-600 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-orange-600 group-hover:text-white transition-all mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t border-gray-50">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">{service.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-bold mb-8 leading-tight">Let's build something <br /> remarkable together.</h3>
            
            <div className="space-y-8 mt-12">
              <a href="mailto:mohammedaskar532@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-medium">mohammedaskar532@gmail.com</p>
                </div>
              </a>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mohammed Askar. All rights reserved.
        </p>
        <p className="text-sm font-bold tracking-tighter">
          MOHAMMED ASKAR<span className="text-orange-600">.</span>
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-orange-200 selection:text-orange-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
