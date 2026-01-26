import React from 'react';
import { motion } from 'framer-motion';

export const certifications = [
    {
        name: "Oracle Cloud Infrastructure 2025 Data Science Professional",
        issuer: "Oracle",
        date: "2025",
        logo: "/assets/oracle_data_science.png",
        link: "#"
    },
    {
        name: "Fortinet Certified Associate in Cybersecurity",
        issuer: "Fortinet",
        date: "2024",
        logo: "/assets/fortinet_fca.png",
        link: "#"
    },
    {
        name: "AWS Academy Machine Learning Foundations",
        issuer: "AWS",
        date: "2024",
        logo: "/assets/aws_ml_foundations.png",
        link: "#"
    },
    {
        name: "AWS Academy Cloud Foundations",
        issuer: "AWS",
        date: "2024",
        logo: "/assets/aws_cloud_foundations.png",
        link: "#"
    },
    {
        name: "Celonis Rising Star - Business",
        issuer: "Celonis",
        date: "2024",
        logo: "/assets/celonis_rising_star.png",
        link: "#"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" style={{ padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Certifications
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: '#fff', borderRadius: '16px', padding: '10px' }}>
                                <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{cert.name}</h4>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{cert.issuer} • {cert.date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
