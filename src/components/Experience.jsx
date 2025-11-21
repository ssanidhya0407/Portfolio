import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "NIT Tiruchirapalli",
        role: "Computer Vision Intern",
        period: "May 2025 - Present",
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
                        marginBottom: '4rem',
                        fontSize: '1.2rem'
                    }}
                >
                    5 internships across leading institutions and companies
                </motion.p>

                <div className="scroll-container">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            style={{
                                position: 'relative'
                            }}
                        >
                            {/* Premium Logo Badge */}
                            <div style={{
                                width: '90px',
                                height: '90px',
                                borderRadius: '24px',
                                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                boxShadow: `
                  0 12px 40px rgba(0,0,0,0.2),
                  inset 0 2px 0 rgba(255,255,255,0.2)
                `,
                                border: '1px solid rgba(255,255,255,0.15)',
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '16px'
                            }}>
                                {/* Icon shine */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
                                }} />

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
                                marginBottom: '0.5rem',
                                fontSize: '1.9rem',
                                fontWeight: 700
                            }}>
                                {exp.company}
                            </h3>

                            {/* Role Badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 18px',
                                background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}10)`,
                                border: `1px solid ${exp.color}40`,
                                borderRadius: '20px',
                                marginBottom: '1rem',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)'
                            }}>
                                <p style={{
                                    color: exp.color,
                                    fontWeight: 600,
                                    fontSize: '1.05rem',
                                    margin: 0
                                }}>
                                    {exp.role}
                                </p>
                            </div>

                            <p style={{
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem',
                                fontWeight: 500
                            }}>
                                {exp.period}
                            </p>

                            {/* Achievement Badge */}
                            <div style={{
                                padding: '1.2rem',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.08)',
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

                            {/* Color accent line at bottom */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, transparent, ${exp.color}80, transparent)`,
                                borderRadius: '0 0 28px 28px'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
