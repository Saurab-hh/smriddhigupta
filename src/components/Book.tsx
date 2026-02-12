import React, { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverPage from './pages/CoverPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import InternshipPage from './pages/InternshipPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';

// Spreads: pairs of [left, right] pages shown together
const spreads = [
  { left: AboutPage, right: SkillsPage, label: 'About & Skills' },
  { left: ProjectsPage, right: InternshipPage, label: 'Projects & Internship' },
  { left: EducationPage, right: CertificationsPage, label: 'Education & Certs' },
  { left: AchievementsPage, right: ContactPage, label: 'Achievements & Contact' },
  { left: null, right: null, label: 'Thank You' }, // Final thank you page
];

const flipSound = (() => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    return () => {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.1);
    };
  } catch {
    return () => {};
  }
})();

const Book: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  const openBook = useCallback(() => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    flipSound();
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 800);
  }, [isOpen, isOpening]);

  const flipPage = useCallback((direction: 'next' | 'prev') => {
    if (isFlipping) return;
    if (direction === 'next' && currentSpread >= spreads.length - 1) return;
    if (direction === 'prev' && currentSpread <= 0) return;

    setIsFlipping(true);
    flipSound();

    setTimeout(() => {
      setCurrentSpread((prev) => direction === 'next' ? prev + 1 : prev - 1);
      setIsFlipping(false);
    }, 600);
  }, [currentSpread, isFlipping]);

  const closeBook = useCallback(() => {
    if (isFlipping || isOpening) return;
    setIsOpening(true);
    flipSound();
    setTimeout(() => {
      setIsOpen(false);
      setIsOpening(false);
      setCurrentSpread(0);
    }, 800);
  }, [isFlipping, isOpening]);

  const isThankYouPage = currentSpread === spreads.length - 1;
  const LeftPage = spreads[currentSpread].left;
  const RightPage = spreads[currentSpread].right;

  const backToStart = useCallback(() => {
    setIsOpen(false);
    setCurrentSpread(0);
  }, []);

  // Cover (closed) view
  if (!isOpen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10">
        <div
          ref={bookRef}
          className={`relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] book-shadow rounded-r-md cursor-pointer transition-transform duration-700 ${isOpening ? 'scale-95 opacity-80' : ''}`}
          style={{ perspective: '1500px' }}
          onClick={openBook}
        >
          {/* Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 spine-gradient rounded-l-sm z-20" />
          {/* Cover content */}
          <div className={`relative ml-3 md:ml-4 aspect-[3/4] rounded-r-md overflow-hidden transition-transform duration-700 ${isOpening ? 'origin-left' : ''}`}
            style={isOpening ? { transform: 'rotateY(-30deg)', transformOrigin: 'left center' } : {}}
          >
            <CoverPage onOpen={openBook} />
          </div>
          {/* Page edges */}
          <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-gradient-to-l from-border/40 to-transparent rounded-r-sm" />
          <div className="absolute right-[3px] top-3 bottom-3 w-0.5 bg-border/20" />
          <div className="absolute right-[6px] top-4 bottom-4 w-0.5 bg-border/10" />
        </div>
        <p className="font-body text-xs text-muted-foreground mt-6 animate-pulse">Click to open the book</p>
      </div>
    );
  }

  // Open book (two-page spread) view
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 md:px-4 py-6 relative z-10">
      {/* Close button */}
      <button
        onClick={closeBook}
        className="absolute top-4 right-4 z-30 px-3 py-1.5 bg-card border border-border rounded-full font-body text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      >
        ✕ Close Book
      </button>

      <div
        ref={bookRef}
        className="relative w-full max-w-[900px] lg:max-w-[1050px] book-shadow rounded-md animate-fade-in-up"
        style={{ perspective: '2000px' }}
      >
        {/* Spine center - hide on thank you page */}
        {!isThankYouPage && (
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 md:w-4 spine-gradient z-20 shadow-lg" />
        )}

        {isThankYouPage ? (
          <div className="aspect-[3/4] md:aspect-[8/5] rounded-md overflow-hidden">
            <ThankYouPage onBackToStart={backToStart} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Left page */}
            <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-l-md overflow-hidden border-r border-border/20">
              {LeftPage && <LeftPage />}
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-book-shadow/10 to-transparent pointer-events-none" />
              <button
                onClick={() => flipPage('prev')}
                className="absolute left-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                disabled={currentSpread === 0 || isFlipping}
                aria-label="Previous spread"
              >
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
                  <ChevronLeft className="w-4 h-4 text-foreground/60" />
                </div>
              </button>
            </div>

            {/* Right page */}
            <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-r-md overflow-hidden">
              {RightPage && <RightPage />}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-book-shadow/10 to-transparent pointer-events-none" />
              <button
                onClick={() => flipPage('next')}
                className="absolute right-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                disabled={currentSpread === spreads.length - 1 || isFlipping}
                aria-label="Next spread"
              >
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
                  <ChevronRight className="w-4 h-4 text-foreground/60" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Flip overlay animation */}
        {isFlipping && (
          <div className="absolute inset-0 z-30 pointer-events-none">
            <div className="absolute inset-0 bg-book-page/20 animate-pulse rounded-md" />
          </div>
        )}

        {/* Page edges */}
        <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-r from-border/30 to-transparent rounded-l-sm" />
        <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-l from-border/30 to-transparent rounded-r-sm" />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-5 z-10">
        <button
          onClick={() => flipPage('prev')}
          disabled={currentSpread === 0 || isFlipping}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex gap-1.5">
          {spreads.map((spread, i) => (
            <button
              key={i}
              onClick={() => {
                if (i > currentSpread) flipPage('next');
                else if (i < currentSpread) flipPage('prev');
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSpread ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground/40'
              }`}
              aria-label={spread.label}
            />
          ))}
        </div>

        <button
          onClick={() => flipPage('next')}
          disabled={currentSpread === spreads.length - 1 || isFlipping}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      <p className="font-body text-xs text-muted-foreground mt-2">
        {spreads[currentSpread].label} · {currentSpread + 1} / {spreads.length}
      </p>
    </div>
  );
};

export default Book;
