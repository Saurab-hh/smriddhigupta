import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Intelligent CPU Scheduling Simulator',
    description: 'A real-time CPU scheduling simulation system implementing major scheduling algorithms to visualize and analyze process execution with Gantt chart visualization.',
    tech: ['C++', 'Operating Systems', 'Scheduling Algorithms', 'Data Visualization'],
    github: '#',
    live: '',
  },
  {
    title: 'AI Song Maker Bot',
    description: 'An AI-powered chatbot that generates song lyrics and music suggestions based on user input using NLP techniques.',
    tech: ['Python', 'AI', 'NLP', 'Automation'],
    github: 'https://github.com/smriddhi1303/Ai_chatbot',
    live: '',
  },
  {
    title: 'Zaloon – Salon Booking Website',
    description: 'A salon appointment booking platform with service browsing, stylist viewing, admin dashboard, and secure authentication.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Projects</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="space-y-3 flex-1">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-lg p-4 hover:border-book-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <h3 className="font-display text-sm font-bold text-foreground">{project.title}</h3>
            <p className="font-body text-xs text-muted-foreground mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="font-body text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-3">
              {project.github && project.github !== '#' ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-3.5 h-3.5" /> View on GitHub
                </a>
              ) : (
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground/50">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </span>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-body text-xs text-book-gold hover:text-accent transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
