import React from 'react';

interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content Area - Centered */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
