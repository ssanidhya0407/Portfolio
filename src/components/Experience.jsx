import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
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

const Experience = () => {
    return (
        <section id="experience" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    Experience
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        color: '#888',
                        textAlign: 'center',
                        marginBottom: '6rem',
                        fontSize: '1.2rem'
                    }}
                >
                    5 internships across leading institutions and companies
                </motion.p>

                <div className="timeline-container">
                    {/* Timeline vertical line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            {/* Timeline dot */}
                            <div
                                className="timeline-dot"
                                style={{
                                    background: exp.color,
                                    boxShadow: `0 0 0 4px ${exp.color}30, 0 0 20px ${exp.color}50`
                                }}
                            />

                            {/* Date - positioned on opposite side of card */}
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
                                    color: '#888',
                                    fontSize: '0.95rem',
                                    fontStyle: 'italic'
                                }}>
                                    {exp.role}
                                </p>
                            </div>

                            {/* Card */}
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
                                {/* Glass shine */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '1px',
                                    background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)`,
                                    opacity: 0.5
                                }} />

                                {/* Logo */}
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
                                    color: '#fff'
                                }}>
                                    {exp.company}
                                </h3>

                                {/* Achievement */}
                                <div style={{
                                    padding: '1.2rem',
                                    background: `linear-gradient(135deg, ${exp.color}10, ${exp.color}05)`,
                                    borderRadius: '16px',
                                    border: `1px solid ${exp.color}30`,
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)'
                                }}>
                                    <p style={{
                                        color: '#aaa',
                                        lineHeight: 1.7,
                                        fontSize: '1.05rem',
                                        margin: 0
                                    }}>
                                        {exp.achievement}
                                    </p>
                                </div>

                                {/* Color accent at bottom */}
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
