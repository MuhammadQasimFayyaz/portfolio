import { useEffect, useState } from 'react';
import './SnakeLine.css';

const SnakeLine = () => {
  const [trail, setTrail] = useState([]);
  const maxLength = 20; // Number of segments in the snake

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newTrail = [...trail, { x: event.clientX, y: event.clientY }];
      
      if (newTrail.length > maxLength) {
        newTrail.shift(); // Remove the oldest segment when reaching maxLength
      }
      
      setTrail(newTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trail]);

  return (
    <div>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / maxLength, // Gradually fade out the segments
          }}
        />
      ))}
    </div>
  );
};

export default SnakeLine;
