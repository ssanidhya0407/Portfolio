import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "ThriveUp",
        achievement: "🏆 Best App Award Winner",
        desc: "College engagement app connecting students with events. Built with SwiftUI, Firebase, and CoreML. Now live on the Apple App Store.",
        image: "/images/thriveup_mockup_1763688211842.png",
        appStoreLink: "https://apps.apple.com/in/app/thriveup/id6743316129",
        link: "https://github.com/ssanidhya0407/ThriveUp",
        tech: ["Swift", "SwiftUI", "Firebase", "CoreML"],
        color: "#0071e3"
    },
    {
        title: "Farm Intrusion Detection",
        achievement: "Presented at IRIS Industry Showcase",
        desc: "IoT + ML system protecting agricultural fields. Detects animals and birds damaging crops using computer vision.",
        image: "/images/farm_intrusion_mockup_1763688247944.png",
        link: "https://github.com/ssanidhya0407/pest-detection-model-cnn",
        tech: ["IoT", "Python", "OpenCV", "ML"],
        color: "#10b981"
    },
    {
        title: "News RAG System",
        achievement: "LLM-Powered Credibility Filter",
        desc: "Retrieval-Augmented Generation system that classifies and filters unreliable content in digital media.",
        image: "/images/news_rag_mockup_1763688230415.png",
        link: "https://github.com/ssanidhya0407/News-RAG-LLM",
        tech: ["Python", "LLM", "RAG", "NLP"],
        color: "#a855f7"
    },
    {
        title: "HabitCrew",
        achievement: "Community Habit Tracker",
        desc: "Social platform for consistent personal growth. Gamification meets accountability in a beautiful iOS experience.",
        image: "/images/habitcrew_mockup_1763688265707.png",
        link: "https://github.com/ssanidhya0407/HabitCrew",
        tech: ["Swift", "UIKit", "Design"],
        color: "#f59e0b"
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    Projects
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
                    Award-winning apps and systems solving real problems
                </motion.p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                                gap: '4rem',
                                alignItems: 'center'
                            }}
                        >
                            {/* Image */}
                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{
                                    borderRadius: '28px',
                                    overflow: 'hidden',
                                    border: `1px solid ${project.color}50`,
                                    background: `linear-gradient(135deg, ${project.color}08, ${project.color}04)`,
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: `
                    0 20px 60px ${project.color}30,
                    inset 0 1px 0 rgba(255,255,255,0.1)
                  `,
                                    padding: '8px',
                                    position: 'relative'
                                }}>
                                    {/* Glass shine */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)`
                                    }} />

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            borderRadius: '22px'
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Content */}
                            <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <p style={{
                                    color: project.color,
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    {project.achievement}
                                </p>

                                <h3 style={{ marginBottom: '1.5rem' }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    color: '#aaa',
                                    marginBottom: '2rem',
                                    lineHeight: 1.7,
                                    fontSize: '1.15rem'
                                }}>
                                    {project.desc}
                                </p>

                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    {project.tech.map(tech => (
                                        <span key={tech} style={{
                                            padding: '10px 18px',
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    {project.appStoreLink && (
                                        <a
                                            href={project.appStoreLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: '#fff',
                                                background: `linear-gradient(135deg, ${project.color}E6, ${project.color}B3)`,
                                                padding: '14px 28px',
                                                borderRadius: '28px',
                                                textDecoration: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)',
                                                boxShadow: `
                          0 8px 24px ${project.color}40,
                          inset 0 1px 0 rgba(255,255,255,0.2)
                        `,
                                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                                e.currentTarget.style.boxShadow = `0 12px 32px ${project.color}60, inset 0 1px 0 rgba(255,255,255,0.3)`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`;
                                            }}
                                        >
                                            App Store →
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: project.color,
                                                textDecoration: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
