import React from 'react';
import HomeSection from '../components/HomeSection';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Home Section with Typing Animation */}
      <HomeSection />

      {/* Hero Section (About) */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer with Contact */}
      <Footer />
    </div>
  );
}
