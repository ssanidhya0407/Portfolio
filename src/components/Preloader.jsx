import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onComplete}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                pointerEvents: 'none'
            }}
        >
            <div style={{ textAlign: 'center' }}>
                {/* Animated Initials */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, var(--accent), #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '1.5rem'
                    }}
                >
                    SKS
                </motion.div>

                {/* Loading bar */}
                <motion.div
                    style={{
                        width: '120px',
                        height: '3px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        margin: '0 auto'
                    }}
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                            repeat: 1
                        }}
                        style={{
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                            borderRadius: '10px'
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
