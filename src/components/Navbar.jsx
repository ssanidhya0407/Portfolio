import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Theme Toggle Button - Top Right */}
            <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={toggleTheme}
                style={{
                    position: 'fixed',
                    top: '30px',
                    right: '40px',
                    zIndex: 1001,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: scrolled
                        ? isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.85)'
                        : isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0,0,0,0.4)'
                        : '0 4px 16px rgba(0,0,0,0.2)',
                    fontSize: '1.3rem'
                }}
            >
                {isDark ? '☀️' : '🌙'}
            </motion.button>

            {/* Hamburger Button */}
            <motion.button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    top: '30px',
                    left: '40px',
                    zIndex: 1001,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: scrolled
                        ? 'rgba(0, 0, 0, 0.85)'
                        : 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '5px',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0,0,0,0.4)'
                        : '0 4px 16px rgba(0,0,0,0.2)'
                }}
            >
                <motion.span
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 8 : 0,
                        scaleX: isOpen ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        width: '20px',
                        height: '2px',
                        background: '#fff',
                        borderRadius: '2px',
                        transformOrigin: 'center'
                    }}
                />
                <motion.span
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        scaleX: isOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                        width: '20px',
                        height: '2px',
                        background: '#fff',
                        borderRadius: '2px'
                    }}
                />
                <motion.span
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -8 : 0,
                        scaleX: isOpen ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        width: '20px',
                        height: '2px',
                        background: '#fff',
                        borderRadius: '2px',
                        transformOrigin: 'center'
                    }}
                />
            </motion.button>

            {/* Liquid Glass Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                zIndex: 999
                            }}
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{
                                position: 'fixed',
                                top: '100px',
                                left: '40px',
                                zIndex: 1000,
                                padding: '2rem',
                                borderRadius: '32px',
                                background: 'rgba(0, 0, 0, 0.9)',
                                backdropFilter: 'blur(40px)',
                                WebkitBackdropFilter: 'blur(40px)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                                minWidth: '220px'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {links.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 + index * 0.05,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        whileHover={{
                                            x: 8,
                                            transition: { duration: 0.2 }
                                        }}
                                        style={{
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            padding: '12px 16px',
                                            borderRadius: '16px',
                                            transition: 'background 0.3s',
                                            position: 'relative'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.08)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent';
                                        }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Decorative gradient */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100px',
                                height: '40px',
                                background: 'linear-gradient(90deg, #0071e3, #a855f7)',
                                filter: 'blur(30px)',
                                opacity: 0.4,
                                borderRadius: '50%'
                            }} />
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
