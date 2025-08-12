'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio('/audio/jarvis-welcome.mp3');
    audio.play();

    const timer = setTimeout(() => {
      const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
      router.push(isMobile ? '/mobile' : '/laptop');
    }, 2500); // match audio duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🤖</div>
        <h1 className="text-2xl font-bold text-text mb-2">JARVIS Initializing...</h1>
        <p className="text-text/70">Preparing your experience...</p>
      </div>
    </div>
  );
}
