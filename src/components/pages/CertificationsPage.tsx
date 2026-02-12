import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', date: 'Jan 2024' },
  { name: 'Meta Front-End Developer', org: 'Meta (Coursera)', date: 'Mar 2023' },
  { name: 'Python for Data Science', org: 'IBM', date: 'Aug 2023' },
  { name: 'Full Stack Web Development', org: 'Udemy', date: 'Jun 2022' },
];

const CertificationsPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Certifications</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="grid gap-3 flex-1">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-card border border-border/50 rounded-lg p-4 flex items-start gap-3 hover:border-book-gold/40 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">{cert.name}</h3>
              <p className="font-body text-xs text-muted-foreground">{cert.org}</p>
              <p className="font-body text-[10px] text-book-gold mt-1">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
