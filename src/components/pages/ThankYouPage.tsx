import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const fullText = "Let's Connect and Build Something Amazing";

const ThankYouPage: React.FC<{ onBackToStart?: () => void }> = ({ onBackToStart }) => {
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowConfetti(true);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Floating shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${8 + Math.random() * 20}px`,
            height: `${8 + Math.random() * 20}px`,
            background: `hsl(${38 + Math.random() * 20} ${50 + Math.random() * 20}% ${50 + Math.random() * 20}%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Confetti dots */}
      {showConfetti && [...Array(20)].map((_, i) => (
        <div
          key={`c-${i}`}
          className="absolute w-2 h-2 rounded-full animate-fade-in-up"
          style={{
            background: ['hsl(var(--primary))', 'hsl(var(--book-gold))', 'hsl(var(--accent))'][i % 3],
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            opacity: 0.6,
          }}
        />
      ))}

      <div className="relative z-10 animate-fade-in-up">
        <Sparkles className="w-8 h-8 text-book-gold mx-auto mb-4 animate-pulse" />

        <div className="text-book-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
          Thank You
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
          Thank You for Visiting!
        </h2>

        <div className="w-12 h-0.5 bg-book-gold mx-auto mb-4" />

        <p className="font-body text-sm text-muted-foreground max-w-[280px] mx-auto min-h-[1.5rem]">
          {typedText}
          <span className="inline-block w-0.5 h-4 bg-book-gold ml-0.5 animate-pulse" />
        </p>

        <div className="mt-4 font-display text-lg text-foreground font-bold">
          Smriddhi Gupta
        </div>

        {onBackToStart && (
          <button
            onClick={onBackToStart}
            className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Start
          </button>
        )}

        <div className="mt-6 font-body text-[10px] text-muted-foreground/50 tracking-widest uppercase">
          © 2026 · All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
