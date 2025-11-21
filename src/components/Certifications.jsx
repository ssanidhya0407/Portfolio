import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        { name: "Oracle AI Certification", issuer: "Oracle" },
        { name: "NPTEL Machine Learning", issuer: "IIT" },
        { name: "NPTEL Artificial Intelligence", issuer: "IIT" },
        { name: "Fortinet Cybersecurity", issuer: "Fortinet" },
        { name: "SQL & Python for Data Science", issuer: "Coursera" },
        { name: "UI/UX Design Masterclass", issuer: "Udemy" }
    ];

    return (
        <section id="certifications" style={{ minHeight: '100vh', padding: '8rem 5vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    Certifications
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
                    Continuous learning across technologies
                </motion.p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            style={{
                                padding: '2.5rem',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                margin: '0 auto 1.5rem',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.2), rgba(168, 85, 247, 0.2))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem'
                            }}>
                                📜
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '0.5rem',
                                color: '#f5f5f7'
                            }}>
                                {cert.name}
                            </h3>
                            <p style={{
                                color: '#86868b',
                                fontSize: '1rem'
                            }}>
                                {cert.issuer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
