import React, { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverPage from './pages/CoverPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const pages = [
  { id: 'cover', component: CoverPage, label: 'Cover' },
  { id: 'about', component: AboutPage, label: 'About' },
  { id: 'skills', component: SkillsPage, label: 'Skills' },
  { id: 'education', component: EducationPage, label: 'Education' },
  { id: 'certs', component: CertificationsPage, label: 'Certifications' },
  { id: 'projects', component: ProjectsPage, label: 'Projects' },
  { id: 'contact', component: ContactPage, label: 'Contact' },
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
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  const goToPage = useCallback((direction: 'next' | 'prev') => {
    if (isFlipping) return;
    if (direction === 'next' && currentPage >= pages.length - 1) return;
    if (direction === 'prev' && currentPage <= 0) return;

    setIsFlipping(true);
    setFlipDirection(direction);
    flipSound();

    setTimeout(() => {
      setCurrentPage((prev) => direction === 'next' ? prev + 1 : prev - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  }, [currentPage, isFlipping]);

  const CurrentPageComponent = pages[currentPage].component;
  const nextPageIdx = currentPage + 1 < pages.length ? currentPage + 1 : currentPage;
  const NextPageComponent = pages[nextPageIdx].component;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10">
      {/* Book container */}
      <div
        ref={bookRef}
        className="relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] book-shadow rounded-r-md"
        style={{ perspective: '1500px' }}
      >
        {/* Spine */}
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 spine-gradient rounded-l-sm z-20" />

        {/* Current page */}
        <div className="relative ml-3 md:ml-4 aspect-[3/4] rounded-r-md overflow-hidden">
          <CurrentPageComponent />

          {/* Flip overlay animation */}
          {isFlipping && (
            <div
              className={`absolute inset-0 z-30 ${
                flipDirection === 'next' ? 'page-flip flipped' : ''
              }`}
              style={{
                transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
              }}
            >
              <div className="w-full h-full page-paper shadow-2xl rounded-r-md">
                {flipDirection === 'next' ? <CurrentPageComponent /> : <NextPageComponent />}
              </div>
            </div>
          )}

          {/* Click zones for page corners */}
          <button
            onClick={() => goToPage('prev')}
            className="absolute left-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
            disabled={currentPage === 0 || isFlipping}
            aria-label="Previous page"
          >
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
              <ChevronLeft className="w-4 h-4 text-foreground/60" />
            </div>
          </button>
          <button
            onClick={() => goToPage('next')}
            className="absolute right-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
            disabled={currentPage === pages.length - 1 || isFlipping}
            aria-label="Next page"
          >
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
              <ChevronRight className="w-4 h-4 text-foreground/60" />
            </div>
          </button>
        </div>

        {/* Page edge effect */}
        <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-l from-border/30 to-transparent rounded-r-sm" />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-6 z-10">
        <button
          onClick={() => goToPage('prev')}
          disabled={currentPage === 0 || isFlipping}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex gap-1.5">
          {pages.map((page, i) => (
            <button
              key={page.id}
              onClick={() => {
                if (i > currentPage) goToPage('next');
                else if (i < currentPage) goToPage('prev');
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentPage
                  ? 'bg-primary w-6'
                  : 'bg-border hover:bg-muted-foreground/40'
              }`}
              aria-label={page.label}
            />
          ))}
        </div>

        <button
          onClick={() => goToPage('next')}
          disabled={currentPage === pages.length - 1 || isFlipping}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      <p className="font-body text-xs text-muted-foreground mt-3">
        {pages[currentPage].label} · {currentPage + 1} / {pages.length}
      </p>
    </div>
  );
};

export default Book;
