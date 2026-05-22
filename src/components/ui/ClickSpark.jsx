import React, { useEffect, useRef } from 'react';

export default function ClickSpark({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawSparks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      
      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = now - spark.startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Simple easing (ease-out cubic)
        const easeProgress = easing === 'ease-out' ? 1 - Math.pow(1 - progress, 3) : progress;
        
        if (progress >= 1) return false;

        const currentRadius = (sparkRadius * extraScale) * easeProgress;
        const currentSize = sparkSize * (1 - easeProgress); // Shrink as they travel
        const alpha = 1 - easeProgress;

        ctx.beginPath();
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = alpha;
        
        for (let i = 0; i < sparkCount; i++) {
          const angle = (Math.PI * 2 / sparkCount) * i + spark.rotationOffset;
          const startX = spark.x + Math.cos(angle) * currentRadius;
          const startY = spark.y + Math.sin(angle) * currentRadius;
          const endX = startX + Math.cos(angle) * currentSize;
          const endY = startY + Math.sin(angle) * currentSize;

          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
        }
        
        ctx.stroke();
        ctx.globalAlpha = 1;

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationFrameId = requestAnimationFrame(drawSparks);
      }
    };

    const handleClick = (e) => {
      sparksRef.current.push({
        x: e.clientX,
        y: e.clientY,
        startTime: performance.now(),
        rotationOffset: Math.random() * Math.PI, // Randomize initial rotation for variation
      });
      
      // Start loop if not already running
      if (sparksRef.current.length === 1) {
        animationFrameId = requestAnimationFrame(drawSparks);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
