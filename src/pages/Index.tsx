import ParticleBackground from '@/components/ParticleBackground';
import Book from '@/components/Book';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <DarkModeToggle />
      <ParticleBackground />
      <Book />
    </div>
  );
};

export default Index;
