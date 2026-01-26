import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, Cpu, Globe, Cloud, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';

const About = () => {
    const gridRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!gridRef.current) return;
            const cards = gridRef.current.getElementsByClassName('spotlight-card');

            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ padding: '8rem 0' }}
        >
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginBottom: '6rem',
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        textAlign: 'center',
                        fontWeight: 700,
                        letterSpacing: '-0.03em'
                    }}
                >
                    Capabilities & Skills
                </motion.h1>

                <div ref={gridRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '240px',
                    gap: '24px',
                    marginBottom: '8rem'
                }}>
                    {/* Web & Full Stack */}
                    <motion.div
                        className="spotlight-card"
                        style={{
                            gridColumn: 'span 2',
                            padding: '40px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '32px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Globe size={32} color="#f59e0b" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Web & Full Stack</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['React', 'Next.js', 'Node.js', 'Vite', 'Three.js'].map(tech => (
                                <span key={tech} style={{
                                    padding: '10px 18px',
                                    background: 'rgba(245, 158, 11, 0.15)',
                                    color: '#f59e0b',
                                    borderRadius: '24px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* iOS Stack */}
                    <motion.div
                        className="spotlight-card"
                        style={{
                            gridColumn: 'span 2',
                            padding: '40px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '32px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Smartphone size={32} color={isDark ? "#fff" : "#000"} style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>iOS Development</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Swift', 'SwiftUI', 'UIKit', 'CoreML', 'XCode'].map(tech => (
                                <span key={tech} style={{
                                    padding: '10px 18px',
                                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                    color: 'var(--text)',
                                    borderRadius: '24px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI Stack */}
                    <motion.div
                        className="spotlight-card"
                        style={{
                            gridColumn: 'span 2',
                            padding: '40px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '32px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Cpu size={32} color="#bf5af2" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>AI & ML</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Python', 'PyTorch', 'TensorFlow', 'RAG', 'LLMs'].map(tech => (
                                <span key={tech} style={{
                                    padding: '10px 18px',
                                    background: 'rgba(191, 90, 242, 0.15)',
                                    color: '#bf5af2',
                                    borderRadius: '24px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud & Data */}
                    <motion.div
                        className="spotlight-card"
                        style={{
                            gridColumn: 'span 1',
                            padding: '40px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '32px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Cloud size={32} color="#10b981" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Cloud</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['AWS', 'SQL', 'Firebase'].map(tech => (
                                <span key={tech} style={{
                                    padding: '8px 14px',
                                    background: 'rgba(16, 185, 129, 0.15)',
                                    color: '#10b981',
                                    borderRadius: '24px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Design & Product */}
                    <motion.div
                        className="spotlight-card"
                        style={{
                            gridColumn: 'span 1',
                            padding: '40px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '32px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Palette size={32} color="#ec4899" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>Design</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Figma', 'UI/UX'].map(tech => (
                                <span key={tech} style={{
                                    padding: '8px 14px',
                                    background: 'rgba(236, 72, 153, 0.15)',
                                    color: '#ec4899',
                                    borderRadius: '24px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .spotlight-card {
                            grid-column: span 4 !important; /* Full width on mobile */
                        }
                    }
                `}</style>
            </div>

            <Certifications />
            <Achievements />
        </motion.main>
    );
};

export default About;
