import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CurriculumSection } from './components/CurriculumSection';
import { TutorBio } from './components/TutorBio';
import { IntakeForm } from './components/IntakeForm';
import { Footer } from './components/Footer';
import { DeliveryMode } from './types';

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState<string>(
    'Grade 9 (MTH1W De-streamed Math)'
  );
  const [selectedMode, setSelectedMode] = useState<DeliveryMode>('in-person');
  const phoneNumber = '+1 (587) 664 3477';
  const email = 'joseph737.math@gmail.com';

  const scrollToAssessment = () => {
    const intakeSection = document.getElementById('assessment-intake');
    if (intakeSection) {
      intakeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectGradeTrack = (gradeSuggestion: string) => {
    setSelectedGrade(gradeSuggestion);
    scrollToAssessment();
  };

  const handleSelectDeliveryMode = (mode: DeliveryMode) => {
    setSelectedMode(mode);
    scrollToAssessment();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-[#48b76f] selection:text-white flex flex-col font-serif">
      {/* 1. Modular Navbar */}
      <Navbar
        onBookClick={scrollToAssessment}
        phoneNumber={phoneNumber}
        email={email}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Modular Hero */}
        <Hero
          onBookClick={scrollToAssessment}
          phoneNumber={phoneNumber}
        />

        {/* 3. Modular CurriculumSection */}
        <CurriculumSection
          onSelectGradeTrack={handleSelectGradeTrack}
        />

        {/* 4. Modular TutorBio */}
        <TutorBio
          onSelectDeliveryMode={handleSelectDeliveryMode}
        />

        {/* 5. Modular IntakeForm */}
        <IntakeForm
          initialGrade={selectedGrade}
          initialMode={selectedMode}
          phoneNumber={phoneNumber}
          email={email}
        />
      </main>

      {/* Modular Footer */}
      <Footer
        phoneNumber={phoneNumber}
        email={email}
        onBookClick={scrollToAssessment}
      />
    </div>
  );
}
