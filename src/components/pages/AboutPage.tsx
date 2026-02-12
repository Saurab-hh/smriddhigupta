import React from 'react';
import profileImg from '@/assets/profile-placeholder.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">About Me</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-6" />

      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-book-gold/30 mb-4">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
        Hi! I'm a passionate Software Developer who loves building elegant solutions to complex problems.
        With a strong foundation in computer science and a drive for continuous learning,
        I create applications that make a real difference.
      </p>

      <div className="space-y-3 mt-auto">
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">🎓</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Education</p>
            <p className="font-body text-xs text-muted-foreground">B.Tech in Computer Science</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">🎯</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Goal</p>
            <p className="font-body text-xs text-muted-foreground">Building impactful software that solves real-world problems</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-book-gold font-display text-lg">📍</span>
          <div>
            <p className="font-body font-semibold text-sm text-foreground">Location</p>
            <p className="font-body text-xs text-muted-foreground">Your City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
