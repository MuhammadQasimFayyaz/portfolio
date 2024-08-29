import { useEffect, useState } from 'react';
import './Dot.css';

const Dot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Constrain the dot position within the viewport
      const x = Math.min(event.clientX, viewportWidth - 8);
      const y = Math.min(event.clientY, viewportHeight - 8);

      setPosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="dot"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default Dot;
