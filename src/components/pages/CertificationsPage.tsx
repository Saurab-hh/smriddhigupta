import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import digitalStrategyImg from '@/assets/certs/digital_strategy_brand_marketing.jpg';
import expertPythonImg from '@/assets/certs/expert_python_ml.jpg';
import mlPythonImg from '@/assets/certs/getting_started_ml_python.jpg';
import leadingOrgImg from '@/assets/certs/leading_organisation.jpg';
import dsaImg from '@/assets/certs/fundamentals_dsa.jpeg';

const certifications = [
  { name: 'Fundamentals of Data Structures using C++', org: 'Lovely Professional University', date: '2025', image: dsaImg },
  { name: 'Expert Python Machine Learning', org: 'MindLuster', date: '2024', image: expertPythonImg },
  { name: 'Getting Started with ML in Python', org: 'MindLuster', date: '2024', image: mlPythonImg },
  { name: 'Digital Strategy Brand Marketing', org: 'MindLuster', date: '2023', image: digitalStrategyImg },
  { name: 'Leading Organizations', org: 'MindLuster', date: '2023', image: leadingOrgImg },
];

const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto relative">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Certifications</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <div className="grid gap-3 flex-1">
        {certifications.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelectedCert(i)}
            className="bg-card border border-border/50 rounded-lg p-4 flex items-start gap-3 hover:border-book-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">{cert.name}</h3>
              <p className="font-body text-xs text-muted-foreground">{cert.org}</p>
              <p className="font-body text-[10px] text-book-gold mt-1">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal Overlay */}
      {selectedCert !== null && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-book-shadow/60 backdrop-blur-sm animate-fade-in-up rounded-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-card border border-book-gold/30 rounded-xl p-5 mx-4 max-w-[90%] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'fade-in-up 0.3s ease-out' }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="w-full aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center mb-3 overflow-hidden">
              {certifications[selectedCert].image ? (
                <img
                  src={certifications[selectedCert].image}
                  alt={certifications[selectedCert].name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-4">
                  <Award className="w-10 h-10 text-book-gold mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">Certificate preview</p>
                </div>
              )}
            </div>

            <h3 className="font-display text-base font-bold text-foreground">
              {certifications[selectedCert].name}
            </h3>
            <p className="font-body text-xs text-muted-foreground mt-1">
              {certifications[selectedCert].org} · {certifications[selectedCert].date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
