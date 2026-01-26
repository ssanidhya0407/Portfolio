import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const projects = [
    {
        title: "Career Forge AI",
        achievement: "AI Career Assistant",
        desc: "Intelligent platform helping job seekers with AI-powered resume analysis, ATS optimization, and personalized career roadmaps.",
        image: "/images/career_forge_ai_mockup.png",
        link: "https://github.com/ssanidhya0407/career-forge-ai",
        tech: ["React", "Python", "AI/ML", "OpenAI"],
        color: "#8b5cf6"
    },
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

const MagneticImage = ({ project }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
                cursor: 'pointer'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    borderRadius: '28px',
                    border: `1px solid ${project.color}50`,
                    background: `linear-gradient(135deg, ${project.color}08, ${project.color}04)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: `0 20px 60px ${project.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    padding: '8px',
                    position: 'relative'
                }}
            >
                {/* Glass Shine */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)`,
                    zIndex: 1
                }} />

                <div className="project-image-wrapper" style={{ borderRadius: '22px', overflow: 'hidden', transform: 'translateZ(20px)' }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '22px'
                        }}
                    />

                    {/* Hover Overlay */}
                    <div
                        className="project-hover-overlay"
                        style={{
                            background: `rgba(0,0,0,0.4)`,
                            inset: 0,
                            borderRadius: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0, // Handled by CSS hover in global, but here we can force it or let CSS handle
                            // We'll rely on group hover logic or add motion variant
                        }}
                    >
                        {/* We'll use the existing CSS .project-image-wrapper:hover logic for opacity if preserved, 
                             but here we need to ensure the overlay is visible on top. 
                             Actually, let's keep the content clean - maybe just the buttons and title on hover?
                             The previous overlay had Title, Desc, Tech. That's a lot for a 3D card. 
                             Let's keep the previous overlay content but ensure it renders nicely in 3D.
                         */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, ${project.color}F5, ${project.color}E8)`,
                            borderRadius: '22px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                        }}
                            className="overlay-content"
                        >
                            <h3 style={{
                                color: '#fff',
                                marginBottom: '0.8rem',
                                fontSize: '1.8rem',
                                fontWeight: 700,
                                textAlign: 'center',
                                transform: 'translateZ(40px)'
                            }}>
                                {project.title}
                            </h3>

                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                transform: 'translateZ(30px)'
                            }}>
                                {project.tech.map(tech => (
                                    <span key={tech} style={{
                                        padding: '6px 14px',
                                        background: 'rgba(255,255,255,0.25)',
                                        border: '1px solid rgba(255,255,255,0.4)',
                                        borderRadius: '16px',
                                        fontSize: '0.8rem',
                                        color: '#fff',
                                        fontWeight: 600
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', transform: 'translateZ(50px)' }}>
                                {project.appStoreLink && (
                                    <a
                                        href={project.appStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: project.color,
                                            background: 'rgba(255,255,255,0.95)',
                                            padding: '10px 20px',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 700
                                        }}
                                    >
                                        App Store
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#fff',
                                            background: 'rgba(255,255,255,0.15)',
                                            padding: '10px 20px',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            border: '2px solid rgba(255,255,255,0.3)'
                                        }}
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <style jsx>{`
                .overlay-content { opacity: 0; }
                .project-image-wrapper:hover .overlay-content { opacity: 1; }
            `}</style>
        </motion.div>
    );
};

const Projects = ({ preview = false }) => {
    const visibleProjects = preview ? projects.slice(0, 2) : projects;

    return (
        <section id="projects" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700 }}
                >
                    {preview ? "Featured Projects" : "Selected Work"}
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
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 8rem auto'
                    }}
                >
                    Award-winning apps and systems solving real problems
                </motion.p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="project-row"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '5rem',
                                alignItems: 'center'
                            }}
                        >
                            {/* Image - Magnetic 3D */}
                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <MagneticImage project={project} />
                            </div>

                            {/* Content */}
                            <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <p style={{
                                    color: project.color,
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <span style={{ width: '40px', height: '1px', background: project.color }}></span>
                                    {project.achievement}
                                </p>

                                <h3 style={{
                                    marginBottom: '1.5rem',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 700,
                                    lineHeight: 1.1
                                }}>
                                    {project.title}
                                </h3>

                                {!preview && (
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        marginBottom: '2.5rem',
                                        lineHeight: 1.7,
                                        fontSize: '1.15rem'
                                    }}>
                                        {project.desc}
                                    </p>
                                )}

                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {project.tech.map(tech => (
                                        <span key={tech} style={{
                                            padding: '8px 16px',
                                            background: 'var(--card-bg)',
                                            border: '1px solid var(--card-border)',
                                            borderRadius: '100px',
                                            fontSize: '0.9rem',
                                            color: 'var(--text)',
                                            fontWeight: 500,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '2.5rem' }}>
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
                                                height: '54px',
                                                boxShadow: `0 8px 20px ${project.color}30`,
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = `0 12px 28px ${project.color}50`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = `0 8px 20px ${project.color}30`;
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 0 1 8 0"></path></svg>
                                            App Store
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: 'var(--text)',
                                                textDecoration: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '14px 12px',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = project.color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text)';
                                            }}
                                        >
                                            GitHub
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {preview && (
                    <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                        <a href="/projects" className="btn" style={{ textDecoration: 'none' }}>
                            View All Projects
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export const ProjectWidget = () => {
    const visibleProjects = projects.slice(0, 2);

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Selected Work</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                {visibleProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '1.25rem' }}>
                                <p style={{
                                    color: project.color,
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem'
                                }}>
                                    {project.achievement}
                                </p>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    {project.title}
                                </h4>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} style={{ fontSize: '0.75rem', opacity: 0.7 }}>#{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="/projects" style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'none' }}>View All Projects &rarr;</a>
            </div>
        </div>
    );
};

export default Projects;

export const ProjectCluster = () => {
    // Top 3 Projects
    const clusterProjects = projects.slice(0, 3);

    return (
        <a href="/projects" style={{ textDecoration: 'none', display: 'block' }}>
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
                    width: '200px',
                    height: '280px',
                    perspective: '1000px',
                    marginBottom: '2rem'
                }}>
                    {clusterProjects.map((project, index) => {
                        // Fan Effect Calculation
                        // Index 0: Center, Index 1: Left, Index 2: Right
                        // Actually let's just stack them and fan out on hover

                        // Reverse index for z-index (0 is top) -> No, we want 0 on top usually, or maybe 0 is front?
                        // Let's make 0 front.

                        const rotations = [0, -15, 15];
                        const xOffsets = [0, -40, 40];

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    rest: {
                                        rotate: index === 0 ? 0 : (index === 1 ? -5 : 5),
                                        x: 0,
                                        y: index * 4,
                                        scale: 1 - (index * 0.05),
                                        zIndex: 3 - index
                                    },
                                    hover: {
                                        rotate: rotations[index],
                                        x: xOffsets[index],
                                        y: -20,
                                        scale: 1,
                                        zIndex: 3 - index,
                                        transition: { type: 'spring', stiffness: 200, damping: 20 }
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '20px',
                                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                                    border: `1px solid ${project.color}40`,
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    transformOrigin: 'bottom center'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: 0.8
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                        Selected Work
                    </h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                        View all projects &rarr;
                    </p>
                </div>
            </motion.div>
        </a>
    );
};
