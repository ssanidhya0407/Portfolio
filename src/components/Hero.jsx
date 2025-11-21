import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const words = ['Intelligence', 'Experiences', 'Solutions', 'Innovation', 'The Future'];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '6rem 2rem'
        }}>
            {/* Subtle Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0, 113, 227, 0.025), transparent 70%)'
            }} />

            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                maxWidth: '900px',
                width: '100%'
            }}>
                {/* Name */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: 600,
                        color: 'var(--text-dim)',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                    }}
                >
                    Sanidhya Kumar Singh
                </motion.h2>

                {/* Headline with Dynamic Text */}
                <div style={{
                    fontSize: 'clamp(56px, 9vw, 96px)',
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    marginBottom: '2rem',
                    minHeight: 'clamp(60px, 10vw, 105px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            lineHeight: 'inherit',
                            letterSpacing: 'inherit',
                            color: 'inherit',
                            margin: 0
                        }}
                    >
                        I Build{' '}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWord}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, var(--accent), #a855f7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {words[currentWord]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(18px, 2.3vw, 22px)',
                        lineHeight: 1.5,
                        color: 'var(--text-dim)',
                        marginBottom: '3.5rem',
                        fontWeight: 400
                    }}
                >
                    Final Year Undergrad @ SRM University
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        marginBottom: '4.5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <a
                        href="#projects"
                        style={{
                            padding: '14px 32px',
                            fontSize: '17px',
                            fontWeight: 500,
                            color: '#fff',
                            textDecoration: 'none',
                            background: 'var(--accent)',
                            borderRadius: '980px',
                            transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--accent-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--accent)';
                        }}
                    >
                        View my work
                    </a>

                    <a
                        href="#contact"
                        style={{
                            padding: '14px 32px',
                            fontSize: '17px',
                            fontWeight: 500,
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            background: 'rgba(0, 113, 227, 0.08)',
                            borderRadius: '980px',
                            border: '1px solid rgba(0, 113, 227, 0.25)',
                            transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 113, 227, 0.15)';
                            e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 113, 227, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                        }}
                    >
                        Get in touch
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    style={{
                        display: 'flex',
                        gap: '4rem',
                        justifyContent: 'center',
                        paddingTop: '3rem',
                        borderTop: '1px solid var(--card-border)'
                    }}
                >
                    {[
                        { value: '8+', label: 'Projects' },
                        { value: '5', label: 'Internships' },
                        { value: '25+', label: 'Skills' }
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: '32px',
                                fontWeight: 600,
                                color: 'var(--text)',
                                marginBottom: '6px',
                                letterSpacing: '-0.02em'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '11px',
                                color: 'var(--text-dimmer)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
