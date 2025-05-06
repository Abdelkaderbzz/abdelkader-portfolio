
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  angle: number;
  spinSpeed: number;
  shape: 'circle' | 'square' | 'triangle';
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef<number>(0);
  const targetFPS = 60;
  const frameTime = 1000 / targetFPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set initial dimensions
    updateDimensions();

    // Initialize particles
    initParticles();

    // Track mouse position for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Handle resize with debounce for better performance
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateDimensions();
        initParticles();
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const updateDimensions = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Use window.innerWidth and window.innerHeight for full viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setDimensions({ width: canvas.width, height: canvas.height });
  };

  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particles.current = [];
    // Adjust particle count based on screen size for better performance
    const screenSize = canvas.width * canvas.height;
    const particleCount = Math.min(Math.floor(screenSize / 15000), 100);
    
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: getRandomColor(),
        opacity: Math.random() * 0.6 + 0.2,
        angle: Math.random() * 360,
        spinSpeed: (Math.random() - 0.5) * 0.02,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
  };

  const getRandomColor = () => {
    // Enhanced color palette with more variations
    const colors = [
      '#9b87f5', '#7E69AB', '#D6BCFA', '#E5DEFF',
      '#8B5CF6', '#D946EF', '#C4B5FD', '#A78BFA'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const animate = (timestamp?: number) => {
    if (!timestamp) timestamp = 0;
    
    // Throttle frame rate for performance
    const elapsed = timestamp - lastUpdateTime.current;
    if (elapsed < frameTime) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastUpdateTime.current = timestamp;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear with alpha for trail effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw and update particles
    particles.current.forEach((particle) => {
      // Interactive effect - particles are affected by mouse position
      const dx = mousePosition.current.x - particle.x;
      const dy = mousePosition.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        const force = (150 - distance) / 1500;
        particle.speedX -= Math.cos(angle) * force;
        particle.speedY -= Math.sin(angle) * force;
      }
      
      // Apply rotation
      particle.angle += particle.spinSpeed;
      
      // Draw based on shape
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.angle);
      ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.restore();
      
      // Apply velocity with damping
      particle.speedX *= 0.99;
      particle.speedY *= 0.99;
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
      if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
      if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
      if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
    });
    
    // Connect particles with lines (only for nearby particles to improve performance)
    connectNearbyParticles(ctx);
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const connectNearbyParticles = (ctx: CanvasRenderingContext2D) => {
    const maxDistance = 150;
    const particleCount = particles.current.length;
    
    // Grid-based optimization to avoid checking all pairs
    const grid: Record<string, Particle[]> = {};
    const cellSize = maxDistance;
    
    // Place particles in grid cells
    particles.current.forEach(particle => {
      const cellX = Math.floor(particle.x / cellSize);
      const cellY = Math.floor(particle.y / cellSize);
      const cellKey = `${cellX},${cellY}`;
      
      if (!grid[cellKey]) grid[cellKey] = [];
      grid[cellKey].push(particle);
    });
    
    // Check particles in adjacent cells only
    Object.keys(grid).forEach(cellKey => {
      const [cellX, cellY] = cellKey.split(',').map(Number);
      
      // Check adjacent cells including current cell
      for (let x = cellX - 1; x <= cellX + 1; x++) {
        for (let y = cellY - 1; y <= cellY + 1; y++) {
          const neighborKey = `${x},${y}`;
          const neighborCell = grid[neighborKey];
          
          if (!neighborCell) continue;
          
          // Connect particles in current cell with particles in neighbor cell
          for (const particleA of grid[cellKey]) {
            for (const particleB of neighborCell) {
              if (particleA === particleB) continue;
              
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < maxDistance) {
                const opacity = 0.15 * (1 - distance / maxDistance);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(155, 135, 245, ${opacity})`;
                ctx.lineWidth = 0.4;
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
