// Magnet.tsx
import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';

interface MagnetProps {
  word: string;
  defaultX?: number;
  defaultY?: number;
}

// This Magnet uses react-moveable to let you drag + rotate it
export default function Magnet({ 
  word, 
  defaultX = 0, 
  defaultY = 0 
}: MagnetProps) {
  // The DOM element for the magnet itself
  const magnetRef = useRef<HTMLDivElement>(null);

  // x, y, rotation in degrees
  const [pos, setPos] = useState({ x: defaultX, y: defaultY, rotation: 0 });

  // We'll apply transform with translate + rotate
  const magnetStyle: React.CSSProperties = {
    transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
    padding: '6px 10px',
  };

  // React Moveable config:
  //   - "draggable" for position
  //   - "rotatable" for rotation
  //   - "onDrag", "onRotate" to update state
  return (
    <>
      {/* The actual magnet content */}
      <div className = 'magnet' ref={magnetRef} style={magnetStyle}>
        {word}
      </div>

      {/* Moveable element that references the magnetRef as its 'target' */}
      <Moveable
        target={magnetRef}
        draggable={true}
        rotatable={true}
        origin={false}
        hideDefaultLines={true}
        rotationPosition="bottom"
        // When user drags, update x/y
        onDrag={(e) => {
          setPos((prev) => ({
            ...prev,
            x: prev.x + e.delta[0],
            y: prev.y + e.delta[1],
          }));
        }}
        // When user rotates, update the rotation
        onRotate={(e) => {
          setPos((prev) => ({
            ...prev,
            rotation: e.beforeRotate,
          }));
        }}
        // Keep the rotation/drag handles visible around the element
        // 'container' is the parent DOM node in which Moveable draws control boxes
        container={document.body}
      />
    </>
  );
}
