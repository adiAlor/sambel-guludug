import React from 'react';
import { motion } from 'framer-motion';

const BubbleBackground = () => {
    // Generate background elements
    const elements = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 40 + 20, // Smaller for chilis
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.15 + 0.05,
        rotation: Math.random() * 360,
        type: i % 5 === 0 ? 'glow' : 'chili' // Mix of glows and chilis
    }));

    return (
        <div className="bubble-pattern overflow-hidden pointer-events-none fixed inset-0">
            {/* Base Layer Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fffcf9] via-[#fff5f0] to-[#fffcf9] opacity-100" />
            
            {/* Animated Elements */}
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute flex items-center justify-center"
                    style={{
                        width: el.type === 'glow' ? el.size * 10 : el.size,
                        height: el.type === 'glow' ? el.size * 10 : el.size,
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        opacity: el.opacity,
                        filter: el.type === 'glow' ? 'blur(80px)' : 'none',
                        backgroundColor: el.type === 'glow' ? (el.id % 2 === 0 ? '#ff4d00' : '#ff9d00') : 'transparent',
                        borderRadius: '50%',
                    }}
                    animate={{
                        y: [0, -100, 0, 100, 0],
                        x: [0, 50, -50, 20, 0],
                        rotate: el.type === 'chili' ? [el.rotation, el.rotation + 360] : 0,
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "linear"
                    }}
                >
                    {el.type === 'chili' && (
                        <span style={{ fontSize: `${el.size}px` }}>🌶️</span>
                    )}
                </motion.div>
            ))}

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>
    );
};

export default BubbleBackground;
