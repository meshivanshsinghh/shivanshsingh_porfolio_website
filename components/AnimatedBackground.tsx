'use client';

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Wave particles system
        const particles: Array<{
            x: number;
            y: number;
            baseY: number;
            vx: number;
            amplitude: number;
            frequency: number;
            phase: number;
        }> = [];

        const particleCount = 40; // Reduced particle count
        const connectionDistance = 120;
        const startY = window.innerHeight * 0.5; // Start from middle of screen

        // Initialize particles in wave formation
        for (let i = 0; i < particleCount; i++) {
            const x = (i / particleCount) * canvas.width + Math.random() * 50;
            const baseY = startY + Math.random() * (canvas.height - startY);
            
            particles.push({
                x: x,
                y: baseY,
                baseY: baseY,
                vx: (Math.random() - 0.5) * 0.3, // Slower horizontal movement
                amplitude: 20 + Math.random() * 30, // Wave amplitude
                frequency: 0.001 + Math.random() * 0.002, // Wave frequency
                phase: Math.random() * Math.PI * 2 // Random phase offset
            });
        }
        
        let time = 0;
        
        // Animation loop
        const animate = () => {
            // Clear the entire canvas with pure black to match page background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Pure black with slight opacity for trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            time += 1;

            // Update and draw particles
            particles.forEach((particle, i) => {
                // Wave motion
                particle.y = particle.baseY + Math.sin(time * particle.frequency + particle.phase) * particle.amplitude;
                
                // Horizontal drift
                particle.x += particle.vx;

                // Wrap around horizontally
                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;

                // Draw connections between nearby particles
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        const opacity = (1 - distance / connectionDistance) * 0.15; // More subtle
                        ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`; // Light gray color
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(156, 163, 175, 0.3)'; // Light gray particles
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);
    
    return (
        <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: 'transparent' }}
        />
    )
}