'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface DeviceContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    deviceType: 'desktop'
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      
      // Mobile detection
      const isMobile = /Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
      
      // Tablet detection
      const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent) && !isMobile;
      
      // Desktop is everything else
      const isDesktop = !isMobile && !isTablet;
      
      let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (isMobile) deviceType = 'mobile';
      else if (isTablet) deviceType = 'tablet';

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        deviceType
      });
    };

    // Detect on mount
    detectDevice();

    // Listen for window resize (for when switching between responsive modes)
    const handleResize = () => {
      detectDevice();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
}
