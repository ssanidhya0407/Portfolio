import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useSpring, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Linkedin, Mail, MapPin, User, FolderGit2, Briefcase, Award, Zap } from 'lucide-react';
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
        background: isDark ? '#0A0A0A' : '#ffffff',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.03)'
    };

    const iconBoxStyle = (bgColor, color) => ({
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        marginBottom: '1.5rem'
    });

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
                        gridTemplateColumns: 'repeat(6, 1fr)', // 6-column grid
                        gridAutoRows: 'minmax(280px, auto)',
                        gap: '24px'
                    }}
                >
                    {/* 1. Profile Card (3x2) - Merged with Stats */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 3',
                            gridRow: 'span 2',
                            ...cardStyle,
                            padding: '48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: isDark
                                ? 'linear-gradient(145deg, #0f0f11, #0a0a0a)'
                                : 'linear-gradient(145deg, #ffffff, #f5f5f7)'
                        }}
                    >
                        <div>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid rgba(255,255,255,0.1)',
                                marginBottom: '1.5rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                            }}>
                                <img
                                    src="/images/profile.jpg"
                                    alt="Profile"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                />
                            </div>

                            <h2 style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                                lineHeight: 1.2,
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--text)'
                            }}>
                                Bridging Design & Engineering
                            </h2>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                fontWeight: 400,
                                maxWidth: '90%',
                                marginBottom: '2rem'
                            }}>
                                Building scalable full-stack applications, native iOS experiences, and intelligent AI systems.
                            </p>
                        </div>

                        {/* Stats Integrated into Profile */}
                        <div style={{ display: 'flex', gap: '32px', paddingTop: '24px', borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)' }}>
                            <div>
                                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0', color: 'var(--text)' }}>
                                    <Counter value={5} />
                                </h4>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Internships</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0', background: 'linear-gradient(135deg, #0071e3, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    <Counter value={25} />+
                                </h4>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Skills</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0', color: '#10b981' }}>
                                    <Counter value={5} />+
                                </h4>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certs</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Projects List Widget (3x2) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 3',
                            gridRow: 'span 2',
                            ...cardStyle,
                            padding: '40px',
                            background: isDark ? '#0A0A0A' : '#ffffff'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div style={iconBoxStyle(isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)', '#10b981')}>
                                    <FolderGit2 size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Selected Work</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>Top projects from my portfolio.</p>
                            </div>
                            <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none', padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
                                View All <ArrowUpRight size={16} />
                            </Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {projects.slice(0, 4).map((project, idx) => (
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
                                    <div style={{ paddingLeft: '8px' }}>
                                        <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>{project.title}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0 }}>
                                            {project.achievement.split(',')[0]}
                                        </p>
                                    </div>
                                    <ArrowUpRight size={16} color="var(--text-dim)" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. Experience Cluster (2x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: isDark ? '#0A0A0A' : '#ffffff'
                        }}
                    >
                        <div>
                            <div style={iconBoxStyle(isDark ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0.1)', '#f59e0b')}>
                                <Briefcase size={24} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Experience</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                5 internships across leading tech firms.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
                            {experiences.map((exp, idx) => (
                                <div key={idx} style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px',
                                    border: '1px solid var(--card-border)'
                                }} title={exp.company}>
                                    <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                                </div>
                            ))}
                            <Link to="/experience" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 4. Certifications (2x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: isDark ? '#0A0A0A' : '#ffffff'
                        }}
                    >
                        <div>
                            <div style={iconBoxStyle(isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0.1)', '#ef4444')}>
                                <Award size={24} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Certifications</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Specialized credentials in cloud & AI.
                            </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap', gap: '8px' }}>
                            {certifications && certifications.map((cert, idx) => (
                                <div key={idx} style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: '#fff',
                                    border: '3px solid var(--card-bg)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px'
                                }}>
                                    <img src={cert.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            ))}
                            <Link to="/about" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 5. Connect (2x1) */}
                    <motion.div
                        className="bento-item spotlight-card"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: 'span 1',
                            ...cardStyle,
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: isDark ? '#0A0A0A' : '#ffffff'
                        }}
                    >
                        <div>
                            <div style={iconBoxStyle(isDark ? 'rgba(236, 72, 153, 0.15)' : 'rgba(236, 72, 153, 0.1)', '#ec4899')}>
                                <Zap size={24} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Connect</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Open to opportunities. Based in <span style={{ color: 'var(--text)', fontWeight: 600 }}>India</span>.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            <a href="https://github.com/ssanidhya0407" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: 'var(--bg-secondary)', color: 'var(--text)', width: '40px', height: '40px' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ssanidhya0407" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#0077b5', color: '#fff', width: '40px', height: '40px' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ssanidhya0407@gmail.com" className="social-btn" style={{ background: '#EA4335', color: '#fff', width: '40px', height: '40px' }}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            <style jsx>{`
                .social-btn {
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .social-btn:hover {
                    transform: translateY(-2px);
                }
                .list-item-hover:hover {
                    background: var(--card-border) !important;
                }
                @media (max-width: 1024px) {
                     #bento .container > div {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .bento-item {
                        grid-column: span 1 !important;
                        grid-row: span 1 !important;
                    }
                     .bento-item:nth-child(1), .bento-item:nth-child(2) {
                        grid-column: span 2 !important;
                     }
                }
                @media (max-width: 768px) {
                    #bento .container > div {
                        grid-template-columns: 1fr !important;
                    }
                    .bento-item {
                        grid-column: span 1 !important;
                        grid-row: auto !important;
                    }
                }
            `}</style>
        </section >
    );
};

export default BentoGrid;
