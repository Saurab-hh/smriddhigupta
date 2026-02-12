import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const internships = [
  {
    role: 'Backend Developer Intern',
    company: 'Poonawalla Fincorp',
    duration: '3 Months',
    location: 'Stipend: ₹10,000',
    description: 'Worked as a Backend Developer Intern, contributing to server-side development and API design.',
    highlights: ['Backend Development', 'API Design', 'Database Management', 'Server-Side Logic'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Tech Analytics Solutions Pvt. Ltd.',
    duration: 'May 2024 – July 2024',
    location: 'Performance: Excellent',
    description: 'Completed Machine Learning Internship working on data preprocessing, exploratory data analysis, predictive modeling, and model evaluation.',
    highlights: ['Data Preprocessing', 'Exploratory Data Analysis', 'Predictive Modeling', 'Model Evaluation'],
  },
];

const InternshipPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Internships</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="relative pl-6 space-y-5 flex-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />

        {internships.map((item, i) => (
          <div
            key={i}
            className="relative animate-fade-in-up"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-book-gold" />
            <div className="bg-card rounded-lg p-4 border border-border/50 hover:border-book-gold/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-primary" />
                <h3 className="font-display text-sm font-bold text-foreground">{item.role}</h3>
              </div>
              <p className="font-body text-xs text-book-gold font-semibold">{item.company}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 font-body text-[10px] text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {item.duration}
                </span>
                <span className="flex items-center gap-1 font-body text-[10px] text-muted-foreground">
                  <MapPin className="w-3 h-3" /> {item.location}
                </span>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.highlights.map((h) => (
                  <span key={h} className="font-body text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                    {h}
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

export default InternshipPage;
