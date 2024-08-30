import { useEffect, useState } from 'react';
import './Dot.css';

const Dot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setPosition({
        x: Math.min(event.clientX, viewportWidth - 8),
        y: Math.min(event.clientY, viewportHeight - 8),
      });
      setVisible(true);
    };

    const handleMouseOut = () => {
      setVisible(false);
    };

    const handleTouchStart = () => {
      setVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div
      className="dot"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        visibility: visible ? 'visible' : 'hidden',
      }}
    />
  );
};

export default Dot;
