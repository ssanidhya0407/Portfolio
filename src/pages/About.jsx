import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, Cpu, Globe, Cloud, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
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

    const cardStyle = {
        background: isDark ? '#0A0A0A' : '#ffffff',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
        borderRadius: '32px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.03)'
    };

    const iconBoxStyle = (bgColor, color) => ({
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        marginBottom: '1.5rem',
        border: '1px solid rgba(255,255,255,0.05)'
    });

    const pillStyle = (bgColor, color) => ({
        padding: '10px 18px',
        background: bgColor,
        color: color,
        borderRadius: '24px',
        fontSize: '0.9rem',
        fontWeight: 500,
        border: '1px solid rgba(255,255,255,0.05)'
    });

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
                        letterSpacing: '-0.03em',
                        color: 'var(--text)'
                    }}
                >
                    Capabilities & Skills
                </motion.h1>

                <div ref={gridRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gridAutoRows: 'auto',
                    gap: '24px',
                    marginBottom: '8rem'
                }}>
                    {/* Web & Full Stack */}
                    <motion.div
                        className="spotlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            gridColumn: 'span 3',
                            ...cardStyle
                        }}
                    >
                        <div style={iconBoxStyle(isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.15)', '#f59e0b')}>
                            <Globe size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text)' }}>Web & Full Stack</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>Building responsive, high-performance web applications with modern architectures.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['React', 'Next.js', 'Node.js', 'Vite', 'Three.js', 'TypeScript'].map(tech => (
                                <span key={tech} style={pillStyle(isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.15)', '#f59e0b')}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* iOS Stack */}
                    <motion.div
                        className="spotlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            gridColumn: 'span 3',
                            ...cardStyle
                        }}
                    >
                        <div style={iconBoxStyle(isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)', isDark ? '#fff' : '#000')}>
                            <Smartphone size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text)' }}>iOS Development</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>Crafting native Apple ecosystem experiences with fluid animations and robust logic.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Swift', 'SwiftUI', 'UIKit', 'CoreML', 'XCode'].map(tech => (
                                <span key={tech} style={pillStyle(isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 'var(--text)')}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI Stack */}
                    <motion.div
                        className="spotlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            gridColumn: 'span 2',
                            ...cardStyle
                        }}
                    >
                        <div style={iconBoxStyle(isDark ? 'rgba(191, 90, 242, 0.1)' : 'rgba(191, 90, 242, 0.15)', '#bf5af2')}>
                            <Cpu size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text)' }}>AI & ML</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>Integrating intelligent models and data pipelines into production applications.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Python', 'PyTorch', 'TensorFlow', 'RAG', 'LLMs'].map(tech => (
                                <span key={tech} style={pillStyle(isDark ? 'rgba(191, 90, 242, 0.1)' : 'rgba(191, 90, 242, 0.15)', '#bf5af2')}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud & Data */}
                    <motion.div
                        className="spotlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            gridColumn: 'span 2',
                            ...cardStyle
                        }}
                    >
                        <div style={iconBoxStyle(isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.15)', '#10b981')}>
                            <Cloud size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text)' }}>Cloud</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>Architecting scalable, serverless solutions on AWS and utilizing robust database technologies.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['AWS', 'SQL', 'Firebase'].map(tech => (
                                <span key={tech} style={pillStyle(isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.15)', '#10b981')}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Design & Product */}
                    <motion.div
                        className="spotlight-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{
                            gridColumn: 'span 2',
                            ...cardStyle
                        }}
                    >
                        <div style={iconBoxStyle(isDark ? 'rgba(236, 72, 153, 0.1)' : 'rgba(236, 72, 153, 0.15)', '#ec4899')}>
                            <Palette size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text)' }}>Design</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>Designing intuitive, pixel-perfect user interfaces with a focus on accessibility.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Figma', 'UI/UX'].map(tech => (
                                <span key={tech} style={pillStyle(isDark ? 'rgba(236, 72, 153, 0.1)' : 'rgba(236, 72, 153, 0.15)', '#ec4899')}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <style jsx>{`
                    @media (max-width: 1024px) {
                         .container > div {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                        .spotlight-card {
                            grid-column: span 2 !important;
                        }
                        /* Restore span 1 for cloud/design on tablet? */
                         .spotlight-card:nth-child(3), .spotlight-card:nth-child(4), .spotlight-card:nth-child(5) {
                            grid-column: span 1 !important;
                         }
                    }
                    @media (max-width: 768px) {
                        .container > div {
                            grid-template-columns: 1fr !important;
                        }
                         .spotlight-card {
                            grid-column: span 1 !important;
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
