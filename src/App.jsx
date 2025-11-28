import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  ChevronRight,
  Terminal,
  Database,
  Cpu,
  Globe
} from 'lucide-react';

import profilePic from './assets/aespic.jpg';

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold text-cyan-400 font-mono">
              Syed Hussain Sajjad
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.href.substring(1)
                  ? 'text-cyan-400 bg-slate-800'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-cyan-400 font-medium tracking-wide mb-4">Welcome</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Hussain</span>,<br />
            Full-Stack Developer.
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about turning complex problems into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              View My Work <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center md:text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm a passionate Full-Stack Developer with a knack for building scalable and user-friendly web applications.
            My journey began 5 years ago when I wrote my first line of Python, and I've been hooked ever since.
            I've worked with startups and established companies to deliver high-quality software solutions.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I value <span className="text-cyan-400 font-semibold">clean code</span>, <span className="text-cyan-400 font-semibold">accessibility</span>, and <span className="text-cyan-400 font-semibold">continuous learning</span>.
            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
          </p>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3", "Redux"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      skills: ["Git", "Docker", "AWS", "Jest", "CI/CD", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager with drag-and-drop functionality, team workspaces, and real-time updates.",
      tags: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that helps users generate blog posts, social media captions, and marketing copy.",
      tags: ["Python", "FastAPI", "React", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 bg-slate-900 text-cyan-400 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.repoLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
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
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's talk about your project</h3>
            <p className="text-slate-400">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <span style={{ cursor: 'pointer' }}>hussainofficialx@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400">
                  <Linkedin size={20} />
                </div>
                <span><a href='https://www.linkedin.com/in/hussain-sajjad-42419a34a/' style={{ cursor: 'pointer' }}>www.linkedin.com/in/hussain-sajjad-42419a34a</a></span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400">
                  <Github size={20} />
                </div>
                <span><a href="https://github.com/Hussainofficialx" style={{ cursor: 'pointer' }}>https://github.com/Hussainofficialx</a></span>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg shadow-cyan-900/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Hussain. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Hussainofficialx" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/hussain-sajjad-42419a34a/" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
