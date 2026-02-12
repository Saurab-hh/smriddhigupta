import React from 'react';

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Lovely Professional University, Punjab',
    year: '2023 – Present',
    achievements: ['Specialization: Data Science', 'CGPA: 6.79'],
  },
  {
    degree: 'Senior Higher Secondary (Class XII)',
    institution: 'Aditya Educational Institution, Andhra Pradesh',
    year: '2021 – 2023',
    achievements: ['Physics, Maths, CS', 'Percentage: 69.7%'],
  },
  {
    degree: 'Higher Secondary (Class X)',
    institution: 'Narayan School, Kolkata, West Bengal',
    year: '2020 – 2021',
    achievements: ['Percentage: 87.8%'],
  },
];

const EducationPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Education</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="relative pl-6 space-y-5 flex-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />

        {education.map((edu, i) => (
          <div key={i} className="relative animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-book-gold" />
            <div className="bg-card rounded-lg p-3 border border-border/50 hover:border-book-gold/40 transition-colors">
              <span className="font-body text-xs text-book-gold font-semibold">{edu.year}</span>
              <h3 className="font-display text-sm font-bold text-foreground mt-0.5">{edu.degree}</h3>
              <p className="font-body text-xs text-muted-foreground">{edu.institution}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {edu.achievements.map((a) => (
                  <span key={a} className="font-body text-[10px] px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
