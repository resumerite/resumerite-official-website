
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);

    calculateTimeLeft();
    
    return () => clearTimeout(timer);
  }, [targetDate, timeLeft]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const blockSize = isMobile ? 'w-[70px] h-[70px]' : '';

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-6">
      {timeBlocks.map((block, index) => (
        <div 
          key={block.label} 
          className={`flex flex-col items-center bg-blue-light p-2 md:p-4 rounded-lg shadow-sm animate-fade-in ${blockSize}`}
          style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
        >
          <span className="text-xl md:text-4xl font-bold text-blue-dark">
            {String(block.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-gray-600">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;