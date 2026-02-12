import React from 'react';
import profileImg from '@/assets/profile-photo.png';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">About Me</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-book-gold/30 mb-3 shadow-lg">
          <img src={profileImg} alt="Smriddhi Gupta" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-display text-base md:text-lg font-bold text-foreground text-center">Smriddhi Gupta</h3>
        <p className="font-body text-xs text-book-gold">B.Tech CSE · Data Science</p>
      </div>

      <h3 className="font-display text-sm md:text-base font-bold text-primary mb-2 text-center">
        Turning Data into Powerful Decisions
      </h3>

      <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
        I am a passionate and results-driven Data Scientist with strong expertise in Python, SQL, and Machine Learning. I specialize in analyzing complex datasets, uncovering meaningful insights, and building intelligent models that solve real-world problems. With a strong analytical mindset and continuous learning approach, I strive to create impactful, data-driven solutions that help businesses grow and innovate.
      </p>

      <div className="mt-auto border-l-2 border-book-gold/50 pl-4 py-2">
        <p className="font-display text-xs md:text-sm italic text-muted-foreground">
          "Data is the new oil, but insight is the real power."
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
