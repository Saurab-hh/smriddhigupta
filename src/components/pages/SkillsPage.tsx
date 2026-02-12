import React from 'react';
import { Code, Server, Database, Users, MessageSquare, Clock, Lightbulb, RefreshCw, Shield } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Frontend Development',
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    items: ['Python', 'Java', 'C / C++', 'Node.js'],
  },
  {
    category: 'Database & Core Concepts',
    icon: Database,
    items: ['DBMS', 'MySQL', 'Data Structures'],
  },
];

const softSkills = [
  { name: 'Teamwork & Collaboration', icon: Users },
  { name: 'Effective Communication', icon: MessageSquare },
  { name: 'Time Management', icon: Clock },
  { name: 'Problem-Solving Ability', icon: Lightbulb },
  { name: 'Adaptability & Quick Learning', icon: RefreshCw },
  { name: 'Leadership Qualities', icon: Shield },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-5 md:p-7 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Skills</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-4" />

      {/* Technical Skills */}
      <h3 className="font-display text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Technical Skills</h3>
      <div className="grid grid-cols-1 gap-3 mb-4">
        {technicalSkills.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card/50 p-3 hover:shadow-md hover:border-book-gold/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-book-gold" />
                <span className="font-display text-xs font-semibold text-foreground">{group.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-[10px] font-body font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Soft Skills */}
      <h3 className="font-display text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Soft Skills</h3>
      <div className="grid grid-cols-2 gap-2">
        {softSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-lg border border-border bg-card/50 p-2 hover:shadow-md hover:border-book-gold/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Icon className="w-3.5 h-3.5 text-book-gold shrink-0" />
              <span className="font-body text-[10px] md:text-xs text-foreground">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
