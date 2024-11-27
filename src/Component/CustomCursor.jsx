import React, { useEffect, useState } from 'react';


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Apply some easing/smooth effect to the cursor movement
      dotX += (mouseX - dotX) * 0.1; // Adjust this value for smoothness (lower values are smoother)
      dotY += (mouseY - dotY) * 0.1;

      setPosition({ x: mouseX, y: mouseY });
      setDotPosition({ x: dotX, y: dotY });

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', moveCursor);
    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-ring"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
      <div 
        className=" cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
