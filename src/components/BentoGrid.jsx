import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, Cpu, Globe } from 'lucide-react';

const BentoGrid = () => {
    const gridRef = useRef(null);

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
        <section id="about" style={{ padding: '16rem 0' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        marginBottom: '8rem',
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        textAlign: 'center',
                        fontWeight: 600,
                        letterSpacing: '-0.03em'
                    }}
                >
                    Capabilities
                </motion.h2>

                <div ref={gridRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '240px',
                    gap: '24px'
                }}>
                    {/* Profile Card - Spans 2x2 */}
                    <motion.div
                        className="bento-item spotlight-card"
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 2',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '48px'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            <p style={{
                                color: 'var(--accent-blue)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '2rem'
                            }}>
                                About
                            </p>
                            <h3 style={{
                                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                                lineHeight: 1.2,
                                fontWeight: 600,
                                letterSpacing: '-0.02em'
                            }}>
                                Bridging design <br />
                                and engineering.
                            </h3>
                        </div>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            High-performance iOS applications and intelligent AI systems with obsessive attention to craft.
                        </p>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        className="bento-item spotlight-card"
                        style={{
                            gridColumn: 'span 2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '48px',
                            textAlign: 'center'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            <MapPin size={40} color="#2997ff" style={{ marginBottom: '1.5rem' }} />
                            <h4 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600 }}>Based in India</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Open to Remote</p>
                        </div>
                    </motion.div>

                    {/* iOS Stack */}
                    <motion.div
                        className="bento-item spotlight-card"
                        style={{ gridColumn: 'span 2', padding: '40px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Smartphone size={32} color="#fff" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>iOS Development</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Swift', 'SwiftUI', 'UIKit', 'CoreML'].map(tech => (
                                <span key={tech} style={{
                                    padding: '10px 18px',
                                    background: 'rgba(255,255,255,0.05)',
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
                        className="bento-item spotlight-card"
                        style={{ gridColumn: 'span 2', padding: '40px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Cpu size={32} color="#bf5af2" style={{ marginBottom: '1.5rem' }} />
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>AI & ML</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['Python', 'PyTorch', 'RAG', 'LLMs'].map(tech => (
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

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
