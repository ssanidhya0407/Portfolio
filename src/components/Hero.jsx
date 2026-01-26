import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useInView } from 'framer-motion';

const Counter = ({ value, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 }); // Adjusted for slower, smoother count
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                spring.set(value);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [isInView, spring, value, delay]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

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
            minHeight: '60vh', // Reduced from 100vh to show Dashboard
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '10rem 2rem 2rem', // Increased gap between name and navbar
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {/* Name - Now the Main Focus */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Sanidhya Kumar Singh
                </motion.h1>

                {/* Subtitle / Dynamic Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem'
                    }}
                >
                    <span>I Build</span>
                    <div style={{ height: '1.2em', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWord}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    color: 'var(--accent)',
                                    display: 'block'
                                }}
                            >
                                {words[currentWord]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Meaningful Highlights / Gist */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        width: '100%',
                        maxWidth: '1000px',
                        marginBottom: '3rem'
                    }}
                >
                    {[
                        {
                            icon: "🏆",
                            title: "Best App Award Winner",
                            desc: "Creator of ThriveUp, recognized for excellence in iOS Development."
                        },
                        {
                            icon: "🛠️",
                            title: "Full Stack & AI Engineer",
                            desc: "Building scalable web apps & integrating ML models (Career Forge AI)."
                        },
                        {
                            icon: "🎓",
                            title: "Big Data Analyst",
                            desc: "Final Year @ SRM. Bridging data science with intuitive product design."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '24px',
                                padding: '1.5rem',
                                textAlign: 'left',
                                backdropFilter: 'blur(10px)',
                                transition: 'transform 0.3s ease, border-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.5, margin: 0 }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* Removed "View Command Center" button */}

                    <a href="/contact" style={{
                        padding: '14px 32px',
                        borderRadius: '100px',
                        background: 'var(--accent)', // Promoted Contact to primary attention
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}>
                        Contact Me
                    </a>

                    <a
                        href="/resume.pdf"
                        download="Sanidhya_Kumar_Singh_Resume.pdf"
                        style={{
                            padding: '14px 32px',
                            borderRadius: '100px',
                            background: 'transparent',
                            border: '1px solid var(--card-border)',
                            color: 'var(--text-dim)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent)';
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.background = 'rgba(0, 113, 227, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-dim)';
                            e.currentTarget.style.borderColor = 'var(--card-border)';
                            e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        📄 Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
