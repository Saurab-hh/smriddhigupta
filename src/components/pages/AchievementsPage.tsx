import React, { useState } from 'react';
import { Star, BookOpen, Trophy, Target, X } from 'lucide-react';
import dataProcessingImg from '@/assets/achievements/data_processing.jpeg';
import pythonDataScienceImg from '@/assets/achievements/python_data_science.jpeg';

const achievements = [
  { icon: Trophy, title: 'Machine Learning Internship', desc: 'Completed ML internship at Tech Analytics Solutions with Excellent performance rating.', image: dataProcessingImg },
  { icon: Star, title: 'Python for Data Science & Analytics', desc: 'Earned certification covering NumPy, Pandas, Matplotlib & Seaborn from SkillUp Institute.', image: pythonDataScienceImg },
  { icon: BookOpen, title: 'Continuous Learner', desc: 'Earned multiple certifications in CS, Data Science, and Marketing domains.' },
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Achievements</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="space-y-3 mb-5">
        {achievements.map(({ icon: Icon, title, desc, image }, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-2 rounded-lg hover:bg-card transition-colors group ${image ? 'cursor-pointer' : ''}`}
            onClick={() => image && setSelectedImage(image)}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
              <p className="font-body text-xs text-muted-foreground">{desc}</p>
              {image && <span className="font-body text-[10px] text-book-gold mt-0.5 inline-block">Click to view certificate</span>}
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

      {/* Certificate Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[85vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>
            <img src={selectedImage} alt="Achievement certificate" className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;
