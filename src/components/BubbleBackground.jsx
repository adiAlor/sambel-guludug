import React from 'react';
import { motion } from 'framer-motion';

const BubbleBackground = () => {
    // Generate different types of background elements for a "Rich" look
    const bubbles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 400 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * -20, // Start mid-animation
        opacity: Math.random() * 0.08 + 0.02,
        color: i % 4 === 0 ? '#ff4d00' : i % 4 === 1 ? '#ff9d00' : i % 4 === 2 ? '#ff003c' : '#ffffff',
        blur: Math.random() * 80 + 40
    }));

    return (
        <div className="bubble-pattern overflow-hidden pointer-events-none fixed inset-0">
            {/* Base Layer Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fffcf9] via-[#fff5f0] to-[#fffcf9] opacity-100" />
            
            {/* Animated Glows */}
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        backgroundColor: bubble.color,
                        left: `${bubble.x}%`,
                        top: `${bubble.y}%`,
                        filter: `blur(${bubble.blur}px)`,
                        opacity: bubble.opacity,
                    }}
                    animate={{
                        x: [0, Math.random() * 150 - 75, 0],
                        y: [0, Math.random() * 150 - 75, 0],
                        scale: [1, 1.3, 1],
                        opacity: [bubble.opacity, bubble.opacity * 1.5, bubble.opacity]
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>
    );
};

export default BubbleBackground;
