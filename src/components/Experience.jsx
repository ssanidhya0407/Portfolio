import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
    const visibleExperiences = preview ? experiences.slice(0, 3) : experiences;

    return (
        <section id="experience" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        marginBottom: '1rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, var(--text) 0%, var(--text-dim) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 800
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
                        marginBottom: '6rem',
                        fontSize: '1.2rem'
                    }}
                >
                    {preview ? "Select roles from my professional journey" : "5 internships across leading institutions and companies"}
                </motion.p>

                <div className="timeline-container">
                    <div className="timeline-line" />

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
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {exp.period}
                                        </p>
                                        <p style={{
                                            color: 'var(--text-dim)',
                                            fontSize: '0.95rem',
                                            fontStyle: 'italic'
                                        }}>
                                            {exp.role}
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="timeline-card"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                            border: `1px solid ${exp.color}40`,
                                            borderRadius: '28px',
                                            padding: '2.5rem',
                                            backdropFilter: 'blur(40px)',
                                            WebkitBackdropFilter: 'blur(40px)',
                                            boxShadow: `
                                                0 8px 32px rgba(0, 0, 0, 0.15),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                                0 0 0 1px ${exp.color}20
                                            `,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `
                                                0 20px 60px ${exp.color}30,
                                                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                                                0 0 0 1px ${exp.color}40
                                            `;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `
                                                0 8px 32px rgba(0, 0, 0, 0.15),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                                0 0 0 1px ${exp.color}20
                                            `;
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)`,
                                            opacity: 0.5
                                        }} />

                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '20px',
                                            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                                            marginBottom: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            boxShadow: `0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)`,
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            padding: '14px',
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
                                            marginBottom: '1.5rem',
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        }}>
                                            {exp.company}
                                        </h3>

                                        <div style={{
                                            padding: '1.2rem',
                                            background: `linear-gradient(135deg, ${exp.color}10, ${exp.color}05)`,
                                            borderRadius: '16px',
                                            border: `1px solid ${exp.color}30`,
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)'
                                        }}>
                                            <p style={{
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.7,
                                                fontSize: '1.05rem',
                                                margin: 0
                                            }}>
                                                {exp.achievement}
                                            </p>
                                        </div>

                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            background: `linear-gradient(90deg, transparent, ${exp.color}80, transparent)`,
                                            borderRadius: '0 0 28px 28px'
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Center Axis */}
                            <div className="timeline-axis">
                                <div
                                    className="timeline-dot"
                                    style={{
                                        background: exp.color,
                                        boxShadow: `0 0 0 4px ${exp.color}30, 0 0 20px ${exp.color}50`
                                    }}
                                />
                            </div>

                            {/* Right Side */}
                            <div className="timeline-side right">
                                {index % 2 !== 0 ? (
                                    <div className="timeline-content">
                                        <p style={{
                                            color: exp.color,
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {exp.period}
                                        </p>
                                        <p style={{
                                            color: 'var(--text-dim)',
                                            fontSize: '0.95rem',
                                            fontStyle: 'italic'
                                        }}>
                                            {exp.role}
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="timeline-card"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                            border: `1px solid ${exp.color}40`,
                                            borderRadius: '28px',
                                            padding: '2.5rem',
                                            backdropFilter: 'blur(40px)',
                                            WebkitBackdropFilter: 'blur(40px)',
                                            boxShadow: `
                                                0 8px 32px rgba(0, 0, 0, 0.15),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                                0 0 0 1px ${exp.color}20
                                            `,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `
                                                0 20px 60px ${exp.color}30,
                                                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                                                0 0 0 1px ${exp.color}40
                                            `;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `
                                                0 8px 32px rgba(0, 0, 0, 0.15),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                                0 0 0 1px ${exp.color}20
                                            `;
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)`,
                                            opacity: 0.5
                                        }} />

                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '20px',
                                            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                                            marginBottom: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            boxShadow: `0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)`,
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            padding: '14px'
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
                                            marginBottom: '1.5rem',
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        }}>
                                            {exp.company}
                                        </h3>

                                        <div style={{
                                            padding: preview ? '0' : '1.2rem',
                                            background: preview ? 'transparent' : `linear-gradient(135deg, ${exp.color}10, ${exp.color}05)`,
                                            borderRadius: '16px',
                                            border: preview ? 'none' : `1px solid ${exp.color}30`,
                                            backdropFilter: preview ? 'none' : 'blur(10px)',
                                            WebkitBackdropFilter: preview ? 'none' : 'blur(10px)'
                                        }}>
                                            {!preview && (
                                                <p style={{
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.7,
                                                    fontSize: '1.05rem',
                                                    margin: 0
                                                }}>
                                                    {exp.achievement}
                                                </p>
                                            )}
                                        </div>

                                        {!preview && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '3px',
                                                background: `linear-gradient(90deg, transparent, ${exp.color}80, transparent)`,
                                                borderRadius: '0 0 28px 28px'
                                            }} />
                                        )}
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
                <div style={{
                    position: 'relative',
                    width: '260px',
                    height: '260px',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        border: '1px dashed var(--text-dim)',
                        borderRadius: '50%',
                        opacity: 0.2
                    }} />

                    {/* Center Planet - Me/Profile or Main Role */}
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--text)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        boxShadow: '0 0 30px rgba(255,255,255,0.2)'
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>👨‍💻</span>
                    </div>

                    {experiences.slice(0, 4).map((exp, index) => {
                        const angle = (index * (360 / 4));
                        const rad = angle * (Math.PI / 180);
                        const radius = 100; // Orbit radius

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    rest: { scale: 1, x: Math.cos(rad) * radius, y: Math.sin(rad) * radius },
                                    hover: { scale: 1.1, x: Math.cos(rad) * radius * 1.1, y: Math.sin(rad) * radius * 1.1 }
                                }}
                                style={{
                                    position: 'absolute',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--card-bg)',
                                    border: `1px solid ${exp.color}50`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 4px 12px ${exp.color}30`
                                }}
                            >
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    style={{ width: '60%', height: '60%', objectFit: 'contain' }}
                                />
                                <motion.div
                                    variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: -40 } }}
                                    style={{
                                        position: 'absolute',
                                        background: 'var(--card-bg)',
                                        border: '1px solid var(--card-border)',
                                        padding: '4px 8px',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        whiteSpace: 'nowrap',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    {exp.company}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                        Experience
                    </h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                        View full journey &rarr;
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export const ExperienceWidget = () => {
    const visibleExperiences = experiences.slice(0, 3);

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', flex: 1, position: 'relative' }}>
                <div style={{ position: 'absolute', left: '24px', top: '10px', bottom: '10px', width: '2px', background: 'var(--card-border)' }} />

                {visibleExperiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            paddingBottom: '2rem',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'var(--card-bg)',
                            border: `1px solid ${exp.color}40`,
                            padding: '8px',
                            zIndex: 2,
                            flexShrink: 0
                        }}>
                            <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{exp.company}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>{exp.role}</p>
                            <p style={{ fontSize: '0.8rem', color: exp.color, fontWeight: 500 }}>{exp.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '1rem' }}>
                <a href="/about" style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none' }}>View Full History &rarr;</a>
            </div>
        </div>
    );
};

export default Experience;
