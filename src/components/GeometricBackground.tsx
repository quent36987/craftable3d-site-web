import React from 'react';
import { motion } from 'framer-motion';

interface Cube {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  speedX: number;
  speedY: number;
  rotateSpeed: number;
  depth: number;
}

export function GeometricBackground() {
  const cubes: Cube[] = React.useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 15,
      speedY: (Math.random() - 0.5) * 15,
      rotateSpeed: (Math.random() - 0.5) * 180,
      depth: Math.random() * 100
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cubes.map((cube) => (
        <motion.div
          key={cube.id}
          className="absolute"
          style={{
            width: cube.size,
            height: cube.size,
            left: `${cube.initialX}%`,
            top: `${cube.initialY}%`,
            perspective: '1000px',
            zIndex: Math.floor(cube.depth),
          }}
          animate={{
            x: [0, cube.speedX * 10, 0],
            y: [0, cube.speedY * 10, 0],
            rotateX: [0, cube.rotateSpeed],
            rotateY: [0, cube.rotateSpeed * 1.5],
            rotateZ: [0, cube.rotateSpeed * 0.5],
            scale: [1, 1 + (cube.depth / 1000)],
          }}
          transition={{
            duration: 15 + (cube.depth / 20),
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        >
          <div 
            className="w-full h-full relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cube.depth}px)`,
            }}
          >
            {/* Face avant */}
            <div 
              className="absolute w-full h-full border-2 border-blue-400/40 bg-blue-50/5"
              style={{ transform: 'translateZ(calc(var(--size) / 2))', '--size': `${cube.size}px` } as any}
            />
            
            {/* Face arrière */}
            <div 
              className="absolute w-full h-full border-2 border-blue-400/40 bg-blue-50/5"
              style={{ transform: 'translateZ(calc(var(--size) / -2)) rotateY(180deg)', '--size': `${cube.size}px` } as any}
            />
            
            {/* Face droite */}
            <div 
              className="absolute w-full h-full border-2 border-indigo-400/40 bg-indigo-50/5"
              style={{ 
                transform: 'translateX(calc(var(--size) / 2)) rotateY(90deg)',
                '--size': `${cube.size}px`,
                transformOrigin: 'left center'
              } as any}
            />
            
            {/* Face gauche */}
            <div 
              className="absolute w-full h-full border-2 border-indigo-400/40 bg-indigo-50/5"
              style={{ 
                transform: 'translateX(calc(var(--size) / -2)) rotateY(-90deg)',
                '--size': `${cube.size}px`,
                transformOrigin: 'right center'
              } as any}
            />
            
            {/* Face supérieure */}
            <div 
              className="absolute w-full h-full border-2 border-purple-400/40 bg-purple-50/5"
              style={{ 
                transform: 'translateY(calc(var(--size) / -2)) rotateX(90deg)',
                '--size': `${cube.size}px`,
                transformOrigin: 'bottom center'
              } as any}
            />
            
            {/* Face inférieure */}
            <div 
              className="absolute w-full h-full border-2 border-purple-400/40 bg-purple-50/5"
              style={{ 
                transform: 'translateY(calc(var(--size) / 2)) rotateX(-90deg)',
                '--size': `${cube.size}px`,
                transformOrigin: 'top center'
              } as any}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}