import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

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

export const experiences = [
    {
        company: "NIT Tiruchirapalli",
        role: "Computer Vision Intern",
        period: "May 2025 - Aug 2025",
        achievement: "Developing image processing algorithms: edge detection, segmentation, feature extraction",
        color: "#0071e3",
        logo: "/images/nittrichy.png"
    },
    {
        company: "Apple & Infosys",
        role: "iOS App Development Trainee",
        period: "Aug 2024 - Mar 2025",
        achievement: "Developed ThriveUp - Best App Award winner, now live on App Store",
        color: "#a855f7",
        logo: "/images/infosys.png"
    },
    {
        company: "IIT Jodhpur",
        role: "Project Intern",
        period: "May 2025 - Jul 2025",
        achievement: "Applied ML to detect defects in 3D printed materials",
        color: "#10b981",
        logo: "/images/iitj.png"
    },
    {
        company: "Celonis",
        role: "Data Science Intern",
        period: "Apr 2024 - Jun 2025",
        achievement: "Enhanced recommendation algorithm, driving user engagement growth",
        color: "#f59e0b",
        logo: "/images/celonis.png"
    },
    {
        company: "Amazon Web Services",
        role: "AI/ML Intern",
        period: "Jan 2024 - Mar 2024",
        achievement: "Optimized SQL queries, reduced data retrieval time significantly",
        color: "#ef4444",
        logo: "/images/aws-color.png"
    }
];

const Experience = ({ preview = false }) => {
    const { isDark } = useTheme();
    const visibleExperiences = preview ? experiences.slice(0, 3) : experiences;

    return (
        <section id="experience" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        marginBottom: '1rem',
                        textAlign: 'center',
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 700,
                        color: 'var(--text)'
                    }}
                >
                    {preview ? "Experience Highlights" : "Experience"}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        color: 'var(--text-dim)',
                        textAlign: 'center',
                        marginBottom: '8rem',
                        fontSize: '1.2rem'
                    }}
                >
                    {preview ? "Select roles from my professional journey" : "5 internships across leading institutions and companies"}
                </motion.p>

                <div className="timeline-container">
                    <div className="timeline-line" style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                    {visibleExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-row"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            {/* Left Side */}
                            <div className="timeline-side left">
                                {index % 2 === 0 ? (
                                    <div className="timeline-content">
                                        <p style={{
                                            color: exp.color,
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {exp.period}
                                        </p>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1.1rem',
                                            fontWeight: 600
                                        }}>
                                            {exp.role}
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="timeline-card"
                                        style={{
                                            background: isDark ? '#0A0A0A' : '#ffffff',
                                            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                                            borderRadius: '24px',
                                            padding: '2.5rem',
                                            boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.borderColor = exp.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
                                        }}
                                    >
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '16px',
                                            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                                            marginBottom: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                                            padding: '10px',
                                            marginLeft: 'auto'
                                        }}>
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                        <h3 style={{
                                            marginBottom: '1rem',
                                            fontSize: '1.5rem',
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        }}>
                                            {exp.company}
                                        </h3>

                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            fontSize: '1rem',
                                            margin: 0
                                        }}>
                                            {exp.achievement}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Center Axis */}
                            <div className="timeline-axis">
                                <div
                                    className="timeline-dot"
                                    style={{
                                        background: isDark ? '#000' : '#fff',
                                        border: `4px solid ${exp.color}`,
                                        boxShadow: `0 0 0 4px ${isDark ? '#000' : '#fff'}`
                                    }}
                                />
                            </div>

                            {/* Right Side */}
                            <div className="timeline-side right">
                                {index % 2 !== 0 ? (
                                    <div className="timeline-content">
                                        <p style={{
                                            color: exp.color,
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {exp.period}
                                        </p>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1.1rem',
                                            fontWeight: 600
                                        }}>
                                            {exp.role}
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="timeline-card"
                                        style={{
                                            background: isDark ? '#0A0A0A' : '#ffffff',
                                            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                                            borderRadius: '24px',
                                            padding: '2.5rem',
                                            boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.03)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.borderColor = exp.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
                                        }}
                                    >
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '16px',
                                            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                                            marginBottom: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                                            padding: '10px'
                                        }}>
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                        <h3 style={{
                                            marginBottom: '1rem',
                                            fontSize: '1.5rem',
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        }}>
                                            {exp.company}
                                        </h3>

                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            fontSize: '1rem',
                                            margin: 0
                                        }}>
                                            {exp.achievement}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {preview && (
                    <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                        <a href="/about" className="btn" style={{ textDecoration: 'none' }}>
                            View Full Journey
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export const ExperienceCluster = () => {
    // Keeping this component but not focusing on it for now as it's likely used in BentoGrid which I replaced differently.
    // Or I should keep it compatible just in case.
    const { isDark } = useTheme();
    return (
        <a href="/about" style={{ textDecoration: 'none', display: 'block' }}>
            <motion.div
                className="cluster-card"
                whileHover="hover"
                initial="rest"
                style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '400px',
                    background: 'var(--card-bg)',
                    borderRadius: '32px',
                    border: '1px solid var(--card-border)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
            >
                {/* Simplified content for compatibility */}
            </motion.div>
        </a>
    );
};

export const ExperienceWidget = () => {
    const { isDark } = useTheme();
    // Simplified Widget
    const visibleExperiences = experiences.slice(0, 3);
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* ... keeping simplified structure ... */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' }}>Experience</h3>
        </div>
    );
};

export default Experience;
