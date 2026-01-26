import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/ssanidhya0407", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/ssanidhya0407", label: "LinkedIn" },
        { icon: Mail, href: "mailto:ssanidhya0407@gmail.com", label: "Email" },
        { icon: Phone, href: "tel:+919157332926", label: "Phone" }
    ];

    const quickLinks = [
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Home', href: '/' }
    ];

    return (
        <section id="contact" style={{ minHeight: '100vh', padding: '8rem 5vw', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        marginBottom: '2rem',
                        background: 'linear-gradient(135deg, var(--text) 0%, var(--text-dim) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 800
                    }}
                >
                    Let's Build<br />Something Amazing
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        color: 'var(--text-dim)',
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

                {/* Social Links with Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginBottom: '5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? "_blank" : undefined}
                            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                border: '1px solid var(--card-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-dim)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent)';
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 113, 227, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--card-border)';
                                e.currentTarget.style.color = 'var(--text-dim)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            aria-label={link.label}
                        >
                            <link.icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2.5rem',
                        marginBottom: '4rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {quickLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            style={{
                                color: 'var(--text-dimmer)',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dimmer)'}
                        >
                            {link.name}
                            <ArrowUpRight size={14} />
                        </Link>
                    ))}
                </motion.div>

                {/* Divider */}
                <div style={{
                    width: '100px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
                    margin: '0 auto 2rem'
                }} />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        color: 'var(--text-muted)',
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

