import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        {
            icon: "🏆",
            title: "Best App Award",
            description: "ThriveUp - Judges from Swiggy, Myntra, Zoho",
            color: "#0071e3"
        },
        {
            icon: "🥈",
            title: "6th Place SRM Hack 8.0",
            description: "Qualified for funding program",
            color: "#a855f7"
        },
        {
            icon: "📱",
            title: "Live on App Store",
            description: "ThriveUp featured application",
            color: "#10b981"
        }
    ];

    return (
        <section id="achievements" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    Achievements
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
                    Recognition & milestones
                </motion.p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            style={{
                                padding: '3rem 2.5rem',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Color accent */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${achievement.color}, ${achievement.color}80)`
                            }} />

                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '1.5rem'
                            }}>
                                {achievement.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: '#f5f5f7'
                            }}>
                                {achievement.title}
                            </h3>
                            <p style={{
                                color: '#86868b',
                                fontSize: '1.05rem',
                                lineHeight: 1.6
                            }}>
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
