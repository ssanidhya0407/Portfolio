import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #0071e3, #a855f7, #0071e3)',
                backgroundSize: '200% 100%',
                transformOrigin: '0%',
                scaleX,
                zIndex: 9999
            }}
        />
    );
};

export default ScrollProgress;
