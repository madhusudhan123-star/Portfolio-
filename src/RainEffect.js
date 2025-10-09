import React, { useEffect, useRef } from 'react';

const RainEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const raindrops = [];

        class Raindrop {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.speed = 2 + Math.random() * 5;
                this.length = 1 + Math.random() * 20;
            }

            fall() {
                this.y += this.speed;
                if (this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        for (let i = 0; i < 100; i++) {
            raindrops.push(new Raindrop());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            raindrops.forEach((drop) => {
                drop.fall();
                drop.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default RainEffect;