
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Bubble {
  id: number;
  size: number;
  left: number;
  top: number;
  animationDuration: number;
}

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const createBubbles = () => {
      const newBubbles: Bubble[] = [];
      const count = isMobile ? 6 : 15;
      const maxSize = isMobile ? 120 : 200;
      
      for (let i = 0; i < count; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * maxSize + (isMobile ? 30 : 50),
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDuration: Math.random() * 10 + 10
        });
      }
      
      setBubbles(newBubbles);
    };

    createBubbles();
    window.addEventListener('resize', createBubbles);
    
    return () => {
      window.removeEventListener('resize', createBubbles);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble animate-pulse-light"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDuration: `${bubble.animationDuration}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;