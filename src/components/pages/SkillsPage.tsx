import React from 'react';

const skills = [
  { category: 'Programming Languages', items: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 70 },
  ]},
  { category: 'Web Development', items: [
    { name: 'React', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ]},
  { category: 'Tools & Technologies', items: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'MongoDB', level: 75 },
  ]},
];

const SkillsPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Skills</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="space-y-5 flex-1">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-sm font-semibold text-primary mb-2">{group.category}</h3>
            <div className="space-y-2">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-0.5">
                    <span className="font-body text-xs text-foreground">{skill.name}</span>
                    <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full skill-bar rounded-full animate-progress-fill"
                      style={{ '--target-width': `${skill.level}%`, width: `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
