import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ minHeight: '100vh', padding: '8rem 5vw', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '2rem' }}
                >
                    Let's Build<br />Something Amazing
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        color: '#888',
                        marginBottom: '4rem',
                        fontSize: '1.3rem',
                        lineHeight: 1.6
                    }}
                >
                    Currently pursuing BTech in Big Data Analytics at SRM Institute (CGPA 8.9)<br />
                    Open to exciting opportunities in iOS, AI/ML, and Data Science
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <a href="mailto:ssanidhya0407@gmail.com" className="btn">
                        Get In Touch
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginBottom: '4rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#888',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0071e3'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#888',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0071e3'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="tel:+919157332926"
                        style={{
                            color: '#888',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0071e3'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                    >
                        +91-9157332926
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        color: '#444',
                        marginTop: '4rem',
                        fontSize: '0.9rem'
                    }}
                >
                    © 2025 Sanidhya Kumar Singh. Designed & Built with passion.
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
