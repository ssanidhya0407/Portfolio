import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "iOS": ["Swift", "SwiftUI", "UIKit", "Xcode", "CoreML"],
    "AI/ML": ["Python", "PyTorch", "TensorFlow", "OpenCV", "RAG"],
    "Data": ["SQL", "AWS", "Databricks", "Snowflake", "Tableau"],
    "Web": ["JavaScript", "React", "HTML/CSS", "Node.js"],
    "Tools": ["Git", "Figma", "Oracle", "Firebase"]
};

const Skills = () => {
    const allSkills = Object.entries(skills).flatMap(([category, items]) =>
        items.map(item => ({ name: item, category }))
    );

    const getCategoryColor = (category) => {
        const colors = {
            "iOS": "#0071e3",
            "AI/ML": "#a855f7",
            "Data": "#10b981",
            "Web": "#f59e0b",
            "Tools": "#ef4444"
        };
        return colors[category] || "#0071e3";
    };

    return (
        <section id="skills" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    Skills
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
                    Full-stack expertise from iOS to AI
                </motion.p>

                <div className="skills-grid">
                    {allSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.02 }}
                            style={{
                                '--hover-color': getCategoryColor(skill.category)
                            }}
                            onMouseEnter={(e) => {
                                const color = getCategoryColor(skill.category);
                                e.currentTarget.style.background = `linear-gradient(135deg, ${color}40, ${color}20)`;
                                e.currentTarget.style.borderColor = `${color}80`;
                                e.currentTarget.style.boxShadow = `0 12px 32px ${color}40, inset 0 1px 0 rgba(255,255,255,0.2)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)';
                            }}
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </div>

                {/* Category Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '4rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {Object.keys(skills).map(category => (
                        <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: getCategoryColor(category)
                            }} />
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>{category}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
