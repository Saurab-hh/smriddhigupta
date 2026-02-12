import React from 'react';
import profileImg from '@/assets/profile-placeholder.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">About Me</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="flex flex-col items-center mb-5">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-book-gold/30 mb-3">
          <img src={profileImg} alt="Smriddhi Gupta" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-display text-lg font-bold text-foreground">Smriddhi Gupta</h3>
        <p className="font-body text-xs text-book-gold">B.Tech CSE · Data Science</p>
      </div>

      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        Hello! I'm Smriddhi Gupta, currently pursuing B.Tech in Computer Science and Engineering (3rd Year) with specialization in Data Science. I'm passionate about leveraging technology to solve real-world problems through data-driven solutions.
      </p>

      <div className="space-y-3 mt-auto">
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">🎯</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Career Goal</p>
            <p className="font-body text-xs text-muted-foreground">To become a skilled data scientist building impactful AI/ML solutions that make a real difference.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">🎓</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Education</p>
            <p className="font-body text-xs text-muted-foreground">B.Tech CSE (Data Science) — 3rd Year</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">💡</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Interests</p>
            <p className="font-body text-xs text-muted-foreground">Machine Learning, Data Analysis, Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
