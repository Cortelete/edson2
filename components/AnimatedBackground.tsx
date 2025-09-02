
import React, { useMemo } from 'react';
import { GuitarIcon, MushroomIcon, WeedLeafIcon } from './Icons';

interface FloatingIcon {
    id: number;
    Component: React.FC<{ className?: string }>;
    style: React.CSSProperties;
    className: string;
}

const AnimatedBackground: React.FC = () => {
  const floatingIcons = useMemo<FloatingIcon[]>(() => {
    const icons = [
        // More guitars for emphasis
        { comp: GuitarIcon, count: 8, baseSize: 16, color: 'text-purple-400/60' }, 
        { comp: GuitarIcon, count: 6, baseSize: 24, color: 'text-pink-400/50' },
        // Subtle mushrooms and leaves
        { comp: MushroomIcon, count: 5, baseSize: 8, color: 'text-teal-400/70' },
        { comp: WeedLeafIcon, count: 5, baseSize: 10, color: 'text-green-400/60' },
    ];
    
    let counter = 0;
    return icons.flatMap(iconConfig => 
      Array.from({ length: iconConfig.count }).map(() => {
        const size = iconConfig.baseSize + Math.random() * 12;
        return {
          id: counter++,
          Component: iconConfig.comp,
          style: {
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${20 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 30}s`,
            opacity: 0.2 + Math.random() * 0.4,
          },
          className: iconConfig.color
        };
      })
    );
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
      {floatingIcons.map(({ id, Component, style, className }) => (
        <div key={id} className="absolute top-0 animate-floatUp" style={style}>
          <Component className={className} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
