import React from 'react';

const BackCoverPage: React.FC = () => {
  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col items-center justify-center text-center">
      <div className="text-book-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
        Thank You
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        Smriddhi Gupta
      </h2>
      <div className="w-12 h-0.5 bg-book-gold mx-auto mb-4" />
      <p className="font-body text-sm text-muted-foreground max-w-[200px]">
        Let's connect and build something amazing together.
      </p>
      <div className="mt-8 font-body text-[10px] text-muted-foreground/50 tracking-widest uppercase">
        © 2026 · All Rights Reserved
      </div>
    </div>
  );
};

export default BackCoverPage;
