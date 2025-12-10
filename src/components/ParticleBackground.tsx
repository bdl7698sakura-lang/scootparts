'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Antigravity Brand Colors (Google-ish but stylized for dark mode)
        // Actually user site is Blue/Cyan. Let's stick to Site Theme but Physics of Antigravity.
        const particleColor = '#4285F4'; // Blue nice default
        // Or plain white/grey for "tech" look. Let's do a mix of Blue/Cyan.

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        class Particle {
            x: number; // Current position
            y: number;
            originX: number; // Base position (Grid)
            originY: number;
            vx: number = 0; // Velocity
            vy: number = 0;
            size: number;
            density: number; // Mass/Resistance
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.size = 1.5; // Slight variation? No, uniform grid looks "cleaner" usually.
                this.density = Math.random() * 20 + 10;

                // Slight color variation
                const colors = ['#3B82F6', '#06B6D4', '#60A5FA'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                // Physics properties
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const forceDistance = 150; // Radius of mouse influence
                let force = 0;

                // Mouse Repulsion Force
                if (distance < forceDistance) {
                    force = (forceDistance - distance) / forceDistance;
                    const angle = Math.atan2(dy, dx);
                    const pushX = Math.cos(angle) * force * 5; // Strength
                    const pushY = Math.sin(angle) * force * 5;

                    this.vx -= pushX;
                    this.vy -= pushY;
                }

                // Spring Force (Return to origin)
                const springX = (this.originX - this.x) * 0.1; // Spring stiffness
                const springY = (this.originY - this.y) * 0.1;

                this.vx += springX;
                this.vy += springY;

                // Friction (Damping)
                this.vx *= 0.85; // Slidey but stops
                this.vy *= 0.85;

                // Apply velocity
                this.x += this.vx;
                this.y += this.vy;
            }
        }

        const initParticles = () => {
            particles = [];
            const spacing = 40; // Grid spacing

            for (let y = 0; y < canvas.height; y += spacing) {
                for (let x = 0; x < canvas.width; x += spacing) {
                    particles.push(new Particle(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean clear

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                background: '#000000',
                pointerEvents: 'none',
            }}
        />
    );
}
