import React from 'react';
import { Star, BookOpen, Trophy, Target } from 'lucide-react';

const achievements = [
  { icon: Trophy, title: 'Academic Excellence', desc: 'Consistently strong academic performance throughout studies.' },
  { icon: Star, title: 'Data Science Projects', desc: 'Completed multiple real-world data analysis and ML projects.' },
  { icon: BookOpen, title: 'Continuous Learner', desc: 'Earned multiple certifications in CS and Data Science domains.' },
  { icon: Target, title: 'Problem Solving', desc: 'Active participant in coding challenges and hackathons.' },
];

const keySubjects = [
  'Data Structures & Algorithms',
  'Machine Learning',
  'Database Management',
  'Statistics & Probability',
  'Artificial Intelligence',
  'Computer Networks',
];

const AchievementsPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Achievements</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="space-y-3 mb-5">
        {achievements.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-card transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
              <p className="font-body text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-primary mb-2">Key Subjects</h3>
        <div className="flex flex-wrap gap-1.5">
          {keySubjects.map((subj) => (
            <span key={subj} className="font-body text-[10px] px-2.5 py-1 bg-secondary rounded-full text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              {subj}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
