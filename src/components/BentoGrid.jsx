import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useSpring, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from './Projects';
import { experiences } from './Experience';
import { certifications } from './Certifications';

const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30, duration: 2 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

const BentoGrid = () => {
    const gridRef = useRef(null);
    const { isDark } = useTheme();
    const [expandedExp, setExpandedExp] = useState(null);

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
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '32px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        overflow: 'hidden',
        position: 'relative'
    };

    return (
        <section id="bento" style={{ padding: '2rem 0 4rem' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.div
                    ref={gridRef}
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridAutoRows: 'minmax(280px, auto)',
                        gap: '24px'
                    }}
                >
                    {/* 1. Profile Card (2x2) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 2',
                            ...cardStyle,
                            padding: '48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: isDark
                                ? 'linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.9))'
                                : 'linear-gradient(145deg, #ffffff, #f5f5f7)'
                        }}
                    >
                        <div>
                            <div style={{
                                width: 'fit-content',
                                padding: '6px 14px',
                                borderRadius: '100px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>Based in India</span>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                                lineHeight: 1.1,
                                fontWeight: 700,
                                marginBottom: '1rem',
                                background: 'linear-gradient(to right, var(--text), var(--text-dim))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Bridging design <br />
                                and engineering.
                            </h2>
                        </div>
                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            fontWeight: 400,
                            maxWidth: '90%'
                        }}>
                            Building scalable full-stack applications, native iOS experiences, and intelligent AI systems with obsessive attention to craft.
                        </p>
                    </motion.div>

                    {/* 2. Projects List Widget (2x2) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 2',
                            ...cardStyle,
                            padding: '32px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ padding: '8px', background: '#0071e320', borderRadius: '10px', color: '#0071e3' }}>
                                    <Github size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Selected Work</h3>
                            </div>
                            <a href="/projects" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none' }}>
                                View All <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {projects.slice(0, 5).map((project, idx) => (
                                <a
                                    key={idx}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '16px',
                                        background: 'var(--bg-secondary)',
                                        borderRadius: '20px',
                                        border: '1px solid var(--card-border)',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    className="list-item-hover"
                                >
                                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: idx % 2 === 0 ? '#0071e3' : '#FF9F0A' }} />

                                    <div style={{ paddingLeft: '12px' }}>
                                        <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>{project.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>
                                            {project.achievement.split(',')[0]}
                                        </p>
                                    </div>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '12px',
                                        background: 'var(--card-bg)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                    }}>
                                        <ArrowUpRight size={18} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. Experience Stack (2x2) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 2',
                            ...cardStyle,
                            padding: '32px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ padding: '8px', background: '#a855f720', borderRadius: '10px', color: '#a855f7' }}>
                                    <ArrowUpRight size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Experience</h3>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {experiences.slice(0, 5).map((exp, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                                    style={{
                                        background: 'var(--bg-secondary)',
                                        borderRadius: '20px',
                                        border: `1px solid ${expandedExp === idx ? exp.color + '60' : 'var(--card-border)'}`,
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: expandedExp === idx ? `0 8px 24px ${exp.color}15` : 'none'
                                    }}
                                >
                                    <div style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{
                                            width: '52px',
                                            height: '52px',
                                            borderRadius: '50%',
                                            background: '#fff',
                                            padding: '4px',
                                            flexShrink: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: '2px solid rgba(0,0,0,0.05)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                                        }}>
                                            <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2px' }}>{exp.company}</h4>
                                            <p style={{ fontSize: '0.85rem', color: exp.color, fontWeight: 500, margin: 0 }}>{exp.role}</p>
                                        </div>
                                        <div style={{ color: 'var(--text-dim)' }}>
                                            {expandedExp === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedExp === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{ borderTop: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
                                            >
                                                <div style={{ padding: '16px 20px 20px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                                    <p style={{ marginBottom: '8px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)' }}>
                                                        {exp.period}
                                                    </p>
                                                    {exp.achievement}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Certifications Stack (1x1) - HORIZONTAL AVATAR STACK with Safety Check */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 1',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>Certificates</h4>
                            <Link to="/about#certifications" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, paddingTop: '16px' }}>
                            {certifications && certifications.length > 0 ? (
                                certifications.slice(0, 3).map((cert, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '50%',
                                            background: '#fff',
                                            border: '3px solid var(--card-bg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: idx === 0 ? '0' : '-25px',
                                            position: 'relative',
                                            zIndex: 4 - idx,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            overflow: 'hidden'
                                        }}
                                        title={cert.name}
                                    >
                                        <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Loading...</p>
                            )}
                        </div>
                    </motion.div>

                    {/* 4b. Location Widget (1x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 1',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>Location</h4>
                            <MapPin size={20} color="var(--text-dim)" />
                        </div>

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>🇮🇳</p>
                            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>India</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Open to Remote</p>
                        </div>
                    </motion.div>

                    {/* 4c. Stats (1x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 1',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '4px', color: 'var(--text)' }}>
                                <Counter value={5} />
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Internships</p>
                        </div>

                        <div style={{ width: '40px', height: '2px', background: 'var(--card-border)', borderRadius: '2px' }} />

                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '4px', background: 'linear-gradient(135deg, #0071e3, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <Counter value={25} />+
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Skills</p>
                        </div>
                    </motion.div>

                    {/* 5. Contact / Socials (1x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 1',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Socials</h4>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <a href="https://github.com/ssanidhya0407" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#333', color: '#fff' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ssanidhya0407" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#0077b5', color: '#fff' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ssanidhya0407@gmail.com" className="social-btn" style={{ background: '#EA4335', color: '#fff' }}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            <style jsx>{`
                .social-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .social-btn:hover {
                    transform: translateY(-2px) scale(1.1);
                }
                .list-item-hover:hover {
                    background: var(--card-border) !important;
                    transform: translateX(4px);
                }
                @media (max-width: 768px) {
                    .bento-item {
                        grid-column: span 4 !important; /* Full width on mobile */
                    }
                }
            `}</style>
        </section >
    );
};

export default BentoGrid;
