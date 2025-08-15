'use client';

import React from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const InteractiveAvatar = () => {
  const { RiveComponent } = useRive({
    src: '/GrampaComputer.riv', 

    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    }),
    autoplay: true,
  });

  return (
    <div style={{ width: '120px', height: '120px' }}>
      <RiveComponent />
    </div>
  );
};

export default InteractiveAvatar;