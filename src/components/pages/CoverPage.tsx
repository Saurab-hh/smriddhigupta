import React, { useState, useEffect } from 'react';
import coverBg from '@/assets/cover-bg.jpg';
import { Mail, Download } from 'lucide-react';

interface CoverPageProps {
  onOpen?: () => void;
}

const subtitleLines = [
  'B.Tech Computer Science & Engineering (3rd Year)',
  'Specialization: Data Science',
];

const CoverPage: React.FC<CoverPageProps> = ({ onOpen }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= subtitleLines.length) return;
    const currentLine = subtitleLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else if (lineIndex < subtitleLines.length - 1) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n');
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex]);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-r-md"
      style={{
        backgroundImage: `url(${coverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-book-spine/80 via-primary/70 to-book-spine/90" />
      <div className="relative z-10 text-center px-6 md:px-10">
        <div className="mb-3 text-book-gold font-body text-sm tracking-[0.3em] uppercase animate-fade-in-up">
          Portfolio
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          Smriddhi Gupta
        </h1>
        <div className="w-16 h-0.5 bg-book-gold mx-auto mb-4" />
        <p className="font-body text-primary-foreground/80 text-sm md:text-base tracking-wide max-w-xs mx-auto whitespace-pre-line min-h-[2.5rem]">
          {displayedText}
          <span className="inline-block w-0.5 h-4 bg-book-gold ml-0.5 animate-pulse" />
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
          <button
            onClick={(e) => { e.stopPropagation(); }}
            className="flex items-center gap-2 px-5 py-2.5 bg-book-gold/90 text-foreground font-body font-semibold text-sm rounded hover:bg-book-gold transition-colors hover:scale-105 active:scale-95 transition-transform"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
          <a
            href="/Smriddhi_Gupta_CV.pdf"
            download
            onClick={(e) => { e.stopPropagation(); }}
            className="flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm rounded hover:bg-primary-foreground/10 transition-colors hover:scale-105 active:scale-95 transition-transform"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen?.();
        }}
        className="absolute bottom-6 text-primary-foreground/60 text-xs font-body tracking-widest hover:text-primary-foreground transition-colors animate-pulse"
      >
        OPEN BOOK →
      </button>
    </div>
  );
};

export default CoverPage;
